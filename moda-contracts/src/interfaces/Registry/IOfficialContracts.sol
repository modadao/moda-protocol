// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IManagement} from "../IManagement.sol";
import {ISplitsFactory} from "../ISplitsFactory.sol";

/// @notice A lightweight interface for retrieving contract addresses.
interface IOfficialContracts {
    /**
     * @notice Returns the address of the Treasury, a suggested percentage fee, and the fee scale.
     * e.g. If the percentage fee is `1_000` and the fee scale is `10_000`, then `(1_000 / 10_000) * 100 = 10%`
     */
    function getTreasuryInfo() external view returns (address, uint32, uint32);

    /**
     * @notice Returns the address of the Splits Factory
     */
    function getSplitsFactory() external view returns (ISplitsFactory);

    /**
     * @notice Returns the address of the Management contract
     */
    function getManagement() external view returns (IManagement);
}
