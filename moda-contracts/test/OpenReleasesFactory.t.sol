// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {OpenReleasesFactory} from "../src/OpenReleasesFactory.sol";
import {OpenReleases} from "../src/OpenReleases.sol";
import {Registry} from "../src/Registry.sol";
import {CatalogFactory} from "../src/CatalogFactory.sol";
import {Catalog} from "../src/Catalog.sol";
import {Management} from "../src/Management.sol";
import {Membership} from "./mocks/MembershipMock.sol";
import {ISplitsFactory} from "../src/interfaces/ISplitsFactory.sol";

import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";

contract OpenReleasesFactoryTest is Test {
    Registry public registry;
    Membership public membership;
    Management public management;
    OpenReleases public releasesMaster;
    OpenReleasesFactory public openReleasesFactory;
    CatalogFactory public catalogFactory;
    Catalog public catalog;

    ISplitsFactory public splitsFactory = ISplitsFactory(address(0x3));
    address public daoAdmin = address(0xa);
    address public organizationAdmin = address(0xa);
    address public releaseAdmin = address(0x6);
    address catalogBeacon;

    address payable public treasury = payable(address(0x4));
    string name = "DRIP";
    string symbol = "DRIP";

    function setUp() public {
        vm.startPrank(daoAdmin);

        management = new Management();
        registry = new Registry(treasury, 1000);
        registry.setManagement(management);
        registry.setSplitsFactory(splitsFactory);

        catalogBeacon = Upgrades.deployBeacon("Catalog.sol", daoAdmin);
        catalogFactory = new CatalogFactory(registry, catalogBeacon);
        registry.grantRole(registry.CATALOG_REGISTRAR_ROLE(), address(catalogFactory));
        releasesMaster = new OpenReleases();
        openReleasesFactory = new OpenReleasesFactory(registry, address(releasesMaster));
        registry.grantRole(registry.RELEASES_REGISTRAR_ROLE(), address(openReleasesFactory));
        vm.stopPrank();

        vm.startPrank(organizationAdmin);
        membership = new Membership();
        membership.addMember(releaseAdmin);
        catalog = Catalog(catalogFactory.create("DRIP", membership));
        vm.stopPrank();
    }

    function test_constructor() public {
        assertEq(address(openReleasesFactory.registry()), address(registry));
        assertEq(openReleasesFactory.releasesMaster(), address(releasesMaster));
    }

    function test_create() public {
        vm.startPrank(releaseAdmin);

        openReleasesFactory.create(name, symbol, catalog);
        OpenReleases releases = OpenReleases(catalog.getReleasesContract(releaseAdmin));

        assertEq(releases.name(), name);
        assertEq(releases.symbol(), symbol);
        assertTrue(releases.hasRole(releases.DEFAULT_ADMIN_ROLE(), releaseAdmin));

        vm.stopPrank();
    }
}
