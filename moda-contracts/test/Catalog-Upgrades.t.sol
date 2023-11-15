// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.21;

import {Test, console2} from "forge-std/Test.sol";
import "../src/Catalog.sol";
import "../test/mocks/CatalogV2Mock.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";
import {IBeacon} from "@openzeppelin/contracts/proxy/beacon/IBeacon.sol";

contract CatalogUpgradesTest is Test {
    address public catalogImplementation;
    address public catalogImplementationV2;
    address public catalogProxy;
    address public beacon;

    string public catalogName = "Test";
    uint256 public chainId = 0;
    string public catalogVersion = "0";
    address public modaRegistry = address(0x0);
    address public splitsFactory = address(0x1);
    address public modaBeneficiary = address(0x2);
    address public catalogDeployer = address(0x3);

    address modaAdmin = address(0x4);

    function setUp() public {
        beacon = Upgrades.deployBeacon("Catalog.sol", modaAdmin);
        catalogImplementation = IBeacon(beacon).implementation();

        catalogProxy = Upgrades.deployBeaconProxy(
            beacon, abi.encodeCall(Catalog.initialize, (catalogName, catalogVersion, modaRegistry))
        );
    }

    function test_catalogProxy() public {
        vm.chainId(chainId);
        (string memory name_, string memory version_) = IVersionInfo(catalogProxy).versionInfo();
        assertEq(name_, catalogName);
        assertEq(version_, catalogVersion);
    }

    function test_beacon() public {
        address proxyBeaconAddress = Upgrades.getBeaconAddress(catalogProxy);
        assertEq(proxyBeaconAddress, beacon);
    }

    function upgradingBeaconWithCatalogV2Setup() public {
        vm.startPrank(modaAdmin);
        Upgrades.upgradeBeacon(beacon, "CatalogV2Mock.sol");
        vm.stopPrank();
    }

    function test_implementationAddressUpdated() public {
        upgradingBeaconWithCatalogV2Setup();
        catalogImplementationV2 = IBeacon(beacon).implementation();
        assertFalse(catalogImplementation == catalogImplementationV2);
    }

    function test_proxyCanCallUpdatedCatalog() public {
        upgradingBeaconWithCatalogV2Setup();
        CatalogV2Mock(catalogProxy).setTestingUpgradeVariable("upgradeTest");
        string memory upgradeTest = CatalogV2Mock(catalogProxy).getTestingUpgradeVariable();
        assertEq(upgradeTest, "upgradeTest");
    }
}
