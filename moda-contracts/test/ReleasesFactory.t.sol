// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import "../src/ReleasesFactory.sol";
import "../src/Releases.sol";
import "../src/Registry.sol";
import "../src/CatalogFactory.sol";
import "../src/Catalog.sol";
import "../src/Management.sol";
import "./mocks/MembershipMock.sol";
import {ISplitsFactory} from "../src/interfaces/ISplitsFactory.sol";

import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";

contract ReleasesFactoryTest is Test {
    Registry public registry;
    Membership public membership;
    Management public management;
    Releases public releasesMaster;
    ReleasesFactory public releasesFactory;
    CatalogFactory public catalogFactory;
    Catalog public catalog;

    ISplitsFactory public splitsFactory = ISplitsFactory(address(0x3));
    address public admin = address(0xa);
    address catalogBeacon;

    address payable public treasury = payable(address(0x4));
    string name = "DRIP";
    string symbol = "DRIP";

    address public releasesOwner = address(0x5);
    address public releaseAdmin = address(0x6);

    function setUp() public {
        management = new Management();
        registry = new Registry(treasury, 1000);
        registry.setManagement(management);
        registry.setSplitsFactory(splitsFactory);

        catalogBeacon = Upgrades.deployBeacon("Catalog.sol", admin);
        catalogFactory = new CatalogFactory(registry, catalogBeacon);
        registry.grantRole(registry.CATALOG_REGISTRAR_ROLE(), address(catalogFactory));

        catalog = Catalog(catalogFactory.create(name, IMembership(membership)));

        releasesMaster = new Releases();
        releasesFactory = new ReleasesFactory(registry, address(releasesMaster));

        registry.grantRole(keccak256("RELEASES_REGISTRAR_ROLE"), address(releasesFactory));
    }

    function test_constructor() public {
        assertEq(address(releasesFactory.registry()), address(registry));
        assertEq(releasesFactory.releasesMaster(), address(releasesMaster));
    }

    function test_create() public {
        address[] memory releaseAdmins = new address[](1);
        releaseAdmins[0] = releaseAdmin;
        releasesFactory.create(releaseAdmins, name, symbol, catalog);
        address releases = catalog.getReleasesContract(address(this));

        assertEq(Releases(releases).name(), name);
        assertEq(Releases(releases).symbol(), symbol);
    }
}
