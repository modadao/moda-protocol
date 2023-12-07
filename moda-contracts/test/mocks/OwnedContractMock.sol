// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {ISimpleOwnership} from "../../src/interfaces/Profile/ISimpleOwnership.sol";

contract OwnedContractMock is ISimpleOwnership {
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }
}
