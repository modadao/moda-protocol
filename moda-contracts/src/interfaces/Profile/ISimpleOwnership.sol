// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

/// @title ISimpleOwnership A simple interface for calling owner() on a contract using OpenZeppelin's Ownership base contract.
interface ISimpleOwnership {
    /// @dev This returns the address of the owner of a contract.
    function owner() external view returns (address);
}
