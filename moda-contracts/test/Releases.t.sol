// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import "../src/ModaRegistry.sol";
import "../src/Catalog.sol";
import "../src/Releases.sol";
import "../test/mocks/MembershipMock.sol";

contract ReleasesTest is Test {
    Membership public membership;
    ModaRegistry public modaRegistry;
    Catalog public catalog;
    Releases public releases;

    string public catalogName = "Drop";
    uint256 public dropIndex = 0;
    string public catalogVersion = "1";

    string name = "TestReleases";
    string symbol = "TEST";
    address admin = address(0x6);
    address releaseAdmin = address(0x1);

    address[] releaseAdmins = [releaseAdmin];
    address splitsFactory = address(0x4);

    error InvalidInitialization();

    event ReleaseCreated(uint256 tokenId);
    event ReleaseWithdrawn(address indexed receiver, uint256 tokenId, uint256 amount);

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
        address beneficiary;
        string uri;
        uint256 amount;
        string[] trackIds;
    }

    ReleaseData releaseData = ReleaseData(100, address(0x7), "testURI", 100, new string[](0));

    function setUp() public {
        membership = new Membership();
        modaRegistry = new ModaRegistry();
        catalog = new Catalog();
        catalog.initialize(catalogName, catalogVersion, address(modaRegistry));
        membership.addMember(releaseAdmin);
        modaRegistry.registerCatalog(catalogName, address(catalog), membership);
        releases = new Releases(false);
        releases.initialize(admin, releaseAdmins, name, symbol, address(catalog), splitsFactory);
    }

    /// Initialization

    function test_initialize() public {
        (uint256 numberOfReleases, bool isOpen) = releases.info();

        assertEq(releases.name(), name);
        assertEq(releases.symbol(), symbol);
        assertEq(numberOfReleases, 0);
        assertEq(isOpen, false);
    }

    function test_RevertWhen_is_Initialized_More_Than_Once() public {
        vm.expectRevert(InvalidInitialization.selector);
        releases.initialize(admin, releaseAdmins, name, symbol, address(catalog), splitsFactory);
    }

    /// Creating a Release with a curated Releases contract

    function registerReleasesContract_setUp() public {
        modaRegistry.grantRole(keccak256("RELEASES_REGISTRAR_ROLE"), admin);
        // register Releases contract
        vm.startPrank(admin);
        catalog.registerReleasesContract(address(releases), admin);
        vm.stopPrank();
    }

    function registerTrack_setUp() public {
        registerReleasesContract_setUp();
        vm.startPrank(releaseAdmin);
        catalog.registerTrack(
            releaseAdmin,
            trackRegistrationDataOne.trackBeneficiary,
            trackRegistrationDataOne.trackRegistrationHash,
            dropIndex
        );
        catalog.registerTrack(
            releaseAdmin,
            trackRegistrationDataTwo.trackBeneficiary,
            trackRegistrationDataTwo.trackRegistrationHash,
            dropIndex
        );
        catalog.registerTrack(
            releaseAdmin,
            trackRegistrationDataThree.trackBeneficiary,
            trackRegistrationDataThree.trackRegistrationHash,
            dropIndex
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
            releaseData.beneficiary,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );
        vm.stopPrank();
    }

    function test_create_Release_Curated() public {
        createRelease_setUp();
        bytes32 releaseHash = catalog.getReleaseHash(address(releases), 1);
        (uint256 numberOfReleases,) = releases.info();

        Catalog.RegisteredRelease memory registeredRelease = catalog.getRegisteredRelease(releaseHash);

        assertEq(numberOfReleases, 1);
        assertEq(registeredRelease.releases, address(releases));
        assertEq(registeredRelease.tokenId, 1);
        assertEq(registeredRelease.trackIds[0], trackRegistrationDataOne.trackId);
        assertEq(registeredRelease.trackIds[1], trackRegistrationDataTwo.trackId);
        assertEq(registeredRelease.trackIds[2], trackRegistrationDataThree.trackId);
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
            releaseData.beneficiary,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );
        vm.stopPrank();
    }

    /// Creating a Release with a curated Releases contract reverts

    function test_RevertWhen_Caller_Is_Not_Release_Admin() public {
        registerTrack_setUp();
        approve_Tracks_setUp();
        address nonAdmin = address(0x2);
        vm.expectRevert(Releases.CallerIsNotReleaseAdmin.selector);
        vm.startPrank(nonAdmin);
        releases.create(
            address(0x1),
            releaseData.royaltyAmount,
            releaseData.beneficiary,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );
        vm.stopPrank();
    }

    function test_RevertWhen_Royalty_Amount_Is_Over_2000() public {
        registerTrack_setUp();
        approve_Tracks_setUp();
        vm.expectRevert(Releases.InvalidAmount.selector);
        vm.startPrank(releaseAdmin);
        releases.create(
            address(0x1),
            2001,
            releaseData.beneficiary,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );
        vm.stopPrank();
    }

    // Withdrawing a Release

    function test_withdrawRelease() public {
        registerTrack_setUp();
        approve_Tracks_setUp();
        vm.startPrank(releaseAdmin);
        releases.create(
            address(releases),
            releaseData.royaltyAmount,
            releaseData.beneficiary,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );

        releases.withdrawRelease(releaseAdmin, 1, 100);
        vm.stopPrank();
        uint256 balance = releases.balanceOf(releaseAdmin, 1);

        assertEq(balance, 100);
    }

    function test_withdrawRelease_emits_event() public {
        registerTrack_setUp();
        approve_Tracks_setUp();
        vm.startPrank(releaseAdmin);
        releases.create(
            address(releases),
            releaseData.royaltyAmount,
            releaseData.beneficiary,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );

        vm.expectEmit(true, true, true, true);
        emit ReleaseWithdrawn(releaseAdmin, 1, 100);
        releases.withdrawRelease(releaseAdmin, 1, 100);
        vm.stopPrank();
    }

    // Withdrawing a Release reverts

    function test_RevertWhen_Invalid_Token_Id() public {
        registerTrack_setUp();
        approve_Tracks_setUp();
        vm.startPrank(releaseAdmin);
        releases.create(
            address(releases),
            releaseData.royaltyAmount,
            releaseData.beneficiary,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );

        vm.expectRevert(Releases.InvalidTokenId.selector);
        releases.withdrawRelease(releaseAdmin, 2, 100);
        vm.stopPrank();
    }

    // Updating a Release URI

    function test_setUri() public {
        createRelease_setUp();
        vm.startPrank(admin);
        releases.setUri(1, "newURI");
        vm.stopPrank();
        string memory newURI = releases.uri(1);

        assertEq(newURI, "newURI");
    }

    // Updating a Release URI reverts

    function test_RevertWhen_Invalid_Token_Id_For_Uri() public {
        createRelease_setUp();
        vm.expectRevert(Releases.InvalidTokenId.selector);
        vm.startPrank(admin);
        releases.setUri(2, "newURI");
        vm.stopPrank();
    }

    // Creating a Release with an open Releases contract

    function set_Open_setUp() public {
        vm.startPrank(admin);
        releases.setIsReleasesOpen();
        vm.stopPrank();
    }

    function create_Release_When_Open_setUp() public {
        set_Open_setUp();
        registerTrack_setUp();
        vm.startPrank(releaseAdmin);
        releases.create(
            releaseAdmin,
            releaseData.royaltyAmount,
            releaseData.beneficiary,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );
        vm.stopPrank();
    }

    function test_create_Release_When_Open() public {
        create_Release_When_Open_setUp();
        bytes32 releaseHash = catalog.getReleaseHash(address(releases), 1);
        (uint256 numberOfReleases,) = releases.info();

        Catalog.RegisteredRelease memory registeredRelease = catalog.getRegisteredRelease(releaseHash);

        assertEq(numberOfReleases, 1);
        assertEq(registeredRelease.releases, address(releases));
        assertEq(registeredRelease.tokenId, 1);
        assertEq(registeredRelease.trackIds[0], trackRegistrationDataOne.trackId);
        assertEq(registeredRelease.trackIds[1], trackRegistrationDataTwo.trackId);
        assertEq(registeredRelease.trackIds[2], trackRegistrationDataThree.trackId);
    }

    // Creating a Release with an open Releases contract

    function test_RevertWhen_User_Does_Not_Have_Track_Access() public {
        set_Open_setUp();
        registerTrack_setUp();
        address nonTrackAccessUser = address(0x2);
        vm.expectRevert(Releases.CallerDoesNotHaveTrackAccess.selector);
        vm.startPrank(nonTrackAccessUser);
        releases.create(
            nonTrackAccessUser,
            releaseData.royaltyAmount,
            releaseData.beneficiary,
            releaseData.uri,
            releaseData.amount,
            releaseData.trackIds
        );
        vm.stopPrank();
    }
}
