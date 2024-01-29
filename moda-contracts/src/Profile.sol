// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IERC165, ERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import {IERC4906} from "./interfaces/ERC/IERC4906.sol";
import {IERC721Metadata} from "@openzeppelin/contracts/interfaces/IERC721Metadata.sol";
import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";
import {IAccessControl} from "@openzeppelin/contracts/access/IAccessControl.sol";
import {IProfile} from "./interfaces/Profile/IProfile.sol";
import {ISimpleOwnership} from "./interfaces/Profile/ISimpleOwnership.sol";

error ProfileAlreadyMinted();
error ProfileDoesNotExist();
error ProfilesAreSoulBound();
error CallerNotAuthorized();

/// @dev Profile is a smart contract for users to set metadata as soul bound ERC721 NFTs with the Metadata of their choice.
contract Profile is IProfile, IERC721, IERC721Metadata, IERC4906, ERC165 {
    string private _name;
    string private _symbol;

    /// @dev This is a counter to keep track of how many Profiles have been minted and to assign new IDs to new minters.
    uint256 public totalSupply = 0;

    /// @dev This is a map from the token ID to a user's account.
    mapping(uint256 => address) private _tokenToAccount;
    /// @dev This is a map from a user's account to a token ID.
    mapping(address => uint256) private _accountToToken;
    /// @dev This is a map from a token ID to the URI that contains metadata.
    mapping(uint256 => string) private _tokenToUri;

    bytes32 private constant _DEFAULT_ADMIN_ROLE = 0x00;

    /// @dev Check if the caller is an owner or admin of a contract.
    /// @param kontract The address of a contract that may or may not use OpenZeppelin's Ownership
    /// or AccessControl contracts.
    modifier requireAuthority(address kontract) {
        bool hasAuthority;

        try ISimpleOwnership(kontract).owner() returns (address actualOwner) {
            if (actualOwner == msg.sender) {
                hasAuthority = true;
            }
        } catch {}

        if (!hasAuthority) {
            try IAccessControl(kontract).hasRole(_DEFAULT_ADMIN_ROLE, msg.sender) returns (bool isAdmin)
            {
                if (isAdmin) {
                    hasAuthority = true;
                }
            } catch {}
        }

        if (!hasAuthority) revert CallerNotAuthorized();

        _;
    }

    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /// @inheritdoc IProfile
    function mint(string calldata uri) external {
        if (_accountToToken[msg.sender] != 0) revert ProfileAlreadyMinted();

        totalSupply++;
        _accountToToken[msg.sender] = totalSupply;
        _tokenToAccount[totalSupply] = msg.sender;
        _tokenToUri[totalSupply] = uri;

        emit Transfer(address(this), msg.sender, totalSupply);
    }

    /// @inheritdoc IProfile
    function mintFor(address kontract, string calldata uri) external requireAuthority(kontract) {
        if (_accountToToken[kontract] != 0) revert ProfileAlreadyMinted();

        totalSupply++;
        _accountToToken[kontract] = totalSupply;
        _tokenToAccount[totalSupply] = kontract;
        _tokenToUri[totalSupply] = uri;

        emit Transfer(address(this), kontract, totalSupply);
    }

    /// @inheritdoc IProfile
    function updateProfile(string calldata uri) external {
        uint256 tokenId = _accountToToken[msg.sender];
        if (tokenId == 0) revert ProfileDoesNotExist();

        _tokenToUri[tokenId] = uri;

        emit MetadataUpdate(tokenId);
    }

    /// @inheritdoc IProfile
    function updateProfileFor(
        address kontract,
        string calldata uri
    ) external requireAuthority(kontract) {
        uint256 tokenId = _accountToToken[kontract];
        if (tokenId == 0) revert ProfileDoesNotExist();

        _tokenToUri[tokenId] = uri;

        emit MetadataUpdate(tokenId);
    }

    /// @inheritdoc IProfile
    function accountUri(address account) external view returns (string memory) {
        return tokenURI(_accountToToken[account]);
    }

    /// @inheritdoc IERC721Metadata
    function tokenURI(uint256 tokenId) public view virtual returns (string memory) {
        if (_tokenToAccount[tokenId] == address(0)) revert ProfileDoesNotExist();

        return _tokenToUri[tokenId];
    }

    /// @inheritdoc IERC721
    function ownerOf(uint256 tokenId) public view virtual returns (address) {
        if (_tokenToAccount[tokenId] == address(0)) revert ProfileDoesNotExist();
        return _tokenToAccount[tokenId];
    }

    /// @inheritdoc IERC721
    function balanceOf(address account) external view returns (uint256 balance) {
        if (_accountToToken[account] > 0) {
            return 1;
        }

        return 0;
    }

    /// @inheritdoc IERC721Metadata
    function name() public view virtual returns (string memory) {
        return _name;
    }

    /// @inheritdoc IERC721Metadata
    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    /// @inheritdoc IERC721
    function approve(address, uint256) public virtual {
        revert ProfilesAreSoulBound();
    }

    /// @dev This will revert. Profiles are soulbound.
    function getApproved(uint256) public view virtual returns (address) {
        revert ProfilesAreSoulBound();
    }

    /// @dev This will revert. Profiles are soulbound.
    function setApprovalForAll(address, bool) public virtual {
        revert ProfilesAreSoulBound();
    }

    /// @dev This will always return `false`. Profiles are soulbound.
    function isApprovedForAll(address, address) public view virtual returns (bool) {
        return false;
    }

    /// @dev This will revert. Profiles are soulbound.
    function transferFrom(address, address, uint256) public virtual {
        revert ProfilesAreSoulBound();
    }

    /// @dev This will revert. Profiles are soulbound.
    function safeTransferFrom(address, address, uint256) public pure {
        revert ProfilesAreSoulBound();
    }

    /// @dev This will revert. Profiles are soulbound.
    function safeTransferFrom(address, address, uint256, bytes memory) public virtual {
        revert ProfilesAreSoulBound();
    }

    /// @inheritdoc IERC165
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165, IERC165)
        returns (bool)
    {
        return interfaceId == type(IERC721).interfaceId
            || interfaceId == type(IERC721Metadata).interfaceId || interfaceId == type(IProfile).interfaceId
            || interfaceId == type(IERC4906).interfaceId || super.supportsInterface(interfaceId);
    }
}
