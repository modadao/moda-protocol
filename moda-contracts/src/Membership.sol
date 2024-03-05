// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IMembership} from "./interfaces/IMembership.sol";
import {IERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";

/// @notice Membership gates which users have access to a Catalog.
///         Rules for membership should be implemented by an organization that manages the Catalog.
///          e.g. "NFT-gated", "Whitelist", etc
contract Membership is IMembership {
    /// @inheritdoc IMembership
    function isMember(address account) external pure returns (bool) {
        /// @dev This logic can optionally be extended to implement your own membership rules.
        return account != address(0);
    }

    /// @inheritdoc IERC165
    function supportsInterface(bytes4 interfaceId) external pure returns (bool) {
        return interfaceId == type(IMembership).interfaceId;
    }
}
