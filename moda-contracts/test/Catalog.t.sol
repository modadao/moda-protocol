// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import "../src/Catalog.sol";
import {ModaRegistry} from "../src/ModaRegistry.sol";
import {Membership} from "../test/mocks/MembershipMock.sol";
import {ITrackRegistration} from "../src/interfaces/ITrackRegistration.sol";
import "../src/Releases.sol";

contract CatalogTest is Test {
    Catalog public catalog;
    Membership public membership;
    ModaRegistry public modaRegistry;
    Releases public releases;

    address public catalogDeployer = address(0x1);
    string public catalogName = "ACME-CATALOG";
    string public catalogVersion = "1";
    address public artist = address(0x4);

    error InvalidInitialization();

    enum TrackStatus {
        PENDING,
        VALIDATED,
        INVALIDATED
    }

    event TrackRegistered(string trackRegistrationHash, string trackId, address indexed trackOwner);
    event TrackUpdated(
        TrackStatus indexed trackStatus,
        address indexed trackArtist,
        address trackBeneficiary,
        string trackRegistrationHash,
        string fingerprintHash,
        string validationHash,
        address trackVerifier
    );
    event ReleasesRegistered(address releases, address indexed releasesOwner);
    event ReleasesUnregistered(address releases, address indexed releasesOwner);
    event ReleaseRegistered(string[] trackIds, address releases, uint256 tokenId);
    event TrackApprovedToReleases(string trackId, address indexed releases);
    event TrackRemovedFromReleases(string trackId, address indexed releases);
    event AllTracksApprovedToReleases(address indexed artist, address indexed releases);
    event AllTracksRemovedFromReleases(address indexed artist, address indexed releases);
    event ReleaseUnregistered(bytes32 releaseHash);

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

    TrackRegistrationData trackRegistrationDataManager = TrackRegistrationData({
        trackBeneficiary: address(0x5),
        trackRegistrationHash: "trackHashManager",
        trackId: ""
    });

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

    struct TrackRegistrationData_AutoVerifiedRole {
        address trackBeneficiary;
        string trackRegistrationHash;
        string trackId;
        address autoVerifiedArtist;
    }

    TrackRegistrationData_AutoVerifiedRole trackRegistrationData_AutoVerifiedRole;

    struct RegisterReleasesContractData {
        address releasesRegistrar;
        address releasesOwner;
    }

    RegisterReleasesContractData registerReleasesContractData =
        RegisterReleasesContractData({releasesRegistrar: address(0x6), releasesOwner: address(0x8)});

    struct RegisteringReleaseData {
        string[] trackIds;
        string uri;
        uint256 tokenId;
    }

    RegisteringReleaseData registeringReleaseData;

    function setUp() public {
        modaRegistry = new ModaRegistry();
        membership = new Membership();
        catalog = new Catalog();
        releases = new Releases(false);
        vm.startPrank(catalogDeployer);
        catalog.initialize(catalogName, catalogVersion, address(modaRegistry), membership);
        vm.stopPrank();
        membership.addMember(artist);

        modaRegistry.registerCatalog(address(catalog));
    }

    function setup_auto_verified(address account) public {
        membership.addMember(account);
        modaRegistry.grantRole(keccak256("AUTO_VERIFIED_ROLE"), account);

    }

    /// Initialization revert

    function test_RevertWhen_Initialized_More_Than_Once() public {
        setUp();
        vm.expectRevert(InvalidInitialization.selector);
        vm.startPrank(catalogDeployer);
        catalog.initialize(catalogName, catalogVersion, address(modaRegistry), membership);
        vm.stopPrank();
    }

    /// Track Registration

    function registerTrack_SetUp() public {
        vm.startPrank(artist);
        catalog.registerTrack(
            artist, trackRegistrationData.trackBeneficiary, trackRegistrationData.trackRegistrationHash
        );
        vm.stopPrank();
        trackRegistrationData.trackId = catalog.getTrackId(trackRegistrationData.trackRegistrationHash);
    }

    function test_registerTrack() public {
        registerTrack_SetUp();
        Catalog.RegisteredTrack memory track = catalog.getTrack(trackRegistrationData.trackId);

        assertEq(uint256(track.trackStatus), uint256(ITrackRegistration.TrackStatus.PENDING));
        assertEq(track.trackOwner, artist);
        assertEq(track.trackBeneficiary, trackRegistrationData.trackBeneficiary);
        assertEq(track.trackRegistrationHash, trackRegistrationData.trackRegistrationHash);
        assertEq(track.fingerprintHash, "");
        assertEq(track.validationHash, "");
    }

    function test_registerTrack_emits_event() public {
        vm.expectEmit(true, true, true, true);
        emit TrackRegistered(
            trackRegistrationData.trackRegistrationHash, "Drop-31337-1-TRACK-ID-0", artist
        );
        registerTrack_SetUp();
    }

    function track_Registration_As_Manager_SetUp() public {
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
            trackRegistrationDataManager.trackRegistrationHash
        );
        vm.stopPrank();
        trackRegistrationDataManager.trackId =
            catalog.getTrackId(trackRegistrationDataManager.trackRegistrationHash);
    }

    function test_registerTrack_As_Manager() public {
        track_Registration_As_Manager_SetUp();
        Catalog.RegisteredTrack memory track = catalog.getTrack(trackRegistrationDataManager.trackId);

        assertEq(uint256(track.trackStatus), uint256(ITrackRegistration.TrackStatus.PENDING));
        assertEq(track.trackOwner, artist);
        assertEq(track.trackBeneficiary, trackRegistrationDataManager.trackBeneficiary);
        assertEq(track.trackRegistrationHash, trackRegistrationDataManager.trackRegistrationHash);
        assertEq(track.fingerprintHash, "");
        assertEq(track.validationHash, "");
    }

    function test_registerTrack_with_AUTO_VERIFIED_ROLE() public {
        address beneficiary = address(0x5);
        string memory trackHash = "track";
        setup_auto_verified(artist);

        vm.startPrank(artist);
        catalog.registerTrack(artist, beneficiary, trackHash);
        vm.stopPrank();
        string memory trackId = catalog.getTrackId(trackHash);
        Catalog.RegisteredTrack memory track = catalog.getTrack(trackId);

        assertEq(uint256(track.trackStatus), uint256(ITrackRegistration.TrackStatus.VALIDATED));
        assertEq(track.trackOwner, artist);
        assertEq(track.trackBeneficiary, beneficiary);
        assertEq(track.trackRegistrationHash, trackHash);

        assertEq(track.fingerprintHash, "");
        assertEq(track.validationHash, "");
    }

    /// Track Registration revert


    function test_RevertWhen_TrackIsAlreadyRegistered() public {
        trackRegistrationSetUp();


        vm.expectRevert(Catalog.TrackAlreadyRegistered.selector);
        vm.startPrank(artist);
        catalog.registerTrack(
            artist, trackRegistrationData.trackBeneficiary, trackRegistrationData.trackRegistrationHash
        );
        vm.stopPrank();
    }


    function test_RevertWhen_UserIsNotMember() public {
        vm.expectRevert(Catalog.MembershipRequired.selector);

        address nonMember = address(0x9);
        vm.startPrank(nonMember);
        catalog.registerTrack(
            nonMember,
            trackRegistrationData.trackBeneficiary,
            trackRegistrationData.trackRegistrationHash
        );
        vm.stopPrank();
    }

    function test_RevertWhen_User_Is_Not_Artist() public {
        address nonArtist = address(0x9);
        membership.addMember(nonArtist);
        vm.startPrank(nonArtist);
        vm.expectRevert(Catalog.MustBeTrackOwnerOrManager.selector);
        catalog.registerTrack(
            artist, trackRegistrationData.trackBeneficiary, trackRegistrationData.trackRegistrationHash
        );
        vm.stopPrank();
    }

    /// Update track status

    function setTrackStatus_SetUp() public {
        registerTrack_SetUp();
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        catalog.setTrackStatus(trackRegistrationData.trackId, ITrackRegistration.TrackStatus.VALIDATED);
    }

    function test_setTrackStatus() public {
        setTrackStatus_SetUp();

        assertEq(
            uint256(catalog.getTrack(trackRegistrationData.trackId).trackStatus),
            uint256(ITrackRegistration.TrackStatus.VALIDATED)
        );
    }

    function test_setTrackStatus_emits_event() public {
        registerTrack_SetUp();
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        vm.expectEmit(true, true, true, true);
        emit TrackUpdated(
            TrackStatus.VALIDATED, artist, address(0x5), "trackHash", "", "", address(this)
        );
        catalog.setTrackStatus(trackRegistrationData.trackId, ITrackRegistration.TrackStatus.VALIDATED);
    }

    /// Update track status revert

    function test_RevertWhen_User_Does_Not_Have_Verifier_Role() public {
        registerTrack_SetUp();
        address nonVerifier = address(0x9);
        vm.expectRevert(Catalog.VerifierRoleRequired.selector);
        vm.startPrank(nonVerifier);
        catalog.setTrackStatus(trackRegistrationData.trackId, ITrackRegistration.TrackStatus.VALIDATED);
        vm.stopPrank();
    }

    function test_RevertWhen_Track_Is_Not_Registered() public {
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        string memory unregisteredId = "unregisteredId";
        vm.expectRevert(Catalog.TrackIsNotRegistered.selector);
        catalog.setTrackStatus(unregisteredId, ITrackRegistration.TrackStatus.VALIDATED);
    }

    /// Update other track data

    function update_Track_Data_SetUp() public {
        registerTrack_SetUp();
        vm.startPrank(artist);

        catalog.setTrackBeneficiary(trackRegistrationData.trackId, updateTrackData.newTrackBeneficiary);
        catalog.setTrackMetadata(trackRegistrationData.trackId, updateTrackData.newTrackRegistrationHash);
        catalog.setTrackFingerprintHash(trackRegistrationData.trackId, updateTrackData.fingerprintHash);
        catalog.setTrackValidationHash(trackRegistrationData.trackId, updateTrackData.validationHash);
        vm.stopPrank();
    }

    function test_update_Track_Data() public {
        update_Track_Data_SetUp();
        Catalog.RegisteredTrack memory track = catalog.getTrack(trackRegistrationData.trackId);

        assertEq(track.trackBeneficiary, updateTrackData.newTrackBeneficiary);
        assertEq(track.trackRegistrationHash, updateTrackData.newTrackRegistrationHash);
        assertEq(track.fingerprintHash, updateTrackData.fingerprintHash);
        assertEq(track.validationHash, updateTrackData.validationHash);
    }

    function test_update_Track_Data_emits_events() public {
        registerTrack_SetUp();
        vm.startPrank(artist);
        vm.expectEmit(true, true, true, true);
        emit TrackUpdated(TrackStatus.PENDING, artist, address(0x7), "trackHash", "", "", address(0x0));
        catalog.setTrackBeneficiary(trackRegistrationData.trackId, updateTrackData.newTrackBeneficiary);
        vm.expectEmit(true, true, true, true);
        emit TrackUpdated(
            TrackStatus.PENDING, artist, address(0x7), "newTrackHash", "", "", address(0x0)
        );
        catalog.setTrackMetadata(trackRegistrationData.trackId, updateTrackData.newTrackRegistrationHash);
        vm.expectEmit(true, true, true, true);
        emit TrackUpdated(
            TrackStatus.PENDING,
            artist,
            address(0x7),
            "newTrackHash",
            "fingerprintHash",
            "",
            address(0x0)
        );
        catalog.setTrackFingerprintHash(trackRegistrationData.trackId, updateTrackData.fingerprintHash);
        vm.expectEmit(true, true, true, true);
        emit TrackUpdated(
            TrackStatus.PENDING,
            artist,
            address(0x7),
            "newTrackHash",
            "fingerprintHash",
            "validationHash",
            address(0x0)
        );
        catalog.setTrackValidationHash(trackRegistrationData.trackId, updateTrackData.validationHash);
        vm.stopPrank();
    }

    /// Releases contract Registration

    function registerReleasesContract_setUp() public {
        modaRegistry.grantRole(
            keccak256("RELEASES_REGISTRAR_ROLE"), registerReleasesContractData.releasesRegistrar
        );
        vm.startPrank(registerReleasesContractData.releasesRegistrar);
        catalog.registerReleasesContract(address(releases), registerReleasesContractData.releasesOwner);
        vm.stopPrank();
    }

    function test_registerReleasesContract() public {
        registerReleasesContract_setUp();

        assertEq(catalog.getReleasesOwner(address(releases)), registerReleasesContractData.releasesOwner);
    }

    function test_registerReleasesContract_emits_event() public {
        modaRegistry.grantRole(
            keccak256("RELEASES_REGISTRAR_ROLE"), registerReleasesContractData.releasesRegistrar
        );
        vm.expectEmit(true, true, true, true);
        emit ReleasesRegistered(address(releases), address(0x8));
        vm.startPrank(registerReleasesContractData.releasesRegistrar);
        catalog.registerReleasesContract(address(releases), registerReleasesContractData.releasesOwner);
        vm.stopPrank();
    }

    function test_unregisterReleasesContract() public {
        registerReleasesContract_setUp();
        vm.startPrank(catalogDeployer);
        catalog.unregisterReleasesContract(address(releases));
        vm.stopPrank();

        assertEq(catalog.getReleasesOwner(address(releases)), address(0));
    }

    function test_unregisterReleasesContract_emits_event() public {
        registerReleasesContract_setUp();
        vm.expectEmit(true, true, true, true);
        emit ReleasesUnregistered(address(releases), address(0x8));
        vm.startPrank(catalogDeployer);
        catalog.unregisterReleasesContract(address(releases));
        vm.stopPrank();
    }

    /// Releases contract Registration revert

    function test_RevertWhen_Caller_Does_Not_Have_Releases_Registrar_Role() public {
        address nonReleasesRegistrar = address(0x9);
        vm.expectRevert(Catalog.ReleasesRegistrarRoleRequired.selector);
        vm.startPrank(nonReleasesRegistrar);
        catalog.registerReleasesContract(address(releases), registerReleasesContractData.releasesOwner);
        vm.stopPrank();
    }

    function test_RevertWhen_Releases_Contract_Already_Registered() public {
        registerReleasesContract_setUp();
        vm.expectRevert(Catalog.ReleasesContractIsAlreadyRegistered.selector);
        vm.startPrank(registerReleasesContractData.releasesRegistrar);
        catalog.registerReleasesContract(address(releases), registerReleasesContractData.releasesOwner);
        vm.stopPrank();
    }

    function test_RevertWhen_Unregistering_Unregistered_Releases_Contract() public {
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(catalogDeployer);
        catalog.unregisterReleasesContract(address(releases));
        vm.stopPrank();
    }

    /// Releases track access

    function releases_Approval_Setup() public {
        registerTrack_SetUp();
        registerReleasesContract_setUp();
    }

    function test_setReleasesApproval() public {
        releases_Approval_Setup();
        vm.startPrank(artist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releases), true);
        vm.stopPrank();

        assertEq(catalog.getReleasesApproval(trackRegistrationData.trackId, address(releases)), true);
    }

    function test_setReleasesApproval_emits_event() public {
        releases_Approval_Setup();
        vm.expectEmit(true, true, true, true);
        emit TrackApprovedToReleases(trackRegistrationData.trackId, address(releases));
        vm.startPrank(artist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releases), true);
        vm.stopPrank();
    }

    function test_setReleasesApprovalForAll() public {
        releases_Approval_Setup();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.stopPrank();

        assertEq(catalog.getReleasesApprovalForAll(artist, address(releases)), true);
    }

    function test_setReleasesApprovalForAll_emits_event() public {
        releases_Approval_Setup();
        vm.expectEmit(true, true, true, true);
        emit AllTracksApprovedToReleases(artist, address(releases));
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.stopPrank();
    }

    function test_remove_ReleasesApproval() public {
        releases_Approval_Setup();
        vm.startPrank(artist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releases), true);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releases), false);
        vm.stopPrank();

        assertEq(catalog.getReleasesApproval(trackRegistrationData.trackId, address(releases)), false);
    }

    function test_remove_ReleasesApproval_emits_event() public {
        releases_Approval_Setup();
        vm.startPrank(artist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releases), true);
        vm.expectEmit(true, true, true, true);
        emit TrackRemovedFromReleases(trackRegistrationData.trackId, address(releases));
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releases), false);
        vm.stopPrank();
    }

    function test_remove_ReleasesApprovalForAll() public {
        releases_Approval_Setup();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        catalog.setReleasesApprovalForAll(artist, address(releases), false);
        vm.stopPrank();

        assertEq(catalog.getReleasesApprovalForAll(artist, address(releases)), false);
    }

    function test_remove_ReleasesApprovalForAll_emits_event() public {
        releases_Approval_Setup();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.expectEmit(true, true, true, true);
        emit AllTracksRemovedFromReleases(artist, address(releases));
        catalog.setReleasesApprovalForAll(artist, address(releases), false);
        vm.stopPrank();
    }

    /// Releases track access revert

    function test_RevertWhen_calling_setReleasesApproval_And_Not_Artist() public {
        releases_Approval_Setup();
        address nonArtist = address(0x9);
        vm.expectRevert(Catalog.MustBeTrackOwnerOrManager.selector);
        vm.startPrank(nonArtist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releases), true);
        vm.stopPrank();
    }

    function test_RevertWhen_calling_setReleasesApproval_And_Releases_Contract_Not_Registered() public {
        releases_Approval_Setup();
        address nonRegisteredReleasesContract = address(0x9);
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(artist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, nonRegisteredReleasesContract, true);
        vm.stopPrank();
    }

    function test_RevertWhen_calling_setReleasesApprovalForAll_And_Not_Artist() public {
        releases_Approval_Setup();
        address nonArtist = address(0x9);
        vm.expectRevert(Catalog.MustBeTrackOwnerOrManager.selector);
        vm.startPrank(nonArtist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.stopPrank();
    }

    function test_RevertWhen_calling_setReleasesApprovalForAll_And_Releases_Contract_Not_Registered()
        public
    {
        releases_Approval_Setup();
        address nonRegisteredReleasesContract = address(0x9);
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, nonRegisteredReleasesContract, true);
        vm.stopPrank();
    }

    /// Registering a Release

    function registeringRelease_setUp() public {
        registerReleasesContract_setUp();
        string memory trackRegistrationHashOne = "trackHashOne";
        string memory trackRegistrationHashTwo = "trackHashTwo";

        vm.startPrank(artist);
        catalog.registerTrack(artist, trackRegistrationData.trackBeneficiary, trackRegistrationHashOne);
        catalog.registerTrack(artist, trackRegistrationData.trackBeneficiary, trackRegistrationHashTwo);
        vm.stopPrank();

        string memory trackIdOne = catalog.getTrackId(trackRegistrationHashOne);
        string memory trackIdTwo = catalog.getTrackId(trackRegistrationHashTwo);
        string[] memory trackIds = new string[](2);
        trackIds[0] = trackIdOne;
        trackIds[1] = trackIdTwo;
        registeringReleaseData = RegisteringReleaseData({trackIds: trackIds, uri: "uri", tokenId: 1});
    }

    function test_registerRelease_With_Approval_All() public {
        registeringRelease_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.stopPrank();
        vm.startPrank(address(releases));
        console2.logAddress(address(releases));

        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();

        bytes32 releaseHash = catalog.getReleaseHash(address(releases), registeringReleaseData.tokenId);
        Catalog.RegisteredRelease memory registeredRelease = catalog.getRegisteredRelease(releaseHash);

        assertEq(registeredRelease.releases, address(releases));
        assertEq(registeredRelease.tokenId, registeringReleaseData.tokenId);
        assertEq(registeredRelease.trackIds[0], registeringReleaseData.trackIds[0]);
        assertEq(registeredRelease.trackIds[1], registeringReleaseData.trackIds[1]);
    }

    function test_registerRelease_With_Approval() public {
        registeringRelease_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApproval(registeringReleaseData.trackIds[0], address(releases), true);
        catalog.setReleasesApproval(registeringReleaseData.trackIds[1], address(releases), true);
        vm.stopPrank();
        assertEq(catalog.getReleasesApprovalForAll(artist, address(releases)), false);
        vm.startPrank(address(releases));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
        bytes32 releaseHash = catalog.getReleaseHash(address(releases), registeringReleaseData.tokenId);
        Catalog.RegisteredRelease memory registeredRelease = catalog.getRegisteredRelease(releaseHash);

        assertEq(registeredRelease.releases, address(releases));
        assertEq(registeredRelease.tokenId, registeringReleaseData.tokenId);
        assertEq(registeredRelease.trackIds[0], registeringReleaseData.trackIds[0]);
        assertEq(registeredRelease.trackIds[1], registeringReleaseData.trackIds[1]);
    }

    function test_registerRelease_emits_event() public {
        registeringRelease_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.stopPrank();
        vm.expectEmit(true, true, true, true);
        emit ReleaseRegistered(
            registeringReleaseData.trackIds, address(releases), registeringReleaseData.tokenId
        );
        vm.startPrank(address(releases));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_unregisterRelease() public {
        registeringRelease_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.stopPrank();
        vm.startPrank(address(releases));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();

        bytes32 releaseHash = catalog.getReleaseHash(address(releases), registeringReleaseData.tokenId);
        vm.startPrank(catalogDeployer);
        catalog.unregisterRelease(releaseHash);
        vm.stopPrank();

        assertEq(catalog.getRegisteredRelease(releaseHash).releases, address(0));
    }

    function test_unregisterRelease_emits_event() public {
        registeringRelease_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.stopPrank();
        vm.startPrank(address(releases));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();

        bytes32 releaseHash = catalog.getReleaseHash(address(releases), registeringReleaseData.tokenId);
        vm.expectEmit(true, true, true, true);
        emit ReleaseUnregistered(releaseHash);
        vm.startPrank(catalogDeployer);
        catalog.unregisterRelease(releaseHash);
        vm.stopPrank();
    }

    /// Registering a Release revert

    function test_RevertWhen_Calling_Releases_Contract_Is_Not_Registered() public {
        registeringRelease_setUp();
        address nonRegisteredReleasesContract = address(0x9);
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(nonRegisteredReleasesContract);
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_RevertWhen_Tracks_Are_Unregistered() public {
        registeringRelease_setUp();
        string memory unregisteredTrackId = "unregisteredTrackId";
        string[] memory unregisteredTrackIds = new string[](2);
        unregisteredTrackIds[0] = unregisteredTrackId;
        unregisteredTrackIds[1] = unregisteredTrackId;
        vm.expectRevert(Catalog.TrackIsNotRegistered.selector);
        vm.startPrank(address(releases));
        catalog.registerRelease(
            unregisteredTrackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_RevertWhen_Track_Is_Not_Validated() public {
        registeringRelease_setUp();
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        catalog.setTrackStatus(
            registeringReleaseData.trackIds[0], ITrackRegistration.TrackStatus.INVALIDATED
        );

        vm.expectRevert(Catalog.TrackIsInvalid.selector);
        vm.startPrank(address(releases));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_RevertWhen_Releases_Contract_Does_Not_Have_Approval() public {
        registeringRelease_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), false);
        vm.stopPrank();
        vm.expectRevert(Catalog.ReleasesContractDoesNotHavePermission.selector);
        vm.startPrank(address(releases));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_RevertWhen_Release_Is_A_Duplicate() public {
        registeringRelease_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.stopPrank();
        vm.startPrank(address(releases));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
        vm.expectRevert(Catalog.ReleaseAlreadyCreated.selector);
        vm.startPrank(address(releases));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    /// Fetching all tracks from a release

    function test_getReleaseTracks() public {
        registeringRelease_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.stopPrank();
        vm.startPrank(address(releases));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
        string[] memory trackIds =
            catalog.getReleaseTracks(address(releases), registeringReleaseData.tokenId);

        assertEq(trackIds[0], registeringReleaseData.trackIds[0]);
        assertEq(trackIds[1], registeringReleaseData.trackIds[1]);
    }
}
