// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2, Vm} from "forge-std/Test.sol";
import "../src/CatalogFactory.sol";
import "../src/Catalog.sol";
import "../src/ModaRegistry.sol";
import "../src/Management.sol";
import "../src/SplitsFactory.sol";
import {IMembership} from "../src/interfaces/IMembership.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";

contract CatalogFactoryTest is Test {
    CatalogFactory public catalogFactory;
    Catalog public catalog;
    ModaRegistry public modaRegistry;
    Management public management;
    SplitsFactory public splitsFactory;

    address catalogBeacon;
    address modaAdmin = address(0xa);
    address payable treasury = payable(address(0x1));
    uint32 treasuryFee = 1000;
    address membership = address(0x3);

    event CatalogCreated(address indexed owner, address indexed catalog, string name);

    function setUp() public {
        management = new Management();
        modaRegistry = new ModaRegistry(treasury, treasuryFee, splitsFactory, management);
        catalogBeacon = Upgrades.deployBeacon("Catalog.sol", modaAdmin);

        catalogFactory = new CatalogFactory(modaRegistry, catalogBeacon);
        modaRegistry.grantRole(keccak256("CATALOG_REGISTRAR_ROLE"), address(catalogFactory));
    }

    function test_create_catalog() public {
        address catalogProxy = catalogFactory.create("name", IMembership(membership));
        assertNotEq(catalogProxy, address(0x0));
    }

    function test_create_catalog_emits_event() public {
        vm.recordLogs();
        address catalogProxyAddress = catalogFactory.create("name", IMembership(membership));
        Vm.Log[] memory logs = vm.getRecordedLogs();

        console2.log(logs.length);

        bytes32 owner = logs[4].topics[1];
        bytes32 catalogProxy = logs[4].topics[2];
        string memory name = abi.decode(logs[4].data, (string));

        assertEq(owner, bytes32(uint256(uint160(address(this)))));
        assertEq(catalogProxy, bytes32(uint256(uint160(catalogProxyAddress))));
        assertEq(name, "name");
    }
}
