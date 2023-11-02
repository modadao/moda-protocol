// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts-upgradeable/access/manager/AccessManagedUpgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "./interfaces/IMemberShip.sol";

contract Membership is IMembership {
    /// State Variables

    bytes32 private _merkleRoot;

    /// External Functions

    function initialize(
        address modaAccess,
        bytes32 merkleRoot
    ) external initializer {
        __AccessManaged_init(modaAccess);
        _merkleRoot = merkleRoot;
    }

    /**
     * @inheritdoc IAccessGate
     */
    function updateMerkleRoot(bytes32 merkleRoot) external restricted {
        _merkleRoot = merkleRoot;
    }

    /**
     * @inheritdoc IAccessGate
     */
    function verifyUser(
        bytes32[] memory proof,
        address user
    ) external view returns (bool) {
        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(user))));
        return MerkleProof.verify(proof, _merkleRoot, leaf);
    }
}
