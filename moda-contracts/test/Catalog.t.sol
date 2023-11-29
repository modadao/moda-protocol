// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Test, console2} from "forge-std/Test.sol";
import "../src/Catalog.sol";
import {ModaRegistry} from "../src/ModaRegistry.sol";
import {Management} from "../src/Management.sol";
import {Membership} from "../test/mocks/MembershipMock.sol";
import {ITrackRegistration} from "../src/interfaces/Catalog/ITrackRegistration.sol";
import "../src/Releases.sol";
import "../src/ReleasesFactory.sol";

contract CatalogTest is Test {
    Catalog public catalog;
    Management public management;
    Membership public membership;
    ModaRegistry public modaRegistry;
    ReleasesFactory public releasesFactory;
    Releases public releasesMaster;
    Releases public releases;

    address public catalogAdmin = address(0x1);
    string public catalogName = "ACME-CATALOG";
    string public catalogVersion = "1";
    address public artist = address(0x4);
    address payable public treasuryAddress = payable(address(0x11));
    address public splitsFactory = address(0x12);

    error InvalidInitialization();

    event TrackRegistered(string trackRegistrationHash, string trackId, address indexed trackOwner);
    event TrackRegistrationHashUpdated(
        string trackId, string newTrackRegistrationHash, address indexed trackOwner
    );
    event TrackUpdated(
        ICatalog.TrackStatus indexed trackStatus,
        address indexed trackOwner,
        address trackBeneficiary,
        string trackRegistrationHash,
        string fingerprintHash,
        string validationHash,
        address trackVerifier
    );
    event ReleasesRegistered(address releases, address indexed releasesOwner);
    event ReleasesUnregistered(address releases, address indexed releasesOwner);
    event TrackApprovalChanged(string trackId, address indexed releases, bool hasApproval);
    event AllTracksApprovalChanged(address indexed artist, address indexed releases, bool hasApproval);
    event ReleaseRegistered(string[] trackIds, address releases, uint256 tokenId);
    event ReleaseUnregistered(bytes32 releaseHash);

    function setUp() public {
        management = new Management();
        membership = new Membership();
        modaRegistry = new ModaRegistry(treasuryAddress, 1000, splitsFactory, management);
        catalog = new Catalog();
        releasesMaster = new Releases();
        releasesFactory = new ReleasesFactory(address(modaRegistry), address(releasesMaster));

        vm.startPrank(catalogAdmin);
        catalog.initialize(catalogName, catalogVersion, address(modaRegistry), membership);
        vm.stopPrank();

        modaRegistry.grantRole(keccak256("RELEASES_REGISTRAR_ROLE"), address(releasesFactory));
        address[] memory releaseAdmins = new address[](1);
        releaseAdmins[0] = artist;
        releasesFactory.create(releaseAdmins, "name", "symbol", address(catalog));

        releases = Releases(catalog.getReleasesContract(address(this)));

        membership.addMember(artist);
        modaRegistry.registerCatalog(address(catalog));
    }

    function setup_auto_verified(address account) public {
        membership.addMember(account);
        modaRegistry.grantRole(keccak256("AUTO_VERIFIED_ROLE"), account);
    }

    /// Initialization revert

    function test_initialize_RevertIf_already_initialized() public {
        setUp();
        vm.expectRevert(InvalidInitialization.selector);
        vm.startPrank(catalogAdmin);
        catalog.initialize(catalogName, catalogVersion, address(modaRegistry), membership);
        vm.stopPrank();
    }

    /// registerTrack

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

    function registerTrack_setUp() public {
        vm.startPrank(artist);
        catalog.registerTrack(
            artist, trackRegistrationData.trackBeneficiary, trackRegistrationData.trackRegistrationHash
        );
        vm.stopPrank();
        trackRegistrationData.trackId = catalog.getTrackId(trackRegistrationData.trackRegistrationHash);
    }

    function test_registerTrack() public {
        registerTrack_setUp();
        Catalog.RegisteredTrack memory track = catalog.getTrack(trackRegistrationData.trackId);

        assertEq(uint256(track.trackStatus), uint256(ITrackRegistration.TrackStatus.PENDING));
        assertEq(track.trackOwner, artist);
        assertEq(track.trackBeneficiary, trackRegistrationData.trackBeneficiary);
        assertEq(track.trackRegistrationHash, trackRegistrationData.trackRegistrationHash);
        assertEq(track.fingerprintHash, "");
        assertEq(track.validationHash, "");
    }

    function test_registerTrack_RevertIf_track_already_registered() public {
        registerTrack_setUp();

        vm.expectRevert(Catalog.TrackAlreadyRegistered.selector);
        vm.startPrank(artist);
        catalog.registerTrack(
            artist, trackRegistrationData.trackBeneficiary, trackRegistrationData.trackRegistrationHash
        );
        vm.stopPrank();
    }

    function test_registerTrack_RevertIf_user_not_member() public {
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

    function test_registerTrack_RevertIf_user_not_artist() public {
        address nonArtist = address(0x9);
        membership.addMember(nonArtist);
        vm.startPrank(nonArtist);
        vm.expectRevert(Catalog.MustBeTrackOwnerOrManager.selector);
        catalog.registerTrack(
            artist, trackRegistrationData.trackBeneficiary, trackRegistrationData.trackRegistrationHash
        );
        vm.stopPrank();
    }

    function test_registerTrack_emits_event() public {
        vm.expectEmit(true, true, true, true);
        emit TrackRegistered("trackHash", "ACME-CATALOG-31337-1-TRACK-ID-0", artist);
        vm.startPrank(artist);
        catalog.registerTrack(
            artist, trackRegistrationData.trackBeneficiary, trackRegistrationData.trackRegistrationHash
        );
        vm.stopPrank();
    }

    // registerTrack as manager

    TrackRegistrationData trackRegistrationDataManager = TrackRegistrationData({
        trackBeneficiary: address(0x5),
        trackRegistrationHash: "trackHashManager",
        trackId: ""
    });

    function test_registerTrack_as_manager_setUp() public {
        vm.startPrank(artist);
        address manager = address(0x6);
        membership.addMember(manager);
        address[] memory managers = new address[](1);
        managers[0] = manager;
        management.addManagers(managers);
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

    function test_registerTrack_as_manager() public {
        test_registerTrack_as_manager_setUp();
        Catalog.RegisteredTrack memory track = catalog.getTrack(trackRegistrationDataManager.trackId);

        assertEq(uint256(track.trackStatus), uint256(ITrackRegistration.TrackStatus.PENDING));
        assertEq(track.trackOwner, artist);
        assertEq(track.trackBeneficiary, trackRegistrationDataManager.trackBeneficiary);
        assertEq(track.trackRegistrationHash, trackRegistrationDataManager.trackRegistrationHash);
        assertEq(track.fingerprintHash, "");
        assertEq(track.validationHash, "");
    }

    // registerTrack with AUTO_VERIFIED_ROLE

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

    /// setTrackStatus

    function setTrackStatus_setUp() public {
        registerTrack_setUp();
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        catalog.setTrackStatus(trackRegistrationData.trackId, ITrackRegistration.TrackStatus.VALIDATED);
    }

    function test_setTrackStatus() public {
        setTrackStatus_setUp();
        assertEq(
            uint256(catalog.getTrack(trackRegistrationData.trackId).trackStatus),
            uint256(ITrackRegistration.TrackStatus.VALIDATED)
        );
    }

    function test_setTrackStatus_RevertIf_no_verifier_role() public {
        registerTrack_setUp();
        address nonVerifier = address(0x9);
        vm.expectRevert(Catalog.VerifierRoleRequired.selector);
        vm.startPrank(nonVerifier);
        catalog.setTrackStatus(trackRegistrationData.trackId, ITrackRegistration.TrackStatus.VALIDATED);
        vm.stopPrank();
    }

    function test_setTrackStatus_RevertIf_track_not_registered() public {
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        string memory unregisteredId = "unregisteredId";
        vm.expectRevert(Catalog.TrackIsNotRegistered.selector);
        catalog.setTrackStatus(unregisteredId, ITrackRegistration.TrackStatus.VALIDATED);
    }

    function test_setTrackStatus_emits_event() public {
        registerTrack_setUp();
        modaRegistry.grantRole(keccak256("VERIFIER_ROLE"), address(this));
        vm.expectEmit(true, true, true, true);
        emit TrackUpdated(
            ITrackRegistration.TrackStatus.VALIDATED,
            artist,
            trackRegistrationData.trackBeneficiary,
            trackRegistrationData.trackRegistrationHash,
            "",
            "",
            address(this)
        );
        catalog.setTrackStatus(trackRegistrationData.trackId, ITrackRegistration.TrackStatus.VALIDATED);
    }

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

    // setTrackBeneficiary

    function test_setTrackBeneficiary() public {
        registerTrack_setUp();
        vm.startPrank(artist);
        catalog.setTrackBeneficiary(trackRegistrationData.trackId, updateTrackData.newTrackBeneficiary);
        vm.stopPrank();
        assertEq(
            catalog.getTrack(trackRegistrationData.trackId).trackBeneficiary,
            updateTrackData.newTrackBeneficiary
        );
    }

    function test_setTrackBeneficiary_RevertIf_track_not_registered() public {
        string memory unregisteredId = "unregisteredId";
        vm.expectRevert(Catalog.TrackIsNotRegistered.selector);
        vm.startPrank(artist);
        catalog.setTrackBeneficiary(unregisteredId, updateTrackData.newTrackBeneficiary);
        vm.stopPrank();
    }

    function test_setTrackBeneficiary_RevertIf_not_track_owner() public {
        registerTrack_setUp();
        address nonOwner = address(0x9);
        vm.expectRevert(Catalog.MustBeTrackOwnerOrManager.selector);
        vm.startPrank(nonOwner);
        catalog.setTrackBeneficiary(trackRegistrationData.trackId, updateTrackData.newTrackBeneficiary);
        vm.stopPrank();
    }

    function test_setTrackBeneficiary_emits_event() public {
        registerTrack_setUp();
        vm.expectEmit(true, true, true, true);
        emit TrackUpdated(
            ITrackRegistration.TrackStatus.PENDING,
            artist,
            updateTrackData.newTrackBeneficiary,
            trackRegistrationData.trackRegistrationHash,
            "",
            "",
            address(0x0)
        );
        vm.startPrank(artist);
        catalog.setTrackBeneficiary(trackRegistrationData.trackId, updateTrackData.newTrackBeneficiary);
        vm.stopPrank();
    }

    // setTrackMetadata

    function test_setTrackMetadata() public {
        registerTrack_setUp();
        vm.startPrank(artist);
        catalog.setTrackMetadata(trackRegistrationData.trackId, updateTrackData.newTrackRegistrationHash);
        vm.stopPrank();
        assertEq(
            catalog.getTrack(trackRegistrationData.trackId).trackRegistrationHash,
            updateTrackData.newTrackRegistrationHash
        );
    }

    function test_setTrackMetadata_RevertIf_track_not_registered() public {
        string memory unregisteredId = "unregisteredId";
        vm.expectRevert(Catalog.TrackIsNotRegistered.selector);
        vm.startPrank(artist);
        catalog.setTrackMetadata(unregisteredId, updateTrackData.newTrackRegistrationHash);
        vm.stopPrank();
    }

    function test_setTrackMetadata_RevertIf_not_track_owner() public {
        registerTrack_setUp();
        address nonOwner = address(0x9);
        vm.expectRevert(Catalog.MustBeTrackOwnerOrManager.selector);
        vm.startPrank(nonOwner);
        catalog.setTrackMetadata(trackRegistrationData.trackId, updateTrackData.newTrackRegistrationHash);
        vm.stopPrank();
    }

    function test_setTrackMetadata_emits_event() public {
        registerTrack_setUp();
        vm.expectEmit(true, true, true, true);
        emit TrackUpdated(
            ITrackRegistration.TrackStatus.PENDING,
            artist,
            trackRegistrationData.trackBeneficiary,
            "newTrackHash",
            "",
            "",
            address(0x0)
        );
        vm.startPrank(artist);
        catalog.setTrackMetadata(trackRegistrationData.trackId, "newTrackHash");
        vm.stopPrank();
    }

    // setTrackFingerprintHash

    function test_setTrackFingerprintHash() public {
        registerTrack_setUp();
        vm.startPrank(artist);
        catalog.setTrackFingerprintHash(trackRegistrationData.trackId, updateTrackData.fingerprintHash);
        vm.stopPrank();
        assertEq(
            catalog.getTrack(trackRegistrationData.trackId).fingerprintHash,
            updateTrackData.fingerprintHash
        );
    }

    function test_setTrackFingerprintHash_RevertIf_track_not_registered() public {
        string memory unregisteredId = "unregisteredId";
        vm.expectRevert(Catalog.TrackIsNotRegistered.selector);
        vm.startPrank(artist);
        catalog.setTrackFingerprintHash(unregisteredId, updateTrackData.fingerprintHash);
        vm.stopPrank();
    }

    function test_setTrackFingerprintHash_RevertIf_not_track_owner() public {
        registerTrack_setUp();
        address nonOwner = address(0x9);
        vm.expectRevert(Catalog.MustBeTrackOwnerOrManager.selector);
        vm.startPrank(nonOwner);
        catalog.setTrackFingerprintHash(trackRegistrationData.trackId, updateTrackData.fingerprintHash);
        vm.stopPrank();
    }

    function test_setTrackFingerprintHash_emits_event() public {
        registerTrack_setUp();
        vm.expectEmit(true, true, true, true);
        emit TrackUpdated(
            ITrackRegistration.TrackStatus.PENDING,
            artist,
            trackRegistrationData.trackBeneficiary,
            trackRegistrationData.trackRegistrationHash,
            "fingerprintHash",
            "",
            address(0x0)
        );
        vm.startPrank(artist);
        catalog.setTrackFingerprintHash(trackRegistrationData.trackId, "fingerprintHash");
        vm.stopPrank();
    }

    // setTrackValidationHash

    function test_setTrackValidationHash() public {
        registerTrack_setUp();
        vm.startPrank(artist);
        catalog.setTrackValidationHash(trackRegistrationData.trackId, updateTrackData.validationHash);
        vm.stopPrank();
        assertEq(
            catalog.getTrack(trackRegistrationData.trackId).validationHash,
            updateTrackData.validationHash
        );
    }

    function test_setTrackValidationHash_RevertIf_track_not_registered() public {
        string memory unregisteredId = "unregisteredId";
        vm.expectRevert(Catalog.TrackIsNotRegistered.selector);
        vm.startPrank(artist);
        catalog.setTrackValidationHash(unregisteredId, updateTrackData.validationHash);
        vm.stopPrank();
    }

    function test_setTrackValidationHash_RevertIf_not_track_owner() public {
        registerTrack_setUp();
        address nonOwner = address(0x9);
        vm.expectRevert(Catalog.MustBeTrackOwnerOrManager.selector);
        vm.startPrank(nonOwner);
        catalog.setTrackValidationHash(trackRegistrationData.trackId, updateTrackData.validationHash);
        vm.stopPrank();
    }

    function test_setTrackValidationHash_emits_event() public {
        registerTrack_setUp();
        vm.expectEmit(true, true, true, true);
        emit TrackUpdated(
            ITrackRegistration.TrackStatus.PENDING,
            artist,
            trackRegistrationData.trackBeneficiary,
            trackRegistrationData.trackRegistrationHash,
            "",
            "validationHash",
            address(0x0)
        );
        vm.startPrank(artist);
        catalog.setTrackValidationHash(trackRegistrationData.trackId, "validationHash");
        vm.stopPrank();
    }

    /// registerReleasesContract

    struct RegisterReleasesContractData {
        address releasesRegistrar;
        address releases;
        address releasesOwner;
    }

    RegisterReleasesContractData registerReleasesContractData = RegisterReleasesContractData({
        releasesRegistrar: address(0x6),
        releases: address(0x13),
        releasesOwner: address(0x8)
    });

    function registerReleasesContract_setUp() public {
        modaRegistry.grantRole(
            keccak256("RELEASES_REGISTRAR_ROLE"), registerReleasesContractData.releasesRegistrar
        );
        vm.startPrank(registerReleasesContractData.releasesRegistrar);
        catalog.registerReleasesContract(
            registerReleasesContractData.releases, registerReleasesContractData.releasesOwner
        );
        vm.stopPrank();
    }

    function test_registerReleasesContract() public {
        registerReleasesContract_setUp();
        assertEq(
            catalog.getReleasesOwner(registerReleasesContractData.releases),
            registerReleasesContractData.releasesOwner
        );
    }

    function test_registerReleasesContract_RevertIf_no_releases_registrar_role() public {
        address nonReleasesRegistrar = address(0x9);
        vm.expectRevert(Catalog.ReleasesRegistrarRoleRequired.selector);
        vm.startPrank(nonReleasesRegistrar);
        catalog.registerReleasesContract(
            registerReleasesContractData.releases, registerReleasesContractData.releasesOwner
        );
        vm.stopPrank();
    }

    function test_registerReleasesContract_RevertIf_releases_contract_already_registered() public {
        registerReleasesContract_setUp();
        vm.expectRevert(Catalog.ReleasesContractIsAlreadyRegistered.selector);
        vm.startPrank(registerReleasesContractData.releasesRegistrar);
        catalog.registerReleasesContract(
            registerReleasesContractData.releases, registerReleasesContractData.releasesOwner
        );
        vm.stopPrank();
    }

    function test_registerReleasesContract_emits_event() public {
        modaRegistry.grantRole(
            keccak256("RELEASES_REGISTRAR_ROLE"), registerReleasesContractData.releasesRegistrar
        );
        vm.expectEmit(true, true, true, true);
        emit ReleasesRegistered(
            registerReleasesContractData.releases, registerReleasesContractData.releasesOwner
        );
        vm.startPrank(registerReleasesContractData.releasesRegistrar);
        catalog.registerReleasesContract(
            registerReleasesContractData.releases, registerReleasesContractData.releasesOwner
        );
        vm.stopPrank();
    }

    // unregisterReleasesContract

    function test_unregisterReleasesContract() public {
        registerReleasesContract_setUp();
        vm.startPrank(catalogAdmin);
        catalog.unregisterReleasesContract(registerReleasesContractData.releases);
        assertEq(catalog.getReleasesOwner(registerReleasesContractData.releases), address(0));
        vm.stopPrank();
    }

    function test_RevertIf_unregistering_unregistered_releases_contract() public {
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(catalogAdmin);
        catalog.unregisterReleasesContract(registerReleasesContractData.releases);
        vm.stopPrank();
    }

    function test_unregisterReleasesContract_emits_event() public {
        registerReleasesContract_setUp();
        vm.expectEmit(true, true, true, true);
        emit ReleasesUnregistered(
            registerReleasesContractData.releases, registerReleasesContractData.releasesOwner
        );
        vm.startPrank(catalogAdmin);
        catalog.unregisterReleasesContract(registerReleasesContractData.releases);
        vm.stopPrank();
    }

    // setReleasesApproval

    function releases_approval_setUp() public {
        registerTrack_setUp();
        registerReleasesContract_setUp();
    }

    function test_setReleasesApproval() public {
        releases_approval_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releases), true);
        vm.stopPrank();
        assertEq(catalog.getReleasesApproval(trackRegistrationData.trackId, address(releases)), true);
    }

    function test_setReleasesApproval_RevertIf_setting_approval_not_artist() public {
        releases_approval_setUp();
        address nonArtist = address(0x9);
        vm.expectRevert(Catalog.MustBeTrackOwnerOrManager.selector);
        vm.startPrank(nonArtist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releases), true);
        vm.stopPrank();
    }

    function test_setReleasesApproval_RevertIf_setting_approval_with_unregistered_releases_contract()
        public
    {
        releases_approval_setUp();
        address nonRegisteredReleasesContract = address(0x9);
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(artist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, nonRegisteredReleasesContract, true);
        vm.stopPrank();
    }

    function test_setReleasesApproval_emits_event() public {
        releases_approval_setUp();
        vm.expectEmit(true, true, true, true);
        emit TrackApprovalChanged(trackRegistrationData.trackId, address(releases), true);
        vm.startPrank(artist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releases), true);
        vm.stopPrank();
    }

    function test_remove_releases_approval() public {
        releases_approval_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releases), true);
        catalog.setReleasesApproval(trackRegistrationData.trackId, address(releases), false);
        vm.stopPrank();
        assertEq(catalog.getReleasesApproval(trackRegistrationData.trackId, address(releases)), false);
    }

    // setReleasesApprovalForAll

    function test_setReleasesApprovalForAll() public {
        releases_approval_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.stopPrank();
        assertEq(catalog.getReleasesApprovalForAll(artist, address(releases)), true);
    }

    function test_setReleasesApprovalForAll_RevertIf_setting_approval_not_artist() public {
        releases_approval_setUp();
        address nonArtist = address(0x9);
        vm.expectRevert(Catalog.MustBeTrackOwnerOrManager.selector);
        vm.startPrank(nonArtist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.stopPrank();
    }

    function test_setReleasesApprovalForAll_RevertIf_setting_approval_with_unregistered_releases_contract(
    ) public {
        releases_approval_setUp();
        address nonRegisteredReleasesContract = address(0x9);
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, nonRegisteredReleasesContract, true);
        vm.stopPrank();
    }

    function test_setReleasesApprovalForAll_emits_event() public {
        releases_approval_setUp();
        vm.expectEmit(true, true, true, true);
        emit AllTracksApprovalChanged(artist, address(releases), true);
        vm.startPrank(artist);
        catalog.setReleasesApprovalForAll(artist, address(releases), true);
        vm.stopPrank();
    }

    /// registerRelease

    struct RegisteringReleaseData {
        string[] trackIds;
        string uri;
        uint256 tokenId;
    }

    RegisteringReleaseData registeringReleaseData;

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

    // registerRelease using setReleasesApproval

    function test_registerRelease_with_setReleasesApproval() public {
        registeringRelease_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApproval(registeringReleaseData.trackIds[0], address(releases), true);
        catalog.setReleasesApproval(registeringReleaseData.trackIds[1], address(releases), true);
        vm.stopPrank();
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

    function test_registerRelease_RevertIf_releases_contract_not_registered() public {
        registeringRelease_setUp();
        address nonRegisteredReleasesContract = address(0x9);
        vm.expectRevert(Catalog.ReleasesContractIsNotRegistered.selector);
        vm.startPrank(nonRegisteredReleasesContract);
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_registerRelease_RevertIf_tracks_unregistered() public {
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

    function test_registerRelease_RevertIf_track_not_validated() public {
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

    function test_registerRelease_RevertIf_releases_contract_has_no_approval() public {
        registeringRelease_setUp();
        vm.expectRevert(Catalog.ReleasesContractDoesNotHavePermission.selector);
        vm.startPrank(address(releases));
        catalog.registerRelease(
            registeringReleaseData.trackIds, registeringReleaseData.uri, registeringReleaseData.tokenId
        );
        vm.stopPrank();
    }

    function test_registerRelease_RevertIf_release_duplicate() public {
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

    function test_registerRelease_emits_event() public {
        registeringRelease_setUp();
        vm.startPrank(artist);
        catalog.setReleasesApproval(registeringReleaseData.trackIds[0], address(releases), true);
        catalog.setReleasesApproval(registeringReleaseData.trackIds[1], address(releases), true);
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

    // registerRelease using setReleasesApprovalForAll

    function test_registerRelease_with_setReleasesApprovalForAll() public {
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
        Catalog.RegisteredRelease memory registeredRelease = catalog.getRegisteredRelease(releaseHash);
        assertEq(registeredRelease.releases, address(releases));
        assertEq(registeredRelease.tokenId, registeringReleaseData.tokenId);
        assertEq(registeredRelease.trackIds[0], registeringReleaseData.trackIds[0]);
        assertEq(registeredRelease.trackIds[1], registeringReleaseData.trackIds[1]);
    }

    // unregisterRelease

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
        vm.startPrank(catalogAdmin);
        catalog.unregisterRelease(releaseHash);
        assertEq(catalog.getRegisteredRelease(releaseHash).releases, address(0));
        vm.stopPrank();
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
        vm.startPrank(catalogAdmin);
        catalog.unregisterRelease(releaseHash);
        vm.stopPrank();
    }

    /// getReleaseTracks

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
