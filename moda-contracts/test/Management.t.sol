// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import "../src/Management.sol";

contract ManagementTest is Test {
    Management public management;

    address public artist = address(0x1);
    address[] managers;
    address managerOne = address(0x3);
    address managerTwo = address(0x4);

    function setUp() public {
        management = new Management();
        managers = new address[](2);
        managers[0] = managerOne;
        managers[1] = managerTwo;
    }

    function addManagers_setUp() public {
        vm.startPrank(artist);
        management.addManagers(managers);
        vm.stopPrank();
    }

    function test_addManagers() public {
        addManagers_setUp();
        bool isManagerOne = management.isManager(artist, managerOne);
        bool isManagerTwo = management.isManager(artist, managerTwo);
        uint256 managerCount = management.getManagerCount(artist);
        address managerOneAddress = management.getManager(artist, 0);
        address managerTwoAddress = management.getManager(artist, 1);

        assertTrue(isManagerOne);
        assertTrue(isManagerTwo);
        assertEq(managerCount, 2);
        assertEq(managerOneAddress, managerOne);
        assertEq(managerTwoAddress, managerTwo);
    }

    function test_removeManagers() public {
        addManagers_setUp();
        vm.startPrank(artist);
        management.removeManagers(managers);
        vm.stopPrank();
        bool isManagerOne = management.isManager(artist, managerOne);
        bool isManagerTwo = management.isManager(artist, managerTwo);
        uint256 managerCount = management.getManagerCount(artist);

        assertFalse(isManagerOne);
        assertFalse(isManagerTwo);
        assertEq(managerCount, 0);
    }

    // reverts

    function test_addManagersWithDuplicateAddress() public {
        address[] memory duplicateManagers = new address[](2);
        duplicateManagers[0] = address(0x3);
        duplicateManagers[1] = address(0x3);
        vm.startPrank(artist);
        management.addManagers(duplicateManagers);
        vm.stopPrank();
        uint256 managerCount = management.getManagerCount(artist);
        assertEq(managerCount, 1);
    }
}
