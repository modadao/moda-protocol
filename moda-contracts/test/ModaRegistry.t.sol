// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {IModaRegistry} from "../src/interfaces/IModaRegistry.sol";
import {IMembership} from "../src/interfaces/IMembership.sol";
import {ModaRegistry} from "../src/ModaRegistry.sol";
import {Membership} from "../test/mocks/MembershipMock.sol";
import {ERC165Mock} from "../test/mocks/ERC165Mock.sol";

contract ModaRegistryTest is Test {
    Membership public membership;
    ModaRegistry public modaRegistry;

    address public artist = address(0x1);
    address public catalogAddress = address(0x2);
    address public treasuryAddress = address(0x5);
    string public catalogName = "The ACME Catalog";

    struct ArtistManagementData {
        address[] managers;
        address managerOne;
        address managerTwo;
    }

    ArtistManagementData artistManagementData;

    event CatalogMembershipChanged(string name, address indexed membership);
    event CatalogRegistered(string name, address indexed catalog);
    event CatalogUnregistered(string name, address indexed catalog);
    event ManagerAdded(address indexed artist, address indexed manager);
    event ManagerRemoved(address indexed artist, address indexed manager);
    event TreasuryFeeChanged(uint256 oldFee, uint256 newFee);
    event TreasuryChanged(address oldTreasury, address newTreasury);

    function setUp() public {
        membership = new Membership();
        modaRegistry = new ModaRegistry();

    }

    // Catalog registration


    function test_registerCatalog() public {
        modaRegistry.registerCatalog(catalogAddress);

        assertTrue(modaRegistry.isRegisteredCatalog(catalogAddress));

    }

    function test_registerCatalog_emits_event() public {
        vm.expectEmit(true, true, true, true);
        emit CatalogRegistered(catalogName, catalogAddress);

        modaRegistry.registerCatalog(catalogName, catalogAddress, membership);
    }

    function test_unregisterCatalog() public {

        modaRegistry.registerCatalog(catalogAddress);
        assertTrue(modaRegistry.isRegisteredCatalog(catalogAddress));

        modaRegistry.unregisterCatalog(catalogAddress);
        assertFalse(modaRegistry.isRegisteredCatalog(catalogAddress));

    }

    // Catalog reverts

    function test_RevertWhen_register_Catalog_With_Zero_Address() public {
        vm.expectRevert(ModaRegistry.AddressCannotBeZero.selector);
        modaRegistry.registerCatalog(address(0));

    function test_RevertWhen_catalogAlreadyRegistered() public {
        modaRegistry.registerCatalog(catalogAddress);


        vm.expectRevert(ModaRegistry.CatalogAlreadyRegistered.selector);
        modaRegistry.registerCatalog(catalogAddress);
    }

    function test_RevertWhen_unregisterAlreadyUnregisteredCatalog() public {
        vm.expectRevert(ModaRegistry.CatalogIsNotRegistered.selector);
        modaRegistry.unregisterCatalog(catalogAddress);

    }

    // Artist Management

    function artistManagement_setUp() public {
        artistManagementData.managerOne = address(0x3);
        artistManagementData.managerTwo = address(0x4);
        artistManagementData.managers = new address[](2);
        artistManagementData.managers[0] = artistManagementData.managerOne;
        artistManagementData.managers[1] = artistManagementData.managerTwo;
        vm.startPrank(artist);
        modaRegistry.addManagers(artistManagementData.managers);
        vm.stopPrank();
    }

    function test_addManagers() public {
        artistManagement_setUp();

        bool isManagerOne = modaRegistry.isManager(artist, artistManagementData.managerOne);
        bool isManagerTwo = modaRegistry.isManager(artist, artistManagementData.managerTwo);
        uint256 managerCount = modaRegistry.getManagerCount(artist);
        address managerOneAddress = modaRegistry.getManager(artist, 0);
        address managerTwoAddress = modaRegistry.getManager(artist, 1);

        assertTrue(isManagerOne);
        assertTrue(isManagerTwo);
        assertEq(managerCount, 2);
        assertEq(managerOneAddress, artistManagementData.managerOne);
        assertEq(managerTwoAddress, artistManagementData.managerTwo);
    }

    function test_addManagers_emit_event() public {
        vm.expectEmit(true, true, true, true);
        emit ManagerAdded(user, artistManagementData.managerOne);
        emit ManagerAdded(user, artistManagementData.managerTwo);

        artistManagement_setUp();
    }

    function test_removeManagers() public {

        artistManagementSetUp();
        vm.startPrank(artist);
        modaRegistry.removeManagers(artistManagementData.managers);
        vm.stopPrank();
        bool isManagerOne = modaRegistry.isManager(artist, artistManagementData.managerOne);
        bool isManagerTwo = modaRegistry.isManager(artist, artistManagementData.managerTwo);
        assertFalse(isManagerOne);
        assertFalse(isManagerTwo);
        uint256 managerCount = modaRegistry.getManagerCount(artist);

        assertEq(managerCount, 0);
    }

    function test_removeManagers_emits_event() public {
        artistManagement_setUp();
        vm.expectEmit(true, true, true, true);
        emit ManagerRemoved(user, artistManagementData.managerOne);
        emit ManagerRemoved(user, artistManagementData.managerTwo);

        vm.startPrank(user);
        modaRegistry.removeManagers(artistManagementData.managers);
        vm.stopPrank();
    }

    // Artist Management reverts

    function test_addManagers_With_Duplicate_Address() public {
        address[] memory managers = new address[](2);
        managers[0] = address(0x3);
        managers[1] = address(0x3);
        vm.startPrank(artist);
        modaRegistry.addManagers(managers);
        vm.stopPrank();

        uint256 managerCount = modaRegistry.getManagerCount(artist);

        assertEq(managerCount, 1);
    }

    // Treasury

    function modaTreasury_setUp() public {
        modaRegistry.setTreasury(treasuryAddress);
        modaRegistry.setTreasuryFee(1000);
    }

    function test_setTreasuryFee_emits_event() public {
        vm.expectEmit(true, true, true, true);
        emit TreasuryFeeChanged(0, 1000);

        modaRegistry.setTreasuryFee(1000);
    }

    function test_setTreasury_emits_event() public {
        vm.expectEmit(true, true, true, true);
        emit TreasuryChanged(address(0), treasuryAddress);

        modaRegistry.setTreasury(treasuryAddress);
    }

    function test_getTreasury_Info() public {
        modaTreasury_setUp();
        address treasury = modaRegistry.getTreasury();
        uint256 fee = modaRegistry.getTreasuryFee();

        assertEq(treasury, treasuryAddress);
        assertEq(fee, 1000);
    }

    function test_RevertWhen_setTreasuryFee_with_invalid_amount() public {
        modaTreasury_setUp();

        vm.expectRevert("Fee too high");
        modaRegistry.setTreasuryFee(1_001);
    }

    //Treasury reverts

    function test_RevertWhen_setTreasury_With_Zero_Address() public {
        vm.expectRevert(ModaRegistry.AddressCannotBeZero.selector);
        modaRegistry.setTreasury(address(0));
    }
}
