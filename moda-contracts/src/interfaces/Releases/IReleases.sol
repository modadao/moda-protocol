// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";

import {ISplitsFactory} from "../ISplitsFactory.sol";

/**
 * @title IReleases
 * @dev Interface for Releases
 */
interface IReleases is IERC165 {
    event ReleaseCreated(uint256 tokenId);
    event ReleaseWithdrawn(address indexed receiver, uint256 tokenId, uint256 amount);

    /* @dev Creates a new release token and transfers to the receiver
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
     * @dev Sets the metadata URI for a release, only the default admin can call this
     * @param tokenId - The ID of the token
     * @param uri_ - The URI for the token
     */
    function setUri(uint256 tokenId, string calldata uri_) external;
}
