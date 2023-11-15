// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface ITrackRegistration {
    /**
     * @dev Emitted when a track is registered
     */
    event TrackRegistered(string trackRegistrationHash, string trackId, address indexed trackOwner);

    /**
     * @dev Emitted whenever the track registration hash is updated
     * as the registration hash is the IPFS hash of the metadata,
     * this is emitted when calling updateTrackMetadata
     */
    event TrackRegistrationHashUpdated(
        string trackId, string newTrackRegistrationHash, address indexed trackOwner
    );

    /**
     * @dev Emitted whenever a field in RegisterTrack is updated
     */
    event TrackUpdated(
        TrackStatus indexed trackStatus,
        address indexed trackArtist,
        address trackBeneficiary,
        string trackRegistrationHash,
        string fingerprintHash,
        string validationHash,
        address trackVerifier
    );
    /**
     * @dev The registration state of the track (pending, validated, invalidated)
     */

    enum TrackStatus {
        PENDING,
        VALIDATED,
        INVALIDATED
    }

    /**
     * @dev Represents a registered track
     * TrackStatus - The registration state of the track (pending, validated, invalidated)
     * TrackArtist - The account that owns the rights to a track.
     * This is usually the artist address, but could be a contract.
     * TrackRegistrationHash - This is a IPFS hash of the track metadata
     * FingerprintHash - This is a IPFS hash of the track fingerprint
     * ValidationHash - This is a hash of proof of validation data
     * TrackVerifier - The account that validated the track
     */
    struct RegisteredTrack {
        TrackStatus trackStatus;
        address trackArtist;
        address trackBeneficiary;
        string trackRegistrationHash;
        string fingerprintHash;
        string validationHash;
        address trackVerifier;
    }

    /**
     * @dev Registers a track using the IPFS hash of the track metadata.
     * Track status is set to pending by default unless the user has the GOLD_ROLE.
     * The Track can be registered by the artist or a manager.
     * @param artist - The address of the artist
     * @param trackRegistrationHash - The registration hash of the track
     * @param trackBeneficiary - The beneficiary of the track (could be single or an 0xSplit)
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
}
