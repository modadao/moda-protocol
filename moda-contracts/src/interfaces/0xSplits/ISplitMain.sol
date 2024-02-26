// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @notice This is a stripped down version of [0xSplits](https://docs.splits.org/).
interface ISplitMain {
    /// @notice Create a splits contract for a list of accounts.
    /// @param accounts An list of account addresses that will share splits.
    /// @param percentAllocations An ordered list of allocations corresponding to the same index location as `accounts`.
    /// @param distributorFee A fee that you are willing to pay distributors to incentivize them to call the `distributeETH` method.
    ///                       You can do this manually, but it is convenient to have a distributor do this for you.
    /// @param controller An account that has certain administrative powers. Pass in a zero address or ignore this role. e.g. `address(0)`
    function createSplit(
        address[] calldata accounts,
        uint32[] calldata percentAllocations,
        uint32 distributorFee,
        address controller
    ) external returns (address);

    /// @notice Distribute funds for all split share holders.
    function distributeETH(
        address split,
        address[] calldata accounts,
        uint32[] calldata percentAllocations,
        uint32 distributorFee,
        address distributorAddress
    ) external;

    /// @notice Get the balance of a split share holder.
    function getETHBalance(address account) external view returns (uint256);

    /// @notice Withdraw funds for a split share holder.
    function withdraw(address account, uint256 withdrawETH, ERC20[] calldata tokens) external;
}
