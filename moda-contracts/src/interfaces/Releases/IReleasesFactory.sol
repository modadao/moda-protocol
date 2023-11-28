// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

/**
 * @title IReleasesFactory
 * @dev Interface for the ReleasesFactory
 */
interface IReleasesFactory {
    /**
     * @dev Emitted when a new releases contract is created
     */
    event ReleasesCreated(
        address indexed releasesOwner, address indexed releases, string name, string symbol
    );

    /**
     * @dev Creates a new releases contract. The caller becomes
     * the owner and default admin of the new releases contract.
     * @param releaseAdmins The addresses of the release admins
     * @param name The name of the releases contract
     * @param symbol The symbol of the releases contract
     * @param catalog The address of the catalog contract
     */
    function create(
        address[] memory releaseAdmins,
        string memory name,
        string memory symbol,
        address catalog
    ) external;
}
