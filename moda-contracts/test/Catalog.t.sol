// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import "../src/Catalog.sol";
import {ModaRegistry} from "../src/ModaRegistry.sol";
import {Membership} from "../src/Membership.sol";

contract CatalogTest is Test {
    Catalog public catalog;
    Membership public membership;
    ModaRegistry public modaRegistry;

    address public catalogDeployer = address(0x1);
    string public catalogName = "Drop";
    uint256 public dropIndex = 0;
    string public chainId = "80001";
    string public catalogVersion = "1";
    address public splitsFactory = address(0x2);
    address public modaBeneficiary = address(0x3);
    address public artist = address(0x4);

    error InvalidInitialization();

    function setUp() public {
        modaRegistry = new ModaRegistry();
        membership = new Membership();
        catalog = new Catalog();
        catalog.initialize(
            catalogName,
            chainId,
            catalogVersion,
            address(modaRegistry),
            splitsFactory,
            modaBeneficiary,
            catalogDeployer
        );
        membership.addMember(artist);
        modaRegistry.registerCatalog(catalogName, address(catalog), address(membership));
    }

    /// Initialization revert

    function test_RevertWhen_isInitializedMoreThanOnce() public {
        setUp();
        vm.expectRevert(InvalidInitialization.selector);
        catalog.initialize(
            catalogName,
            chainId,
            catalogVersion,
            address(modaRegistry),
            splitsFactory,
            modaBeneficiary,
            catalogDeployer
        );
    }

    /// Track Registration

    struct TrackRegistrationData {
        address trackBeneficiary;
        string trackRegistrationHash;
        string trackId;
    }

    TrackRegistrationData trackRegistrationData = TrackRegistrationData({
        trackBeneficiary: address(0x5),
        trackRegistrationHash: "trackHash",
        trackId: ""
    });

    function trackRegistrationSetUp() public {
        vm.startPrank(artist);
        catalog.registerTrack(
            artist,
            trackRegistrationData.trackBeneficiary,
            trackRegistrationData.trackRegistrationHash,
            dropIndex
        );
        vm.stopPrank();
        trackRegistrationData.trackId = catalog.getTrackId(trackRegistrationData.trackRegistrationHash);
    }

    function test_trackRegistration() public {
        trackRegistrationSetUp();
        Catalog.RegisteredTrack memory track = catalog.getTrack(trackRegistrationData.trackId);
        assertEq(uint256(track.trackStatus), uint256(ICatalog.TrackStatus.PENDING));
        assertEq(track.artist, artist);
        assertEq(track.trackBeneficiary, trackRegistrationData.trackBeneficiary);
        assertEq(track.trackRegistrationHash, trackRegistrationData.trackRegistrationHash);
        assertEq(track.fingerprintHash, "");
        assertEq(track.validationHash, "");
    }

    TrackRegistrationData trackRegistrationDataManager = TrackRegistrationData({
        trackBeneficiary: address(0x5),
        trackRegistrationHash: "trackHashManager",
        trackId: ""
    });

    function test_trackRegistrationAsManagerSetUp() public {
        vm.startPrank(artist);
        address manager = address(0x6);
        membership.addMember(manager);
        address[] memory managers = new address[](1);
        managers[0] = manager;
        modaRegistry.addManagers(managers);
        vm.stopPrank();
        vm.startPrank(manager);
        catalog.registerTrack(
            artist,
            trackRegistrationDataManager.trackBeneficiary,
            trackRegistrationDataManager.trackRegistrationHash,
            dropIndex
        );
        vm.stopPrank();
        trackRegistrationDataManager.trackId =
            catalog.getTrackId(trackRegistrationDataManager.trackRegistrationHash);
    }

    function test_trackRegistrationAsManager() public {
        test_trackRegistrationAsManagerSetUp();
        Catalog.RegisteredTrack memory track = catalog.getTrack(trackRegistrationDataManager.trackId);
        assertEq(uint256(track.trackStatus), uint256(ICatalog.TrackStatus.PENDING));
        assertEq(track.artist, artist);
        assertEq(track.trackBeneficiary, trackRegistrationDataManager.trackBeneficiary);
        assertEq(track.trackRegistrationHash, trackRegistrationDataManager.trackRegistrationHash);
        assertEq(track.fingerprintHash, "");
        assertEq(track.validationHash, "");
    }

    struct TrackRegistrationDataGoldRole {
        address trackBeneficiary;
        string trackRegistrationHash;
        string trackId;
        address goldArtist;
    }

    TrackRegistrationDataGoldRole trackRegistrationDataGoldRole;

    function test_trackRegistrationWithAGoldRoleSetUp() public {
        address goldArtist = address(0x10);
        TrackRegistrationDataGoldRole({
            trackBeneficiary: address(0x5),
            trackRegistrationHash: "trackHashGoldRole",
            trackId: "",
            goldArtist: goldArtist
        });
        membership.addMember(trackRegistrationDataGoldRole.goldArtist);
        modaRegistry.grantRole(keccak256("GOLD_ROLE"), trackRegistrationDataGoldRole.goldArtist);
        vm.startPrank(trackRegistrationDataGoldRole.goldArtist);
        catalog.registerTrack(
            trackRegistrationDataGoldRole.goldArtist,
            trackRegistrationDataGoldRole.trackBeneficiary,
            trackRegistrationDataGoldRole.trackRegistrationHash,
            dropIndex
        );
        vm.stopPrank();
        trackRegistrationDataGoldRole.trackId =
            catalog.getTrackId(trackRegistrationDataGoldRole.trackRegistrationHash);
    }

    function test_trackRegistrationWithAGoldRole() public {
        test_trackRegistrationWithAGoldRoleSetUp();
        Catalog.RegisteredTrack memory track = catalog.getTrack(trackRegistrationDataGoldRole.trackId);
        assertEq(uint256(track.trackStatus), uint256(ICatalog.TrackStatus.VALIDATED));
        assertEq(track.artist, trackRegistrationDataGoldRole.goldArtist);
        assertEq(track.trackBeneficiary, trackRegistrationDataGoldRole.trackBeneficiary);
        assertEq(track.trackRegistrationHash, trackRegistrationDataGoldRole.trackRegistrationHash);
        assertEq(track.fingerprintHash, "");
        assertEq(track.validationHash, "");
    }

    /// Track Registration revert

    function test_RevertWhen_TrackIsAlreadyRegistered() public {
        trackRegistrationSetUp();
        vm.expectRevert(Catalog.TrackAlreadyRegistered.selector);
        vm.startPrank(artist);
        catalog.registerTrack(
            artist,
            trackRegistrationData.trackBeneficiary,
            trackRegistrationData.trackRegistrationHash,
            dropIndex
        );
        vm.stopPrank();
    }

    function test_RevertWhen_UserIsNotMember() public {
        vm.expectRevert(Catalog.UserMustBeMember.selector);
        address nonMember = address(0x9);
        vm.startPrank(nonMember);
        catalog.registerTrack(
            nonMember,
            trackRegistrationData.trackBeneficiary,
            trackRegistrationData.trackRegistrationHash,
            dropIndex
        );
        vm.stopPrank();
    }

    function test_RevertWhen_UserIsNotArtist() public {
        address nonArtist = address(0x9);
        membership.addMember(nonArtist);
        vm.startPrank(nonArtist);
        vm.expectRevert(Catalog.MustBeArtistOrManager.selector);
        catalog.registerTrack(
            artist,
            trackRegistrationData.trackBeneficiary,
            trackRegistrationData.trackRegistrationHash,
            dropIndex
        );
        vm.stopPrank();
    }

    /// Update track status

    function setTrackStatusSetUp() public {
        trackRegistrationSetUp();
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        catalog.setTrackStatus(trackRegistrationData.trackId, ICatalog.TrackStatus.VALIDATED);
    }

    function test_setTrackStatus() public {
        setTrackStatusSetUp();
        assertEq(
            uint256(catalog.getTrack(trackRegistrationData.trackId).trackStatus),
            uint256(ICatalog.TrackStatus.VALIDATED)
        );
    }

    /// Update track status revert

    function test_RevertWhen_UserDoesNotHaveVerifierRole() public {
        trackRegistrationSetUp();
        address nonVerifier = address(0x9);
        vm.expectRevert(Catalog.VerifierRoleRequired.selector);
        vm.startPrank(nonVerifier);
        catalog.setTrackStatus(trackRegistrationData.trackId, ICatalog.TrackStatus.VALIDATED);
        vm.stopPrank();
    }

    function test_RevertWhen_TrackIsNotRegistered() public {
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        string memory unregisteredId = "unregisteredId";
        vm.expectRevert(Catalog.TrackIsNotRegistered.selector);
        catalog.setTrackStatus(unregisteredId, ICatalog.TrackStatus.VALIDATED);
    }

    /// Update other track data

    struct UpdateTrackData {
        address newTrackBeneficiary;
        string newTrackRegistrationHash;
        string fingerprintHash;
        string validationHash;
    }

    UpdateTrackData updateTrackData = UpdateTrackData({
        newTrackBeneficiary: address(0x7),
        newTrackRegistrationHash: "newTrackHash",
        fingerprintHash: "fingerprintHash",
        validationHash: "validationHash"
    });

    function updateTrackDataSetUp() public {
        trackRegistrationSetUp();
        vm.startPrank(artist);

        catalog.setTrackBeneficiary(trackRegistrationData.trackId, updateTrackData.newTrackBeneficiary);
        catalog.setTrackMetadata(trackRegistrationData.trackId, updateTrackData.newTrackRegistrationHash);
        catalog.setTrackFingerprintHash(trackRegistrationData.trackId, updateTrackData.fingerprintHash);
        catalog.setTrackValidationHash(trackRegistrationData.trackId, updateTrackData.validationHash);
        vm.stopPrank();
    }

    function test_updateTrackData() public {
        updateTrackDataSetUp();
        Catalog.RegisteredTrack memory track = catalog.getTrack(trackRegistrationData.trackId);
        assertEq(track.trackBeneficiary, updateTrackData.newTrackBeneficiary);
        assertEq(track.trackRegistrationHash, updateTrackData.newTrackRegistrationHash);
        assertEq(track.fingerprintHash, updateTrackData.fingerprintHash);
        assertEq(track.validationHash, updateTrackData.validationHash);
    }

    /// Releases contract Registration

    struct RegisterReleasesContractData {
        address releasesRegistrar;
        address releasesContract;
        address releasesOwner;
    }

    RegisterReleasesContractData registerReleasesContractData = RegisterReleasesContractData({
        releasesRegistrar: address(0x6),
        releasesContract: address(0x7),
        releasesOwner: address(0x8)
    });

    function registerReleasesContractSetup() public {
        modaRegistry.grantRole(
            keccak256("RELEASES_REGISTRAR_ROLE"), registerReleasesContractData.releasesRegistrar
        );
        vm.startPrank(registerReleasesContractData.releasesRegistrar);
        catalog.registerReleasesContract(
            registerReleasesContractData.releasesContract, registerReleasesContractData.releasesOwner
        );
        vm.stopPrank();
    }

    function test_registerReleasesContract() public {
        registerReleasesContractSetup();
        assertEq(
            catalog.getReleasesOwner(registerReleasesContractData.releasesContract),
            registerReleasesContractData.releasesOwner
        );
    }

    function test_unregisterReleasesContract() public {
        registerReleasesContractSetup();
        vm.startPrank(catalogDeployer);
        catalog.unregisterReleasesContract(registerReleasesContractData.releasesContract);
        assertEq(catalog.getReleasesOwner(registerReleasesContractData.releasesContract), address(0));
        vm.stopPrank();
    }

    /// Releases contract Registration revert

    function test_RevertWhen_CallerDoesNotHaveReleasesRegistrarRole() public {
        address nonReleasesRegistrar = address(0x9);
        vm.expectRevert(Catalog.ReleasesRegistrarRoleRequired.selector);
        vm.startPrank(nonReleasesRegistrar);
        catalog.registerReleasesContract(
            registerReleasesContractData.releasesContract, registerReleasesContractData.releasesOwner
        );
        vm.stopPrank();
    }

    function test_RevertWhen_ReleasesContractAlreadyRegistered() public {
        registerReleasesContractSetup();
        vm.expectRevert(Catalog.ReleasesContractIsAlreadyRegistered.selector);
        vm.startPrank(registerReleasesContractData.releasesRegistrar);
        catalog.registerReleasesContract(
            registerReleasesContractData.releasesContract, registerReleasesContractData.releasesOwner
        );
        vm.stopPrank();
    }

    function test_RevertWhen_UnregisteringAnUnregisteredReleasesContract() public {
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(catalogDeployer);
        catalog.unregisterReleasesContract(registerReleasesContractData.releasesContract);
        vm.stopPrank();
    }

    /// Releases track access

    function releasesTrackAccessSetup() public {
        trackRegistrationSetUp();
        registerReleasesContractSetup();
    }

    function test_grantReleasesAccessSingle() public {
        releasesTrackAccessSetup();
        vm.startPrank(artist);
        catalog.grantReleasesAccessSingle(
            trackRegistrationData.trackId, registerReleasesContractData.releasesContract, true
        );
        vm.stopPrank();
        assertEq(
            catalog.getReleasesAccessSingle(
                trackRegistrationData.trackId, registerReleasesContractData.releasesContract
            ),
            true
        );
    }

    function test_grantReleasesAccessAll() public {
        releasesTrackAccessSetup();
        vm.startPrank(artist);
        catalog.grantReleasesAccessAll(artist, registerReleasesContractData.releasesContract, true);
        vm.stopPrank();
        assertEq(
            catalog.getReleasesAccessAll(artist, registerReleasesContractData.releasesContract), true
        );
    }

    function test_removeReleasesAccessSingle() public {
        releasesTrackAccessSetup();
        vm.startPrank(artist);
        catalog.grantReleasesAccessSingle(
            trackRegistrationData.trackId, registerReleasesContractData.releasesContract, true
        );
        catalog.grantReleasesAccessSingle(
            trackRegistrationData.trackId, registerReleasesContractData.releasesContract, false
        );
        vm.stopPrank();
        assertEq(
            catalog.getReleasesAccessSingle(
                trackRegistrationData.trackId, registerReleasesContractData.releasesContract
            ),
            false
        );
    }

    /// Releases track access revert

    function test_RevertWhen_GrantingAccessSingleAndNotArtist() public {
        releasesTrackAccessSetup();
        address nonArtist = address(0x9);
        vm.expectRevert(Catalog.MustBeArtistOrManager.selector);
        vm.startPrank(nonArtist);
        catalog.grantReleasesAccessSingle(
            trackRegistrationData.trackId, registerReleasesContractData.releasesContract, true
        );
        vm.stopPrank();
    }

    function test_RevertWhen_GrantingAccessSingleAndReleasesContractNotRegistered() public {
        releasesTrackAccessSetup();
        address nonRegisteredReleasesContract = address(0x9);
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(artist);
        catalog.grantReleasesAccessSingle(
            trackRegistrationData.trackId, nonRegisteredReleasesContract, true
        );
        vm.stopPrank();
    }

    function test_RevertWhen_GrantingAccessAllAndNotArtist() public {
        releasesTrackAccessSetup();
        address nonArtist = address(0x9);
        vm.expectRevert(Catalog.MustBeArtistOrManager.selector);
        vm.startPrank(nonArtist);
        catalog.grantReleasesAccessAll(artist, registerReleasesContractData.releasesContract, true);
        vm.stopPrank();
    }

    function test_RevertWhen_GrantingAccessAllAndReleasesContractNotRegistered() public {
        releasesTrackAccessSetup();
        address nonRegisteredReleasesContract = address(0x9);
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(artist);
        catalog.grantReleasesAccessAll(artist, nonRegisteredReleasesContract, true);
        vm.stopPrank();
    }

    /// Registering a Release

    struct RegisteringReleaseData {
        string[] trackIds;
        string uri;
        uint256 tokenId;
    }

    RegisteringReleaseData registeringReleaseData;

    function registeringReleaseSetup() public {
        registerReleasesContractSetup();
        string memory trackRegistrationHashOne = "trackHashOne";
        string memory trackRegistrationHashTwo = "trackHashTwo";
        vm.startPrank(artist);

        catalog.registerTrack(
            artist, trackRegistrationData.trackBeneficiary, trackRegistrationHashOne, dropIndex
        );
        catalog.registerTrack(
            artist, trackRegistrationData.trackBeneficiary, trackRegistrationHashTwo, dropIndex
        );
        vm.stopPrank();

        string memory trackIdOne = catalog.getTrackId(trackRegistrationHashOne);
        string memory trackIdTwo = catalog.getTrackId(trackRegistrationHashTwo);
        string[] memory trackIds = new string[](2);
        trackIds[0] = trackIdOne;
        trackIds[1] = trackIdTwo;
        registeringReleaseData = RegisteringReleaseData({trackIds: trackIds, uri: "uri", tokenId: 1});
    }

    function test_registerReleaseWithAccessAll() public {
        registeringReleaseSetup();
        vm.startPrank(artist);
        catalog.grantReleasesAccessAll(artist, registerReleasesContractData.releasesContract, true);
        vm.stopPrank();
        vm.startPrank(registerReleasesContractData.releasesContract);
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();

        bytes32 releaseHash = catalog.getReleaseHash(
            registerReleasesContractData.releasesContract, registeringReleaseData.tokenId
        );
        Catalog.RegisteredRelease memory registeredRelease = catalog.getRegisteredRelease(releaseHash);
        assertEq(registeredRelease.releases, registerReleasesContractData.releasesContract);
        assertEq(registeredRelease.tokenId, registeringReleaseData.tokenId);
        assertEq(registeredRelease.trackIds[0], registeringReleaseData.trackIds[0]);
        assertEq(registeredRelease.trackIds[1], registeringReleaseData.trackIds[1]);
    }

    function test_registerReleaseWithAccessSingle() public {
        registeringReleaseSetup();
        vm.startPrank(artist);
        catalog.grantReleasesAccessSingle(
            registeringReleaseData.trackIds[0], registerReleasesContractData.releasesContract, true
        );
        catalog.grantReleasesAccessSingle(
            registeringReleaseData.trackIds[1], registerReleasesContractData.releasesContract, true
        );
        vm.stopPrank();
        assertEq(
            catalog.getReleasesAccessAll(artist, registerReleasesContractData.releasesContract), false
        );
        vm.startPrank(registerReleasesContractData.releasesContract);
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
        bytes32 releaseHash = catalog.getReleaseHash(
            registerReleasesContractData.releasesContract, registeringReleaseData.tokenId
        );
        Catalog.RegisteredRelease memory registeredRelease = catalog.getRegisteredRelease(releaseHash);
        assertEq(registeredRelease.releases, registerReleasesContractData.releasesContract);
        assertEq(registeredRelease.tokenId, registeringReleaseData.tokenId);
        assertEq(registeredRelease.trackIds[0], registeringReleaseData.trackIds[0]);
        assertEq(registeredRelease.trackIds[1], registeringReleaseData.trackIds[1]);
    }

    function test_unregisteringRelease() public {
        registeringReleaseSetup();
        vm.startPrank(artist);
        catalog.grantReleasesAccessAll(artist, registerReleasesContractData.releasesContract, true);
        vm.stopPrank();
        vm.startPrank(registerReleasesContractData.releasesContract);
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();

        bytes32 releaseHash = catalog.getReleaseHash(
            registerReleasesContractData.releasesContract, registeringReleaseData.tokenId
        );
        vm.startPrank(catalogDeployer);
        catalog.unregisterRelease(releaseHash);
        assertEq(catalog.getRegisteredRelease(releaseHash).releases, address(0));
        vm.stopPrank();
    }

    /// Registering a Release revert

    function test_RevertWhen_TheCallingReleasesContractIsNotRegistered() public {
        registeringReleaseSetup();
        address nonRegisteredReleasesContract = address(0x9);
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(nonRegisteredReleasesContract);
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_RevertWhen_TracksAreUnregistered() public {
        registeringReleaseSetup();
        string memory unregisteredTrackId = "unregisteredTrackId";
        string[] memory unregisteredTrackIds = new string[](2);
        unregisteredTrackIds[0] = unregisteredTrackId;
        unregisteredTrackIds[1] = unregisteredTrackId;
        vm.expectRevert(Catalog.TrackIsNotRegistered.selector);
        vm.startPrank(registerReleasesContractData.releasesContract);
        catalog.registerRelease(
            unregisteredTrackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_RevertWhen_TrackIsNotValidated() public {
        registeringReleaseSetup();
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        catalog.setTrackStatus(registeringReleaseData.trackIds[0], ICatalog.TrackStatus.INVALIDATED);

        vm.expectRevert(Catalog.TrackIsInvalid.selector);
        vm.startPrank(registerReleasesContractData.releasesContract);
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_RevertWhen_ReleasesContractDoesNotHavePermission() public {
        registeringReleaseSetup();
        vm.startPrank(artist);
        catalog.grantReleasesAccessAll(artist, registerReleasesContractData.releasesContract, false);
        vm.stopPrank();
        vm.expectRevert(Catalog.ReleasesContractDoesNotHavePermission.selector);
        vm.startPrank(registerReleasesContractData.releasesContract);
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_RevertWhen_ReleaseIsADuplicate() public {
        registeringReleaseSetup();
        vm.startPrank(artist);
        catalog.grantReleasesAccessAll(artist, registerReleasesContractData.releasesContract, true);
        vm.stopPrank();
        vm.startPrank(registerReleasesContractData.releasesContract);
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
        vm.expectRevert(Catalog.ReleaseAlreadyCreated.selector);
        vm.startPrank(registerReleasesContractData.releasesContract);
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    /// Fetching all tracks from a release

    function test_getTracksFromRelease() public {
        registeringReleaseSetup();
        vm.startPrank(artist);
        catalog.grantReleasesAccessAll(artist, registerReleasesContractData.releasesContract, true);
        vm.stopPrank();
        vm.startPrank(registerReleasesContractData.releasesContract);
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
        string[] memory trackIds = catalog.getReleaseTracks(
            registerReleasesContractData.releasesContract, registeringReleaseData.tokenId
        );
        assertEq(trackIds[0], registeringReleaseData.trackIds[0]);
        assertEq(trackIds[1], registeringReleaseData.trackIds[1]);
    }
}
