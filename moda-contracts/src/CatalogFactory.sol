// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";
import {ICatalog} from "./interfaces/Catalog/ICatalog.sol";
import {ICatalogFactory} from "./interfaces/Catalog/ICatalogFactory.sol";
import {ICatalogInitialize} from "./interfaces/Catalog/ICatalogInitialize.sol";
import {IRegistry} from "./interfaces/Registry/IRegistry.sol";
import {IMembership} from "./interfaces/IMembership.sol";

/**
 * @notice A factory to create Trustless Catalog contracts and to register with the Registry.
 */
contract CatalogFactory is ICatalogFactory {
    IRegistry public registry;
    address public catalogBeacon;
    string public version;

    /**
     * @notice Constructor
     * @param registry_ - The address of the Registry contract, where Catalogs must be registered.
     * @param catalogBeacon_ - The address of the catalog beacon that holds
     * the Catalog implementation address
     */
    constructor(IRegistry registry_, address catalogBeacon_) {
        registry = registry_;
        catalogBeacon = catalogBeacon_;
    }

    /**
     * @inheritdoc ICatalogFactory
     */
    function create(string calldata name, IMembership membership) external returns (address) {
        address catalog = address(new BeaconProxy(catalogBeacon, ""));
        ICatalogInitialize(catalog).initialize(msg.sender, name, registry, membership);
        registry.registerCatalog(ICatalog(catalog));
        emit CatalogCreated(msg.sender, catalog, name);

        return catalog;
    }
}
