// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.21;

import {Test, console2} from "forge-std/Test.sol";
import "../src/Catalog.sol";
import "../src/interfaces/IMembership.sol";
import "../src/interfaces/ISplitsFactory.sol";
import "../test/mocks/CatalogV2Mock.sol";
import "../src/Registry.sol";
import "../src/Management.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";
import {IBeacon} from "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";

contract CatalogUpgradesTest is Test {
    Management public management;
    Registry public registry;
    address public catalogImplementation;
    address public catalogImplementationV2;
    address public catalogProxy;
    address public beacon;

    string public catalogName = "Test";
    uint256 public chainId = 0;
    ISplitsFactory public splitsFactory = ISplitsFactory(address(0x1));
    address payable public treasuryAddress = payable(address(0x2));
    address public catalogDeployer = address(0x3);
    IMembership public membership = IMembership(address(0x4));

    address admin = address(0x4);

    function setUp() public {
        registry = new Registry(treasuryAddress, 1000);
        registry.setManagement(management);
        registry.setSplitsFactory(splitsFactory);

        beacon = Upgrades.deployBeacon("Catalog.sol", admin);
        catalogImplementation = IBeacon(beacon).implementation();

        catalogProxy = Upgrades.deployBeaconProxy(
            beacon, abi.encodeCall(Catalog.initialize, (admin, catalogName, registry, membership))
        );
    }

    function test_beacon() public {
        address proxyBeaconAddress = Upgrades.getBeaconAddress(catalogProxy);
        assertEq(proxyBeaconAddress, beacon);
    }

    function upgrade_beacon_with_CatalogV2_setUp() public {
        vm.startPrank(admin);
        Upgrades.upgradeBeacon(beacon, "CatalogV2Mock.sol");
        vm.stopPrank();
    }

    function test_implementation_address_updated() public {
        upgrade_beacon_with_CatalogV2_setUp();
        catalogImplementationV2 = IBeacon(beacon).implementation();
        assertFalse(catalogImplementation == catalogImplementationV2);
    }

    function test_proxy_can_call_updated_Catalog() public {
        upgrade_beacon_with_CatalogV2_setUp();
        CatalogV2Mock(catalogProxy).setTestingUpgradeVariable("upgradeTest");
        string memory upgradeTest = CatalogV2Mock(catalogProxy).getTestingUpgradeVariable();
        assertEq(upgradeTest, "upgradeTest");
    }
}
