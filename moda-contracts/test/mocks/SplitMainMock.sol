// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import {ISplitMain} from "../../src/interfaces/0xSplits/ISplitMain.sol";

contract SplitMainMock is ISplitMain {
    address[] public beneficiaries;
    uint32[] public allocations;
    uint32 public distributorFee;
    address public controller;

    mapping(address => uint32) _shares;

    error AccountDoesNotExist();

    function createSplit(
        address[] calldata accounts,
        uint32[] calldata percentAllocations,
        uint32 _distributorFee,
        address _controller
    ) external returns (address) {
        beneficiaries = accounts;
        allocations = percentAllocations;
        distributorFee = _distributorFee;
        controller = _controller;

        for (uint256 i = 0; i < accounts.length; i++) {
            _shares[accounts[i]] += percentAllocations[i];
        }

        return mockSplitAddress();
    }

    function mockSplitAddress() public view returns (address) {
        return address(this);
    }

    function allocationFor(address account) external view returns (uint32) {
        if (_shares[account] == 0) revert AccountDoesNotExist();

        return _shares[account];
    }

    function beneficiariesLength() public view returns (uint256) {
        return beneficiaries.length;
    }

    function allocationsLength() public view returns (uint256) {
        return allocations.length;
    }
}
