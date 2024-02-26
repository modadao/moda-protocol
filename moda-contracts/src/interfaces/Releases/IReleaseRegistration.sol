// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

/**
 * @notice This interface defines a lightweight version of the required functionality to register releases
 * when a release is successfully created.
 */
interface IReleaseRegistration {
    /**
     * @notice Emitted when a release is registered, initiated by the Releases contract
     * when a release is successfully created
     */
    event ReleaseRegistered(string[] trackIds, address releases, uint256 tokenId);

    /// @notice Emitted when a release is unregistered
    event ReleaseUnregistered(bytes32 releaseHash);

    /**
     * @notice Represents a registered release.
     * @param releases The address of the Releases contract from which the tracks were released
     * @param TokenId The token id of the release
     * @param TrackIds The ids of the tracks in the release
     */
    struct RegisteredRelease {
        address releases;
        uint256 tokenId;
        string[] trackIds;
    }

    /**
     * @notice Registers a release. In order for a release to be registered
     * the Releases contract must be registered, the tracks must be registered,
     * the Releases contract must have the track owners permission to release the track,
     * and this exact combination of ordered tracks and metadata uri must not have been
     * registered previously.
     * @param trackIds The track ids of the tracks
     * @param uri The metadata uri of the release
     * @param tokenId The token id of the release
     */
    function registerRelease(
        string[] calldata trackIds,
        string calldata uri,
        uint256 tokenId
    ) external;

    /**
     * @notice Unregisters a releases. This deletes a release hash enabling the release
     * to be created again. Only the default admin can call this method.
     * @param releaseHash The hash of the release
     */
    function unregisterRelease(bytes32 releaseHash) external;

    /**
     * @notice Returns the release hash for a release
     * @param releases The address of the Releases contract contract
     * @param tokenId The token id of the release
     */
    function getReleaseHash(address releases, uint256 tokenId) external view returns (bytes32);

    /**
     * @notice Returns a registered release
     * @param releaseHash The hash of the release
     */
    function getRegisteredRelease(bytes32 releaseHash)
        external
        view
        returns (RegisteredRelease memory);

    /**
     * @notice Returns an array of track ids for a given token id and releases address
     * @param releases The address of the Releases contract contract
     * @param tokenId The token id of the release
     */
    function getReleaseTracks(
        address releases,
        uint256 tokenId
    ) external view returns (string[] memory);
}
