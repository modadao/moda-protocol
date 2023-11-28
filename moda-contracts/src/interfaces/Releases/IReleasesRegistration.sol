// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface IReleasesRegistration {
    /// @dev Emitted when a Releases contract is registered
    event ReleasesRegistered(address releases, address indexed releasesOwner);

    /// @dev Emitted when a Releases contract is unregistered
    event ReleasesUnregistered(address releases, address indexed releasesOwner);

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
     * @dev Returns the Releases contract of an owner
     * @param releasesOwner - The owner of the Releases contract
     */
    function getReleasesContract(address releasesOwner) external view returns (address releases);
}
