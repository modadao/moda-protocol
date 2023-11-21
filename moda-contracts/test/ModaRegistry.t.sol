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

    function setUp() public {
        membership = new Membership();
        modaRegistry = new ModaRegistry();
        faultyMembership = new FaultyMembershipMock();
    }

    // Membership

    function membershipSetUp() public {
        membership.addMember(user);
        modaRegistry.registerCatalog(catalogName, catalogAddress, membership);
    }

    function test_isMember() public {
        membershipSetUp();
        bool isMember = modaRegistry.isMember(dropIndex, user);
        assertTrue(isMember);
    }

    function test_isNotMember() public {
        membershipSetUp();
        address notMember = address(0x3);
        bool isMember = modaRegistry.isMember(dropIndex, notMember);
        assertFalse(isMember);
    }

    function test_setCatalogMembership() public {
        membershipSetUp();
        Membership newMembership = new Membership();

        modaRegistry.setCatalogMembership(dropIndex, newMembership);
        IModaRegistry.Catalog memory catalog = modaRegistry.getCatalogInfo(dropIndex);

        assertEq(catalog.membership, address(newMembership));
    }

    function test_setCatalogMembership_reverts_with_unsupported_IMembership() public {
        membershipSetUp();
        ERC165Mock erc165 = new ERC165Mock(new bytes4[](0));

        vm.expectRevert(ModaRegistry.ContractMustSupportIMembership.selector);
        modaRegistry.setCatalogMembership(dropIndex, IMembership(address(erc165)));
    }

    // Catalog registration

    function registerCatalogSetUp() public {
        modaRegistry.registerCatalog(catalogName, catalogAddress, membership);
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

    // Catalog reverts

    function test_RevertWhen_registerCatalogWithZeroAddress() public {
        vm.expectRevert(ModaRegistry.AddressCannotBeZero.selector);
        modaRegistry.registerCatalog(catalogName, address(0), membership);
    }

    function test_RevertWhen_catalogAlreadyRegistered() public {
        registerCatalogSetUp();
        vm.expectRevert(ModaRegistry.CatalogAlreadyRegistered.selector);
        modaRegistry.registerCatalog(catalogName, catalogAddress, membership);
    }

    function test_RevertWhen_unregisterAlreadyUnregisteredCatalog() public {
        registerCatalogSetUp();
        modaRegistry.unregisterCatalog(dropIndex);
        vm.expectRevert(ModaRegistry.CatalogNotRegistered.selector);
        modaRegistry.unregisterCatalog(dropIndex);
    }

    // Artist Management

    struct ArtistManagementData {
        address[] managers;
        address managerOne;
        address managerTwo;
    }

    ArtistManagementData artistManagementData;

    function artistManagementSetUp() public {
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
        artistManagementSetUp();

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

    function test_removeManagers() public {
        artistManagementSetUp();
        vm.startPrank(user);
        modaRegistry.removeManagers(artistManagementData.managers);
        vm.stopPrank();
        bool isManagerOne = modaRegistry.isManager(user, artistManagementData.managerOne);
        bool isManagerTwo = modaRegistry.isManager(user, artistManagementData.managerTwo);
        assertFalse(isManagerOne);
        assertFalse(isManagerTwo);
        uint256 managerCount = modaRegistry.getManagerCount(user);
        assertEq(managerCount, 0);
    }

    // Artist Management reverts

    function test_addManagersWithDuplicateAddress() public {
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

    function modaTreasurySetUp() public {
        modaRegistry.setTreasury(treasuryAddress);
        modaRegistry.setTreasuryFee(1000);
    }

    function test_modaTreasuryInfo() public {
        modaTreasurySetUp();
        address treasury = modaRegistry.getTreasury();
        uint256 fee = modaRegistry.getTreasuryFee();
        assertEq(treasury, treasuryAddress);
        assertEq(fee, 1000);
    }

    //Treasury reverts

    function test_RevertWhen_setTreasuryWithZeroAddress() public {
        vm.expectRevert(ModaRegistry.AddressCannotBeZero.selector);
        modaRegistry.setTreasury(address(0));
    }
}
