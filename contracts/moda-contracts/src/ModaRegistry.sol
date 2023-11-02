// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "./interfaces/IModaRegistry.sol";
import "./interfaces/IMembership.sol";

contract ModaRegistry is IModaRegistry {
    mapping(string => address) _catalogMemberships;

    function isMember(string calldata catalogName) external returns (bool) {
        address membership = _catalogMemberships[catalogName];

        if (IMemberShip(membership).isMember(msg.sender)) {
            return true;
        } else {
            return false;
        }
    }
}
