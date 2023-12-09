// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import "../src/ReleasesFactory.sol";
import "../src/Releases.sol";
import "../src/ModaRegistry.sol";
import "../src/CatalogFactory.sol";
import "../src/Catalog.sol";
import "../src/Management.sol";
import "./mocks/MembershipMock.sol";
import {ISplitsFactory} from "../src/interfaces/ISplitsFactory.sol";

import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";

contract ReleasesFactoryTest is Test {
    ModaRegistry public modaRegistry;
    Membership public membership;
    Management public management;
    Releases public releasesMaster;
    ReleasesFactory public releasesFactory;
    CatalogFactory public catalogFactory;
    Catalog public catalog;

    ISplitsFactory public splitsFactory = ISplitsFactory(address(0x3));
    address public modaAdmin = address(0xa);
    address catalogBeacon;

    address payable public treasury = payable(address(0x4));
    string name = "name";
    string symbol = "symbol";

    address public releasesOwner = address(0x5);
    address public releaseAdmin = address(0x6);

    function setUp() public {
        management = new Management();
        modaRegistry = new ModaRegistry(treasury, 1000);
        modaRegistry.setManagement(management);
        modaRegistry.setSplitsFactory(splitsFactory);

        catalogBeacon = Upgrades.deployBeacon("Catalog.sol", modaAdmin);
        catalogFactory = new CatalogFactory(modaRegistry, catalogBeacon);
        modaRegistry.grantRole(keccak256("CATALOG_REGISTRAR_ROLE"), address(catalogFactory));

        catalog = Catalog(catalogFactory.create("name", IMembership(membership)));

        releasesMaster = new Releases();
        releasesFactory = new ReleasesFactory(address(modaRegistry), address(releasesMaster));
        modaRegistry.grantRole(keccak256("RELEASES_REGISTRAR_ROLE"), address(releasesFactory));
    }

    function test_constructor() public {
        assertEq(releasesFactory.modaRegistry(), address(modaRegistry));
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
