// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface IWithdrawRelease {
    /**
     * @notice Withdraws a Release token from the contract, for use when the
     * release was minted to the contract address.
     * @param receiver The address that will receive the release token
     * @param tokenId The ID of the release token
     * @param amount The amount of release tokens to withdraw
     */
    function withdrawRelease(address receiver, uint256 tokenId, uint256 amount) external;
}
