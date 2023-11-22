// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface ISplitsFactory {
    function create(address[] calldata beneficiaries) external returns (address);
}
