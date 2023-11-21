// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";

contract ERC165Mock is IERC165 {
    mapping(bytes4 => bool) private _supported;

    constructor(bytes4[] memory interfaceIds) {
        for (uint256 i = 0; i < interfaceIds.length; i++) {
            _supported[interfaceIds[i]] = true;
        }
    }

    function supportsInterface(bytes4 interfaceId) public view virtual returns (bool) {
        return _supported[interfaceId];
    }
}
