// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";

/// @title EIP-721 Metadata Update Extension
interface IProfile is IERC165 {
    /// @notice An account can only claim one profile. Duplicates will revert.
    /// @dev This function allows an account to claim a single token.
    /// @param uri The token URI containing the metadata of an account's profile. e.g. ipfs://<CID>
    function mint(string memory uri) external;

    /// @notice The caller can only update their own profile. The profile must exist.
    /// @param uri The token URI containing the metadata of an account's profile. e.g. ipfs://<CID>
    function updateProfile(string memory uri) external;

    /// @dev This function returns the token URI of a given account.
    /// @param account An EOA or a contract address.
    function accountUri(address account) external view returns (string memory);
}
