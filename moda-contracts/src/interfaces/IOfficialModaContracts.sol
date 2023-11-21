// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface IOfficialModaContracts {
    /**
     * @dev Returns the address of the Moda Treasury
     */
    function getTreasury() external view returns (address);

    /**
     * @dev Returns the address of the Splits Factory
     */
    function getSplitsFactory() external view returns (address);
}
