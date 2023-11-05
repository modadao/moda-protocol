// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface IMembership {
    /**
     * @dev Checks if an address is a member
     */
    function isMember(address user) external view returns (bool);
}
