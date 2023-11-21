// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import {Profile} from "../src/Profile.sol";
import {IProfile} from "../src/interfaces/IProfile.sol";
import {IERC4906} from "../src/interfaces/ERC/IERC4906.sol";
import {ISimpleOwnership} from "../src/interfaces/ISimpleOwnership.sol";
import {IERC165, ERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import {IERC721Metadata} from "@openzeppelin/contracts/interfaces/IERC721Metadata.sol";
import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";
import {IERC2981} from "@openzeppelin/contracts/interfaces/IERC2981.sol";
import {OwnedContractMock} from "./mocks/OwnedContractMock.sol";
import {AccessControlledMock} from "./mocks/AccessControlledMock.sol";

contract ProfileTest is Test {
    Profile public profile;

    address public artist = address(0x1);
    address public label = address(0x2);

    string public name = "Profile";
    string public symbol = "PROF";

    string public firstUri = "ipfs://<CID-1>";
    string public secondUri = "ipfs://<CID-2>";

    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;

    event Transfer(address indexed from, address indexed to, uint256 indexed amount);
    event MetadataUpdate(uint256 _tokenId);

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

        vm.startPrank(artist);
        profile.mint(firstUri);
        vm.stopPrank();

        assertEq(profile.accountUri(artist), firstUri);
        assertEq(profile.tokenURI(tokenId), firstUri);
        assertEq(profile.ownerOf(tokenId), artist);
        assertEq(profile.totalSupply(), tokenId);
    }

    function test_mint_reverts_for_duplicates() public {
        profile.mint(firstUri);
        vm.expectRevert(Profile.ProfileAlreadyMinted.selector);
        profile.mint(firstUri);
    }

    function test_mint_emits_event() public {
        vm.startPrank(artist);
        vm.expectEmit(true, true, true, false);
        uint256 tokenId = 1;
        emit Transfer(address(profile), artist, tokenId);
        profile.mint(firstUri);
        vm.stopPrank();
    }

    function test_mint_increments_total_supply() public {
        vm.startPrank(artist);
        profile.mint(firstUri);
        vm.stopPrank();

        assertEq(profile.totalSupply(), 1);

        vm.startPrank(label);
        profile.mint(secondUri);
        vm.stopPrank();

        assertEq(profile.totalSupply(), 2);
    }

    // mintFor

    function test_mintFor_as_owner() public {
        uint256 tokenId = 1;
        address kontract = address(new OwnedContractMock(artist));

        vm.startPrank(artist);
        profile.mintFor(kontract, firstUri);
        vm.stopPrank();

        assertEq(profile.accountUri(kontract), firstUri);
        assertEq(profile.tokenURI(tokenId), firstUri);
        assertEq(profile.ownerOf(tokenId), kontract);
        assertEq(profile.totalSupply(), tokenId);
    }

    function test_mintFor_as_IAccessControl_DEFAULT_ADMIN_ROLE() public {
        uint256 tokenId = 1;
        address kontract = address(new AccessControlledMock(artist));

        vm.startPrank(artist);
        profile.mintFor(kontract, firstUri);
        vm.stopPrank();

        assertEq(profile.accountUri(kontract), firstUri);
        assertEq(profile.tokenURI(tokenId), firstUri);
        assertEq(profile.ownerOf(tokenId), kontract);
        assertEq(profile.totalSupply(), tokenId);
    }

    function test_mintFor_without_DEFAULT_ADMIN_ROLE() public {
        address labelControlledContract = address(new AccessControlledMock(label));

        vm.startPrank(artist);
        vm.expectRevert(Profile.CallerNotAuthorized.selector);
        profile.mintFor(labelControlledContract, firstUri);
        vm.stopPrank();
    }

    function test_mintFor_without_ownership() public {
        address labelControlledContract = address(new OwnedContractMock(label));

        vm.startPrank(artist);
        vm.expectRevert(Profile.CallerNotAuthorized.selector);
        profile.mintFor(labelControlledContract, firstUri);
        vm.stopPrank();
    }

    function test_mintFor_reverts_for_duplicates() public {
        address kontract = address(new OwnedContractMock(artist));

        vm.startPrank(artist);
        profile.mintFor(kontract, firstUri);
        assertEq(profile.accountUri(kontract), firstUri);

        vm.expectRevert(Profile.ProfileAlreadyMinted.selector);
        profile.mintFor(kontract, firstUri);

        vm.stopPrank();
    }

    function test_mintFor_emits_event() public {
        address kontract = address(new OwnedContractMock(artist));

        vm.startPrank(artist);
        uint256 tokenId = 1;

        vm.expectEmit(true, true, true, false);
        emit Transfer(address(profile), kontract, tokenId);
        profile.mintFor(kontract, firstUri);

        vm.stopPrank();
    }

    function test_mintFor_increments_total_supply() public {
        address kontract = address(new OwnedContractMock(artist));

        vm.startPrank(artist);

        profile.mint(firstUri);
        assertEq(profile.totalSupply(), 1);
        profile.mintFor(kontract, secondUri);
        assertEq(profile.totalSupply(), 2);

        vm.stopPrank();
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

        vm.startPrank(artist);

        profile.mint(firstUri);
        assertEq(profile.tokenURI(tokenId), firstUri);
        assertEq(profile.accountUri(artist), firstUri);

        profile.updateProfile(secondUri);
        assertEq(profile.tokenURI(tokenId), secondUri);
        assertEq(profile.accountUri(artist), secondUri);

        vm.stopPrank();
    }

    function test_updateProfile_reverts_for_nonexisting_profile() public {
        vm.expectRevert(Profile.ProfileDoesNotExist.selector);
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
        address kontract = address(new OwnedContractMock(artist));
        uint256 tokenId = 1;

        vm.startPrank(artist);

        profile.mintFor(kontract, firstUri);
        assertEq(profile.tokenURI(tokenId), firstUri);
        assertEq(profile.accountUri(kontract), firstUri);

        profile.updateProfileFor(kontract, secondUri);
        assertEq(profile.tokenURI(tokenId), secondUri);
        assertEq(profile.accountUri(kontract), secondUri);

        vm.stopPrank();
    }

    function test_updateProfileFor_with_AccessControl_DEFAULT_ADMIN_ROLE() public {
        address kontract = address(new AccessControlledMock(artist));
        uint256 tokenId = 1;

        vm.startPrank(artist);

        profile.mintFor(kontract, firstUri);
        assertEq(profile.tokenURI(tokenId), firstUri);
        assertEq(profile.accountUri(kontract), firstUri);

        profile.updateProfileFor(kontract, secondUri);
        assertEq(profile.tokenURI(tokenId), secondUri);
        assertEq(profile.accountUri(kontract), secondUri);

        vm.stopPrank();
    }

    function test_updateProfileFor_reverts_when_unauthorized() public {
        address kontract = address(new AccessControlledMock(artist));

        vm.startPrank(artist);
        profile.mintFor(kontract, firstUri);
        assertEq(profile.accountUri(kontract), firstUri);
        vm.stopPrank();

        vm.startPrank(label);
        vm.expectRevert(Profile.CallerNotAuthorized.selector);
        profile.updateProfileFor(kontract, secondUri);

        vm.stopPrank();
    }

    function test_updateProfileFor_reverts_for_nonexisting_profile() public {
        address kontract = address(new AccessControlledMock(artist));

        vm.startPrank(artist);
        vm.expectRevert(Profile.ProfileDoesNotExist.selector);
        profile.updateProfileFor(kontract, firstUri);

        vm.stopPrank();
    }

    function test_updateProfileFor_emits_MetadataUpdate() public {
        address kontract = address(new AccessControlledMock(artist));
        uint256 tokenId = 1;

        vm.startPrank(artist);

        profile.mintFor(kontract, firstUri);
        assertEq(profile.accountUri(kontract), firstUri);
        vm.expectEmit(true, true, true, false);
        emit MetadataUpdate(tokenId);
        profile.updateProfileFor(kontract, firstUri);

        vm.stopPrank();
    }

    // accountUri

    function test_accountUri() public {
        vm.startPrank(artist);
        profile.mint(firstUri);
        vm.stopPrank();

        assertEq(profile.accountUri(artist), firstUri);
    }

    function test_accountUri_reverts_with_nonexistent_profile() public {
        vm.expectRevert(Profile.ProfileDoesNotExist.selector);

        profile.accountUri(artist);
    }

    // tokenUri

    function test_tokenUri() public {
        vm.startPrank(artist);
        profile.mint(firstUri);
        vm.stopPrank();

        assertEq(profile.tokenURI(1), firstUri);
    }

    function test_tokenUri_reverts_with_nonexistent_token() public {
        vm.expectRevert(Profile.ProfileDoesNotExist.selector);

        profile.tokenURI(1);
    }

    // ownerOf

    function test_ownerOf() public {
        vm.startPrank(artist);
        profile.mint(firstUri);
        vm.stopPrank();

        assertEq(profile.ownerOf(1), artist);
    }

    function test_ownerOf_reverts_with_nonexistent_token() public {
        vm.expectRevert(Profile.ProfileDoesNotExist.selector);

        profile.ownerOf(1);
    }

    // balanceOf

    function test_balanceOf_with_profile() public {
        vm.startPrank(artist);
        profile.mint(firstUri);
        vm.stopPrank();

        assertEq(profile.balanceOf(artist), 1);
    }

    function test_balanceOf_without_profile() public {
        assertEq(profile.balanceOf(artist), 0);
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
        vm.expectRevert(Profile.ProfilesAreSoulBound.selector);
        profile.approve(label, 1);
    }

    // getApproved

    function test_getApproved_reverts() public {
        vm.expectRevert(Profile.ProfilesAreSoulBound.selector);
        profile.getApproved(1);
    }

    // setApprovalForAll

    function test_setApprovalForAll_reverts() public {
        vm.expectRevert(Profile.ProfilesAreSoulBound.selector);
        profile.setApprovalForAll(label, true);
    }

    // isApprovedForAll

    function test_isApprovedForAll() public {
        assertFalse(profile.isApprovedForAll(artist, label));
    }

    // transferFrom

    function test_transferFrom_reverts() public {
        vm.expectRevert(Profile.ProfilesAreSoulBound.selector);
        profile.transferFrom(artist, label, 1);
    }

    // safeTransferFrom

    function test_safeTransferFrom_reverts() public {
        vm.expectRevert(Profile.ProfilesAreSoulBound.selector);
        profile.safeTransferFrom(artist, label, 1);
    }

    // safeTransferFrom with data argument

    function test_safeTransferFrom_with_data_arg_reverts() public {
        vm.expectRevert(Profile.ProfilesAreSoulBound.selector);
        profile.safeTransferFrom(artist, label, 1, bytes(""));
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
