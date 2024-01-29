// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Test, console2} from "forge-std/Test.sol";
import {IRegistry} from "../src/interfaces/Registry/IRegistry.sol";
import {IMembership} from "../src/interfaces/IMembership.sol";
import {ISplitsFactory} from "../src/interfaces/ISplitsFactory.sol";
import {Registry} from "../src/Registry.sol";
import "../src/Management.sol";
import {Membership} from "../test/mocks/MembershipMock.sol";
import {ERC165Mock} from "../test/mocks/ERC165Mock.sol";
import {ICatalog} from "../src/interfaces/Catalog/ICatalog.sol";

contract RegistryTest is Test {
    Membership public membership;
    Management public management;
    Registry public registry;

    address public catalogRegistrar = address(0x8);
    address public artist = address(0x1);
    ICatalog public catalogAddress = ICatalog(address(0x2));
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
        registry = new Registry(treasuryAddress, _treasuryFee);
        registry.setManagement(management);
        registry.setSplitsFactory(splitsFactory);

        registry.grantRole(keccak256("CATALOG_REGISTRAR_ROLE"), catalogRegistrar);
    }

    // registerCatalog

    function test_registerCatalog() public {
        vm.startPrank(catalogRegistrar);
        registry.registerCatalog(catalogAddress);
        vm.stopPrank();

        assertTrue(registry.isRegisteredCatalog(address(catalogAddress)));
    }

    function test_registerCatalog_RevertIf_catalog_already_registered() public {
        vm.startPrank(catalogRegistrar);
        registry.registerCatalog(catalogAddress);
        vm.stopPrank();

        vm.expectRevert(Registry.CatalogAlreadyRegistered.selector);

        vm.startPrank(catalogRegistrar);
        registry.registerCatalog(catalogAddress);
        vm.stopPrank();
    }

    function test_registerCatalog_RevertIf_registering_registered_catalog() public {
        vm.startPrank(catalogRegistrar);
        registry.registerCatalog(catalogAddress);
        vm.stopPrank();

        vm.expectRevert(Registry.CatalogAlreadyRegistered.selector);

        vm.startPrank(catalogRegistrar);
        registry.registerCatalog(catalogAddress);
        vm.stopPrank();
    }

    function test_registerCatalog_emits_event() public {
        vm.expectEmit(true, true, true, true);
        emit CatalogRegistered(address(catalogAddress), catalogRegistrar);

        vm.startPrank(catalogRegistrar);
        registry.registerCatalog(catalogAddress);
        vm.stopPrank();
    }

    // unregisterCatalog

    function test_unregisterCatalog() public {
        vm.startPrank(catalogRegistrar);
        registry.registerCatalog(catalogAddress);
        vm.stopPrank();

        assertTrue(registry.isRegisteredCatalog(address(catalogAddress)));

        registry.unregisterCatalog(address(catalogAddress));
        assertFalse(registry.isRegisteredCatalog(address(catalogAddress)));
    }

    function test_unregisterCatalog_RevertIf_unregister_unregistered_catalog() public {
        vm.expectRevert(Registry.CatalogIsNotRegistered.selector);
        registry.unregisterCatalog(address(catalogAddress));
    }

    function test_unregisterCatalog_emits_event() public {
        vm.startPrank(catalogRegistrar);
        registry.registerCatalog(catalogAddress);
        vm.stopPrank();

        vm.expectEmit(true, true, true, true);
        emit CatalogUnregistered(address(catalogAddress), address(this));
        registry.unregisterCatalog(address(catalogAddress));
    }

    // getTreasuryInfo

    function test_getTreasury() public {
        (address treasury, uint32 fee, uint32 feeScale) = registry.getTreasuryInfo();

        assertEq(treasury, treasuryAddress);
        assertEq(fee, _treasuryFee);
        assertEq(feeScale, 10_000);
    }

    // setTreasury

    function test_setTreasury() public {
        address newTreasury = address(0x6);
        registry.setTreasury(newTreasury);

        (address treasury,,) = registry.getTreasuryInfo();

        assertEq(treasury, newTreasury);
    }

    function test_setTreasury_RevertIf_setTreasury_with_zero_address() public {
        vm.expectRevert(Registry.AddressCannotBeZero.selector);
        registry.setTreasury(address(0));
    }

    function test_setTreasury_emits_event() public {
        address newTreasury = address(0x6);
        vm.expectEmit(true, true, true, true);
        emit TreasuryChanged(treasuryAddress, newTreasury);
        registry.setTreasury(newTreasury);
    }

    // setTreasuryFee

    function test_setTreasuryFee() public {
        uint32 newTreasuryFee = 500;

        registry.setTreasuryFee(newTreasuryFee);
        (, uint32 fee,) = registry.getTreasuryInfo();

        assertEq(fee, newTreasuryFee);
    }

    function test_setTreasuryFee_RevertIf_invalid_amount() public {
        vm.expectRevert("Fee too high");
        registry.setTreasuryFee(1_001);
    }

    function test_setTreasuryFee_emits_event() public {
        uint32 newTreasuryFee = 500;
        vm.expectEmit(true, true, true, true);
        emit TreasuryFeeChanged(1000, newTreasuryFee);
        registry.setTreasuryFee(newTreasuryFee);
    }

    // getSplitsFactory

    function test_getSplitsFactory() public {
        ISplitsFactory splits = registry.getSplitsFactory();

        assertEq(address(splits), address(splitsFactory));
    }

    // setSplitsFactory

    function test_setSplitsFactory() public {
        ISplitsFactory newSplitsFactory = ISplitsFactory(address(0x7));

        registry.setSplitsFactory(newSplitsFactory);
        ISplitsFactory splitsFactoryAddress = registry.getSplitsFactory();

        assertEq(address(splitsFactoryAddress), address(newSplitsFactory));
    }

    // getManagement

    function test_getManagement() public {
        IManagement managementAddress = registry.getManagement();

        assertEq(address(managementAddress), address(management));
    }

    // setManagement

    function test_setManagement() public {
        IManagement newManagement = new Management();
        registry.setManagement(newManagement);
        address managementAddress = address(registry.getManagement());

        assertEq(managementAddress, address(newManagement));
    }
}
