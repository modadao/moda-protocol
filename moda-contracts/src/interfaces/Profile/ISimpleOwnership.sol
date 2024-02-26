// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

/// @notice A simple interface for calling owner() on a contract using OpenZeppelin's `Ownership` contract.
interface ISimpleOwnership {
    /// @notice Return the address of the owner of a contract.
    function owner() external view returns (address);
}
