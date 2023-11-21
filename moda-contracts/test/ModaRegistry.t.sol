// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {IModaRegistry} from "../src/interfaces/IModaRegistry.sol";
import {IMembership} from "../src/interfaces/IMembership.sol";
import {ModaRegistry} from "../src/ModaRegistry.sol";
import {Membership} from "../test/mocks/MembershipMock.sol";
import {ERC165Mock} from "../test/mocks/ERC165Mock.sol";
import {FaultyMembershipMock} from "../test/mocks/FaultyMembershipMock.sol";

contract ModaRegistryTest is Test {
    Membership public membership;
    FaultyMembershipMock public faultyMembership;
    ModaRegistry public modaRegistry;

    address public user = address(0x1);
    address public catalogAddress = address(0x2);
    address public treasuryAddress = address(0x5);

    string public catalogName = "Drop";
    uint256 public dropIndex = 0;

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
        faultyMembership = new FaultyMembershipMock();
    }

    // Membership

    function membership_setUp() public {
        membership.addMember(user);
        modaRegistry.registerCatalog(catalogName, catalogAddress, membership);
    }

    function test_isMember() public {
        membership_setUp();
        bool isMember = modaRegistry.isMember(dropIndex, user);

        assertTrue(isMember);
    }

    function test_isMember_false() public {
        membership_setUp();
        address notMember = address(0x3);
        bool isMember = modaRegistry.isMember(dropIndex, notMember);

        assertFalse(isMember);
    }

    function test_setCatalogMembership() public {
        membership_setUp();
        Membership newMembership = new Membership();

        modaRegistry.setCatalogMembership(dropIndex, newMembership);
        IModaRegistry.Catalog memory catalog = modaRegistry.getCatalogInfo(dropIndex);

        assertEq(catalog.membership, address(newMembership));
    }

    function test_setCatalogMembership_emits_event() public {
        membership_setUp();
        Membership newMembership = new Membership();
        vm.expectEmit(true, true, true, true);
        emit CatalogMembershipChanged(catalogName, address(newMembership));

        modaRegistry.setCatalogMembership(dropIndex, newMembership);
    }

    function test_RevertWhen_setCatalogMembership_with_unsupported_IMembership() public {
        membership_setUp();
        ERC165Mock erc165 = new ERC165Mock(new bytes4[](0));

        vm.expectRevert(ModaRegistry.ContractMustSupportIMembership.selector);
        modaRegistry.setCatalogMembership(dropIndex, IMembership(address(erc165)));
    }

    // Catalog registration

    function registerCatalog_setUp() public {
        modaRegistry.registerCatalog(catalogName, catalogAddress, membership);
    }

    function test_registerCatalog() public {
        registerCatalog_setUp();
        IModaRegistry.Catalog memory catalog = modaRegistry.getCatalogInfo(dropIndex);

        assertEq(catalog.name, catalogName);
        assertEq(catalog.catalog, catalogAddress);
        assertEq(catalog.membership, address(membership));
    }

    function test_registerCatalog_emits_event() public {
        vm.expectEmit(true, true, true, true);
        emit CatalogRegistered(catalogName, catalogAddress);

        modaRegistry.registerCatalog(catalogName, catalogAddress, membership);
    }

    function test_unregisterCatalog() public {
        registerCatalog_setUp();
        modaRegistry.unregisterCatalog(dropIndex);
        IModaRegistry.Catalog memory catalog = modaRegistry.getCatalogInfo(dropIndex);

        assertEq(catalog.name, "");
        assertEq(catalog.catalog, address(0));
        assertEq(catalog.membership, address(0));
    }

    function test_unregisterCatalog_emits_event() public {
        registerCatalog_setUp();
        vm.expectEmit(true, true, true, true);
        emit CatalogUnregistered(catalogName, catalogAddress);

        modaRegistry.unregisterCatalog(dropIndex);
    }

    function test_getCatalogCount() public {
        registerCatalog_setUp();
        uint256 count = modaRegistry.getCatalogCount();

        assertEq(count, 1);
    }

    // Catalog reverts

    function test_RevertWhen_register_Catalog_With_Zero_Address() public {
        vm.expectRevert(ModaRegistry.AddressCannotBeZero.selector);
        modaRegistry.registerCatalog(catalogName, address(0), membership);
    }

    function test_RevertWhen_catalog_Already_Registered() public {
        registerCatalog_setUp();
        vm.expectRevert(ModaRegistry.CatalogAlreadyRegistered.selector);
        modaRegistry.registerCatalog(catalogName, catalogAddress, membership);
    }

    function test_RevertWhen_unregister_Already_Unregistered_Catalog() public {
        registerCatalog_setUp();
        modaRegistry.unregisterCatalog(dropIndex);
        vm.expectRevert(ModaRegistry.CatalogNotRegistered.selector);
        modaRegistry.unregisterCatalog(dropIndex);
    }

    // Artist Management

    function artistManagement_setUp() public {
        artistManagementData.managerOne = address(0x3);
        artistManagementData.managerTwo = address(0x4);
        artistManagementData.managers = new address[](2);
        artistManagementData.managers[0] = artistManagementData.managerOne;
        artistManagementData.managers[1] = artistManagementData.managerTwo;
        vm.startPrank(user);
        modaRegistry.addManagers(artistManagementData.managers);
        vm.stopPrank();
    }

    function test_addManagers() public {
        artistManagement_setUp();

        bool isManagerOne = modaRegistry.isManager(user, artistManagementData.managerOne);
        bool isManagerTwo = modaRegistry.isManager(user, artistManagementData.managerTwo);
        uint256 managerCount = modaRegistry.getManagerCount(user);
        address managerOneAddress = modaRegistry.getManager(user, 0);
        address managerTwoAddress = modaRegistry.getManager(user, 1);

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
        artistManagement_setUp();
        vm.startPrank(user);
        modaRegistry.removeManagers(artistManagementData.managers);
        vm.stopPrank();
        bool isManagerOne = modaRegistry.isManager(user, artistManagementData.managerOne);
        bool isManagerTwo = modaRegistry.isManager(user, artistManagementData.managerTwo);
        uint256 managerCount = modaRegistry.getManagerCount(user);

        assertFalse(isManagerOne);
        assertFalse(isManagerTwo);
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
        vm.startPrank(user);
        modaRegistry.addManagers(managers);
        vm.stopPrank();
        uint256 managerCount = modaRegistry.getManagerCount(user);

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
