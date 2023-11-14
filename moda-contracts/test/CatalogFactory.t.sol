// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";
import {IBeacon} from "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";
import {CatalogFactory} from "../src/CatalogFactory.sol";
import "../src/Catalog.sol";

contract CatalogFactoryTest is Test {
    CatalogFactory factory;

    address public beacon;
    address public modaAdmin = address(0x4);

    function setUp() public {
        beacon = Upgrades.deployBeacon("Catalog.sol", modaAdmin);
        factory = new CatalogFactory(beacon);
    }

    function test_deployment() public {
        assertEq(factory.catalogBeacon(), beacon);
    }

    function test_deployCatalog() public {
        string memory catalogName = "Test";
        string memory chainId = "80001";
        string memory catalogVersion = "1";
        address modaRegistry = address(0x0);
        address splitsFactory = address(0x1);
        address modaBeneficiary = address(0x2);

        factory.deployCatalog(
            catalogName, chainId, catalogVersion, modaRegistry, splitsFactory, modaBeneficiary
        );

        address catalogAddress = factory.catalogs(0);
        (string memory name_, string memory chainId_, string memory version_) =
            ICatalog(catalogAddress).getCatalogInfo();
        assertEq(name_, catalogName);
        assertEq(chainId_, chainId);
        assertEq(version_, catalogVersion);
    }
}
