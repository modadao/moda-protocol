// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "./interfaces/IModaRegistry.sol";
import "./interfaces/IMembership.sol";

contract ModaRegistry {
    mapping(string => address) _catalogMemberships;


    function isMember(string calldata catalogName, address user) external view returns (bool) {
        address membership = _catalogMemberships[catalogName];

        if (IMembership(membership).isMember(user)) {
            return true;
        } else {
            return false;
        }
    }

    function registerCatalog(string calldata catalog, address catalogAddress) external {
        _catalogMemberships[catalog] = catalogAddress;
    }
}
