// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

/**
 * @title IRegistry
 * @dev Interface for Registry
 */
interface ICatalog {
    /**
     * @dev Status of a registered track
     */
    enum TrackStatus {
        PENDING,
        VALIDATED,
        INVALIDATED
    }

    /**
     * @dev Represents a registered track
     * TrackStatus - The status of the track (pending, validated, invalidated)
     * TrackOwner - The address that registered the track
     * TrackRegistrationHash - This is a IPFS hash of the track metadata
     * FingerprintHash - This is a IPFS hash of the track fingerprint
     * ValidationHash - This is a hash of proof of validation data
     */
    struct RegisteredTrack {
        TrackStatus trackStatus;
        address artist;
        address trackBeneficiary;
        string trackRegistrationHash;
        string fingerprintHash;
        string validationHash;
    }

    /**
     * @dev Represents a registered release
     * releases - The address of the Releases contract contract
     * from which The release was created
     * TokenId - The token id of the release
     * TrackIds - The ids of the tracks in the release
     */
    struct RegisteredRelease {
        address releases;
        uint256 tokenId;
        string[] trackIds;
    }

    /**
     * @dev Emitted whenever the track registration hash is updated
     * as the registration hash is the IPFS hash of the metadata,
     * this is emitted when calling updateTrackMetadata
     */
    event TrackRegistrationHashUpdated(
        string trackId, string newTrackRegistrationHash, address indexed trackOwner
    );

    /**
     * @dev Emitted when a track is registered
     */
    event TrackRegistered(string trackRegistrationHash, string trackId, address indexed trackOwner);

    /**
     * @dev Emitted when the status of a track is set to invalidated
     */
    event TrackInvalidated(string trackId);

    /**
     * @dev Emitted whenever a field in RegisterTrack is updated
     */
    event TrackUpdated(
        TrackStatus indexed trackStatus,
        address indexed trackArtist,
        address trackBeneficiary,
        string trackRegistrationHash,
        string fingerprintHash,
        string validationHash
    );

    /**
     * @dev Emitted when a track owner has given permission to a
     * releases contract to be able to release their track
     */
    event TrackAddedToReleasesContract(string trackId, address indexed releases);

    /**
     * @dev Emitted when a track owner has revoked permission to a
     * releases contract to be able to release their track
     */
    event TrackRemovedFromReleasesContract(string trackId, address indexed releases);

    /**
     * @dev Emitted when a track owner has given permission to a
     * releases contract to be able to release all their tracks
     */
    event AllTrackAddedToReleaseContract(address indexed artist, address indexed releases);

    /**
     * @dev Emitted when a release is registered, intitiated by the Releases contract
     * when a release is successfully created
     */
    event ReleaseRegistered(string[] trackIds, address releases, uint256 tokenId);

    /**
     * @dev Emitted when a release is unregistered
     */
    event ReleaseUnregistered(bytes32 releaseHash);

    /**
     * @dev Emitted when a Releases contract is registered
     */
    event ReleasesContractRegistered(address releases, address indexed releasesOwner);

    /**
     * @dev Emitted when a Releases contract is unregistered
     */
    event ReleasesContractUnregistered(address releases, address indexed releasesOwner);

    /**
     * @dev Initializes the contract, The default admin role is given to the contract deployer
     * @param catalogName - The name of the catalog
     * @param chainId - The chain id of the network the catalog is deployed on
     * @param catalogVersion - The version of the catalog
     * @param modaRegistry - The address of the moda registry
     * @param splitsFactory - The address of the split main contract
     * @param modaBeneficiary - The address of the moda beneficiary
     */
    function initialize(
        string memory catalogName,
        string memory chainId,
        string memory catalogVersion,
        address modaRegistry,
        address splitsFactory,
        address modaBeneficiary,
        address deployer
    ) external;

    /**
     * @dev Returns the catalog name, chain id and version
     */
    function getCatalogInfo()
        external
        view
        returns (string memory catalogName, string memory chainId, string memory catalogVersion);

    /**
     * @dev Registers a track using the IPFS hash of the track metadata.
     * Track status is set to pending by default unless the user has the GOLD_ROLE.
     * The Track can be registered by the artist or a manager.
     * @param artist - The address of the artist
     * @param trackRegistrationHash - The registration hash of the track
     * @param trackBeneficiary - The beneficiary of the track (could be single or an 0xsplit)
     * @param catalogIndex - The index of the catalog
     */
    function registerTrack(
        address artist,
        address trackBeneficiary,
        string calldata trackRegistrationHash,
        uint256 catalogIndex
    ) external;

    /**
     * @dev Returns all registered track data
     * @param trackId - The id of the track
     */
    function getTrack(string calldata trackId) external view returns (RegisteredTrack memory);

    /**
     * @dev Returns the track id for a track
     * @param trackRegistrationHash - The registration hash of the track
     */
    function getTrackId(string calldata trackRegistrationHash) external view returns (string memory);

