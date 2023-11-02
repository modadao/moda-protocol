// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts-upgradeable/access/manager/AccessManagedUpgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "./interfaces/IMembership.sol";

contract Membership is IMembership {
    /// State Variables

    bytes32 private _merkleRoot;

    /// External Functions

    constructor(
    
        bytes32 merkleRoot
    ){
        _merkleRoot = merkleRoot;
    }

    /**
     * @inheritdoc IMembership
     */
    function updateMerkleRoot(bytes32 merkleRoot) external  {
        _merkleRoot = merkleRoot;
    }

    /**
     * @inheritdoc IMembership
     */
    function isMember(
        address user
    ) external view returns (bool) {
        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(user))));
        return MerkleProof.verify(proof, _merkleRoot, leaf);
    }
}
