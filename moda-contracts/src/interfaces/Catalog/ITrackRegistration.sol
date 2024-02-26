// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface ITrackRegistration {
    ///  @notice Emitted when a track is registered
    event TrackRegistered(string trackRegistrationHash, string trackId, address indexed trackOwner);

    /**
     * @notice Emitted whenever the track registration hash is updated
     * as the registration hash is the IPFS hash of the metadata,
     * this is emitted when calling updateTrackMetadata
     */
    event TrackRegistrationHashUpdated(
        string trackId, string newTrackRegistrationHash, address indexed trackOwner
    );

    /// @notice Emitted whenever a field in RegisterTrack is updated
    event TrackUpdated(
        TrackStatus indexed trackStatus,
        address indexed trackOwner,
        address trackBeneficiary,
        string trackRegistrationHash,
        string fingerprintHash,
        string validationHash,
        address trackVerifier
    );

    /**
     * @notice The registration state of the track
     * @notice `PENDING` A track was registered, but is pending approval. This will be the initial state for anyone registering without the `GOLD_ROLE`.
     * @notice `VALIDATED` After a track has been submitted and is approved by a privileged account it will be `VALIDATED`.
     * @notice `INVALIDATED` If a track submission is fraudulent or invalid and has been rejected by a privileged account it will be `INVALIDATED`.
     */
    enum TrackStatus {
        PENDING,
        VALIDATED,
        INVALIDATED
    }

    /**
     * @notice Represents a registered track
     * @param trackStatus The registration state of the track (pending, validated, invalidated)
     * @param trackOwner The account that owns the rights to a track.
     * This is usually the artist address, but could be a contract.
     * @param TrackRegistrationHash This is a IPFS hash of the track metadata
     * @param FingerprintHash This is a IPFS hash of the track fingerprint
     * @param ValidationHash This is a hash of proof of validation data
     * @param TrackVerifier The account that validated the track
     */
    struct RegisteredTrack {
        TrackStatus trackStatus;
        address trackOwner;
        address trackBeneficiary;
        string trackRegistrationHash;
        string fingerprintHash;
        string validationHash;
        address trackVerifier;
    }

    /**
     * @notice Registers a track using the IPFS hash of the track metadata.
     * Track status is set to pending by default unless the user has the GOLD_ROLE.
     * The Track can be registered by the trackOwner or a manager.
     * @param trackOwner - The address of the owner of the track
     * @param trackRegistrationHash - The registration hash of the track
     * @param trackBeneficiary - The beneficiary of the track (could be single or an 0xSplit)
     */
    function registerTrack(
        address trackOwner,
        address trackBeneficiary,
        string calldata trackRegistrationHash
    ) external;

    /**
     * @notice Returns all registered track data
     * @param trackId - The id of the track
     */
    function getTrack(string calldata trackId) external view returns (RegisteredTrack memory);

    /**
     * @notice Returns the track id for a track
     * @param trackRegistrationHash - The registration hash of the track
     */
    function getTrackId(string calldata trackRegistrationHash) external view returns (string memory);

    /**
     * @notice Sets the track status for a track
     * @notice Only a caller with the Verifier role can call this function
     * @param trackId - The id of the track
     * @param status - The new status of the track
     */
    function setTrackStatus(string calldata trackId, TrackStatus status) external;

    /**
     * @notice Sets the track beneficiary for a track
     * @param trackId - The id of the track
     * @param newTrackBeneficiary - The new beneficiary of the track
     */
    function setTrackBeneficiary(string calldata trackId, address newTrackBeneficiary) external;

    /**
     * @notice Sets the track fingerprint hash for a track
     * @param trackId - The id of the track
     * @param fingerprintHash - The new fingerprint hash of the track
     */
    function setTrackFingerprintHash(
        string calldata trackId,
        string calldata fingerprintHash
    ) external;

    /**
     * @notice Sets the track validation hash for a track
     * @param trackId - The id of the track
     * @param validationHash - The new validation hash of the track
     */
    function setTrackValidationHash(string calldata trackId, string calldata validationHash) external;

    /**
     * @notice Sets the track uri
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