    /**
     * @dev Sets the track status for a track
     * @notice Only a caller with the Verifier role can call this function
     * @param trackId - The id of the track
     * @param status - The new status of the track
     */
    function setTrackStatus(string calldata trackId, TrackStatus status) external;

    /**
     * @dev Sets the track beneficiary for a track
     * @param trackId - The id of the track
     * @param newTrackBeneficiary - The new beneficiary of the track
     */
    function setTrackBeneficiary(string calldata trackId, address newTrackBeneficiary) external;

    /**
     * @dev Sets the track fingerprint hash for a track
     * @param trackId - The id of the track
     * @param fingerprintHash - The new fingerprint hash of the track
     */
    function setTrackFingerprintHash(
        string calldata trackId,
        string calldata fingerprintHash
    ) external;

    /**
     * @dev Sets the track validation hash for a track
     * @param trackId - The id of the track
     * @param validationHash - The new validation hash of the track
     */
    function setTrackValidationHash(string calldata trackId, string calldata validationHash) external;

    /**
     * @dev Sets the track uri
     * @notice Only the track owner can call this function
     * @param trackId - The id of the track
     * @param newTrackRegistrationHash - The new registration hash of the track
     * i.e. the updated IPFS hash of the track metadata
     */
    function setTrackMetadata(
        string calldata trackId,
        string calldata newTrackRegistrationHash
    ) external;

    /**
     * @dev Registers a Releases contract, a release can only be created from registered
     * Releases contract and only tokens from registered Releases contract can be
     * listed on the marketplace.
     * @notice Only the factory can call this function
     * @param releases - The address of the Releases contract
     * @param releasesOwner - The owner of the Releases contract
     */
    function registerReleasesContract(address releases, address releasesOwner) external;

    /**
     * @dev Unregisters a Releases Contract. This will make the Releases contract
     * unable to create releases.
     * @param releases - The address of the Releases contract
     */
    function unregisterReleasesContract(address releases) external;

    /**
     * @dev Returns the owner of a Releases contract
     * @param releases - The address of the Releases contract
     */
    function getReleasesOwner(address releases) external view returns (address owner);

    /**
     * @dev Add or revoke permission for a Releases contract to release a track
     * @param trackId - The track id of the track
     * @param releases - The address of the Releases contract
     * @param hasPermission - The permission to set true/false
     */
    function grantReleasesAccessSingle(
        string calldata trackId,
        address releases,
        bool hasPermission
    ) external;

    /**
     * @dev Sets permission for a Releases contract to be able to release
     * all tracks owned by the caller
     * @param artist - The address of the artist
     * @param releases - The address of the Releases contract
     * @param hasPermission - The permission to set true/false
     */
    function grantReleasesAccessAll(address artist, address releases, bool hasPermission) external;

    /**
     * @dev Returns true/false if a Releases contract has permission
     * to release a track
     * @param trackId - The track id of the track
     * @param releases - The address of the Releases contract
     */
    function getReleasesAccessSingle(
        string calldata trackId,
        address releases
    ) external view returns (bool);

    /**
     * @dev Returns true/false if a Releases contract has permission
     * to release all tracks owned by the caller
     * @param artist - The address of the artist
     * @param releases - The address of the Releases contract
     */
    function getReleasesAccessAll(address artist, address releases) external view returns (bool);

    /**
     * @dev Registers a release. In order for a release to be registered
     * the Releases contract must be registered, the tracks must be registered,
     * the Releases contract must have the track owners permission to release the track,
     * and this exact combination of ordered tracks and metadata uri must not have been
     * registered previously.
     * @param trackIds - The track ids of the tracks
     * @param uri - The metadata uri of the release
     * @param tokenId - The token id of the release
     */
    function registerRelease(
        string[] calldata trackIds,
        string calldata uri,
        uint256 tokenId
    ) external;

    /**
     * @dev Unregisters a releases. This deletes a release hash enabling the release
     * to be created again.
     * @notice Only the default admin can call this function.
     * @param releaseHash - The hash of the release
     */
    function unregisterRelease(bytes32 releaseHash) external;

    /**
     * @dev Returns an array of track ids for a given token id and releases address
     * @param releases - The address of the Releases contract contract
     * @param tokenId - The token id of the release
     */
    function getReleaseTracks(
        address releases,
        uint256 tokenId
    ) external view returns (string[] memory);

    /**
     * @dev Returns the release hash for a release
     * @param releases - The address of the Releases contract contract
     * @param tokenId - The token id of the release
     */
    function getReleaseHash(address releases, uint256 tokenId) external view returns (bytes32);

    /**
     * @dev Returns a registered release
     * @param releaseHash - The hash of the release
     */
    function getRegisteredRelease(bytes32 releaseHash)
        external
        view
        returns (RegisteredRelease memory);
}
