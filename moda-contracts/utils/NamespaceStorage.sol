// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

contract NamespaceStorage {
    /**
     * @dev
     * @param contractName - The name of the contract
     */
    function calculateStorageSlot(string calldata contractName) external pure returns (bytes32) {
        bytes memory id = abi.encodePacked("moda.storage.", contractName);
        return keccak256(abi.encode(uint256(keccak256(id)) - 1)) & ~bytes32(uint256(0xff));
    }
}
