// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Test, console2} from "forge-std/Test.sol";
import "../src/ModaRegistry.sol";
import "../src/CatalogFactory.sol";
import "../src/Catalog.sol";
import "../src/Releases.sol";
import "../src/Management.sol";
import "../test/mocks/MembershipMock.sol";
import "../test/mocks/SplitsFactoryMock.sol";
import "../src/ReleasesFactory.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";
import "../src/Marketplace.sol";
import "./mocks/ERC20TokenMock.sol";
import {IAccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract MarketplaceTest is Test {
    Membership public membership;
    Management public management;
    ModaRegistry public modaRegistry;
    SplitsFactoryMock public splitsFactory;
    CatalogFactory public catalogFactory;
    Catalog public catalog;
    Releases public releasesMaster;
    ReleasesFactory public releasesFactory;
    Releases public releases;
    Marketplace public marketplace;
    ERC20TokenMock public token;

    address catalogBeacon;
    address modaAdmin = address(0xa);
    string public catalogName = "TestCatalog";

    string name = "TestReleases";
    string symbol = "TEST";
    address admin = address(0x6);
    address releaseAdmin = address(0x1);
    address[] releaseAdmins = [releaseAdmin];
    address releaseOwner = address(0x2);
    address payable treasury = payable(address(0x5));

    address buyer = address(0x7);

    address payable saleBeneficiary = payable(address(0x8));
    uint256 saleAmountTotal = 100;
    uint256 salePricePerToken = 20;
    uint256 saleStartAt = block.timestamp;
    uint256 saleEndAt = 0;
    uint256 saleMaxCountPerWallet = 10;

    event SaleCreated(address indexed releaseOwner, uint256 indexed saleId);

    event Purchase(
        address indexed releases,
        uint256 indexed tokenId,
        address indexed buyer,
        address releaseOwner,
        uint256 saleId,
        uint256 tokenAmount,
        uint256 timestamp
    );
    event Withdraw(address indexed recipient, uint256 indexed saleId, uint256 tokenAmount);

    function setUp() public {
        token = new ERC20TokenMock();
        management = new Management();
        membership = new Membership();
        splitsFactory = new SplitsFactoryMock(address(0x3));
        modaRegistry = new ModaRegistry(treasury, 1000);
        modaRegistry.setManagement(management);
        modaRegistry.setSplitsFactory(splitsFactory);

        catalogBeacon = Upgrades.deployBeacon("Catalog.sol", modaAdmin);
        catalogFactory = new CatalogFactory(modaRegistry, catalogBeacon);
        modaRegistry.grantRole(keccak256("CATALOG_REGISTRAR_ROLE"), address(catalogFactory));

        catalog = Catalog(catalogFactory.create(catalogName, IMembership(membership)));

        membership.addMember(releaseAdmin);
        releasesMaster = new Releases();
        releasesFactory = new ReleasesFactory(address(modaRegistry), address(releasesMaster));
        modaRegistry.grantRole(keccak256("RELEASES_REGISTRAR_ROLE"), address(releasesFactory));

        vm.startPrank(admin);
        releasesFactory.create(releaseAdmins, name, symbol, catalog);
        vm.stopPrank();

        releases = Releases(catalog.getReleasesContract(admin));
        marketplace = new Marketplace(treasury, 1000, token, catalog);

        vm.startPrank(buyer);
        token.mint(buyer, 1000);
        token.approve(address(marketplace), 1000);
        vm.stopPrank();
    }

    // Constructor

    function test_constructor() public {
        assertEq(marketplace.treasury(), treasury);
        assertEq(marketplace.treasuryFee(), 1000);
        assertEq(marketplace.hasRole(0x00, address(this)), true);
    }

    // Create Sale

    function createSale_setUp() public {
        vm.startPrank(releaseAdmin);

        catalog.registerTrack(releaseAdmin, address(0x9), "registrationHash");

        catalog.setReleasesApprovalForAll(releaseAdmin, address(releases), true);

        string memory trackId = catalog.getTrackId("registrationHash");
        string[] memory trackIds = new string[](1);
        trackIds[0] = trackId;
        releases.create(releaseAdmin, 1000, "uri", 100, trackIds);

        uint256 releaseAdminBalance = releases.balanceOf(releaseAdmin, 1);

        console2.log("releaseAdminBalance", releaseAdminBalance);

        releases.setApprovalForAll(address(marketplace), true);

        vm.stopPrank();
    }

    function test_createSale() public {
        createSale_setUp();

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner,
            saleBeneficiary,
            releases,
            1,
            saleAmountTotal,
            salePricePerToken,
            saleStartAt,
            saleEndAt,
            saleMaxCountPerWallet
        );
        vm.stopPrank();

        uint256 marketplaceBalance = releases.balanceOf(address(marketplace), 1);
        Marketplace.Sale memory sale = marketplace.getSale(releaseOwner, 0);

        assertEq(marketplaceBalance, 100);
        assertEq(sale.releaseOwner, releaseOwner);
        assertEq(sale.beneficiary, saleBeneficiary);
        assertEq(sale.releases, address(releases));
        assertEq(sale.tokenId, 1);
        assertEq(sale.amountRemaining, saleAmountTotal);
        assertEq(sale.amountTotal, saleAmountTotal);
        assertEq(sale.pricePerToken, salePricePerToken);
        assertEq(sale.startAt, saleStartAt);
        assertEq(sale.endAt, saleEndAt);
        assertEq(sale.maxCountPerWallet, saleMaxCountPerWallet);
    }

    function test_createSale_RevertIf_Releases_is_not_registered() public {
        createSale_setUp();

        address unregisteredReleases = address(0x9);

        vm.expectRevert(Marketplace.ReleasesIsNotRegistered.selector);

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner,
            saleBeneficiary,
            IReleases(unregisteredReleases),
            1,
            saleAmountTotal,
            salePricePerToken,
            saleStartAt,
            saleEndAt,
            saleMaxCountPerWallet
        );
        vm.stopPrank();
    }

    function test_createSale_RevertIf_beneficiary_address_is_zero() public {
        createSale_setUp();

        vm.expectRevert(Marketplace.CannotBeZeroAddress.selector);

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner,
            payable(address(0x0)),
            releases,
            1,
            saleAmountTotal,
            salePricePerToken,
            saleStartAt,
            saleEndAt,
            saleMaxCountPerWallet
        );
        vm.stopPrank();
    }

    function test_createSale_RevertIf_amountTotal_is_zero() public {
        createSale_setUp();

        vm.expectRevert(Marketplace.TokenAmountCannotBeZero.selector);

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner,
            saleBeneficiary,
            releases,
            1,
            0,
            salePricePerToken,
            saleStartAt,
            saleEndAt,
            saleMaxCountPerWallet
        );
        vm.stopPrank();
    }

    function test_createSale_RevertIf_startAt_is_after_endAt() public {
        createSale_setUp();

        vm.expectRevert(abi.encodeWithSelector(Marketplace.StartCannotBeAfterEnd.selector, 2, 1));

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner,
            saleBeneficiary,
            releases,
            1,
            saleAmountTotal,
            salePricePerToken,
            2,
            1,
            saleMaxCountPerWallet
        );
        vm.stopPrank();
    }

    function test_createSale_RevertIf_maxCountPerWallet_is_zero() public {
        createSale_setUp();

        vm.expectRevert(Marketplace.MaxCountCannotBeZero.selector);

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner,
            saleBeneficiary,
            releases,
            1,
            saleAmountTotal,
            salePricePerToken,
            saleStartAt,
            saleEndAt,
            0
        );
        vm.stopPrank();
    }

    function test_createSale_emits_event() public {
        createSale_setUp();

        vm.expectEmit(true, true, true, true);
        emit SaleCreated(releaseOwner, 0);

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner,
            saleBeneficiary,
            releases,
            1,
            saleAmountTotal,
            salePricePerToken,
            saleStartAt,
            saleEndAt,
            saleMaxCountPerWallet
        );
        vm.stopPrank();
    }

    // Purchase

    function purchase_setUp() public {
        createSale_setUp();

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner,
            saleBeneficiary,
            releases,
            1,
            saleAmountTotal,
            salePricePerToken,
            saleStartAt,
            saleEndAt,
            saleMaxCountPerWallet
        );
        vm.stopPrank();
    }

    function test_purchase() public {
        purchase_setUp();

        vm.startPrank(buyer);
        marketplace.purchase(releaseOwner, 0, 10, buyer);
        vm.stopPrank();

        uint256 marketplaceBalance = releases.balanceOf(address(marketplace), 1);
        uint256 amountRemaining = marketplace.getSale(releaseOwner, 0).amountRemaining;
        uint256 buyerBalance = releases.balanceOf(buyer, 1);
        uint256 buyerUsdcBalance = token.balanceOf(buyer);

        assertEq(marketplaceBalance, 90);
        assertEq(amountRemaining, 90);
        assertEq(buyerBalance, 10);
        assertEq(buyerUsdcBalance, 800);
    }

    function test_purchase_RevertIf_Sale_has_not_started() public {
        createSale_setUp();

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner,
            saleBeneficiary,
            releases,
            1,
            saleAmountTotal,
            salePricePerToken,
            block.timestamp + 100,
            saleEndAt,
            saleMaxCountPerWallet
        );
        vm.stopPrank();

        vm.expectRevert(
            abi.encodeWithSelector(Marketplace.SaleNotStarted.selector, block.timestamp + 100)
        );

        vm.startPrank(buyer);
        marketplace.purchase(releaseOwner, 0, 10, buyer);
        vm.stopPrank();
    }

    function test_purchase_RevertIf_Sale_has_ended() public {
        createSale_setUp();

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner,
            saleBeneficiary,
            releases,
            1,
            saleAmountTotal,
            salePricePerToken,
            block.timestamp,
            block.timestamp + 1,
            saleMaxCountPerWallet
        );
        vm.stopPrank();

        vm.warp(block.timestamp + 2);

        vm.expectRevert(
            abi.encodeWithSelector(
                Marketplace.SaleHasEnded.selector, block.timestamp - 1, block.timestamp
            )
        );

        vm.startPrank(buyer);
        marketplace.purchase(releaseOwner, 0, 10, buyer);
        vm.stopPrank();
    }

    function test_purchase_RevertIf_tokenAmount_is_zero() public {
        purchase_setUp();

        vm.expectRevert(Marketplace.TokenAmountCannotBeZero.selector);

        vm.startPrank(buyer);
        marketplace.purchase(releaseOwner, 0, 0, buyer);
        vm.stopPrank();
    }

    function test_purchase_RevertIf_tokenAmount_is_greater_than_amountRemaining() public {
        purchase_setUp();

        vm.expectRevert(abi.encodeWithSelector(Marketplace.InsufficientSupply.selector, 100));

        vm.startPrank(buyer);
        marketplace.purchase(releaseOwner, 0, 101, buyer);
        vm.stopPrank();
    }

    function test_purchase_RevertIf_maxCountPerWallet_is_exceeded() public {
        purchase_setUp();

        vm.startPrank(buyer);
        marketplace.purchase(releaseOwner, 0, 10, buyer);
        vm.stopPrank();

        vm.expectRevert(abi.encodeWithSelector(Marketplace.MaxSupplyReached.selector, 10));

        vm.startPrank(buyer);
        marketplace.purchase(releaseOwner, 0, 1, buyer);
        vm.stopPrank();
    }

    function test_purchase_emits_event() public {
        purchase_setUp();

        vm.expectEmit(true, true, true, true);
        emit Purchase(address(releases), 1, buyer, releaseOwner, 0, 10, block.timestamp);

        vm.startPrank(buyer);
        marketplace.purchase(releaseOwner, 0, 10, buyer);
        vm.stopPrank();
    }

    // Create Sale and Purchase with no end time

    function test_createSale_and_purchase_with_no_end_time() public {
        createSale_setUp();

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner, saleBeneficiary, releases, 1, 100, 20, block.timestamp, 0, 10
        );
        vm.stopPrank();

        vm.startPrank(buyer);
        marketplace.purchase(releaseOwner, 0, 10, buyer);
        vm.stopPrank();

        uint256 marketplaceBalance = releases.balanceOf(address(marketplace), 1);
        uint256 amountRemaining = marketplace.getSale(releaseOwner, 0).amountRemaining;
        uint256 buyerBalance = releases.balanceOf(buyer, 1);
        uint256 buyerUsdcBalance = token.balanceOf(buyer);

        assertEq(marketplaceBalance, 90);
        assertEq(amountRemaining, 90);
        assertEq(buyerBalance, 10);
        assertEq(buyerUsdcBalance, 800);
    }

    // Withdraw

    function withdraw_setUp() public {
        createSale_setUp();

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner,
            saleBeneficiary,
            releases,
            1,
            saleAmountTotal,
            salePricePerToken,
            saleStartAt,
            saleEndAt,
            saleMaxCountPerWallet
        );
        vm.stopPrank();
    }

    function test_withdraw() public {
        withdraw_setUp();

        vm.startPrank(releaseAdmin);
        marketplace.withdraw(releaseOwner, 0, 10);
        vm.stopPrank();

        uint256 marketplaceBalance = releases.balanceOf(address(marketplace), 1);
        uint256 releaseAdminBalance = releases.balanceOf(releaseAdmin, 1);
        uint256 amountRemaining = marketplace.getSale(releaseOwner, 0).amountRemaining;

        assertEq(marketplaceBalance, 90);
        assertEq(releaseAdminBalance, 10);
        assertEq(amountRemaining, 90);
    }

    function test_withdraw_RevertIf_if_caller_is_not_seller() public {
        withdraw_setUp();

        address unauthorizedCaller = address(0x9);

        vm.expectRevert(Marketplace.OnlySellerCanWithdraw.selector);

        vm.startPrank(unauthorizedCaller);
        marketplace.withdraw(releaseOwner, 0, 10);
        vm.stopPrank();
    }

    function test_withdraw_RevertIf_tokenAmount_is_zero() public {
        withdraw_setUp();

        vm.expectRevert(Marketplace.TokenAmountCannotBeZero.selector);

        vm.startPrank(releaseAdmin);
        marketplace.withdraw(releaseOwner, 0, 0);
        vm.stopPrank();
    }

    function test_withdraw_RevertIf_tokenAmount_is_greater_than_amountRemaining() public {
        withdraw_setUp();

        vm.expectRevert(abi.encodeWithSelector(Marketplace.InsufficientSupply.selector, 100));

        vm.startPrank(releaseAdmin);
        marketplace.withdraw(releaseOwner, 0, 101);
        vm.stopPrank();
    }

    function test_withdraw_emits_event() public {
        withdraw_setUp();

        vm.expectEmit(true, true, true, true);
        emit Withdraw(releaseAdmin, 0, 10);

        vm.startPrank(releaseAdmin);
        marketplace.withdraw(releaseOwner, 0, 10);
        vm.stopPrank();
    }

    // Sale Count

    function test_saleCount() public {
        createSale_setUp();

        vm.startPrank(releaseAdmin);
        marketplace.createSale(
            releaseOwner,
            saleBeneficiary,
            releases,
            1,
            saleAmountTotal,
            salePricePerToken,
            saleStartAt,
            saleEndAt,
            saleMaxCountPerWallet
        );
        vm.stopPrank();

        uint256 saleCount = marketplace.saleCount(releaseOwner);

        assertEq(saleCount, 1);
    }

    // Treasury

    function test_setTreasury() public {
        address payable newTreasury = payable(address(0x9));
        marketplace.setTreasury(newTreasury);

        assertEq(marketplace.treasury(), newTreasury);
    }

    function test_setTreasury_RevertIf_caller_does_not_have_ADMIN_ROLE() public {
        address unauthorizedCaller = address(0x9);
        vm.expectRevert(
            abi.encodeWithSelector(
                IAccessControl.AccessControlUnauthorizedAccount.selector, unauthorizedCaller, 0x00
            )
        );

        vm.startPrank(unauthorizedCaller);
        marketplace.setTreasury(payable(address(0x9)));
        vm.stopPrank();
    }

    // Treasury fee

    function test_setTreasuryFee() public {
        marketplace.setTreasuryFee(500);

        assertEq(marketplace.treasuryFee(), 500);
    }

    function test_setTreasuryFee_RevertIf_caller_does_not_have_ADMIN_ROLE() public {
        address unauthorizedCaller = address(0x9);
        vm.expectRevert(
            abi.encodeWithSelector(
                IAccessControl.AccessControlUnauthorizedAccount.selector, unauthorizedCaller, 0x00
            )
        );

        vm.startPrank(unauthorizedCaller);
        marketplace.setTreasuryFee(500);
        vm.stopPrank();
    }
}
