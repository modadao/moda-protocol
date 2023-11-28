// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

/**
 * @title IReleases
 * @dev Interface for Releases
 */
interface IReleases {
    event ReleaseCreated(uint256 tokenId);
    event ReleaseWithdrawn(address indexed receiver, uint256 tokenId, uint256 amount);

    /**
     * @dev Initializes the contract
     * @param admin - The address that will be given the role of default admin. See {AccessControl}
     * @param releaseAdmins - An array of addresses that will be given the role of release admin
     * @param name_ - The name of the Releases contract
     * @param symbol_ - The symbol of the Releases contract
     * @param catalog - The address of the catalog contract
     * @param splitsFactory - The address of the splits factory contract
     */
    function initialize(
        address admin,
        address[] memory releaseAdmins,
        string memory name_,
        string memory symbol_,
        address catalog,
        address splitsFactory
    ) external;

    /**
     * @dev Creates a new release token and transfers to the receiver
     * @param receiver - The address that will receive the release tokens
     * @param royaltyAmount - The percentage of sale prices
     * that should be paid to the beneficiary for re-sales.
     *  Calculated by <NOMINATOR> / 10,000. e.g. For 10% royalties, pass in 1000
     * @param uri_ - The URI of the token metadata
     * @param totalSupply - The total amount of tokens to mint
     * @param trackIds - An array containing the registered track ids of the tracks
     * @notice Tracks must be registered to the catalog contract that this contract is
     * scoped to before calling this function.
     */
    function create(
        address receiver,
        uint96 royaltyAmount,
        string calldata uri_,
        uint256 totalSupply,
        string[] calldata trackIds
    ) external;

    /**
     * @dev Withdraws a Release token from the contract, for use when the
     * release was minted to the contract address.
     * @param receiver - The address that will receive the release token
     * @param tokenId - The ID of the release token
     * @param amount - The amount of release tokens to withdraw
     */
    function withdrawRelease(address receiver, uint256 tokenId, uint256 amount) external;

    /**
     * @dev Returns info about the Releases contract including the total number of releases
     * and where or not the contract is open or curated
     * @return numberOfReleases - The total number of releases
     * @return isOpen - Whether or not the contract is open or curated
     */
    function info() external returns (uint256 numberOfReleases, bool isOpen);

    /**
     * @dev Sets the metadata URI for a release, only the default admin can call this
     * @param tokenId - The ID of the token
     * @param uri_ - The URI for the token
     */
    function setUri(uint256 tokenId, string calldata uri_) external;
}
