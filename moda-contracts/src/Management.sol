// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IManagement} from "./interfaces/IManagement.sol";
import {EnumerableSet} from "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

/// @notice Management is where users can whitelist other accounts to manage tracks and releases across multiple contracts.
contract Management is IManagement {
    using EnumerableSet for EnumerableSet.AddressSet;

    mapping(address => EnumerableSet.AddressSet) _managers;

    /// @inheritdoc IManagement
    function addManagers(address[] calldata managers) external {
        for (uint256 i = 0; i < managers.length; i++) {
            bool added = _managers[msg.sender].add(managers[i]);
            if (added) emit ManagementPermissionSet(msg.sender, managers[i], true);
        }
    }

    /// @inheritdoc IManagement
    function removeManagers(address[] calldata managers) external {
        for (uint256 i = 0; i < managers.length; i++) {
            bool removed = _managers[msg.sender].remove(managers[i]);
            if (removed) emit ManagementPermissionSet(msg.sender, managers[i], false);
        }
    }

    /// @inheritdoc IManagement
    function getManagerCount(address artist) external view returns (uint256) {
        return _managers[artist].length();
    }

    /// @inheritdoc IManagement
    function getManager(address artist, uint256 index) external view returns (address) {
        return _managers[artist].at(index);
    }

    /// @inheritdoc IManagement
    function isManager(address artist, address who) external view returns (bool) {
        return _managers[artist].contains(who);
    }
}
