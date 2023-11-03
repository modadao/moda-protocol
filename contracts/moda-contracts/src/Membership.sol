// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "./interfaces/IMembership.sol";

contract Membership is IMembership {
    /// State Variables

    bytes32 private _merkleRoot;

    mapping(address => bool) private _members;

    /// External Functions

    constructor(bytes32 merkleRoot) {
        _merkleRoot = merkleRoot;
    }

    function addMember(address user) external{
        _members[user] = true;
    }
    
    /**
     * @inheritdoc IMembership
     */
    function isMember(address user) external view returns (bool) {
        return _members[user];
    }

    /**
     * @inheritdoc IMembership
     */
    function updateMerkleRoot(bytes32 merkleRoot) external {
        _merkleRoot = merkleRoot;
    }


    function verifyMerkleProof(address user, bytes32[] calldata proof) external view returns (bool) {
        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(user))));
        return MerkleProof.verify(proof, _merkleRoot, leaf);
    }
}
