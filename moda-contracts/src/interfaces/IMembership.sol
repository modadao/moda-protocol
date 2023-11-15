// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

interface IMembership is IERC165 {
    /**
     * @dev Checks if an address is a member
     */
    function isMember(address user) external view returns (bool);
}
