// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

/**
 * @notice A lightweight interface for approving other accounts to create releases with your track.
 */
interface IReleasesApproval {
    /**
     * @notice Emitted when a track owner has changed permissions for a
     * releases contract to be able to release their track
     */
    event TrackApprovalChanged(string trackId, address indexed releases, bool hasApproval);

    /**
     * @notice Emitted when a track owner has given permission to a
     * releases contract to be able to release all their tracks
     */
    event AllTracksApprovalChanged(address indexed artist, address indexed releases, bool hasApproval);

    /**
     * @notice Add or revoke approval for a Releases contract to release a track
     * @param trackId - The ID of the track
     * @param releases - The address of the Releases contract
     * @param hasApproval - The approval to set true/false
     */
    function setReleasesApproval(string calldata trackId, address releases, bool hasApproval) external;

    /**
     * @notice Sets approval for a Releases contract to be able to release
     * all tracks owned by the artist
     * @param artist - The address of the artist
     * @param releases - The address of the Releases contract
     * @param hasApproval - The approval to set true/false
     */
    function setReleasesApprovalForAll(address artist, address releases, bool hasApproval) external;

    /**
     * @notice Returns true/false if a Releases contract has approval
     * to release a track
     * @param trackId - The track id of the track
     * @param releases - The address of the Releases contract
     */
    function getReleasesApproval(
        string calldata trackId,
        address releases
    ) external view returns (bool);

    /**
     * @notice Returns true/false if a Releases contract has approval
     * to release all tracks owned by the caller
     * @param artist - The address of the artist
     * @param releases - The address of the Releases contract
     */
    function getReleasesApprovalForAll(address artist, address releases) external view returns (bool);

    /**
     * @notice Checks the caller has permission to release a track through an open Releases contract.
     * @param trackId The id of the track
     * @param caller The address of the caller
     */
    function hasTrackAccess(string calldata trackId, address caller) external view returns (bool);
}
