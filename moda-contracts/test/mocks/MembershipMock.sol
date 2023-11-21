// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "../../src/interfaces/IMembership.sol";

contract Membership is IMembership {
    /// State Variables

    mapping(address => bool) private _members;

    /// External Functions

    function addMember(address user) external {
        _members[user] = true;
    }

    function isMember(address user) external view returns (bool) {
        return _members[user];
    }

    function supportsInterface(bytes4 interfaceId) external pure returns (bool) {
        return interfaceId == type(IMembership).interfaceId;
    }
}
