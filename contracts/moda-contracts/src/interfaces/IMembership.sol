// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface IMemberShip {
    /**
     * @dev Updates the merkle root
     * @param merkleRoot The new merkle root
     * @notice restricted by access manager
     */
    function updateMerkleRoot(bytes32 merkleRoot) external;

    /**
     * @dev Checks if an address is whitelisted using a merkle proof
     * @param user The address to be checked
     */
    function isMember(address user) external view returns (bool);
}
