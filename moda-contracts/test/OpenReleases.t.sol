// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {Registry} from "../src/Registry.sol";
import {Catalog} from "../src/Catalog.sol";
import {OpenReleases} from "../src/OpenReleases.sol";
import {IOpenReleases} from "../src/interfaces/Releases/IOpenReleases.sol";
import {OpenReleasesFactory} from "../src/OpenReleasesFactory.sol";
import {Management} from "../src/Management.sol";
import {Membership} from "../test/mocks/MembershipMock.sol";
import {IMembership} from "../src/interfaces/IMembership.sol";
import {SplitsFactoryMock} from "../test/mocks/SplitsFactoryMock.sol";
import {CatalogFactory} from "../src/CatalogFactory.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";

contract OpenReleasesTest is Test {
    Membership public membership;
    Management public management;
    Registry public registry;
    SplitsFactoryMock public splitsFactory;
    CatalogFactory public catalogFactory;
    Catalog public catalog;
    OpenReleases public openReleases;
    OpenReleases public releasesMaster;
    OpenReleasesFactory public releasesFactory;

    address public catalogBeacon;
    address public admin = address(0xa);
    string public catalogName = "DRIP Catalog";
    string public catalogVersion = "1";

    string name = "DRIP";
    string symbol = "DRIP";
    address organizationAdmin = address(0x6);
    address trackOwner = address(0x7);

    address payable treasury = payable(address(0x5));

    event ReleaseCreated(uint256 tokenId);
    event Burned(uint256 tokenId, address indexed tokenOwner);
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
        uint256 totalSupply;
        string[] trackIds;
    }

    ReleaseData releaseData = ReleaseData(1000, "testURI", 100, new string[](0));

    function setUp() public {
        management = new Management();
        membership = new Membership();
        splitsFactory = new SplitsFactoryMock(address(0x3));
        registry = new Registry(treasury, 1000);
        registry.setManagement(management);
        registry.setSplitsFactory(splitsFactory);

        catalogBeacon = Upgrades.deployBeacon("Catalog.sol", admin);
        catalogFactory = new CatalogFactory(registry, catalogBeacon);
        registry.grantRole(registry.CATALOG_REGISTRAR_ROLE(), address(catalogFactory));

        vm.startPrank(organizationAdmin);
        catalog = Catalog(catalogFactory.create(catalogName, IMembership(membership)));
        vm.stopPrank();
        membership.addMember(trackOwner);

        releasesMaster = new OpenReleases();
        releasesFactory = new OpenReleasesFactory(registry, address(releasesMaster));
        registry.grantRole(registry.RELEASES_REGISTRAR_ROLE(), address(releasesFactory));

        vm.startPrank(organizationAdmin);
        releasesFactory.create(name, symbol, catalog);
        vm.stopPrank();

        openReleases = OpenReleases(catalog.getReleasesContract(organizationAdmin));
    }

    // Initialization

    function test_constructor() public {
        uint256 numberOfReleases = openReleases.numberOfReleases();

        assertEq(openReleases.name(), name);
        assertEq(openReleases.symbol(), symbol);
        assertEq(numberOfReleases, 0);
    }

    // create with a curated Releases contract

    function registerTrack_setUp() public {
        vm.startPrank(trackOwner);
        catalog.registerTrack(
            trackOwner,
            trackRegistrationDataOne.trackBeneficiary,
            trackRegistrationDataOne.trackRegistrationHash
        );
        catalog.registerTrack(
            trackOwner,
            trackRegistrationDataTwo.trackBeneficiary,
            trackRegistrationDataTwo.trackRegistrationHash
        );
        catalog.registerTrack(
            trackOwner,
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

    function createRelease_setUp() public {
        registerTrack_setUp();
        vm.startPrank(trackOwner);
        openReleases.create(
            trackOwner,
            releaseData.royaltyAmount,
            releaseData.uri,
            releaseData.totalSupply,
            releaseData.trackIds
        );
        vm.stopPrank();
    }

    function test_create_release() public {
        createRelease_setUp();
        bytes32 releaseHash = catalog.getReleaseHash(address(openReleases), 1);
        uint256 numberOfReleases = openReleases.numberOfReleases();

        Catalog.RegisteredRelease memory registeredRelease = catalog.getRegisteredRelease(releaseHash);

        assertEq(numberOfReleases, 1);
        assertEq(registeredRelease.releases, address(openReleases));
        assertEq(registeredRelease.tokenId, 1);
        assertEq(registeredRelease.trackIds[0], trackRegistrationDataOne.trackId);
        assertEq(registeredRelease.trackIds[1], trackRegistrationDataTwo.trackId);
        assertEq(registeredRelease.trackIds[2], trackRegistrationDataThree.trackId);
    }

    function test_create_RevertIf_caller_is_not_track_owner() public {
        registerTrack_setUp();

        address nonTrackOwner = address(0x2);
        vm.expectRevert(OpenReleases.CallerDoesNotHaveAccess.selector);
        vm.startPrank(nonTrackOwner);
        openReleases.create(
            nonTrackOwner,
            releaseData.royaltyAmount,
            releaseData.uri,
            releaseData.totalSupply,
            releaseData.trackIds
        );
        vm.stopPrank();
    }

    function test_create_RevertIf_royalty_amount_is_over_2000() public {
        registerTrack_setUp();

        vm.expectRevert(OpenReleases.InvalidRoyaltyAmount.selector);
        vm.startPrank(trackOwner);
        openReleases.create(
            trackOwner, 2001, releaseData.uri, releaseData.totalSupply, releaseData.trackIds
        );
        vm.stopPrank();
    }

    function test_create_emits_event() public {
        registerTrack_setUp();

        vm.expectEmit(true, true, true, true);
        emit ReleaseCreated(1);
        vm.startPrank(trackOwner);
        openReleases.create(
            trackOwner,
            releaseData.royaltyAmount,
            releaseData.uri,
            releaseData.totalSupply,
            releaseData.trackIds
        );
        vm.stopPrank();
    }

    // setUri

    function test_setUri() public {
        createRelease_setUp();
        vm.startPrank(trackOwner);
        openReleases.setUri(1, "newURI");
        vm.stopPrank();
        string memory newURI = openReleases.uri(1);

        assertEq(newURI, "newURI");
    }

    function test_setUri_RevertIf_tokenId_is_invalid() public {
        createRelease_setUp();
        vm.expectRevert(OpenReleases.InvalidTokenId.selector);
        vm.startPrank(trackOwner);
        openReleases.setUri(2, "newURI");
        vm.stopPrank();
    }

    function test_setUri_RevertIf_caller_is_not_release_owner() public {
        createRelease_setUp();
        address nonReleaseOwner = address(0x2);
        vm.expectRevert(OpenReleases.CallerDoesNotHaveAccess.selector);
        vm.startPrank(nonReleaseOwner);
        openReleases.setUri(1, "newURI");
        vm.stopPrank();
    }

    function test_setUri_emits_event() public {
        createRelease_setUp();
        vm.expectEmit(true, true, true, true);
        emit URI("newURI", 1);
        vm.startPrank(trackOwner);
        openReleases.setUri(1, "newURI");
        vm.stopPrank();
    }

    // burn

    function test_removeRelease() public {
        createRelease_setUp();

        vm.startPrank(organizationAdmin);
        openReleases.burn(1);
        vm.stopPrank();

        uint256 userBalance = openReleases.balanceOf(trackOwner, 1);

        assertEq(openReleases.uri(1), "");
        assertEq(userBalance, 0);
    }

    function test_burn_emits_event() public {
        createRelease_setUp();

        vm.expectEmit(true, true, true, true);
        emit Burned(1, trackOwner);
        vm.startPrank(organizationAdmin);
        openReleases.burn(1);
        vm.stopPrank();
    }

    // royaltyInfo

    function test_royaltyInfo() public {
        createRelease_setUp();
        (address receiver, uint256 royaltyAmount) = openReleases.royaltyInfo(1, 100);
        address splitsAddress = splitsFactory.mockSplit();
        assertEq(receiver, splitsAddress);
        assertEq(royaltyAmount, 10);
    }

    // supportsInterface

    function test_supportsInterface() public {
        bool supportsInterface = openReleases.supportsInterface(type(IOpenReleases).interfaceId);
        assertEq(supportsInterface, true);
    }
}
