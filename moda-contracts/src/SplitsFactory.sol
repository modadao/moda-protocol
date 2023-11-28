// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "./interfaces/ISplitsFactory.sol";
import {ISplitMain} from "./interfaces/0xSplits/ISplitMain.sol";
import {IOfficialModaContracts} from "./interfaces/ModaRegistry/IOfficialModaContracts.sol";
import "./interfaces/ModaRegistry/IModaRegistry.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract SplitsFactory is ISplitsFactory, Ownable {
    // State Variables

    /// @dev constant denominator to calculate percentages (1,000,000 = 100%)
    uint32 public constant PERCENTAGE_SCALE = 1e6;

    /// @dev 1% distributor fee (10,000 = 1%)
    uint32 constant DISTRIBUTOR_FEE = 1e4;

    ISplitMain _splitMain;
    IOfficialModaContracts _modaRegistry;

    event SplitCreated(address indexed sender, address indexed split);

    constructor(ISplitMain splitMain, IOfficialModaContracts modaRegistry) Ownable(msg.sender) {
        _splitMain = splitMain;
        _modaRegistry = modaRegistry;
    }

    /// @inheritdoc ISplitsFactory
    /// @notice This factory will create a new 0xSplit contract and add the MODA Treasury as a benefactor.
    function create(address[] calldata beneficiaries) external override returns (address) {
        address[] memory accounts = new address[](
            beneficiaries.length + 1
        );

        for (uint256 i = 0; i < beneficiaries.length; i++) {
            accounts[i] = beneficiaries[i];
        }

        (address treasury, uint32 treasuryFee, uint32 treasuryFeeScale) = _modaRegistry.getTreasuryInfo();

        accounts[accounts.length - 1] = treasury;
        accounts = _sortAddresses(accounts);

        // Allocate Shares
        uint32 treasuryAllocation = PERCENTAGE_SCALE * uint32(treasuryFee) / uint32(treasuryFeeScale);
        uint32 shareHolderAllocation =
            uint32((PERCENTAGE_SCALE - treasuryAllocation) / beneficiaries.length);

        // If MODA treasury was passed in as an argument in the beneficiaries list then we do not want
        // to give out the treasury fee more than once.
        bool modaFeeAllocated;
        uint32[] memory shares = new uint32[](accounts.length);
        for (uint256 i = 0; i < accounts.length; i++) {
            if (accounts[i] == treasury && !modaFeeAllocated) {
                shares[i] = treasuryAllocation;
                modaFeeAllocated = true;
                continue;
            }

            shares[i] = shareHolderAllocation;
        }

        uint32 totalPercentage;
        for (uint256 i = 0; i < shares.length; i++) {
            totalPercentage += shares[i];
        }

        // @dev If there is any "dust" percentages, give them to MODA
        if (totalPercentage != PERCENTAGE_SCALE) {
            for (uint256 i = 0; i < accounts.length; i++) {
                if (accounts[i] == treasury) {
                    shares[i] += PERCENTAGE_SCALE - totalPercentage;
                    break;
                }
            }
        }

        address split = ISplitMain(_splitMain).createSplit(accounts, shares, DISTRIBUTOR_FEE, address(0));

        emit SplitCreated(msg.sender, split);

        return split;
    }

    // Internal

    function _sortAddresses(address[] memory addresses) internal pure returns (address[] memory) {
        uint256 length = addresses.length;

        for (uint256 i = 0; i < length; i++) {
            for (uint256 j = 0; j < length - i - 1; j++) {
                if (addresses[j] > addresses[j + 1]) {
                    // Swap
                    address temp = addresses[j];
                    addresses[j] = addresses[j + 1];
                    addresses[j + 1] = temp;
                }
            }
        }

        return addresses;
    }
}
