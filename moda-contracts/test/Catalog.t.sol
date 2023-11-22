// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import "../src/Catalog.sol";
import {ModaRegistry} from "../src/ModaRegistry.sol";
import {Membership} from "../test/mocks/MembershipMock.sol";
import {ITrackRegistration} from "../src/interfaces/ITrackRegistration.sol";
import "../test/mocks/ReleasesMock.sol";

contract CatalogTest is Test {
    Catalog public catalog;
    Membership public membership;
    ModaRegistry public modaRegistry;
    ReleasesMock public releasesMock;

    address public catalogDeployer = address(0x1);
    string public catalogName = "ACME-CATALOG";
    uint256 public catalogIndex = 0;
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
        releasesMock = new ReleasesMock();
        vm.startPrank(catalogDeployer);
        catalog.initialize(catalogName, catalogVersion, address(modaRegistry));
        vm.stopPrank();
        membership.addMember(artist);
        modaRegistry.registerCatalog(catalogName, address(catalog), membership);
    }

    function setup_auto_verified(address account) public {
        membership.addMember(account);
        modaRegistry.grantRole(keccak256("AUTO_VERIFIED_ROLE"), account);
    }

    /// Initialization revert

    function test_RevertWhen_isInitializedMoreThanOnce() public {
        setUp();
        vm.expectRevert(InvalidInitialization.selector);
        vm.startPrank(catalogDeployer);
        catalog.initialize(catalogName, catalogVersion, address(modaRegistry));
        vm.stopPrank();
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
            artist, trackRegistrationData.trackBeneficiary, trackRegistrationData.trackRegistrationHash
        );
        vm.stopPrank();
        trackRegistrationData.trackId = catalog.getTrackId(trackRegistrationData.trackRegistrationHash);
    }

    function test_trackRegistration() public {
        trackRegistrationSetUp();
        Catalog.RegisteredTrack memory track = catalog.getTrack(trackRegistrationData.trackId);
        assertEq(uint256(track.trackStatus), uint256(ITrackRegistration.TrackStatus.PENDING));
        assertEq(track.trackOwner, artist);
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
            trackRegistrationDataManager.trackRegistrationHash
        );
        vm.stopPrank();
        trackRegistrationDataManager.trackId =
            catalog.getTrackId(trackRegistrationDataManager.trackRegistrationHash);
    }

    function test_trackRegistrationAsManager() public {
        test_trackRegistrationAsManagerSetUp();
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

    function test_RevertWhen_UserIsNotArtist() public {
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

    function setTrackStatusSetUp() public {
        trackRegistrationSetUp();
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        catalog.setTrackStatus(trackRegistrationData.trackId, ITrackRegistration.TrackStatus.VALIDATED);
    }

    function test_setTrackStatus() public {
        setTrackStatusSetUp();
        assertEq(
            uint256(catalog.getTrack(trackRegistrationData.trackId).trackStatus),
            uint256(ITrackRegistration.TrackStatus.VALIDATED)
        );
    }

    /// Update track status revert

    function test_RevertWhen_UserDoesNotHaveVerifierRole() public {
        trackRegistrationSetUp();
        address nonVerifier = address(0x9);
        vm.expectRevert(Catalog.VerifierRoleRequired.selector);
        vm.startPrank(nonVerifier);
        catalog.setTrackStatus(trackRegistrationData.trackId, ITrackRegistration.TrackStatus.VALIDATED);
        vm.stopPrank();
    }

    function test_RevertWhen_TrackIsNotRegistered() public {
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        string memory unregisteredId = "unregisteredId";
        vm.expectRevert(Catalog.TrackIsNotRegistered.selector);
        catalog.setTrackStatus(unregisteredId, ITrackRegistration.TrackStatus.VALIDATED);
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
        address releasesOwner;
    }

    RegisterReleasesContractData registerReleasesContractData =
        RegisterReleasesContractData({releasesRegistrar: address(0x6), releasesOwner: address(0x8)});

    function registerReleasesContractSetup() public {
        modaRegistry.grantRole(
            keccak256("RELEASES_REGISTRAR_ROLE"), registerReleasesContractData.releasesRegistrar
        );
        vm.startPrank(registerReleasesContractData.releasesRegistrar);
        catalog.registerReleasesContract(
            address(releasesMock), registerReleasesContractData.releasesOwner
        );
        vm.stopPrank();
    }

    function test_registerReleasesContract() public {
        registerReleasesContractSetup();
        assertEq(
            catalog.getReleasesOwner(address(releasesMock)), registerReleasesContractData.releasesOwner
        );
    }

    function test_unregisterReleasesContract() public {
        registerReleasesContractSetup();
        vm.startPrank(catalogDeployer);
        catalog.unregisterReleasesContract(address(releasesMock));
        assertEq(catalog.getReleasesOwner(address(releasesMock)), address(0));
        vm.stopPrank();
    }

    /// Releases contract Registration revert

    function test_RevertWhen_CallerDoesNotHaveReleasesRegistrarRole() public {
        address nonReleasesRegistrar = address(0x9);
        vm.expectRevert(Catalog.ReleasesRegistrarRoleRequired.selector);
        vm.startPrank(nonReleasesRegistrar);
        catalog.registerReleasesContract(
            address(releasesMock), registerReleasesContractData.releasesOwner
        );
        vm.stopPrank();
    }

    function test_RevertWhen_ReleasesContractAlreadyRegistered() public {
        registerReleasesContractSetup();
        vm.expectRevert(Catalog.ReleasesContractIsAlreadyRegistered.selector);
        vm.startPrank(registerReleasesContractData.releasesRegistrar);
        catalog.registerReleasesContract(
            address(releasesMock), registerReleasesContractData.releasesOwner
        );
        vm.stopPrank();
    }

    function test_RevertWhen_UnregisteringAnUnregisteredReleasesContract() public {
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(catalogDeployer);
        catalog.unregisterReleasesContract(address(releasesMock));
        vm.stopPrank();
    }

    /// Releases track access

    function releasesTrackAccessSetup() public {
        trackRegistrationSetUp();
        registerReleasesContractSetup();
    }

    function test_setReleasesApproval() public {
        releasesTrackAccessSetup();
        vm.startPrank(artist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releasesMock), true);
        vm.stopPrank();
        assertEq(catalog.getReleasesApproval(trackRegistrationData.trackId, address(releasesMock)), true);
    }

    function test_setReleasesApprovalForAll() public {
        releasesTrackAccessSetup();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releasesMock), true);
        vm.stopPrank();
        assertEq(catalog.getReleasesApprovalForAll(artist, address(releasesMock)), true);
    }

    function test_removeReleasesAccessSingle() public {
        releasesTrackAccessSetup();
        vm.startPrank(artist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releasesMock), true);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releasesMock), false);
        vm.stopPrank();
        assertEq(
            catalog.getReleasesApproval(trackRegistrationData.trackId, address(releasesMock)), false
        );
    }

    /// Releases track access revert

    function test_RevertWhen_GrantingAccessSingleAndNotArtist() public {
        releasesTrackAccessSetup();
        address nonArtist = address(0x9);
        vm.expectRevert(Catalog.MustBeTrackOwnerOrManager.selector);
        vm.startPrank(nonArtist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releasesMock), true);
        vm.stopPrank();
    }

    function test_RevertWhen_GrantingAccessSingleAndReleasesContractNotRegistered() public {
        releasesTrackAccessSetup();
        address nonRegisteredReleasesContract = address(0x9);
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(artist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, nonRegisteredReleasesContract, true);
        vm.stopPrank();
    }

    function test_RevertWhen_GrantingAccessAllAndNotArtist() public {
        releasesTrackAccessSetup();
        address nonArtist = address(0x9);
        vm.expectRevert(Catalog.MustBeTrackOwnerOrManager.selector);
        vm.startPrank(nonArtist);
        catalog.setReleasesApprovalForAll(artist, address(releasesMock), true);
        vm.stopPrank();
    }

    function test_RevertWhen_GrantingAccessAllAndReleasesContractNotRegistered() public {
        releasesTrackAccessSetup();
        address nonRegisteredReleasesContract = address(0x9);
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, nonRegisteredReleasesContract, true);
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

    function test_registerReleaseWithApprovalAll() public {
        registeringReleaseSetup();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releasesMock), true);
        vm.stopPrank();
        vm.startPrank(address(releasesMock));
        console2.logAddress(address(releasesMock));

        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();

        bytes32 releaseHash =
            catalog.getReleaseHash(address(releasesMock), registeringReleaseData.tokenId);
        Catalog.RegisteredRelease memory registeredRelease = catalog.getRegisteredRelease(releaseHash);
        assertEq(registeredRelease.releases, address(releasesMock));
        assertEq(registeredRelease.tokenId, registeringReleaseData.tokenId);
        assertEq(registeredRelease.trackIds[0], registeringReleaseData.trackIds[0]);
        assertEq(registeredRelease.trackIds[1], registeringReleaseData.trackIds[1]);
    }

    function test_registerReleaseWithApprovalSingle() public {
        registeringReleaseSetup();
        vm.startPrank(artist);
        catalog.setReleasesApproval(registeringReleaseData.trackIds[0], address(releasesMock), true);
        catalog.setReleasesApproval(registeringReleaseData.trackIds[1], address(releasesMock), true);
        vm.stopPrank();
        assertEq(catalog.getReleasesApprovalForAll(artist, address(releasesMock)), false);
        vm.startPrank(address(releasesMock));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
        bytes32 releaseHash =
            catalog.getReleaseHash(address(releasesMock), registeringReleaseData.tokenId);
        Catalog.RegisteredRelease memory registeredRelease = catalog.getRegisteredRelease(releaseHash);
        assertEq(registeredRelease.releases, address(releasesMock));
        assertEq(registeredRelease.tokenId, registeringReleaseData.tokenId);
        assertEq(registeredRelease.trackIds[0], registeringReleaseData.trackIds[0]);
        assertEq(registeredRelease.trackIds[1], registeringReleaseData.trackIds[1]);
    }

    function test_unregisteringRelease() public {
        registeringReleaseSetup();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releasesMock), true);
        vm.stopPrank();
        vm.startPrank(address(releasesMock));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();

        bytes32 releaseHash =
            catalog.getReleaseHash(address(releasesMock), registeringReleaseData.tokenId);
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
        vm.startPrank(address(releasesMock));
        catalog.registerRelease(
            unregisteredTrackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_RevertWhen_TrackIsNotValidated() public {
        registeringReleaseSetup();
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        catalog.setTrackStatus(
            registeringReleaseData.trackIds[0], ITrackRegistration.TrackStatus.INVALIDATED
        );

        vm.expectRevert(Catalog.TrackIsInvalid.selector);
        vm.startPrank(address(releasesMock));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_RevertWhen_ReleasesContractDoesNotHavePermission() public {
        registeringReleaseSetup();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releasesMock), false);
        vm.stopPrank();
        vm.expectRevert(Catalog.ReleasesContractDoesNotHavePermission.selector);
        vm.startPrank(address(releasesMock));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_RevertWhen_ReleaseIsADuplicate() public {
        registeringReleaseSetup();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releasesMock), true);
        vm.stopPrank();
        vm.startPrank(address(releasesMock));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
        vm.expectRevert(Catalog.ReleaseAlreadyCreated.selector);
        vm.startPrank(address(releasesMock));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    /// Fetching all tracks from a release

    function test_getTracksFromRelease() public {
        registeringReleaseSetup();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releasesMock), true);
        vm.stopPrank();
        vm.startPrank(address(releasesMock));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
        string[] memory trackIds =
            catalog.getReleaseTracks(address(releasesMock), registeringReleaseData.tokenId);
        assertEq(trackIds[0], registeringReleaseData.trackIds[0]);
        assertEq(trackIds[1], registeringReleaseData.trackIds[1]);
    }
}
