// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "../src/interfaces/IMarketplace.sol";
import "../src/interfaces/Releases/IReleasesRegistration.sol";
import "../src/interfaces/Releases/IReleases.sol";

/**
 * @title Marketplace
 * @dev This contract allows buying and selling of Releases and charges a fee on each sale.
 */
contract Marketplace is IMarketplace, ERC1155Holder, ReentrancyGuard, AccessControl {
    using SafeERC20 for IERC20;

    // State Variables

    IERC20 _token;
    IReleasesRegistration _catalog;
    address payable public treasury;
    uint256 public treasuryFee;

    /// @dev releaseOwner => saleId => Sale
    mapping(address => Sale[]) private sales;

    // Errors
    error CannotBeZeroAddress();
    error TreasuryFeeCannotBeZero();
    error TokenAmountCannotBeZero();
    error MaxCountCannotBeZero();
    error StartCannotBeAfterEnd(uint256 startTime, uint256 endTime);
    error InsufficientSupply(uint256 remainingSupply);
    error MaxSupplyReached(uint256 maxSupplyPerWallet);
    error SaleNotStarted(uint256 startTime);
    error SaleHasEnded(uint256 endTime, uint256 currentTime);
    error ReleasesIsNotRegistered();
    error OnlySellerCanWithdraw();

    /**
     * @dev Constructor
     * @param treasury_ - The address of the organizations treasury
     * @param treasuryFee_ - The percentage that will be transferred
     * to the treasury on each sale. Based on a denominator of 10_000 e.g. 1000 = 10%
     * @param token - A token that implements an IERC20 interface that will be used for payments
     * @param catalog - A contract that implements the IReleasesRegistration interface
     */
    constructor(
        address payable treasury_,
        uint256 treasuryFee_,
        IERC20 token,
        IReleasesRegistration catalog
    ) {
        if (address(token) == address(0)) revert CannotBeZeroAddress();
        if (treasuryFee_ == 0) revert TreasuryFeeCannotBeZero();
        if (treasury_ == address(0)) revert CannotBeZeroAddress();
        treasury = treasury_;
        treasuryFee = treasuryFee_;
        _token = token;
        _catalog = catalog;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    // External Functions

    /**
     * @inheritdoc IMarketplace
     */
    function createSale(
        address releaseOwner,
        address payable beneficiary,
        IReleases releases,
        uint256 tokenId,
        uint256 amountTotal,
        uint256 pricePerToken,
        uint256 startAt,
        uint256 endAt,
        uint256 maxCountPerWallet
    ) external {
        if (IReleasesRegistration(_catalog).getReleasesOwner(address(releases)) == address(0)) {
            revert ReleasesIsNotRegistered();
        }
        if (beneficiary == address(0)) revert CannotBeZeroAddress();
        if (amountTotal == 0) revert TokenAmountCannotBeZero();
        if (endAt != 0 && startAt > endAt) {
            revert StartCannotBeAfterEnd(startAt, endAt);
        }
        if (maxCountPerWallet == 0) revert MaxCountCannotBeZero();
        IERC1155(address(releases)).safeTransferFrom(
            _msgSender(), address(this), tokenId, amountTotal, ""
        );

        sales[releaseOwner].push(
            Sale({
                seller: _msgSender(),
                releaseOwner: releaseOwner,
                beneficiary: beneficiary,
                releases: address(releases),
                tokenId: tokenId,
                amountRemaining: amountTotal,
                amountTotal: amountTotal,
                pricePerToken: pricePerToken,
                startAt: startAt,
                endAt: endAt,
                maxCountPerWallet: maxCountPerWallet
            })
        );

        emit SaleCreated(releaseOwner, sales[releaseOwner].length - 1);
    }

    /**
     * @inheritdoc IMarketplace
     */
    function purchase(
        address releaseOwner,
        uint256 saleId,
        uint256 tokenAmount,
        address recipient
    ) external nonReentrant {
        Sale storage sale = _getSaleForPurchase(releaseOwner, saleId, tokenAmount);

        uint256 totalPrice = sale.pricePerToken * tokenAmount;
        uint256 fee = (treasuryFee * totalPrice) / 10_000;
        _token.safeTransferFrom(_msgSender(), address(this), totalPrice);
        _token.transfer(treasury, fee);
        _token.transfer(sale.beneficiary, totalPrice - fee);

        _transferTokens(sale.releases, sale.tokenId, tokenAmount, recipient);

        sale.amountRemaining -= tokenAmount;

        emit Purchase(
            sale.releases, sale.tokenId, recipient, releaseOwner, saleId, tokenAmount, block.timestamp
        );
    }

    /**
     * @inheritdoc IMarketplace
     */
    function withdraw(address releaseOwner, uint256 saleId, uint256 tokenAmount) external nonReentrant {
        if (tokenAmount == 0) revert TokenAmountCannotBeZero();
        Sale storage sale = sales[releaseOwner][saleId];
        if (_msgSender() != sale.seller) revert OnlySellerCanWithdraw();
        if (tokenAmount > sale.amountRemaining) {
            revert InsufficientSupply(sale.amountRemaining);
        }
        _transferTokens(sale.releases, sale.tokenId, tokenAmount, _msgSender());

        sale.amountRemaining -= tokenAmount;

        emit Withdraw(_msgSender(), saleId, tokenAmount);
    }

    /**
     * @inheritdoc IMarketplace
     */
    function getSale(address releaseOwner, uint256 saleId) external view returns (Sale memory) {
        return sales[releaseOwner][saleId];
    }

    /**
     * @inheritdoc IMarketplace
     */
    function saleCount(address releaseOwner) external view returns (uint256) {
        return sales[releaseOwner].length;
    }

    /**
     * @inheritdoc IMarketplace
     */
    function setTreasuryFee(uint256 newFee) external onlyRole(DEFAULT_ADMIN_ROLE) {
        treasuryFee = newFee;
    }

    /**
     * @inheritdoc IMarketplace
     */
    function setTreasury(address payable newTreasury) external onlyRole(DEFAULT_ADMIN_ROLE) {
        treasury = newTreasury;
    }

    // Public Functions

    /**
     * @inheritdoc ERC165
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(AccessControl, ERC1155Holder)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // Internal Functions

    /**
     * @dev Verifies the purchase process for a sale
     * @param releaseOwner - The address of the releaseOwner
     * @param saleId - The id of the sale
     * @param tokenAmount - The amount of tokens to purchase
     */
    function _getSaleForPurchase(
        address releaseOwner,
        uint256 saleId,
        uint256 tokenAmount
    ) internal view returns (Sale storage) {
        Sale storage sale = sales[releaseOwner][saleId];
        if (sale.startAt > block.timestamp) {
            revert SaleNotStarted(sale.startAt);
        }
        if (sale.endAt != 0 && sale.endAt < block.timestamp) {
            revert SaleHasEnded(sale.endAt, block.timestamp);
        }
        if (tokenAmount == 0) revert TokenAmountCannotBeZero();
        if (tokenAmount > sale.amountRemaining) {
            revert InsufficientSupply(sale.amountRemaining);
        }

        uint256 buyerBalance = IERC1155(sale.releases).balanceOf(_msgSender(), sale.tokenId);
        if ((buyerBalance + tokenAmount) > sale.maxCountPerWallet) {
            revert MaxSupplyReached(sale.maxCountPerWallet);
        }
        return sale;
    }

    /**
     * @dev Transfers Release tokens from the contract to the recipient
     * @param releases - The address of the Releases contract
     * @param tokenId - The id of the token
     * @param tokenAmount - The amount of tokens to transfer
     * @param recipient - The address that will receive the Tokens
     */
    function _transferTokens(
        address releases,
        uint256 tokenId,
        uint256 tokenAmount,
        address recipient
    ) internal {
        IERC1155(releases).safeTransferFrom(address(this), recipient, tokenId, tokenAmount, "");
    }
}
