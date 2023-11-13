// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IERC165, ERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import {IERC4906} from "./interfaces/IERC4906.sol";
import {IERC721Metadata} from "@openzeppelin/contracts/interfaces/IERC721Metadata.sol";
import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";
import {IProfile} from "./interfaces/IProfile.sol";

contract Profile is IProfile, IERC721, IERC721Metadata, IERC4906, ERC165 {
    string private _name;
    string private _symbol;

    uint256 public totalSupply = 0;

    mapping(uint256 => address) private _tokenToAccount;
    mapping(address => uint256) private _accountToToken;
    mapping(uint256 => string) private _tokenToUri;

    error ProfileAlreadyMinted();
    error ProfileDoesNotExist();
    error ProfilesAreSoulBound();

    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev See {IProfile-mint}.
     */
    function mint(string memory uri) external {
        if (_accountToToken[msg.sender] != 0) revert ProfileAlreadyMinted();

        totalSupply++;
        _accountToToken[msg.sender] = totalSupply;
        _tokenToAccount[totalSupply] = msg.sender;
        _tokenToUri[totalSupply] = uri;

        emit Transfer(address(this), msg.sender, totalSupply);
    }

    /**
     * @dev See {IProfile-updateProfile}.
     */
    function updateProfile(string memory uri) external {
        uint256 tokenId = _accountToToken[msg.sender];
        if (tokenId == 0) revert ProfileDoesNotExist();

        _tokenToUri[tokenId] = uri;

        emit MetadataUpdate(tokenId);
    }

    /**
     * @dev See {IProfile-accountUri}.
     */
    function accountUri(address account) external view returns (string memory) {
        return tokenURI(_accountToToken[account]);
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) public view virtual returns (string memory) {
        if (_tokenToAccount[tokenId] == address(0)) revert ProfileDoesNotExist();

        return _tokenToUri[tokenId];
    }

    /**
     * @dev See {IERC721-ownerOf}.
     */
    function ownerOf(uint256 tokenId) public view virtual returns (address) {
        if (_tokenToAccount[tokenId] == address(0)) revert ProfileDoesNotExist();
        return _tokenToAccount[tokenId];
    }

    /**
     * @dev See {IERC721-balanceOf}.
     */
    function balanceOf(address account) external view returns (uint256 balance) {
        if (_accountToToken[account] > 0) {
            return 1;
        }

        return 0;
    }

    /**
     * @dev See {IERC721Metadata-name}.
     */
    function name() public view virtual returns (string memory) {
        return _name;
    }

    /**
     * @dev See {IERC721Metadata-symbol}.
     */
    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    /**
     * @dev See {IERC721-approve}.
     */
    function approve(address, uint256) public virtual {
        revert ProfilesAreSoulBound();
    }

    /**
     * @dev See {IERC721-getApproved}.
     */
    function getApproved(uint256) public view virtual returns (address) {
        revert ProfilesAreSoulBound();
    }

    /**
     * @dev See {IERC721-setApprovalForAll}.
     */
    function setApprovalForAll(address, bool) public virtual {
        revert ProfilesAreSoulBound();
    }

    /**
     * @dev See {IERC721-isApprovedForAll}.
     */
    function isApprovedForAll(address, address) public view virtual returns (bool) {
        return false;
    }

    /**
     * @dev See {IERC721-transferFrom}.
     */
    function transferFrom(address, address, uint256) public virtual {
        revert ProfilesAreSoulBound();
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(address, address, uint256) public pure {
        revert ProfilesAreSoulBound();
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(address, address, uint256, bytes memory) public virtual {
        revert ProfilesAreSoulBound();
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return interfaceId == type(IERC721).interfaceId || interfaceId == type(IERC721Metadata).interfaceId
            || interfaceId == type(IProfile).interfaceId || interfaceId == type(IERC4906).interfaceId
            || super.supportsInterface(interfaceId);
    }
}
