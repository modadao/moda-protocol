// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

interface IMembership is IERC165 {
    /// @dev Check if an account is a member. The logic for what constitutes a "membership" is left up to the implementer.
    /// @param account An EOA or a contract address
    function isMember(address account) external view returns (bool);
}
