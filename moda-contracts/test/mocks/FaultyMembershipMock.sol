// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface IFaultyMembership {
    function checkMember() external pure returns (bool);
}

contract FaultyMembershipMock {
    /// State Variables

    mapping(address => bool) private _members;

    /// External Functions

    function checkMember() external pure returns (bool) {
        return true;
    }

    function supportsInterface(bytes4 interfaceId) external pure returns (bool) {
        return interfaceId == type(IFaultyMembership).interfaceId;
    }
}
