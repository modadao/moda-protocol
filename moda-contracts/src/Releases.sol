// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts-upgradeable/access/extensions/AccessControlEnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/common/ERC2981Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155SupplyUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/utils/ERC1155HolderUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import "./interfaces/Releases/IReleases.sol";
import "./interfaces/Releases/IReleaseRegistration.sol";
import "./interfaces/Releases/IReleasesApproval.sol";

/**
 * @title Releases
 * @dev This allows artists or labels to create their own release tokens
 * access is set to curated by default which means that only release admins
 * can create releases. The contract can be set to open by the default admin
 * which enables any user to create a release.
 */

contract Releases is
    IReleases,
    ERC1155SupplyUpgradeable,
    ERC1155HolderUpgradeable,
    AccessControlEnumerableUpgradeable,
    ERC2981Upgradeable,
    ReentrancyGuardUpgradeable
{
    // State Variables
    address _catalog;
    address _splitsFactory;

    string public name;
    string public symbol;

    uint256 public numberOfReleases;

    bool _isOpen;

    mapping(uint256 => string) _uris;

    /// @dev users with a Releases admin role can create releases with a curated contract
    bytes32 public constant RELEASE_ADMIN_ROLE = keccak256("RELEASE_ADMIN_ROLE");

    // Errors
    error CannotBeZeroAddress();
    error InvalidAmount();
    error FieldCannotBeEmpty(string field);
    error CallerIsNotReleaseAdmin();
    error InvalidTokenId();
    error CallerDoesNotHaveTrackAccess();

    /**
     * @dev Constructor
     * @param isInitializerDisabled - Whether the initializer is disabled or not
     */
    constructor(bool isInitializerDisabled) {
        if (isInitializerDisabled) {
            _disableInitializers();
        }
    }

    // External Functions

    /**
     * @inheritdoc IReleases
     */
    function initialize(
        address admin,
        address[] calldata releaseAdmins,
        string calldata name_,
        string calldata symbol_,
        address catalog,
        address splitsFactory
    ) external initializer {
        __ERC1155_init("");
        if (admin == address(0)) revert CannotBeZeroAddress();
        if (bytes(name_).length == 0) revert FieldCannotBeEmpty("name");
        if (bytes(symbol_).length == 0) revert FieldCannotBeEmpty("symbol");
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        for (uint8 i = 0; i < releaseAdmins.length; i++) {
            _grantRole(RELEASE_ADMIN_ROLE, releaseAdmins[i]);
        }
        name = name_;
        symbol = symbol_;
        _catalog = catalog;
        _splitsFactory = splitsFactory;
    }

    /**
     * @inheritdoc IReleases
     */
    function create(
        address receiver,
        uint96 royaltyAmount,
        address beneficiary,
        /// will be an array of addresses to pass to splits factory
        string calldata uri_,
        uint256 amount,
        string[] calldata trackIds
    ) external nonReentrant {
        if (_isOpen) {
            _requireCallerHasTrackAccess(trackIds);
        } else if (!hasRole(RELEASE_ADMIN_ROLE, msg.sender)) {
            revert CallerIsNotReleaseAdmin();
        }
        if (royaltyAmount > 2_000) revert InvalidAmount();

        numberOfReleases++;
        _uris[numberOfReleases] = uri_;
        /// Create splits address here
        IReleaseRegistration(_catalog).registerRelease(trackIds, uri_, numberOfReleases);
        _mint(receiver, numberOfReleases, amount, "");
        _setTokenRoyalty(numberOfReleases, beneficiary, royaltyAmount);

        emit ReleaseCreated(numberOfReleases);
    }

    /**
     * @inheritdoc IReleases
     */
    function withdrawRelease(
        address receiver,
        uint256 tokenId,
        uint256 amount
    ) external onlyRole(RELEASE_ADMIN_ROLE) nonReentrant {
        _requireTokenIdExists(tokenId);
        _safeTransferFrom(address(this), receiver, tokenId, amount, "");
        emit ReleaseWithdrawn(msg.sender, tokenId, amount);
    }

    /**
     * @inheritdoc IReleases
     */
    function info() external view returns (uint256, bool) {
        return (numberOfReleases, _isOpen);
    }

    /**
     * @inheritdoc IReleases
     */
    function setUri(uint256 tokenId, string calldata uri_) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _requireTokenIdExists(tokenId);
        _uris[tokenId] = uri_;
        emit URI(uri_, tokenId);
    }

    /**
     * @inheritdoc IReleases
     */
    function setIsReleasesOpen() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _isOpen = true;
    }

    /// Public Functions

    /**
     * @dev See {IERC1155-uri}.
     */
    function uri(uint256 tokenId) public view override returns (string memory) {
        _requireTokenIdExists(tokenId);
        return _uris[tokenId];
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(
            ERC1155Upgradeable,
            ERC2981Upgradeable,
            AccessControlEnumerableUpgradeable,
            ERC1155HolderUpgradeable
        )
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // Internal

    /**
     * @dev Checks the token id exists
     * @param tokenId The ID of the token
     */
    function _requireTokenIdExists(uint256 tokenId) internal view {
        if (tokenId > numberOfReleases) revert InvalidTokenId();
    }

    /**
     * @dev Checks is the caller is registered as having track access, this could
     * be the track owner or a manager
     */
    function _requireCallerHasTrackAccess(string[] memory trackIds) internal view {
        for (uint256 i = 0; i < trackIds.length; i++) {
            if (!IReleasesApproval(_catalog).hasTrackAccess(trackIds[i], msg.sender)) {
                revert CallerDoesNotHaveTrackAccess();
            }
        }
    }
}
