// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/interfaces/IERC165.sol";
import "@openzeppelin/contracts/interfaces/IERC721.sol";

/// @notice EIP-721 Metadata Update Extension. This standard will notify third parties
///         to update their cache when metadata is changed.
interface IERC4906 is IERC165, IERC721 {
    /// @dev This event should be emitted when the metadata of a single token is changed.
    event MetadataUpdate(uint256 _tokenId);

    /// @dev This event should be emitted when metadata for multiple tokens are changed.
    event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId);
}
