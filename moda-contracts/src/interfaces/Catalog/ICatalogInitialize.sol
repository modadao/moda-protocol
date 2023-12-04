// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IMembership} from "../IMembership.sol";
import {IModaRegistry} from "../ModaRegistry/IModaRegistry.sol";

interface ICatalogInitialize {
    /*
    * @dev Initializes a Catalog, called by the CatalogFactory when
    * a new catalog is created to set the initial state
    * @param owner - The owner of the Catalog contract
    * @param name - The name of the Catalog contract
    * @param modaRegistry - The address of the ModaRegistry contract
    * @param membership - A contract that implements the IMembership interface
    **/
    function initialize(
        address owner,
        string calldata name,
        IModaRegistry modaRegistry,
        IMembership membership
    ) external;
}
