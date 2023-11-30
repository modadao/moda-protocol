// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface IVersionInfo {
    /// @dev Returns the contract name, and version
    function versionInfo() external view returns (string memory name, string memory version);
}
