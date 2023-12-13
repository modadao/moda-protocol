// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IMembership} from "../IMembership.sol";

interface ICatalogFactory {
    event CatalogCreated(address indexed owner, address indexed catalog, string name);

    /**
     * @dev Creates a new Catalog contract
     * @param name - The name of the Catalog contract
     * @param membership - A contract that implements the IMembership interface
     */
    function create(string calldata name, IMembership membership) external returns (address);
}
