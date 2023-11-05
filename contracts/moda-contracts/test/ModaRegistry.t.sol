// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {IModaRegistry} from "../src/interfaces/IModaRegistry.sol";
import {ModaRegistry} from "../src/ModaRegistry.sol";
import {Membership} from "../src/Membership.sol";

contract ModaRegistryTest is Test {
    Membership public membership;
    ModaRegistry public modaRegistry;

    address public user = address(0x1);
    address public catalogAddress = address(0x2);
    address public managerOne = address(0x3);
    address public managerTwo = address(0x4);
    address public treasuryAddress = address(0x5);

    string public catalogName = "Drop";
    uint256 public dropIndex = 0;

    address[] public managers = new address[](2);

    function setUp() public {
        membership = new Membership();
        modaRegistry = new ModaRegistry();
    }

    /// Membership

    function membershipSetUp() public {
        membership.addMember(user);
        modaRegistry.registerCatalog(catalogName, catalogAddress, address(membership));
    }

    function test_isMember() public {
        membershipSetUp();
        bool isMember = modaRegistry.isMember(dropIndex, user);
        assertTrue(isMember);
    }

    function test_setCatalogMembership() public {
        membershipSetUp();
        IModaRegistry.Catalog memory catalog = modaRegistry.getCatalogInfo(dropIndex);
        assertEq(catalog.membership, address(membership));
    }

    /// Catalog registration

    function registerCatalogSetUp() public {
        modaRegistry.registerCatalog(catalogName, catalogAddress, address(membership));
    }

    function test_registerCatalog() public {
        registerCatalogSetUp();
        IModaRegistry.Catalog memory catalog = modaRegistry.getCatalogInfo(dropIndex);
        assertEq(catalog.name, catalogName);
        assertEq(catalog.catalog, catalogAddress);
        assertEq(catalog.membership, address(membership));
    }

    function test_unregisterCatalog() public {
        registerCatalogSetUp();
        modaRegistry.unregisterCatalog(dropIndex);
        IModaRegistry.Catalog memory catalog = modaRegistry.getCatalogInfo(dropIndex);
        assertEq(catalog.name, "");
        assertEq(catalog.catalog, address(0));
        assertEq(catalog.membership, address(0));
    }

    function test_catalogCount() public {
        registerCatalogSetUp();
        uint256 count = modaRegistry.getCatalogCount();
        assertEq(count, 1);
    }

    /// Artist Management

    function artistManagementSetUp() public {
        managers[0] = managerOne;
        managers[1] = managerTwo;
        vm.startPrank(user);
        modaRegistry.addManagers(managers);
        vm.stopPrank();
    }

    function test_addManagers() public {
        artistManagementSetUp();
        bool isManagerOne = modaRegistry.isManager(user, managerOne);
        bool isManagerTwo = modaRegistry.isManager(user, managerTwo);
        assertTrue(isManagerOne);
        assertTrue(isManagerTwo);
        uint256 managerCount = modaRegistry.getManagerCount(user);
        assertEq(managerCount, 2);
        address managerOneAddress = modaRegistry.getManager(user, 0);
        address managerTwoAddress = modaRegistry.getManager(user, 1);
        assertEq(managerOneAddress, managerOne);
        assertEq(managerTwoAddress, managerTwo);
    }

    function test_removeManagers() public {
        artistManagementSetUp();
        vm.startPrank(user);
        modaRegistry.removeManagers(managers);
        vm.stopPrank();
        bool isManagerOne = modaRegistry.isManager(user, managerOne);
        bool isManagerTwo = modaRegistry.isManager(user, managerTwo);
        assertFalse(isManagerOne);
        assertFalse(isManagerTwo);
        uint256 managerCount = modaRegistry.getManagerCount(user);
        assertEq(managerCount, 0);
    }

    /// Treasury

    function modaTreasurySetUp() public {
        modaRegistry.setTreasury(treasuryAddress);
        modaRegistry.setTreasuryFee(1000);
    }

    function test_modaTreasuryInfo() public {
        modaTreasurySetUp();
        (address treasury, uint256 fee) = modaRegistry.getTreasury();
        assertEq(treasury, treasuryAddress);
        assertEq(fee, 1000);
    }
}
