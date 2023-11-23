// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

/**
 * @title IMarketplace
 * @dev Interface for the Marketplace
 */
interface IMarketplace {
    /**
     * @dev Represents a created Sale for a release
     * releaseOwner - The address of the release owner/seller
     * beneficiary - The address that will receive the funds once the sale is completed
     * releases - The custom releases contract address of the release
     * TokenId - The token id of the release
     * AmountRemaining - The amount of tokens remaining to be sold
     * AmountTotal - The total amount of tokens to be sold
     * PricePerToken - The price per token
     * StartAt - The start time of the sale
     * EndAt - The end time of the sale, set to 0 for no end time
     * MaxCountPerWallet - The maximum amount of tokens that can be purchased per wallet
     */
    struct Sale {
        address releaseOwner;
        address payable beneficiary;
        address releases;
        uint256 tokenId;
        uint256 amountRemaining;
        uint256 amountTotal;
        uint256 pricePerToken;
        uint256 startAt;
        uint256 endAt;
        uint256 maxCountPerWallet;
    }

    /**
     * @dev Emitted when a sale is created
     */
    event SaleCreated(address indexed seller, uint256 indexed saleId);

    /**
     * @dev Emitted when a sale is purchased
     */
    event Purchase(
        address indexed releases,
        uint256 indexed tokenId,
        address indexed buyer,
        address seller,
        uint256 saleId,
        uint256 tokenAmount,
        uint256 timestamp
    );

    /**
     * @dev Emitted when a sale is withdrawn
     */
    event Withdraw(address indexed recipient, uint256 indexed saleId, uint256 tokenAmount);

    /**
     * @dev Create a sale for a given release. The tokens must come from a releases contract
     * that has been registered in the Catalog and they must be in the sellers wallet.
     * @param beneficiary - The address that will receive the funds once the sale is completed
     * @param releases - The address of the custom releases contract
     * @param tokenId - The id of the Token
     * @param amountTotal - The amount of tokens to sell
     * @param pricePerToken - The price per token
     * @param startAt - The start time of the sale
     * @param endAt - The end time of the sale, set to 0 for no end time
     * @param maxCountPerWallet - The maximum amount of tokens that can be purchased per wallet
     */
    function createSale(
        address payable beneficiary,
        address releases,
        uint256 tokenId,
        uint256 amountTotal,
        uint256 pricePerToken,
        uint256 startAt,
        uint256 endAt,
        uint256 maxCountPerWallet
    ) external;

    /**
     * @dev Purchase a release. Payment is in USDC.
     * @param seller - The address of the seller
     * @param saleId - The id of the sale
     * @param tokenAmount - The amount of tokens to purchase
     * @param recipient - The address that will receive the Tokens
     */
    function purchase(address seller, uint256 saleId, uint256 tokenAmount, address recipient) external;

    /**
     * @dev Withdraw a Release. Caller must own the release.
     * @param saleId - The id of the sale
     * @param tokenAmount - The amount of tokens to withdraw
     */
    function withdraw(uint256 saleId, uint256 tokenAmount) external;

    /**
     * @dev Returns a Sale
     * @param seller - The address of the seller
     * @param saleId - The id of the sale
     */
    function getSale(address seller, uint256 saleId) external view returns (Sale memory);

    /**
     * @dev Returns the number of sales for a given seller
     * @param seller - The address of the seller
     */
    function saleCount(address seller) external view returns (uint256);

    /**
     * @dev Sets the treasury fee
     * @notice Caller must have DEFAULT_ADMIN_ROLE
     * @param newFee - The new treasury fee
     */
    function setTreasuryFee(uint256 newFee) external;

    /**
     * @dev Sets the treasury address
     * @notice Caller must have DEFAULT_ADMIN_ROLE
     * @param newTreasury - The new treasury address
     */
    function setTreasury(address payable newTreasury) external;
}
