// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {ICatalog} from "../Catalog/ICatalog.sol";

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
     * @param catalog A contract that implements ICatalog
     */
    function create(
        address[] memory releaseAdmins,
        string memory name,
        string memory symbol,
        ICatalog catalog
    ) external;
}
