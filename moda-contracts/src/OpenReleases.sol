// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import {IOpenReleases} from "./interfaces/Releases/IOpenReleases.sol";
import {ICatalog} from "./interfaces/ICatalog.sol";
import {ISplitsFactory} from "./interfaces/ISplitsFactory.sol";

/**
 * @title OpenReleases
 * @dev The contract allows any track owner to be able to create a release
 */

contract OpenReleases is IOpenReleases, ERC1155Supply, ERC1155Holder, AccessControl, ERC2981 {
    // State Variables
    uint256 constant MAX_ROYALTY_AMOUNT = 2_000;

    ICatalog _catalog;
    ISplitsFactory _splitsFactory;

    string public name;
    string public symbol;

    uint256 public numberOfReleases;

    mapping(uint256 => address) _releaseOwners;
    mapping(uint256 => string) _uris;

    // Errors
    error CannotBeZeroAddress();
    error InvalidRoyaltyAmount();
    error FieldCannotBeEmpty(string field);
    error CallerIsNotReleaseAdmin();
    error InvalidTokenId();
    error CallerDoesNotHaveAccess();

    /**
     * @dev Constructor
     * @param admin - The address of the organization admin
     * @param name_ - The name of the token
     * @param symbol_ - The symbol of the token
     * @param catalog - A contract that implements ICatalog
     * @param splitsFactory - A contract that implements ISplitsFactory
     */
    constructor(
        address admin,
        string memory name_,
        string memory symbol_,
        ICatalog catalog,
        ISplitsFactory splitsFactory
    ) ERC1155("") {
        if (admin == address(0)) revert CannotBeZeroAddress();
        if (bytes(name_).length == 0) revert FieldCannotBeEmpty("name");
        if (bytes(symbol_).length == 0) revert FieldCannotBeEmpty("symbol");
        _grantRole(DEFAULT_ADMIN_ROLE, admin);

        name = name_;
        symbol = symbol_;
        _catalog = catalog;
        _splitsFactory = splitsFactory;
    }

    // External

    /**
     * @dev Creates a new release token and transfers to the receiver
     * @param receiver - The address that will receive the release tokens
     * @notice Only release admins can call this function
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
        _requireCallerHasTrackAccess(trackIds);
        if (royaltyAmount > MAX_ROYALTY_AMOUNT) revert InvalidRoyaltyAmount();

        numberOfReleases++;
        _uris[numberOfReleases] = uri_;
        _releaseOwners[numberOfReleases] = msg.sender;

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
     * @dev see {IReleases-setUri}
     */
    function setUri(uint256 tokenId, string calldata uri_) external {
        _requireTokenIdExists(tokenId);
        _requireCallerIsReleaseOwner(tokenId);
        _uris[tokenId] = uri_;
        emit URI(uri_, tokenId);
    }

    /**
     * @dev see {IBurnable-burn}
     * @notice This function can be used to completely remove a release, the tokens
     * will be burned and the URI will be removed, only the default admin of the contract
     * can call this function
     */
    function burn(uint256 tokenId) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _requireTokenIdExists(tokenId);
        address owner = _releaseOwners[tokenId];
        uint256 totalSupply = totalSupply(tokenId);
        _burn(owner, tokenId, totalSupply);
        delete _uris[tokenId];
        delete _releaseOwners[tokenId];
        emit Burned(tokenId, owner);
    }

    // Public

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
        override(IERC165, ERC1155, ERC2981, AccessControl, ERC1155Holder)
        returns (bool)
    {
        return interfaceId == type(IOpenReleases).interfaceId || super.supportsInterface(interfaceId);
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
            if (!ICatalog(_catalog).hasTrackAccess(trackIds[i], msg.sender)) {
                revert CallerDoesNotHaveAccess();
            }
        }
    }

    /**
     * @dev Checks the caller is the release owner or the release owner manager
     */
    function _requireCallerIsReleaseOwner(uint256 tokenId) internal view {
        if (msg.sender != _releaseOwners[tokenId]) revert CallerDoesNotHaveAccess();
    }
}
