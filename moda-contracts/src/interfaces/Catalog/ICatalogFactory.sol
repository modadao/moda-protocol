// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IMembership} from "../IMembership.sol";

interface ICatalogFactory {
    event CatalogCreated(address indexed owner, address indexed catalog, string name);

    /**
     * @dev Creates a new Catalog contract
     * @param name The name of the Catalog contract
     * @param membership A contract that implements `IMembership`.
     *                   `IMembership` can be used to gate users based on rules that you define.
     */
    function create(string calldata name, IMembership membership) external returns (address);
}
