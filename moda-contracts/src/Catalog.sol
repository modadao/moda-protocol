// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {ICatalog} from "./interfaces/ICatalog.sol";
import {IModaRegistry} from "./interfaces/IModaRegistry.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract Catalog is ICatalog, AccessControlUpgradeable {
    /// State Variables

    /// @custom:storage-location erc7201:moda.storage.Catalog
    struct CatalogStorage {
        /// @dev The address of the Moda Registry
        address _modaRegistry;
        /// @dev The address of the Splits Factory
        address _splitsFactory;
        /// @dev The address of the Moda Beneficiary
        address _modaBeneficiary;
        /// @dev Name of the organization
        string _catalogName;
        /// @dev The chain id of the network the catalog is deployed on
        string _chainId;
        /// @dev The version of the catalog
        string _catalogVersion;
        /// @dev The number of tracks registered
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

    /// Errors

    error TrackIsNotRegistered();
    error TrackAlreadyRegistered();
    error TrackIsInvalid();
    error ReleasesContractIsNotRegistered();
    error ReleasesContractIsAlreadyRegistered();
    error ReleasesContractDoesNotHavePermission();
    error ReleaseAlreadyCreated();
    error UserMustBeMember();
    error MustBeArtistOrManager();
    error VerifierRoleRequired();
    error ReleasesRegistrarRoleRequired();

    /// Storage location

    // keccak256(abi.encode(uint256(keccak256("moda.storage.Catalog")) - 1)) & ~bytes32(uint256(0xff))
    bytes32 private constant CatalogStorageLocation =
        0x29716ba11260d206d72844135e3b7e5c7c3a8e39cde3c7b2b654f553db068900;

    function _getCatalogStorage() private pure returns (CatalogStorage storage $) {
        assembly {
            $.slot := CatalogStorageLocation
        }
    }

    /// External Functions

    /**
     * @inheritdoc ICatalog
     */
    function initialize(
        string calldata catalogName,
        string calldata chainId,
        string calldata catalogVersion,
        address modaRegistry,
        address splitsFactory,
        address modaBeneficiary,
        address deployer
    ) external initializer {
        CatalogStorage storage $ = _getCatalogStorage();
        $._catalogName = catalogName;
        $._chainId = chainId;
        $._catalogVersion = catalogVersion;
        $._modaRegistry = modaRegistry;
        $._splitsFactory = splitsFactory;
        $._modaBeneficiary = modaBeneficiary;
        _grantRole(DEFAULT_ADMIN_ROLE, deployer);
    }

    /**
     * @inheritdoc ICatalog
     */
    function getCatalogInfo()
        external
        view
        returns (string memory catalogName, string memory chainId, string memory catalogVersion)
    {
        CatalogStorage storage $ = _getCatalogStorage();
        return ($._catalogName, $._chainId, $._catalogVersion);
    }

    /**
     * @inheritdoc ICatalog
     */
    function registerTrack(
        address artist,
        address trackBeneficiary,
        string calldata trackRegistrationHash,
        uint256 catalogIndex
    ) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireTrackIsNotRegistered(trackRegistrationHash);
        _requireUserIsMember(catalogIndex, msg.sender);
        _requireUserIsArtistOrManager(msg.sender, artist);
        string memory id = string(
            abi.encodePacked(
                $._catalogName,
                "-",
                $._chainId,
                "-",
                $._catalogVersion,
                "-TRACK-ID-",
                Strings.toString($._trackCount)
            )
        );
        $._trackIds[trackRegistrationHash] = id;

        bool isGoldRole = IModaRegistry($._modaRegistry).hasRole(keccak256("GOLD_ROLE"), msg.sender);

        TrackStatus status = isGoldRole ? TrackStatus.VALIDATED : TrackStatus.PENDING;

        $._registeredTracks[id] =
            RegisteredTrack(status, artist, trackBeneficiary, trackRegistrationHash, "", "");
        $._trackCount++;
        emit TrackRegistered(trackRegistrationHash, id, msg.sender);
    }

    /**
     * @inheritdoc ICatalog
     */
    function getTrack(string calldata trackId) external view returns (RegisteredTrack memory) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._registeredTracks[trackId];
    }

    /**
     * @inheritdoc ICatalog
     */
    function getTrackId(string calldata trackRegistrationHash) external view returns (string memory) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._trackIds[trackRegistrationHash];
    }

    /**
     * @inheritdoc ICatalog
     */
    function setTrackStatus(string calldata trackId, TrackStatus status) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireUserHasVerifierRole(msg.sender);
        _requireTrackIsRegistered(trackId);
        RegisteredTrack storage track = $._registeredTracks[trackId];
        track.trackStatus = status;
        emit TrackUpdated(
            status,
            track.artist,
            track.trackBeneficiary,
            track.trackRegistrationHash,
            track.fingerprintHash,
            track.validationHash
        );
    }

    /**
     * @inheritdoc ICatalog
     */
    function setTrackBeneficiary(string calldata trackId, address newTrackBeneficiary) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireTrackIsRegistered(trackId);
        RegisteredTrack storage track = $._registeredTracks[trackId];
        _requireUserIsArtistOrManager(msg.sender, track.artist);
        track.trackBeneficiary = newTrackBeneficiary;
        emit TrackUpdated(
            track.trackStatus,
            track.artist,
            newTrackBeneficiary,
            track.trackRegistrationHash,
            track.fingerprintHash,
            track.validationHash
        );
    }

    /**
     * @inheritdoc ICatalog
     */
    function setTrackMetadata(
        string calldata trackId,
        string calldata newTrackRegistrationHash
    ) external {
        _requireTrackIsRegistered(trackId);
        CatalogStorage storage $ = _getCatalogStorage();

        RegisteredTrack storage track = $._registeredTracks[trackId];
        _requireUserIsArtistOrManager(msg.sender, track.artist);
        track.trackRegistrationHash = newTrackRegistrationHash;
        emit TrackUpdated(
            track.trackStatus,
            track.artist,
            track.trackBeneficiary,
            newTrackRegistrationHash,
            track.fingerprintHash,
            track.validationHash
        );
    }

    /**
     * @inheritdoc ICatalog
     */
    function setTrackFingerprintHash(
        string calldata trackId,
        string calldata fingerprintHash
    ) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireTrackIsRegistered(trackId);
        RegisteredTrack storage track = $._registeredTracks[trackId];
        _requireUserIsArtistOrManager(msg.sender, track.artist);
        track.fingerprintHash = fingerprintHash;
        emit TrackUpdated(
            track.trackStatus,
            track.artist,
            track.trackBeneficiary,
            track.trackRegistrationHash,
            fingerprintHash,
            track.validationHash
        );
    }

    /**
     * @inheritdoc ICatalog
     */
    function setTrackValidationHash(string calldata trackId, string calldata validationHash) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireTrackIsRegistered(trackId);
        RegisteredTrack storage track = $._registeredTracks[trackId];
        _requireUserIsArtistOrManager(msg.sender, track.artist);
        track.validationHash = validationHash;
        emit TrackUpdated(
            track.trackStatus,
            track.artist,
            track.trackBeneficiary,
            track.trackRegistrationHash,
            track.fingerprintHash,
            validationHash
        );
    }

    /**
     * @inheritdoc ICatalog
     */
    function registerReleasesContract(address releases, address releasesOwner) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireCallerHasReleasesRegistrarRole(msg.sender);
        _requireReleasesContractNotRegistered(releases);

        $._registeredReleasesContracts[releases] = releasesOwner;
        emit ReleasesContractRegistered(releases, releasesOwner);
    }

    /**
     * @inheritdoc ICatalog
     */
    function unregisterReleasesContract(address releases) external onlyRole(DEFAULT_ADMIN_ROLE) {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireReleasesContractIsRegistered(releases);
        address releasesOwner = $._registeredReleasesContracts[releases];
        delete $._registeredReleasesContracts[releases];
        emit ReleasesContractUnregistered(releases, releasesOwner);
    }

    /**
     * @inheritdoc ICatalog
     */
    function getReleasesOwner(address releases) external view returns (address owner) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._registeredReleasesContracts[releases];
    }

    /**
     * @inheritdoc ICatalog
     */
    function grantReleasesAccessSingle(
        string calldata trackId,
        address releases,
        bool hasPermission
    ) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireIsTrackArtistOrManager(trackId);
        _requireReleasesContractIsRegistered(releases);
        $._singleTrackReleasesPermission[trackId][releases] = hasPermission;
        if (hasPermission) {
            emit TrackAddedToReleasesContract(trackId, releases);
        } else {
            emit TrackRemovedFromReleasesContract(trackId, releases);
        }
    }

    /**
     * @inheritdoc ICatalog
     */
    function grantReleasesAccessAll(address artist, address releases, bool hasPermission) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireUserIsArtistOrManager(msg.sender, artist);
        _requireReleasesContractIsRegistered(releases);
        $._allTracksReleasesPermission[artist][releases] = hasPermission;
        emit AllTrackAddedToReleaseContract(artist, releases);
    }

    /**
     * @inheritdoc ICatalog
     */
    function getReleasesAccessSingle(
        string calldata trackId,
        address releases
    ) external view returns (bool) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._singleTrackReleasesPermission[trackId][releases];
    }

    /**
     * @inheritdoc ICatalog
     */
    function getReleasesAccessAll(address artist, address releases) external view returns (bool) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._allTracksReleasesPermission[artist][releases];
    }

    /**
     * @inheritdoc ICatalog
     */
    function registerRelease(
        string[] calldata trackIds,
        string calldata uri,
        uint256 tokenId
    ) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireReleasesContractIsRegistered(msg.sender);

        for (uint256 i = 0; i < trackIds.length; i++) {
            address artist = $._registeredTracks[trackIds[i]].artist;

            bool hasFullPermission = $._allTracksReleasesPermission[artist][msg.sender];
            _requireTrackIsRegistered(trackIds[i]);
            _requireTrackIsValid(trackIds[i]);

            if (!hasFullPermission) {
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

    /**
     * @inheritdoc ICatalog
     */
    function unregisterRelease(bytes32 releaseHash) external onlyRole(DEFAULT_ADMIN_ROLE) {
        CatalogStorage storage $ = _getCatalogStorage();

        delete $._registeredReleases[releaseHash];
        emit ReleaseUnregistered(releaseHash);
    }

    /**
     * @inheritdoc ICatalog
     */
    function getReleaseTracks(
        address releases,
        uint256 tokenId
    ) external view returns (string[] memory) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._releaseTracks[releases][tokenId];
    }

    /**
     * @inheritdoc ICatalog
     */
    function getReleaseHash(address releases, uint256 tokenId) external view returns (bytes32) {
        CatalogStorage storage $ = _getCatalogStorage();

        string[] memory trackIds = $._releaseTracks[releases][tokenId];
        string memory uri = $._releaseUris[releases][tokenId];
        bytes32 releasehash = _createReleaseHash(trackIds, uri);
        return releasehash;
    }

    /// Public Functions

    /**
     * @inheritdoc ICatalog
     */
    function getRegisteredRelease(bytes32 releaseHash) public view returns (RegisteredRelease memory) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._registeredReleases[releaseHash];
    }

    /// Internal Functions

    /**
     * @dev Checks the user has a membership
     * @param user The address of the user
     */
    function _requireUserIsMember(uint256 catalogIndex, address user) internal {
        CatalogStorage storage $ = _getCatalogStorage();

        if (!IModaRegistry($._modaRegistry).isMember(catalogIndex, user)) {
            revert UserMustBeMember();
        }
    }

    function _requireUserIsArtistOrManager(address user, address artist) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (user != artist && !IModaRegistry($._modaRegistry).isManager(artist, user)) {
            revert MustBeArtistOrManager();
        }
    }

    function _requireUserHasVerifierRole(address user) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (!IModaRegistry($._modaRegistry).hasRole(keccak256("VERIFIER_ROLE"), user)) {
            revert VerifierRoleRequired();
        }
    }

    function _requireCallerHasReleasesRegistrarRole(address caller) internal view {
        CatalogStorage storage $ = _getCatalogStorage();
        if (!IModaRegistry($._modaRegistry).hasRole(keccak256("RELEASES_REGISTRAR_ROLE"), caller)) {
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
     * @dev Checks the caller is the track owner
     * @param trackId The id of the track
     */
    function _requireIsTrackArtistOrManager(string calldata trackId) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (
            $._registeredTracks[trackId].artist != msg.sender
                && !IModaRegistry($._modaRegistry).isManager($._registeredTracks[trackId].artist, msg.sender)
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
