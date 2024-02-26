// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";

/**
 * @notice This contract allows users to mint Soul Bound Tokens (SBT) containing profile information.
 * Users can mint for their own wallet, or a contract that they are owner of or have the
 * `DEFAULT_ADMIN_ROLE` definied in OpenZeppelin's `IAccessControl`.
 */
interface IProfile is IERC165 {
    /**
     * @notice This function allows an account to claim a single token. An account can only claim one profile.
     *  Duplicates will revert.
     * @param uri The token URI containing the metadata of an account's profile. e.g. ipfs://<CID>
     */
    function mint(string memory uri) external;

    /**
     * @notice This function allows an account to claim a single token for another contract that it owns. A caller
     * can mint a profile on behalf of a contract. The caller must be the owner of a contract
     * that uses OpenZeppelin's Ownership or have the role `DEFAULT_ADMIN_ROLE` from OpenZeppelin's `IAccessControl`.
     * @param kontract The address of a contract that the caller owns or functions as an admin for.
     * @param uri The token URI containing the metadata of the contract's profile. e.g. "ipfs://CID..."
     */
    function mintFor(address kontract, string memory uri) external;

    /**
     * @notice This function can be used to check if an account is authorized to mint a profile for another contract.
     * The account must be the owner of a contract that uses OpenZeppelin's Ownership or have the role `DEFAULT_ADMIN_ROLE`
     * from OpenZeppelin's `IAccessControl`.
     * @param kontract The address of a contract to check that the account owns or functions as an admin for.
     * @param account The address of an account to check.
     */
    function canMintFor(address kontract, address account) external view returns (bool);

    /**
     * @notice The caller can only update their own profile. The profile must exist.
     * @param uri The token URI containing the metadata of an account's profile. e.g. ipfs://<CID>
     */
    function updateProfile(string memory uri) external;

    /**
     * @notice A caller can update the profile of a contract. The caller must be the owner of a contract
     * that uses OpenZeppelin's `Ownership` or have the role `DEFAULT_ADMIN_ROLE` from OpenZeppelin's `IAccessControl`.
     * @param kontract The address of a contract that the caller owns or functions as an admin for.
     * @param uri The token URI containing the metadata of the contract's profile. e.g. ipfs://<CID>
     */
    function updateProfileFor(address kontract, string memory uri) external;

    /**
     * @notice This function returns the token URI of a given account.
     * @param account An EOA or a contract address.
     */
    function accountUri(address account) external view returns (string memory);
}
