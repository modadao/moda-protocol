// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import {ICatalog} from "./interfaces/Catalog/ICatalog.sol";
import {ICatalogFactory} from "./interfaces/Catalog/ICatalogFactory.sol";
import {ICatalogInitialize} from "./interfaces/Catalog/ICatalogInitialize.sol";
import {IModaRegistry} from "./interfaces/ModaRegistry/IModaRegistry.sol";
import {IMembership} from "./interfaces/IMembership.sol";

contract CatalogFactory is ICatalogFactory {
    IModaRegistry public modaRegistry;
    address public catalogBeacon;
    string public version;

    /**
     * @dev Constructor
     * @param modaRegistry_ - The address of the ModaRegistry contract
     * @param catalogBeacon_ - The address of the catalog beacon that holds
     * the Catalog implementation address
     */
    constructor(IModaRegistry modaRegistry_, address catalogBeacon_) {
        modaRegistry = modaRegistry_;
        catalogBeacon = catalogBeacon_;
    }

    /**
     * @inheritdoc ICatalogFactory
     */
    function create(string calldata name, IMembership membership) external returns (address) {
        address catalog = address(new BeaconProxy(catalogBeacon, ""));
        ICatalogInitialize(catalog).initialize(msg.sender, name, modaRegistry, membership);
        IModaRegistry(modaRegistry).registerCatalog(ICatalog(catalog));
        emit CatalogCreated(msg.sender, catalog, name);

        return catalog;
    }
}
