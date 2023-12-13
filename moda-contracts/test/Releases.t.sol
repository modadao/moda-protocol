// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

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

contract ReleasesTest is Test {
    Membership public membership;
    Management public management;
    ModaRegistry public modaRegistry;
    SplitsFactoryMock public splitsFactory;
    CatalogFactory public catalogFactory;
    Catalog public catalog;
    Releases public releasesMaster;
    ReleasesFactory public releasesFactory;
    Releases public releases;

    address catalogBeacon;
    address modaAdmin = address(0xa);
    string public catalogName = "TestCatalog";

    string name = "TestReleases";
    string symbol = "TEST";
    address admin = address(0x6);
    address releaseAdmin = address(0x1);

    address[] releaseAdmins = [releaseAdmin];
    address payable treasury = payable(address(0x5));

    error InvalidInitialization();

    event ReleaseCreated(uint256 tokenId);
    event ReleaseWithdrawn(address indexed receiver, uint256 tokenId, uint256 amount);
    event URI(string value, uint256 indexed id);

    struct TrackRegistrationData {
        address trackBeneficiary;
        string trackRegistrationHash;
        string trackId;
    }

    TrackRegistrationData trackRegistrationDataOne = TrackRegistrationData({
        trackBeneficiary: address(0x8),
        trackRegistrationHash: "trackHash1",
        trackId: ""
    });

    TrackRegistrationData trackRegistrationDataTwo = TrackRegistrationData({
        trackBeneficiary: address(0x9),
        trackRegistrationHash: "trackHash2",
        trackId: ""
    });

    TrackRegistrationData trackRegistrationDataThree = TrackRegistrationData({
        trackBeneficiary: address(0x10),
        trackRegistrationHash: "trackHash3",
        trackId: ""
    });

    struct ReleaseData {
        uint96 royaltyAmount;
        string uri;
        uint256 amount;
        string[] trackIds;
    }

    ReleaseData releaseData = ReleaseData(1000, "testURI", 100, new string[](0));

    function setUp() public {
        management = new Management();
        membership = new Membership();
        splitsFactory = new SplitsFactoryMock(address(0x3));
        modaRegistry = new ModaRegistry(treasury, 1000, splitsFactory, management);
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
    }

    // Initialization

    function test_initialize() public {
        uint256 numberOfReleases = releases.numberOfReleases();

        assertEq(releases.name(), name);
        assertEq(releases.symbol(), symbol);
        assertEq(numberOfReleases, 0);
    }

    function test_initialize_RevertIf_already_initialized() public {
        vm.expectRevert(InvalidInitialization.selector);

        releases.initialize(admin, releaseAdmins, name, symbol, catalog, splitsFactory);
    }

    // create with a curated Releases contract

    function registerTrack_setUp() public {
        vm.startPrank(releaseAdmin);
        catalog.registerTrack(
            releaseAdmin,
            trackRegistrationDataOne.trackBeneficiary,
            trackRegistrationDataOne.trackRegistrationHash
        );
        catalog.registerTrack(
            releaseAdmin,
            trackRegistrationDataTwo.trackBeneficiary,
            trackRegistrationDataTwo.trackRegistrationHash
        );
        catalog.registerTrack(
            releaseAdmin,
            trackRegistrationDataThree.trackBeneficiary,
            trackRegistrationDataThree.trackRegistrationHash
        );

        trackRegistrationDataOne.trackId =
            catalog.getTrackId(trackRegistrationDataOne.trackRegistrationHash);
        trackRegistrationDataTwo.trackId =
            catalog.getTrackId(trackRegistrationDataTwo.trackRegistrationHash);
        trackRegistrationDataThree.trackId =
            catalog.getTrackId(trackRegistrationDataThree.trackRegistrationHash);

        releaseData.trackIds.push(trackRegistrationDataOne.trackId);
        releaseData.trackIds.push(trackRegistrationDataTwo.trackId);
        releaseData.trackIds.push(trackRegistrationDataThree.trackId);

        vm.stopPrank();
    }

    function approve_Tracks_setUp() public {
        vm.startPrank(releaseAdmin);
        catalog.setReleasesApprovalForAll(releaseAdmin, address(releases), true);

        vm.stopPrank();
    }

    function createRelease_setUp() public {
        registerTrack_setUp();
        approve_Tracks_setUp();
        vm.startPrank(releaseAdmin);
        releases.create(
            releaseAdmin,
            releaseData.royaltyAmount,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );
        vm.stopPrank();
    }

    function test_create_release_curated() public {
        createRelease_setUp();
        bytes32 releaseHash = catalog.getReleaseHash(address(releases), 1);
        uint256 numberOfReleases = releases.numberOfReleases();

        Catalog.RegisteredRelease memory registeredRelease = catalog.getRegisteredRelease(releaseHash);

        assertEq(numberOfReleases, 1);
        assertEq(registeredRelease.releases, address(releases));
        assertEq(registeredRelease.tokenId, 1);
        assertEq(registeredRelease.trackIds[0], trackRegistrationDataOne.trackId);
        assertEq(registeredRelease.trackIds[1], trackRegistrationDataTwo.trackId);
        assertEq(registeredRelease.trackIds[2], trackRegistrationDataThree.trackId);
    }

    function test_create_RevertIf_caller_is_not_release_admin() public {
        registerTrack_setUp();
        approve_Tracks_setUp();
        address nonAdmin = address(0x2);
        vm.expectRevert(Releases.CallerIsNotReleaseAdmin.selector);
        vm.startPrank(nonAdmin);
        releases.create(
            address(0x1),
            releaseData.royaltyAmount,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );
        vm.stopPrank();
    }

    function test_create_RevertIf_royalty_amount_is_over_2000() public {
        registerTrack_setUp();
        approve_Tracks_setUp();
        vm.expectRevert(Releases.InvalidRoyaltyAmount.selector);
        vm.startPrank(releaseAdmin);
        releases.create(address(0x1), 2001, releaseData.uri, releaseData.amount, releaseData.trackIds);
        vm.stopPrank();
    }

    function test_create_emits_event() public {
        registerTrack_setUp();
        approve_Tracks_setUp();

        vm.expectEmit(true, true, true, true);
        emit ReleaseCreated(1);
        vm.startPrank(releaseAdmin);
        releases.create(
            releaseAdmin,
            releaseData.royaltyAmount,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );
        vm.stopPrank();
    }

    // withdrawRelease

    function test_withdrawRelease() public {
        registerTrack_setUp();
        approve_Tracks_setUp();
        vm.startPrank(releaseAdmin);
        releases.create(
            address(releases),
            releaseData.royaltyAmount,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );

        releases.withdrawRelease(releaseAdmin, 1, 100);
        vm.stopPrank();
        uint256 balance = releases.balanceOf(releaseAdmin, 1);

        assertEq(balance, 100);
    }

    function test_withdrawRelease_RevertIf_tokenId_is_invalid() public {
        registerTrack_setUp();
        approve_Tracks_setUp();
        vm.startPrank(releaseAdmin);
        releases.create(
            address(releases),
            releaseData.royaltyAmount,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );

        vm.expectRevert(Releases.InvalidTokenId.selector);
        releases.withdrawRelease(releaseAdmin, 2, 100);
        vm.stopPrank();
    }

    function test_withdrawRelease_emits_event() public {
        registerTrack_setUp();
        approve_Tracks_setUp();
        vm.startPrank(releaseAdmin);
        releases.create(
            address(releases),
            releaseData.royaltyAmount,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );

        vm.expectEmit(true, true, true, true);
        emit ReleaseWithdrawn(releaseAdmin, 1, 100);
        releases.withdrawRelease(releaseAdmin, 1, 100);
        vm.stopPrank();
    }

    // setUri

    function test_setUri() public {
        createRelease_setUp();
        vm.startPrank(admin);
        releases.setUri(1, "newURI");
        vm.stopPrank();
        string memory newURI = releases.uri(1);

        assertEq(newURI, "newURI");
    }

    function test_setUri_RevertIf_tokenId_is_invalid() public {
        createRelease_setUp();
        vm.expectRevert(Releases.InvalidTokenId.selector);
        vm.startPrank(admin);
        releases.setUri(2, "newURI");
        vm.stopPrank();
    }

    function test_setUri_emits_event() public {
        createRelease_setUp();
        vm.expectEmit(true, true, true, true);
        emit URI("newURI", 1);
        vm.startPrank(admin);
        releases.setUri(1, "newURI");
        vm.stopPrank();
    }

    // royaltyInfo

    function test_royaltyInfo() public {
        createRelease_setUp();
        (address receiver, uint256 royaltyAmount) = releases.royaltyInfo(1, 100);
        address splitsAddress = splitsFactory.mockSplit();
        assertEq(receiver, splitsAddress);
        assertEq(royaltyAmount, 10);
    }

    // supportsInterface

    function test_supportsInterface() public {
        bool supportsInterface = releases.supportsInterface(type(IReleases).interfaceId);
        assertEq(supportsInterface, true);
    }
}
