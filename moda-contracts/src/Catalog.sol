// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {ITrackRegistration} from "./interfaces/Catalog/ITrackRegistration.sol";
import {IReleaseRegistration} from "./interfaces/Releases/IReleaseRegistration.sol";
import {IReleasesApproval} from "./interfaces/Releases/IReleasesApproval.sol";
import {IReleasesRegistration} from "./interfaces/Releases/IReleasesRegistration.sol";
import {IReleases} from "./interfaces/Releases/IReleases.sol";
import {IOpenReleases} from "./interfaces/Releases/IOpenReleases.sol";
import {ICatalog} from "./interfaces/Catalog/ICatalog.sol";
import {IMembership} from "./interfaces/IMembership.sol";
import {IRegistry} from "./interfaces/Registry/IRegistry.sol";
import {IManagement} from "./interfaces/IManagement.sol";
import {IOfficialContracts} from "./interfaces/Registry/IOfficialContracts.sol";
import {AccessControlUpgradeable} from
    "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract Catalog is ICatalog, AccessControlUpgradeable {
    // State Variables

    /// @custom:storage-location erc7201:moda.storage.Catalog
    struct CatalogStorage {
        IRegistry _registry;
        IMembership _membership;
        string _name;
        uint256 _trackCount;
        /// @dev trackRegistrationHash => trackId
        mapping(string => string) _trackIds;
        /// @dev trackId => RegisteredTrack
        mapping(string => RegisteredTrack) _registeredTracks;
        /// @dev trackId => releases => true/false
        mapping(string => mapping(address => bool)) _singleTrackReleasesPermission;
        /// @dev trackOwner => releases => true/false
        mapping(address => mapping(address => bool)) _allTracksReleasesPermission;
        /// @dev releasesOwner => releases
        mapping(address => address) _registeredReleasesContracts;
        /// @dev release => releaseOwner
        mapping(address => address) _registeredReleasesOwner;
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
    error MustBeTrackOwnerOrManager();
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

    /**
     * @dev Constructor
     * @notice The initializer is disabled when deployed as an implementation contract
     * @custom:oz-upgrades-unsafe-allow constructor
     */
    constructor() {
        _disableInitializers();
    }

    // External Functions

    /// @dev Initializes the contract
    function initialize(
        address owner,
        string calldata name,
        IRegistry Registry,
        IMembership membership
    ) external initializer {
        CatalogStorage storage $ = _getCatalogStorage();
        _grantRole(DEFAULT_ADMIN_ROLE, owner);
        $._name = name;
        $._registry = Registry;
        $._membership = membership;
    }

    /// @inheritdoc ITrackRegistration
    function registerTrack(
        address trackOwner,
        address trackBeneficiary,
        string calldata trackRegistrationHash
    ) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireTrackIsNotRegistered(trackRegistrationHash);
        _requireMembership(msg.sender);
        _requireTrackWritePermissions(trackOwner, msg.sender);

        string memory id = string(
            abi.encodePacked(
                $._name, "-", Strings.toString(block.chainid), "-", Strings.toString($._trackCount)
            )
        );
        $._trackIds[trackRegistrationHash] = id;

        bool hasAutoVerification =
            IRegistry($._registry).hasRole(keccak256("AUTO_VERIFIED_ROLE"), msg.sender);

        TrackStatus status = hasAutoVerification ? TrackStatus.VALIDATED : TrackStatus.PENDING;

        $._registeredTracks[id] = RegisteredTrack(
            status, trackOwner, trackBeneficiary, trackRegistrationHash, "", "", address(0)
        );
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
            track.trackOwner,
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
        _requireTrackWritePermissions(trackId, msg.sender);
        track.trackBeneficiary = newTrackBeneficiary;
        emit TrackUpdated(
            track.trackStatus,
            track.trackOwner,
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
        _requireTrackWritePermissions(trackId, msg.sender);
        track.trackRegistrationHash = newTrackRegistrationHash;

        emit TrackUpdated(
            track.trackStatus,
            track.trackOwner,
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
        _requireTrackWritePermissions(trackId, msg.sender);
        track.fingerprintHash = fingerprintHash;
        emit TrackUpdated(
            track.trackStatus,
            track.trackOwner,
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
        _requireTrackWritePermissions(trackId, msg.sender);
        track.validationHash = validationHash;
        emit TrackUpdated(
            track.trackStatus,
            track.trackOwner,
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

        $._registeredReleasesContracts[releasesOwner] = releases;
        $._registeredReleasesOwner[releases] = releasesOwner;
        emit ReleasesRegistered(releases, releasesOwner);
    }

    /// @inheritdoc IReleasesRegistration
    function unregisterReleasesContract(address releases) external onlyRole(DEFAULT_ADMIN_ROLE) {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireReleasesContractIsRegistered(releases);
        address releasesOwner = $._registeredReleasesOwner[releases];
        delete $._registeredReleasesContracts[releasesOwner];
        delete $._registeredReleasesOwner[releases];
        emit ReleasesUnregistered(releases, releasesOwner);
    }

    /// @inheritdoc IReleasesRegistration
    function getReleasesOwner(address releases) external view returns (address owner) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._registeredReleasesOwner[releases];
    }

    /// @inheritdoc IReleasesRegistration
    function getReleasesContract(address releasesOwner) external view returns (address releases) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._registeredReleasesContracts[releasesOwner];
    }

    /// @inheritdoc IReleasesApproval
    function setReleasesApproval(string calldata trackId, address releases, bool hasApproval) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireTrackWritePermissions(trackId, msg.sender);
        _requireReleasesContractIsRegistered(releases);
        $._singleTrackReleasesPermission[trackId][releases] = hasApproval;

        emit TrackApprovalChanged(trackId, releases, hasApproval);
    }

    /// @inheritdoc IReleasesApproval
    function setReleasesApprovalForAll(
        address trackOwner,
        address releases,
        bool hasApproval
    ) external {
        CatalogStorage storage $ = _getCatalogStorage();
        _requireTrackWritePermissions(trackOwner, msg.sender);
        _requireReleasesContractIsRegistered(releases);

        $._allTracksReleasesPermission[trackOwner][releases] = hasApproval;

        emit AllTracksApprovalChanged(trackOwner, releases, hasApproval);
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
    function getReleasesApprovalForAll(
        address trackOwner,
        address releases
    ) external view returns (bool) {
        CatalogStorage storage $ = _getCatalogStorage();

        return $._allTracksReleasesPermission[trackOwner][releases];
    }

    /// @inheritdoc IReleasesApproval
    function hasTrackAccess(string calldata trackId, address caller) external view returns (bool) {
        CatalogStorage storage $ = _getCatalogStorage();
        return $._registeredTracks[trackId].trackOwner == caller
            || IOfficialContracts(address($._registry)).getManagement().isManager(
                $._registeredTracks[trackId].trackOwner, caller
            );
    }

    /// @inheritdoc IReleaseRegistration
    function registerRelease(
        string[] calldata trackIds,
        string calldata uri,
        uint256 tokenId
    ) external {
        CatalogStorage storage $ = _getCatalogStorage();

        _requireReleasesContractIsRegistered(msg.sender);
        bool isOpen = IOpenReleases(msg.sender).supportsInterface(type(IOpenReleases).interfaceId);
        for (uint256 i = 0; i < trackIds.length; i++) {
            address trackOwner = $._registeredTracks[trackIds[i]].trackOwner;

            bool hasFullPermission = $._allTracksReleasesPermission[trackOwner][msg.sender];
            _requireTrackIsRegistered(trackIds[i]);
            _requireTrackIsValid(trackIds[i]);

            if (!hasFullPermission && !isOpen) {
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

    function _requireMembership(address caller) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (!$._membership.isMember(caller)) revert MembershipRequired();
    }

    function _requireTrackWritePermissions(address trackOwner, address caller) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (
            caller != trackOwner
                && !IOfficialContracts(address($._registry)).getManagement().isManager(trackOwner, caller)
        ) {
            revert MustBeTrackOwnerOrManager();
        }
    }

    function _requireTrackWritePermissions(string calldata trackId, address caller) internal view {
        _requireTrackWritePermissions(caller, _getCatalogStorage()._registeredTracks[trackId].trackOwner);
    }

    function _requireVerifierRole(address account) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (!IRegistry($._registry).hasRole(keccak256("VERIFIER_ROLE"), account)) {
            revert VerifierRoleRequired();
        }
    }

    function _requireReleasesRegistrarRole(address account) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (!IRegistry($._registry).hasRole(keccak256("RELEASES_REGISTRAR_ROLE"), account)) {
            revert ReleasesRegistrarRoleRequired();
        }
    }

    function _requireTrackIsRegistered(string calldata trackId) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (bytes($._registeredTracks[trackId].trackRegistrationHash).length == 0) {
            revert TrackIsNotRegistered();
        }
    }

    function _requireTrackIsNotRegistered(string calldata trackRegistrationHash) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (bytes($._trackIds[trackRegistrationHash]).length != 0) {
            revert TrackAlreadyRegistered();
        }
    }

    function _requireTrackIsValid(string calldata trackId) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if ($._registeredTracks[trackId].trackStatus == TrackStatus.INVALIDATED) {
            revert TrackIsInvalid();
        }
    }

    function _requireReleasesContractHasPermission(string calldata trackId) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if (!$._singleTrackReleasesPermission[trackId][msg.sender]) {
            revert ReleasesContractDoesNotHavePermission();
        }
    }

    function _requireReleaseNotDuplicate(bytes32 releaseHash) internal view {
        if (getRegisteredRelease(releaseHash).releases != address(0)) {
            revert ReleaseAlreadyCreated();
        }
    }

    function _requireReleasesContractIsRegistered(address releases) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if ($._registeredReleasesOwner[releases] == address(0)) {
            revert ReleasesContractIsNotRegistered();
        }
    }

    function _requireReleasesContractNotRegistered(address releases) internal view {
        CatalogStorage storage $ = _getCatalogStorage();

        if ($._registeredReleasesOwner[releases] != address(0)) {
            revert ReleasesContractIsAlreadyRegistered();
        }
    }

    function _createReleaseHash(
        string[] memory trackIds,
        string memory uri
    ) internal pure returns (bytes32) {
        bytes memory packedHashes = _packStringArray(trackIds);
        return keccak256(abi.encode(packedHashes, uri));
    }

    function _packStringArray(string[] memory array) internal pure returns (bytes memory) {
        bytes memory packedBytes = "";
        for (uint256 i = 0; i < array.length; i++) {
            packedBytes = abi.encode(packedBytes, array[i]);
        }
        return packedBytes;
    }
}
