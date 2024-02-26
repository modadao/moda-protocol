// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

/**
 * @notice ISplitsFactory defines an interface for creating Trustless `0xSplit` contracts.
 */
interface ISplitsFactory {
    /**
     * @notice Create an 0xSplits contract.
     * @param beneficiaries A list of addresses that will receive equal shares in a new 0xSplits contract.
     * @return The address of the newly created 0xSplit contract.
     */
    function create(address[] memory beneficiaries) external returns (address);
}
