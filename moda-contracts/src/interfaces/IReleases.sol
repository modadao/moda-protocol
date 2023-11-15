// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

/**
 * @title IReleases
 * @dev Interface for Releases
 */
interface IReleases {
    /**
     * @dev Returns info about the Releases contract including the total number of releases
     * and where or not the contract is open or curated
     * @return numberOfReleases The total number of releases
     * @return isOpen Whether or not the contract is open or curated
     */
    function info() external returns (uint256 numberOfReleases, bool isOpen);

    /**
     * @dev Sets the Releases contract to public, only the default admin can call this
     */
    function setIsReleasesOpen() external;
}
