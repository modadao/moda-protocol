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

    address public artist = address(0x1);
    address public catalogAddress = address(0x2);
    address public treasuryAddress = address(0x5);
    string public catalogName = "The ACME Catalog";

    function setUp() public {
        membership = new Membership();
        modaRegistry = new ModaRegistry();
        faultyMembership = new FaultyMembershipMock();
    }

    // Membership

    function membershipSetUp() public {
        membership.addMember(artist);
        modaRegistry.registerCatalog(catalogName, catalogAddress, membership);
    }

    function test_isMember() public {
        membershipSetUp();
        bool isMember = modaRegistry.isMember(catalogAddress, artist);
        assertTrue(isMember);
    }

    function test_isNotMember() public {
        membershipSetUp();
        address notMember = address(0x3);
        bool isMember = modaRegistry.isMember(catalogAddress, notMember);
        assertFalse(isMember);
    }

    function test_setCatalogMembership() public {
        membershipSetUp();
        Membership newMembership = new Membership();

        modaRegistry.setCatalogMembership(catalogAddress, newMembership);
        IModaRegistry.Catalog memory catalog = modaRegistry.getCatalogInfo(catalogAddress);

        assertEq(catalog.membership, address(newMembership));
    }

    function test_setCatalogMembership_reverts_with_unsupported_IMembership() public {
        membershipSetUp();
        ERC165Mock erc165 = new ERC165Mock(new bytes4[](0));

        vm.expectRevert(ModaRegistry.IMembershipNotImplemented.selector);
        modaRegistry.setCatalogMembership(catalogAddress, IMembership(address(erc165)));
    }

    // Catalog registration

    function registerCatalogSetUp() public {
        modaRegistry.registerCatalog(catalogName, catalogAddress, membership);
    }

    function test_registerCatalog() public {
        registerCatalogSetUp();

        IModaRegistry.Catalog memory catalog = modaRegistry.getCatalogInfo(catalogAddress);

        assertEq(catalog.name, catalogName);
        assertEq(catalog.membership, address(membership));
    }

    function test_unregisterCatalog() public {
        registerCatalogSetUp();

        modaRegistry.unregisterCatalog(catalogAddress);
        IModaRegistry.Catalog memory catalog = modaRegistry.getCatalogInfo(catalogAddress);

        assertEq(catalog.name, "");
        assertEq(catalog.membership, address(0));
        assertEq(catalog.membership, address(0));
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
        modaRegistry.unregisterCatalog(catalogAddress);

        vm.expectRevert(ModaRegistry.CatalogNotRegistered.selector);
        modaRegistry.unregisterCatalog(catalogAddress);
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
        vm.startPrank(artist);
        modaRegistry.addManagers(artistManagementData.managers);
        vm.stopPrank();
    }

    function test_addManagers() public {
        artistManagementSetUp();

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

    // Artist Management reverts

    function test_addManagersWithDuplicateAddress() public {
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

    function test_setTreasuryFee_reverts_with_invalid_amount() public {
        modaTreasurySetUp();

        vm.expectRevert("Fee too high");
        modaRegistry.setTreasuryFee(1_001);
    }

    //Treasury reverts

    function test_RevertWhen_setTreasuryWithZeroAddress() public {
        vm.expectRevert(ModaRegistry.AddressCannotBeZero.selector);
        modaRegistry.setTreasury(address(0));
    }
}
