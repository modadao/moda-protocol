// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

/// @notice IMembership defines an interface for checking if an account is a "member" of a Catalog. It can be used to gate accounts.
interface IMembership is IERC165 {
    /// @notice Check if an account is a member. The logic for what constitutes a "membership" is left up to the implementer.
    /// @param account An EOA or a contract address
    function isMember(address account) external view returns (bool);
}
