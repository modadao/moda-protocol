// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IMembership} from "../IMembership.sol";
import {IRegistry} from "../Registry/IRegistry.sol";

interface ICatalogInitialize {
    /**
     * @dev Initializes a Catalog, called by the CatalogFactory when
     * a new catalog is created to set the initial state
     * @param owner The account with admin power
     * @param name The name of the Catalog contract
     * @param registry The address of the Registry contract where all released tracks are published
     * @param membership A contract that implements the `IMembership` interface.
     *                   This can be used to gate who can use your contracts.
     */
    function initialize(
        address owner,
        string calldata name,
        IRegistry registry,
        IMembership membership
    ) external;
}
