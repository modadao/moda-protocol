// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {ICatalog} from "../Catalog/ICatalog.sol";

/**
 * @notice IOpenReleasesFactory defines an interface for a factory contract that deploys trustless OpenReleases contracts.
 * OpenReleases are permission-less contract for releasing tracks. They are generally deployed by an organization for a Catalog.
 */
interface IOpenReleasesFactory {
    /**
     * @notice Emitted when a new open releases contract is created
     */
    event OpenReleasesCreated(
        address indexed releasesOwner, address indexed releases, string name, string symbol
    );

    /**
     * @notice Creates a new open releases contract. The caller becomes
     * the owner and default admin of the new releases contract.
     * @param name The name of the releases contract
     * @param symbol The symbol of the releases contract
     * @param catalog A contract that implements ICatalog
     */
    function create(string memory name, string memory symbol, ICatalog catalog) external;
}
