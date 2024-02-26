// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import "forge-std/Test.sol";
import {Profile} from "../src/Profile.sol";
import {IProfile} from "../src/interfaces/Profile/IProfile.sol";
import {IERC4906} from "../src/interfaces/ERC/IERC4906.sol";
import {ISimpleOwnership} from "../src/interfaces/Profile/ISimpleOwnership.sol";
import {IERC165, ERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import {IERC721Metadata} from "@openzeppelin/contracts/interfaces/IERC721Metadata.sol";
import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";
import {IERC2981} from "@openzeppelin/contracts/interfaces/IERC2981.sol";
import {OwnedContractMock} from "./mocks/OwnedContractMock.sol";
import {AccessControlledMock} from "./mocks/AccessControlledMock.sol";

contract ProfileTest is Test {
    error ProfileAlreadyMinted();
    error ProfileDoesNotExist();
    error ProfilesAreSoulBound();
    error CallerNotAuthorized();

    Profile public profile;

    address public firstUser = address(0x1);
    address public secondUser = address(0x2);

    string public name = "Profile";
    string public symbol = "PROF";

    string public firstUri = "ipfs://<CID-1>";
    string public secondUri = "ipfs://<CID-2>";

    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;

    event Transfer(address indexed from, address indexed to, uint256 indexed amount);
    event MetadataUpdate(uint256 _tokenId);
    event ProfileChangedFor(address indexed kontract, address indexed caller);

    function setUp() public {
        profile = new Profile(name, symbol);
    }

    // constructor

    function test_constructor() public {
        assertEq(profile.name(), name);
        assertEq(profile.symbol(), symbol);
    }

    // mint

    function test_mint_creates_new_token() public {
        uint256 tokenId = 1;

        vm.startPrank(firstUser);
        profile.mint(firstUri);
        vm.stopPrank();

        assertEq(profile.accountUri(firstUser), firstUri);
        assertEq(profile.tokenURI(tokenId), firstUri);
        assertEq(profile.ownerOf(tokenId), firstUser);
        assertEq(profile.totalSupply(), tokenId);
    }

    function test_mint_reverts_for_duplicates() public {
        profile.mint(firstUri);
        vm.expectRevert(ProfileAlreadyMinted.selector);
        profile.mint(firstUri);
    }

    function test_mint_emits_event() public {
        vm.startPrank(firstUser);
        vm.expectEmit(true, true, true, false);
        uint256 tokenId = 1;
        emit Transfer(address(profile), firstUser, tokenId);
        profile.mint(firstUri);
        vm.stopPrank();
    }

    function test_mint_increments_total_supply() public {
        vm.startPrank(firstUser);
        profile.mint(firstUri);
        vm.stopPrank();

        assertEq(profile.totalSupply(), 1);

        vm.startPrank(secondUser);
        profile.mint(secondUri);
        vm.stopPrank();

        assertEq(profile.totalSupply(), 2);
    }

    // mintFor

    function test_mintFor_as_owner() public {
        uint256 tokenId = 1;
        address kontract = address(new OwnedContractMock(firstUser));

        vm.startPrank(firstUser);
        profile.mintFor(kontract, firstUri);
        vm.stopPrank();

        assertEq(profile.accountUri(kontract), firstUri);
        assertEq(profile.tokenURI(tokenId), firstUri);
        assertEq(profile.ownerOf(tokenId), kontract);
        assertEq(profile.totalSupply(), tokenId);
    }

    function test_mintFor_as_IAccessControl_DEFAULT_ADMIN_ROLE() public {
        uint256 tokenId = 1;
        address kontract = address(new AccessControlledMock(firstUser));

        vm.startPrank(firstUser);
        profile.mintFor(kontract, firstUri);
        vm.stopPrank();

        assertEq(profile.accountUri(kontract), firstUri);
        assertEq(profile.tokenURI(tokenId), firstUri);
        assertEq(profile.ownerOf(tokenId), kontract);
        assertEq(profile.totalSupply(), tokenId);
    }

    function test_mintFor_without_DEFAULT_ADMIN_ROLE() public {
        address controlledContract = address(new AccessControlledMock(secondUser));

        vm.startPrank(firstUser);
        vm.expectRevert(CallerNotAuthorized.selector);
        profile.mintFor(controlledContract, firstUri);
        vm.stopPrank();
    }

    function test_mintFor_without_ownership() public {
        address controlledContract = address(new OwnedContractMock(secondUser));

        vm.startPrank(firstUser);
        vm.expectRevert(CallerNotAuthorized.selector);
        profile.mintFor(controlledContract, firstUri);
        vm.stopPrank();
    }

    function test_mintFor_reverts_for_duplicates() public {
        address kontract = address(new OwnedContractMock(firstUser));

        vm.startPrank(firstUser);
        profile.mintFor(kontract, firstUri);
        assertEq(profile.accountUri(kontract), firstUri);

        vm.expectRevert(ProfileAlreadyMinted.selector);
        profile.mintFor(kontract, firstUri);

        vm.stopPrank();
    }

    function test_mintFor_emits_events() public {
        address kontract = address(new OwnedContractMock(firstUser));

        vm.startPrank(firstUser);
        uint256 tokenId = 1;

        vm.expectEmit(true, true, true, false);
        emit Transfer(address(profile), kontract, tokenId);
        emit ProfileChangedFor(kontract, firstUser);
        profile.mintFor(kontract, firstUri);

        vm.stopPrank();
    }

    function test_mintFor_increments_total_supply() public {
        address kontract = address(new OwnedContractMock(firstUser));

        vm.startPrank(firstUser);

        profile.mint(firstUri);
        assertEq(profile.totalSupply(), 1);
        profile.mintFor(kontract, secondUri);
        assertEq(profile.totalSupply(), 2);

        vm.stopPrank();
    }

    // canMintFor

    function test_canMintFor_as_owner() public {
        address kontract = address(new OwnedContractMock(firstUser));

        bool canMint = profile.canMintFor(kontract, firstUser);

        assertTrue(canMint);
    }

    function test_canMintFor_as_IAccessControl_DEFAULT_ADMIN_ROLE() public {
        address kontract = address(new AccessControlledMock(firstUser));

        bool canMint = profile.canMintFor(kontract, firstUser);

        assertTrue(canMint);
    }

    function test_canMintFor_without_DEFAULT_ADMIN_ROLE() public {
        address controlledContract = address(new AccessControlledMock(secondUser));

        bool canMint = profile.canMintFor(controlledContract, firstUser);

        assertFalse(canMint);
    }

    function test_canMintFor_without_ownership() public {
        address controlledContract = address(new OwnedContractMock(secondUser));

        bool canMint = profile.canMintFor(controlledContract, firstUser);

        assertFalse(canMint);
    }

    // totalSupply

    function test_totalSupply_returns_the_token_count() public {
        assertEq(profile.totalSupply(), 0);

        profile.mint(firstUri);

        assertEq(profile.totalSupply(), 1);
    }

    // updateProfile

    function test_updateProfile_sets_new_uri() public {
        uint256 tokenId = 1;

        vm.startPrank(firstUser);

        profile.mint(firstUri);
        assertEq(profile.tokenURI(tokenId), firstUri);
        assertEq(profile.accountUri(firstUser), firstUri);

        profile.updateProfile(secondUri);
        assertEq(profile.tokenURI(tokenId), secondUri);
        assertEq(profile.accountUri(firstUser), secondUri);

        vm.stopPrank();
    }

    function test_updateProfile_reverts_for_nonexisting_profile() public {
        vm.expectRevert(ProfileDoesNotExist.selector);
        profile.updateProfile(firstUri);
    }

    function test_updateProfile_emits_MetadataUpdate() public {
        uint256 tokenId = 1;
        profile.mint(firstUri);

        vm.expectEmit(true, true, true, false);
        emit MetadataUpdate(tokenId);
        profile.updateProfile(secondUri);
    }

    // updateProfileFor

    function test_updateProfileFor_with_ownership_sets_new_uri() public {
        address kontract = address(new OwnedContractMock(firstUser));
        uint256 tokenId = 1;

        vm.startPrank(firstUser);

        profile.mintFor(kontract, firstUri);
        assertEq(profile.tokenURI(tokenId), firstUri);
        assertEq(profile.accountUri(kontract), firstUri);

        profile.updateProfileFor(kontract, secondUri);
        assertEq(profile.tokenURI(tokenId), secondUri);
        assertEq(profile.accountUri(kontract), secondUri);

        vm.stopPrank();
    }

    function test_updateProfileFor_with_AccessControl_DEFAULT_ADMIN_ROLE() public {
        address kontract = address(new AccessControlledMock(firstUser));
        uint256 tokenId = 1;

        vm.startPrank(firstUser);

        profile.mintFor(kontract, firstUri);
        assertEq(profile.tokenURI(tokenId), firstUri);
        assertEq(profile.accountUri(kontract), firstUri);

        profile.updateProfileFor(kontract, secondUri);
        assertEq(profile.tokenURI(tokenId), secondUri);
        assertEq(profile.accountUri(kontract), secondUri);

        vm.stopPrank();
    }

    function test_updateProfileFor_reverts_when_unauthorized() public {
        address kontract = address(new AccessControlledMock(firstUser));

        vm.startPrank(firstUser);
        profile.mintFor(kontract, firstUri);
        assertEq(profile.accountUri(kontract), firstUri);
        vm.stopPrank();

        vm.startPrank(secondUser);
        vm.expectRevert(CallerNotAuthorized.selector);
        profile.updateProfileFor(kontract, secondUri);

        vm.stopPrank();
    }

    function test_updateProfileFor_reverts_for_nonexisting_profile() public {
        address kontract = address(new AccessControlledMock(firstUser));

        vm.startPrank(firstUser);
        vm.expectRevert(ProfileDoesNotExist.selector);
        profile.updateProfileFor(kontract, firstUri);

        vm.stopPrank();
    }

    function test_updateProfileFor_emits_events() public {
        address kontract = address(new AccessControlledMock(firstUser));
        uint256 tokenId = 1;

        vm.startPrank(firstUser);

        profile.mintFor(kontract, firstUri);
        assertEq(profile.accountUri(kontract), firstUri);
        vm.expectEmit(true, true, true, false);
        emit MetadataUpdate(tokenId);
        emit ProfileChangedFor(kontract, firstUser);
        profile.updateProfileFor(kontract, firstUri);

        vm.stopPrank();
    }

    // accountUri

    function test_accountUri() public {
        vm.startPrank(firstUser);
        profile.mint(firstUri);
        vm.stopPrank();

        assertEq(profile.accountUri(firstUser), firstUri);
    }

    function test_accountUri_reverts_with_nonexistent_profile() public {
        vm.expectRevert(ProfileDoesNotExist.selector);

        profile.accountUri(firstUser);
    }

    // tokenUri

    function test_tokenUri() public {
        vm.startPrank(firstUser);
        profile.mint(firstUri);
        vm.stopPrank();

        assertEq(profile.tokenURI(1), firstUri);
    }

    function test_tokenUri_reverts_with_nonexistent_token() public {
        vm.expectRevert(ProfileDoesNotExist.selector);

        profile.tokenURI(1);
    }

    // ownerOf

    function test_ownerOf() public {
        vm.startPrank(firstUser);
        profile.mint(firstUri);
        vm.stopPrank();

        assertEq(profile.ownerOf(1), firstUser);
    }

    function test_ownerOf_reverts_with_nonexistent_token() public {
        vm.expectRevert(ProfileDoesNotExist.selector);

        profile.ownerOf(1);
    }

    // balanceOf

    function test_balanceOf_with_profile() public {
        vm.startPrank(firstUser);
        profile.mint(firstUri);
        vm.stopPrank();

        assertEq(profile.balanceOf(firstUser), 1);
    }

    function test_balanceOf_without_profile() public {
        assertEq(profile.balanceOf(firstUser), 0);
    }

    // name

    function test_name() public {
        assertEq(profile.name(), name);
    }

    // symbol

    function test_symbol() public {
        assertEq(profile.symbol(), symbol);
    }

    // approve

    function test_approve_reverts() public {
        vm.expectRevert(ProfilesAreSoulBound.selector);
        profile.approve(secondUser, 1);
    }

    // getApproved

    function test_getApproved_reverts() public {
        vm.expectRevert(ProfilesAreSoulBound.selector);
        profile.getApproved(1);
    }

    // setApprovalForAll

    function test_setApprovalForAll_reverts() public {
        vm.expectRevert(ProfilesAreSoulBound.selector);
        profile.setApprovalForAll(secondUser, true);
    }

    // isApprovedForAll

    function test_isApprovedForAll() public {
        assertFalse(profile.isApprovedForAll(firstUser, secondUser));
    }

    // transferFrom

    function test_transferFrom_reverts() public {
        vm.expectRevert(ProfilesAreSoulBound.selector);
        profile.transferFrom(firstUser, secondUser, 1);
    }

    // safeTransferFrom

    function test_safeTransferFrom_reverts() public {
        vm.expectRevert(ProfilesAreSoulBound.selector);
        profile.safeTransferFrom(firstUser, secondUser, 1);
    }

    // safeTransferFrom with data argument

    function test_safeTransferFrom_with_data_arg_reverts() public {
        vm.expectRevert(ProfilesAreSoulBound.selector);
        profile.safeTransferFrom(firstUser, secondUser, 1, bytes(""));
    }

    // supportsInterface

    function test_supports_IProfile() public {
        assertTrue(profile.supportsInterface(type(IProfile).interfaceId));
    }

    function test_supports_IERC721() public {
        assertTrue(profile.supportsInterface(type(IERC721).interfaceId));
    }

    function test_supports_IERC721Metadata() public {
        assertTrue(profile.supportsInterface(type(IERC721Metadata).interfaceId));
    }

    function test_supports_IERC4906() public {
        assertTrue(profile.supportsInterface(type(IERC4906).interfaceId));
    }

    function test_supports_ERC165() public {
        assertTrue(profile.supportsInterface(type(ERC165).interfaceId));
    }

    function test_supports_IERC165() public {
        assertTrue(profile.supportsInterface(type(IERC165).interfaceId));
    }

    function test_returns_false_for_unsupported_interfaces() public {
        assertFalse(profile.supportsInterface(type(IERC2981).interfaceId));
    }
}
