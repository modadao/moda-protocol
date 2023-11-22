// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IVersionInfo} from "./interfaces/IVersionInfo.sol";
import {ITrackRegistration} from "./interfaces/ITrackRegistration.sol";
import {IReleaseRegistration} from "./interfaces/Releases/IReleaseRegistration.sol";
import {IReleasesApproval} from "./interfaces/Releases/IReleasesApproval.sol";
import {IReleasesRegistration} from "./interfaces/Releases/IReleasesRegistration.sol";
import {IReleases} from "./interfaces/Releases/IReleases.sol";
import {ICatalog} from "./interfaces/ICatalog.sol";
import {IModaRegistry} from "./interfaces/IModaRegistry.sol";
import {IOfficialModaContracts} from "./interfaces/IOfficialModaContracts.sol";
import {AccessControlUpgradeable} from
    "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract Catalog is ICatalog, AccessControlUpgradeable {
    // State Variables

    /// @custom:storage-location erc7201:moda.storage.Catalog
    struct CatalogStorage {
        address _modaRegistry;
        string _name;
        string _version;
        uint256 _trackCount;
        /// @dev trackRegistrationHash => trackId
        mapping(string => string) _trackIds;
        /// @dev trackId => RegisteredTrack
        mapping(string => RegisteredTrack) _registeredTracks;
        /// @dev trackId => releases => true/false
        mapping(string => mapping(address => bool)) _singleTrackReleasesPermission;
        /// @dev trackOwner => releases => true/false
        mapping(address => mapping(address => bool)) _allTracksReleasesPermission;
        /// @dev releases => releasesOwner
        mapping(address => address) _registeredReleasesContracts;
        /// @dev releaseHash => RegisteredRelease
        mapping(bytes32 => RegisteredRelease) _registeredReleases;
        /// @dev releases => tokenId => tracks on release
        mapping(address => mapping(uint256 => string[])) _releaseTracks;
        /// @dev releases => tokenId => uri
        mapping(address => mapping(uint256 => string)) _releaseUris;
    }

    // Errors

    error TrackIsNotRegistered();
    error TrackAlreadyRegistered();
    error TrackIsInvalid();
    error ReleasesContractIsNotRegistered();
    error ReleasesContractIsAlreadyRegistered();
    error ReleasesContractDoesNotHavePermission();
    error ReleaseAlreadyCreated();
    error MembershipRequired();
    error MustBeArtistOrManager();
    error VerifierRoleRequired();
    error ReleasesRegistrarRoleRequired();

    // Storage location

    // keccak256(abi.encode(uint256(keccak256("moda.storage.Catalog")) - 1)) & ~bytes32(uint256(0xff))
    bytes32 private constant CatalogStorageLocation =
        0x29716ba11260d206d72844135e3b7e5c7c3a8e39cde3c7b2b654f553db068900;

    function _getCatalogStorage() private pure returns (CatalogStorage storage $) {
        assembly {
            $.slot := CatalogStorageLocation
        }
    }

    // External Functions

    /// @dev Initializes the contract
    function initialize(
        string calldata name,
        string calldata version,
        address modaRegistry
    ) external initializer {
        CatalogStorage storage $ = _getCatalogStorage();
        $._name = name;
        $._version = version;
        $._modaRegistry = modaRegistry;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// @inheritdoc IVersionInfo
    function versionInfo() external view returns (string memory name, string memory version) {
        CatalogStorage storage $ = _getCatalogStorage();
        return ($._name, $._version);
    }

    /// @inheritdoc ITrackRegistration
    function registerTrack(
        address artist,
        address trackBeneficiary,
        string calldata trackRegistrationHash,
        uint256 catalogIndex
    ) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireTrackIsNotRegistered(trackRegistrationHash);
        _requireMembership(catalogIndex, msg.sender);
        _requireTrackManagementPermissions(msg.sender, artist);

        string memory id = string(
            abi.encodePacked(
                $._name,
                "-",
                Strings.toString(block.chainid),
                "-",
                $._version,
                "-TRACK-ID-",
                Strings.toString($._trackCount)
            )
        );
        $._trackIds[trackRegistrationHash] = id;

        bool isGoldRole = IModaRegistry($._modaRegistry).hasRole(keccak256("GOLD_ROLE"), msg.sender);

        TrackStatus status = isGoldRole ? TrackStatus.VALIDATED : TrackStatus.PENDING;

        $._registeredTracks[id] =
            RegisteredTrack(status, artist, trackBeneficiary, trackRegistrationHash, "", "", address(0));
        $._trackCount++;

        emit TrackRegistered(trackRegistrationHash, id, msg.sender);
    }

    /// @inheritdoc ITrackRegistration
    function getTrack(string calldata trackId) external view returns (RegisteredTrack memory) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._registeredTracks[trackId];
    }

    /// @inheritdoc ITrackRegistration
    function getTrackId(string calldata trackRegistrationHash) external view returns (string memory) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._trackIds[trackRegistrationHash];
    }

    /// @inheritdoc ITrackRegistration
    function setTrackStatus(string calldata trackId, TrackStatus status) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireVerifierRole(msg.sender);
        _requireTrackIsRegistered(trackId);

        RegisteredTrack storage track = $._registeredTracks[trackId];
        track.trackStatus = status;
        track.trackVerifier = msg.sender;

        emit TrackUpdated(
            status,
            track.trackArtist,
            track.trackBeneficiary,
            track.trackRegistrationHash,
            track.fingerprintHash,
            track.validationHash,
            msg.sender
        );
    }

    /// @inheritdoc ITrackRegistration
    function setTrackBeneficiary(string calldata trackId, address newTrackBeneficiary) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireTrackIsRegistered(trackId);
        RegisteredTrack storage track = $._registeredTracks[trackId];
        _requireUserIsTrackArtistOrManager(trackId, msg.sender);
        track.trackBeneficiary = newTrackBeneficiary;
        emit TrackUpdated(
            track.trackStatus,
            track.trackArtist,
            newTrackBeneficiary,
            track.trackRegistrationHash,
            track.fingerprintHash,
            track.validationHash,
            track.trackVerifier
        );
    }

    /// @inheritdoc ITrackRegistration
    function setTrackMetadata(
        string calldata trackId,
        string calldata newTrackRegistrationHash
    ) external {
        _requireTrackIsRegistered(trackId);
        CatalogStorage storage $ = _getCatalogStorage();

        RegisteredTrack storage track = $._registeredTracks[trackId];
        _requireUserIsTrackArtistOrManager(trackId, msg.sender);
        track.trackRegistrationHash = newTrackRegistrationHash;
        emit TrackUpdated(
            track.trackStatus,
            track.trackArtist,
            track.trackBeneficiary,
            newTrackRegistrationHash,
            track.fingerprintHash,
            track.validationHash,
            track.trackVerifier
        );
    }

    /// @inheritdoc ITrackRegistration
    function setTrackFingerprintHash(
        string calldata trackId,
        string calldata fingerprintHash
    ) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireTrackIsRegistered(trackId);
        RegisteredTrack storage track = $._registeredTracks[trackId];
        _requireUserIsTrackArtistOrManager(trackId, msg.sender);
        track.fingerprintHash = fingerprintHash;
        emit TrackUpdated(
            track.trackStatus,
            track.trackArtist,
            track.trackBeneficiary,
            track.trackRegistrationHash,
            fingerprintHash,
            track.validationHash,
            track.trackVerifier
        );
    }

    /// @inheritdoc ITrackRegistration
    function setTrackValidationHash(string calldata trackId, string calldata validationHash) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireTrackIsRegistered(trackId);
        RegisteredTrack storage track = $._registeredTracks[trackId];
        _requireUserIsTrackArtistOrManager(trackId, msg.sender);
        track.validationHash = validationHash;
        emit TrackUpdated(
            track.trackStatus,
            track.trackArtist,
            track.trackBeneficiary,
            track.trackRegistrationHash,
            track.fingerprintHash,
            validationHash,
            track.trackVerifier
        );
    }

    /// @inheritdoc IReleasesRegistration
    function registerReleasesContract(address releases, address releasesOwner) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireReleasesRegistrarRole(msg.sender);
        _requireReleasesContractNotRegistered(releases);

        $._registeredReleasesContracts[releases] = releasesOwner;
        emit ReleasesRegistered(releases, releasesOwner);
    }

    /// @inheritdoc IReleasesRegistration
    function unregisterReleasesContract(address releases) external onlyRole(DEFAULT_ADMIN_ROLE) {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireReleasesContractIsRegistered(releases);
        address releasesOwner = $._registeredReleasesContracts[releases];
        delete $._registeredReleasesContracts[releases];
        emit ReleasesUnregistered(releases, releasesOwner);
    }

    /// @inheritdoc IReleasesRegistration
    function getReleasesOwner(address releases) external view returns (address owner) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._registeredReleasesContracts[releases];
    }

    /// @inheritdoc IReleasesApproval
    function setReleasesApproval(string calldata trackId, address releases, bool hasApproval) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireUserIsTrackArtistOrManager(trackId, msg.sender);
        _requireReleasesContractIsRegistered(releases);
        $._singleTrackReleasesPermission[trackId][releases] = hasApproval;

        emit TrackApprovalChanged(trackId, releases, hasApproval);
    }

    /// @inheritdoc IReleasesApproval
    function setReleasesApprovalForAll(address artist, address releases, bool hasApproval) external {
        CatalogStorage storage $ = _getCatalogStorage();
        _requireTrackManagementPermissions(msg.sender, artist);
        _requireReleasesContractIsRegistered(releases);

        $._allTracksReleasesPermission[artist][releases] = hasApproval;

        emit AllTracksApprovalChanged(artist, releases, hasApproval);
    }

    /// @inheritdoc IReleasesApproval
    function getReleasesApproval(
        string calldata trackId,
        address releases
    ) external view returns (bool) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._singleTrackReleasesPermission[trackId][releases];
    }

    /// @inheritdoc IReleasesApproval
    function getReleasesApprovalForAll(address artist, address releases) external view returns (bool) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._allTracksReleasesPermission[artist][releases];
    }

    /// @inheritdoc IReleasesApproval
    function hasTrackAccess(string calldata trackId, address caller) external view returns (bool) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._registeredTracks[trackId].trackArtist == caller
            || IModaRegistry($._modaRegistry).isManager($._registeredTracks[trackId].trackArtist, caller);
    }

    /// @inheritdoc IReleaseRegistration
    function registerRelease(
        string[] calldata trackIds,
        string calldata uri,
        uint256 tokenId
    ) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireReleasesContractIsRegistered(msg.sender);
        (, bool releasesOpen) = IReleases(msg.sender).info();
        for (uint256 i = 0; i < trackIds.length; i++) {
            address artist = $._registeredTracks[trackIds[i]].trackArtist;

            bool hasFullPermission = $._allTracksReleasesPermission[artist][msg.sender];
            _requireTrackIsRegistered(trackIds[i]);
            _requireTrackIsValid(trackIds[i]);

            if (!hasFullPermission && !releasesOpen) {
                _requireReleasesContractHasPermission(trackIds[i]);
            }

            $._releaseTracks[msg.sender][tokenId].push(trackIds[i]);
        }
        $._releaseUris[msg.sender][tokenId] = uri;
        bytes32 releaseHash = _createReleaseHash(trackIds, uri);
        _requireReleaseNotDuplicate(releaseHash);
        $._registeredReleases[releaseHash] = RegisteredRelease(msg.sender, tokenId, trackIds);
        emit ReleaseRegistered(trackIds, msg.sender, tokenId);
    }

    /// @inheritdoc IReleaseRegistration
    function unregisterRelease(bytes32 releaseHash) external onlyRole(DEFAULT_ADMIN_ROLE) {
        CatalogStorage storage $ = _getCatalogStorage();

        delete $._registeredReleases[releaseHash];
        emit ReleaseUnregistered(releaseHash);
    }

    /// @inheritdoc IReleaseRegistration
    function getReleaseTracks(
        address releases,
        uint256 tokenId
    ) external view returns (string[] memory) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._releaseTracks[releases][tokenId];
    }

    /// @inheritdoc IReleaseRegistration
    function getReleaseHash(address releases, uint256 tokenId) external view returns (bytes32) {
        CatalogStorage storage $ = _getCatalogStorage();

        string[] memory trackIds = $._releaseTracks[releases][tokenId];
        string memory uri = $._releaseUris[releases][tokenId];
        bytes32 releaseHash = _createReleaseHash(trackIds, uri);
        return releaseHash;
    }

    /// Public Functions

    /// @inheritdoc IReleaseRegistration
    function getRegisteredRelease(bytes32 releaseHash) public view returns (RegisteredRelease memory) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._registeredReleases[releaseHash];
    }

    /// Internal Functions

    /**
     * @dev Reverts if an account is not a member of the Catalog
     * @param account The address of the EOA or contract
     */
    function _requireMembership(uint256 catalogIndex, address account) internal {
        CatalogStorage storage $ = _getCatalogStorage();

        if (!IModaRegistry($._modaRegistry).isMember(catalogIndex, account)) {
            revert MembershipRequired();
        }
    }

    function _requireTrackManagementPermissions(address account, address artist) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (account != artist && !IModaRegistry($._modaRegistry).isManager(artist, account)) {
            revert MustBeArtistOrManager();
        }
    }

    function _requireVerifierRole(address account) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (!IModaRegistry($._modaRegistry).hasRole(keccak256("VERIFIER_ROLE"), account)) {
            revert VerifierRoleRequired();
        }
    }

    function _requireReleasesRegistrarRole(address account) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (!IModaRegistry($._modaRegistry).hasRole(keccak256("RELEASES_REGISTRAR_ROLE"), account)) {
            revert ReleasesRegistrarRoleRequired();
        }
    }

    /**
     * @dev Checks the track is registered
     * @param trackId The id of the track
     */
    function _requireTrackIsRegistered(string calldata trackId) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (bytes($._registeredTracks[trackId].trackRegistrationHash).length == 0) {
            revert TrackIsNotRegistered();
        }
    }

    /**
     * @dev Checks the track is not registered
     * @param trackRegistrationHash The registration hash of the track
     */
    function _requireTrackIsNotRegistered(string calldata trackRegistrationHash) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (bytes($._trackIds[trackRegistrationHash]).length != 0) {
            revert TrackAlreadyRegistered();
        }
    }

    /**
     * @dev Checks the track is not invalidated
     * @param trackId The id of the track
     */
    function _requireTrackIsValid(string calldata trackId) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if ($._registeredTracks[trackId].trackStatus == TrackStatus.INVALIDATED) {
            revert TrackIsInvalid();
        }
    }

    /**
     * @dev Checks the caller is the track owner or manager
     * @param trackId The id of the track
     * @param caller The address of the caller
     */
    function _requireUserIsTrackArtistOrManager(string calldata trackId, address caller) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (
            $._registeredTracks[trackId].trackArtist != caller
                && !IModaRegistry($._modaRegistry).isManager($._registeredTracks[trackId].trackArtist, caller)
        ) {
            revert MustBeArtistOrManager();
        }
    }

    /**
     * @dev Checks the track has been added to a Releases contract
     * @param trackId The id of the track
     */
    function _requireReleasesContractHasPermission(string calldata trackId) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (!$._singleTrackReleasesPermission[trackId][msg.sender]) {
            revert ReleasesContractDoesNotHavePermission();
        }
    }

    /**
     * @dev Checks if the release token has been previously  minted
     * @param releaseHash The release hash of the token
     */
    function _requireReleaseNotDuplicate(bytes32 releaseHash) internal view {
        if (getRegisteredRelease(releaseHash).releases != address(0)) {
            revert ReleaseAlreadyCreated();
        }
    }

    /**
     * @dev Checks that the Releases contract is registered
     * @param releases The address of the Releases contract
     */
    function _requireReleasesContractIsRegistered(address releases) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if ($._registeredReleasesContracts[releases] == address(0)) {
            revert ReleasesContractIsNotRegistered();
        }
    }

    /**
     * @dev Checks that the Releases contract is not registered
     * @param releases The address of the Releases contract
     */
    function _requireReleasesContractNotRegistered(address releases) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if ($._registeredReleasesContracts[releases] != address(0)) {
            revert ReleasesContractIsAlreadyRegistered();
        }
    }

    /**
     * @dev Creates a release hash from the ordered tracks and the metadata uri
     * @param trackIds The track ids of the tracks
     * @param uri The metadata uri of the release
     */
    function _createReleaseHash(
        string[] memory trackIds,
        string memory uri
    ) internal pure returns (bytes32) {
        bytes memory packedHashes = _packStringArray(trackIds);
        return keccak256(abi.encode(packedHashes, uri));
    }

    /**
     * @dev Packs an array of strings into a single bytes array
     * @param array The array of strings
     */
    function _packStringArray(string[] memory array) internal pure returns (bytes memory) {
        bytes memory packedBytes = "";
        for (uint256 i = 0; i < array.length; i++) {
            packedBytes = abi.encode(packedBytes, array[i]);
        }
        return packedBytes;
    }
}
