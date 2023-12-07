// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Test, console2} from "forge-std/Test.sol";
import {IModaRegistry} from "../src/interfaces/ModaRegistry/IModaRegistry.sol";
import {IMembership} from "../src/interfaces/IMembership.sol";
import {ISplitsFactory} from "../src/interfaces/ISplitsFactory.sol";
import {ModaRegistry} from "../src/ModaRegistry.sol";
import "../src/Management.sol";
import {Membership} from "../test/mocks/MembershipMock.sol";
import {ERC165Mock} from "../test/mocks/ERC165Mock.sol";

contract ModaRegistryTest is Test {
    Membership public membership;
    Management public management;
    ModaRegistry public modaRegistry;

    address public artist = address(0x1);
    address public catalogAddress = address(0x2);
    address payable public treasuryAddress = payable(address(0x5));
    ISplitsFactory public splitsFactory = ISplitsFactory(address(0x3));
    string public catalogName = "The ACME Catalog";
    uint32 _treasuryFee = 1_000;

    event CatalogRegistered(address indexed catalog, address registrar);
    event CatalogUnregistered(address indexed catalog, address registrar);
    event TreasuryFeeChanged(uint32 oldFee, uint32 newFee);
    event TreasuryChanged(address oldTreasury, address newTreasury);

    function setUp() public {
        membership = new Membership();
        management = new Management();
        modaRegistry = new ModaRegistry(treasuryAddress, _treasuryFee, splitsFactory, management);
    }

    // registerCatalog

    function test_registerCatalog() public {
        modaRegistry.registerCatalog(catalogAddress);

        assertTrue(modaRegistry.isRegisteredCatalog(catalogAddress));
    }

    function test_registerCatalog_RevertIf_register_with_zero_address() public {
        vm.expectRevert(ModaRegistry.AddressCannotBeZero.selector);
        modaRegistry.registerCatalog(address(0));
    }

    function test_registerCatalog_RevertIf_catalog_already_registered() public {
        modaRegistry.registerCatalog(catalogAddress);

        vm.expectRevert(ModaRegistry.CatalogAlreadyRegistered.selector);
        modaRegistry.registerCatalog(catalogAddress);
    }

    function test_registerCatalog_RevertIf_registering_registered_catalog() public {
        modaRegistry.registerCatalog(catalogAddress);

        vm.expectRevert(ModaRegistry.CatalogAlreadyRegistered.selector);
        modaRegistry.registerCatalog(catalogAddress);
    }

    function test_registerCatalog_emits_event() public {
        vm.expectEmit(true, true, true, true);
        emit CatalogRegistered(catalogAddress, address(this));
        modaRegistry.registerCatalog(catalogAddress);
    }

    // unregisterCatalog

    function test_unregisterCatalog() public {
        modaRegistry.registerCatalog(catalogAddress);
        assertTrue(modaRegistry.isRegisteredCatalog(catalogAddress));

        modaRegistry.unregisterCatalog(catalogAddress);
        assertFalse(modaRegistry.isRegisteredCatalog(catalogAddress));
    }

    function test_unregisterCatalog_RevertIf_unregister_unregistered_catalog() public {
        vm.expectRevert(ModaRegistry.CatalogIsNotRegistered.selector);
        modaRegistry.unregisterCatalog(catalogAddress);
    }

    function test_unregisterCatalog_emits_event() public {
        modaRegistry.registerCatalog(catalogAddress);
        vm.expectEmit(true, true, true, true);
        emit CatalogUnregistered(catalogAddress, address(this));
        modaRegistry.unregisterCatalog(catalogAddress);
    }

    // getTreasuryInfo

    function test_getTreasury() public {
        (address treasury, uint32 fee, uint32 feeScale) = modaRegistry.getTreasuryInfo();

        assertEq(treasury, treasuryAddress);
        assertEq(fee, _treasuryFee);
        assertEq(feeScale, 10_000);
    }

    // setTreasury

    function test_setTreasury() public {
        address newTreasury = address(0x6);
        modaRegistry.setTreasury(newTreasury);

        (address treasury,,) = modaRegistry.getTreasuryInfo();

        assertEq(treasury, newTreasury);
    }

    function test_setTreasury_RevertIf_setTreasury_with_zero_address() public {
        vm.expectRevert(ModaRegistry.AddressCannotBeZero.selector);
        modaRegistry.setTreasury(address(0));
    }

    function test_setTreasury_emits_event() public {
        address newTreasury = address(0x6);
        vm.expectEmit(true, true, true, true);
        emit TreasuryChanged(treasuryAddress, newTreasury);
        modaRegistry.setTreasury(newTreasury);
    }

    // setTreasuryFee

    function test_setTreasuryFee() public {
        uint32 newTreasuryFee = 500;

        modaRegistry.setTreasuryFee(newTreasuryFee);
        (, uint32 fee,) = modaRegistry.getTreasuryInfo();

        assertEq(fee, newTreasuryFee);
    }

    function test_setTreasuryFee_RevertIf_invalid_amount() public {
        vm.expectRevert("Fee too high");
        modaRegistry.setTreasuryFee(1_001);
    }

    function test_setTreasuryFee_emits_event() public {
        uint32 newTreasuryFee = 500;
        vm.expectEmit(true, true, true, true);
        emit TreasuryFeeChanged(1000, newTreasuryFee);
        modaRegistry.setTreasuryFee(newTreasuryFee);
    }

    // getSplitsFactory

    function test_getSplitsFactory() public {
        ISplitsFactory splits = modaRegistry.getSplitsFactory();

        assertEq(address(splits), address(splitsFactory));
    }

    // setSplitsFactory

    function test_setSplitsFactory() public {
        ISplitsFactory newSplitsFactory = ISplitsFactory(address(0x7));

        modaRegistry.setSplitsFactory(newSplitsFactory);
        ISplitsFactory splitsFactoryAddress = modaRegistry.getSplitsFactory();

        assertEq(address(splitsFactoryAddress), address(newSplitsFactory));
    }

    // getManagement

    function test_getManagement() public {
        IManagement managementAddress = modaRegistry.getManagement();

        assertEq(address(managementAddress), address(management));
    }

    // setManagement

    function test_setManagement() public {
        IManagement newManagement = new Management();
        modaRegistry.setManagement(newManagement);
        address managementAddress = address(modaRegistry.getManagement());

        assertEq(managementAddress, address(newManagement));
    }
}
