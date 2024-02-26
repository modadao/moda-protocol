// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/common/ERC2981Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155SupplyUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/utils/ERC1155HolderUpgradeable.sol";

import {IReleases} from "./interfaces/Releases/IReleases.sol";
import {IReleasesInitialize} from "./interfaces/Releases/IReleasesInitialize.sol";
import {IWithdrawRelease} from "./interfaces/Releases/IWithdrawRelease.sol";
import {ICatalog} from "./interfaces/Catalog/ICatalog.sol";
import {ISplitsFactory} from "./interfaces/ISplitsFactory.sol";

/**
 * @notice Releases is a contract to allow artists or labels to create track or multiple
 * track tokens called a "Release". `Releases` are registered with a Catalog, and can only create a
 * Release of tracks that have also been registered in the Catalog.
 */
contract Releases is
    IReleases,
    IReleasesInitialize,
    IWithdrawRelease,
    ERC1155SupplyUpgradeable,
    ERC1155HolderUpgradeable,
    AccessControlUpgradeable,
    ERC2981Upgradeable
{
    // State Variables

    uint256 constant MAX_ROYALTY_AMOUNT = 2_000;

    ICatalog _catalog;

    ISplitsFactory _splitsFactory;

    string public name;
    string public symbol;

    uint256 public numberOfReleases;

    mapping(uint256 => string) _uris;

    /// @dev users with a Releases admin role can create releases with a curated contract
    bytes32 public constant RELEASE_ADMIN_ROLE = keccak256("RELEASE_ADMIN_ROLE");

    // Errors
    error CannotBeZeroAddress();
    error InvalidRoyaltyAmount();
    error FieldCannotBeEmpty(string field);
    error CallerIsNotReleaseAdmin();
    error InvalidTokenId();
    error CallerDoesNotHaveTrackAccess();

    /**
     * @dev Constructor
     * @notice The initializer is disabled when deployed as an implementation contract
     */
    constructor() {
        _disableInitializers();
    }

    // External Functions

    /**
     * @dev Initializes the contract
     * @param admin - The address that will be given the role of default admin. See {AccessControl}
     * @param releaseAdmins - An array of addresses that will be given the role of release admin
     * @param name_ - The name of the Releases contract
     * @param symbol_ - The symbol of the Releases contract
     * @param catalog - A contract that implements ICatalog
     * @param splitsFactory - A contract that implements ISplitsFactory
     */
    function initialize(
        address admin,
        address[] calldata releaseAdmins,
        string calldata name_,
        string calldata symbol_,
        ICatalog catalog,
        ISplitsFactory splitsFactory
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
     * @dev Creates a new release token and transfers to the receiver
     * @notice Only release admins can call this function
     * @param receiver - The address that will receive the release tokens
     * @param royaltyAmount - The percentage of sale prices that should be
     * paid to the beneficiary for re-sales. Calculated by <NOMINATOR> / 10,000.
     * e.g. For 10% royalties, pass in 1000
     * @param uri_ - The URI of the token metadata
     * @param totalSupply - The total amount of tokens to mint
     * @param trackIds - An array containing the registered track ids of the tracks
     */
    function create(
        address receiver,
        uint96 royaltyAmount,
        string calldata uri_,
        uint256 totalSupply,
        string[] calldata trackIds
    ) external {
        if (!hasRole(RELEASE_ADMIN_ROLE, msg.sender)) revert CallerIsNotReleaseAdmin();
        if (royaltyAmount > MAX_ROYALTY_AMOUNT) revert InvalidRoyaltyAmount();

        numberOfReleases++;
        _uris[numberOfReleases] = uri_;

        ICatalog(_catalog).registerRelease(trackIds, uri_, numberOfReleases);

        address[] memory beneficiaries = new address[](trackIds.length);
        for (uint256 i = 0; i < trackIds.length; i++) {
            beneficiaries[i] = ICatalog(_catalog).getTrack(trackIds[i]).trackBeneficiary;
        }
        address split = ISplitsFactory(_splitsFactory).create(beneficiaries);

        _setTokenRoyalty(numberOfReleases, split, royaltyAmount);
        _mint(receiver, numberOfReleases, totalSupply, "");

        emit ReleaseCreated(numberOfReleases);
    }

    /**
     * @inheritdoc IWithdrawRelease
     * @notice Only release admins can call this function
     * @notice This function bypasses the approval check, the
     * contract does not need to set approval to the receiver.
     */
    function withdrawRelease(
        address receiver,
        uint256 tokenId,
        uint256 amount
    ) external onlyRole(RELEASE_ADMIN_ROLE) {
        _requireTokenIdExists(tokenId);
        _safeTransferFrom(address(this), receiver, tokenId, amount, "");
        emit ReleaseWithdrawn(msg.sender, tokenId, amount);
    }

    /**
     * @inheritdoc IReleases
     */
    function setUri(uint256 tokenId, string calldata uri_) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _requireTokenIdExists(tokenId);
        _uris[tokenId] = uri_;
        emit URI(uri_, tokenId);
    }

    // Public Functions

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
            IERC165,
            ERC1155Upgradeable,
            ERC2981Upgradeable,
            AccessControlUpgradeable,
            ERC1155HolderUpgradeable
        )
        returns (bool)
    {
        return interfaceId == type(IReleases).interfaceId || super.supportsInterface(interfaceId);
    }

    // Internal

    /**
     * @dev Checks the token id exists
     * @param tokenId The ID of the token
     */
    function _requireTokenIdExists(uint256 tokenId) internal view {
        if (tokenId > numberOfReleases) revert InvalidTokenId();
    }
}
