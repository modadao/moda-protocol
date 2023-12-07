// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {ISplitsFactory} from "../../src/interfaces/ISplitsFactory.sol";

contract SplitsFactoryMock is ISplitsFactory {
    address public mockSplit;

    constructor(address _mockSplit) {
        mockSplit = _mockSplit;
    }

    function create(address[] calldata) external view returns (address) {
        return mockSplit;
    }
}
