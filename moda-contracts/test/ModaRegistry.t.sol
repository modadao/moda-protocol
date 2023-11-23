// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {IModaRegistry} from "../src/interfaces/IModaRegistry.sol";
import {IMembership} from "../src/interfaces/IMembership.sol";
import {ModaRegistry} from "../src/ModaRegistry.sol";
import {Management} from "../src/Management.sol";
import {Membership} from "../test/mocks/MembershipMock.sol";
import {ERC165Mock} from "../test/mocks/ERC165Mock.sol";

contract ModaRegistryTest is Test {
    Membership public membership;
    Management public management;
    ModaRegistry public modaRegistry;

    address public artist = address(0x1);
    address public catalogAddress = address(0x2);
    address payable public treasuryAddress = payable(address(0x5));
    address public splitsFactory = address(0x3);
    string public catalogName = "The ACME Catalog";

    function setUp() public {
        membership = new Membership();
        management = new Management();
        modaRegistry = new ModaRegistry(treasuryAddress, 1000, splitsFactory, management);
    }

    // Catalog registration

    function test_registerCatalog() public {
        modaRegistry.registerCatalog(catalogAddress);

        assertTrue(modaRegistry.isRegisteredCatalog(catalogAddress));
    }

    function test_unregisterCatalog() public {
        modaRegistry.registerCatalog(catalogAddress);
        assertTrue(modaRegistry.isRegisteredCatalog(catalogAddress));

        modaRegistry.unregisterCatalog(catalogAddress);
        assertFalse(modaRegistry.isRegisteredCatalog(catalogAddress));
    }

    // Catalog reverts

    function test_RevertWhen_registerCatalogWithZeroAddress() public {
        vm.expectRevert(ModaRegistry.AddressCannotBeZero.selector);
        modaRegistry.registerCatalog(address(0));
    }

    function test_RevertWhen_catalogAlreadyRegistered() public {
        modaRegistry.registerCatalog(catalogAddress);

        vm.expectRevert(ModaRegistry.CatalogAlreadyRegistered.selector);
        modaRegistry.registerCatalog(catalogAddress);
    }

    function test_RevertWhen_unregisterAlreadyUnregisteredCatalog() public {
        vm.expectRevert(ModaRegistry.CatalogIsNotRegistered.selector);
        modaRegistry.unregisterCatalog(catalogAddress);
    }

    // Treasury

    function test_modaTreasuryInfo() public {
        address treasury = modaRegistry.getTreasury();
        uint256 fee = modaRegistry.getTreasuryFee();
        assertEq(treasury, treasuryAddress);
        assertEq(fee, 1000);
    }

    function test_setTreasuryFee_reverts_with_invalid_amount() public {
        vm.expectRevert("Fee too high");
        modaRegistry.setTreasuryFee(1_001);
    }

    //Treasury reverts

    function test_RevertWhen_setTreasuryWithZeroAddress() public {
        vm.expectRevert(ModaRegistry.AddressCannotBeZero.selector);
        modaRegistry.setTreasury(address(0));
    }
}
