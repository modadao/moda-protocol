// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "./interfaces/ISplitsFactory.sol";
import {ISplitMain} from "./interfaces/0xSplits/ISplitMain.sol";
import {IOfficialContracts} from "./interfaces/Registry/IOfficialContracts.sol";
import "./interfaces/Registry/IRegistry.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/// @notice SplitsFactory creates a Trustless 0xSplit contract with the Registry treasury as a beneficiary.
contract SplitsFactory is ISplitsFactory, Ownable {
    /// @notice constant denominator to calculate percentages (1,000,000 = 100%)
    uint32 public constant PERCENTAGE_SCALE = 1e6;

    /// @notice 1% distributor fee (10,000 = 1%)
    uint32 constant DISTRIBUTOR_FEE = 1e4;

    ISplitMain _splitMain;
    IOfficialContracts _registry;

    event SplitCreated(address indexed sender, address indexed split);

    /**
     * @notice Constructor
     * @param splitMain The 0xSplit SplitMain contract address.
     * @param registry The top level Registry contract.
     */
    constructor(ISplitMain splitMain, IOfficialContracts registry) Ownable(msg.sender) {
        _splitMain = splitMain;
        _registry = registry;
    }

    /// @inheritdoc ISplitsFactory
    /// @notice This factory will create a new 0xSplit contract and add the  Treasury as a benefactor.
    function create(address[] calldata beneficiaries) external override returns (address) {
        address[] memory accountsUnfiltered = new address[](beneficiaries.length + 1);

        for (uint256 i = 0; i < beneficiaries.length; i++) {
            accountsUnfiltered[i] = beneficiaries[i];
        }

        (address treasury, uint32 treasuryFee, uint32 treasuryFeeScale) = _registry.getTreasuryInfo();

        accountsUnfiltered[accountsUnfiltered.length - 1] = treasury;
        accountsUnfiltered = _sortAddresses(accountsUnfiltered);
        (address[] memory accounts, uint256[] memory occurrences) = _filterDuplicates(accountsUnfiltered);

        // Allocate Shares
        uint32 treasuryAllocation = PERCENTAGE_SCALE * uint32(treasuryFee) / uint32(treasuryFeeScale);
        uint32 shareHolderAllocation =
            uint32((PERCENTAGE_SCALE - treasuryAllocation) / beneficiaries.length);

        uint32[] memory shares = new uint32[](accounts.length);
        for (uint256 i = 0; i < accounts.length; i++) {
            if (accounts[i] == treasury) {
                shares[i] = treasuryAllocation;

                continue;
            }

            shares[i] = shareHolderAllocation * uint32(occurrences[i]);
        }

        uint32 totalPercentage;
        for (uint256 i = 0; i < shares.length; i++) {
            totalPercentage += shares[i];
        }

        /// @notice If there is any "dust" percentages, give them to the admin facilitator
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

    function _filterDuplicates(address[] memory beneficiaries)
        internal
        pure
        returns (address[] memory, uint256[] memory)
    {
        if (beneficiaries.length <= 1) {
            uint256[] memory oneOccurrence = new uint256[](1);
            oneOccurrence[0] = 1;
            return (beneficiaries, oneOccurrence);
        }
        address[] memory uniqueBeneficiariesTemp = new address[](beneficiaries.length);
        uint256[] memory occurrencesTemp = new uint256[](beneficiaries.length);
        uint256 uniqueCount;

        for (uint256 i = 0; i < beneficiaries.length; i++) {
            bool isUnique = true;
            for (uint256 j = 0; j < uniqueCount; j++) {
                if (beneficiaries[i] == uniqueBeneficiariesTemp[j]) {
                    isUnique = false;
                    occurrencesTemp[j]++;
                    break;
                }
            }
            if (isUnique) {
                uniqueBeneficiariesTemp[uniqueCount] = beneficiaries[i];
                occurrencesTemp[uniqueCount] = 1;
                uniqueCount++;
            }
        }

        address[] memory uniqueBeneficiaries = new address[](uniqueCount);
        uint256[] memory occurrences = new uint256[](uniqueCount);

        for (uint256 i = 0; i < uniqueCount; i++) {
            uniqueBeneficiaries[i] = uniqueBeneficiariesTemp[i];
            occurrences[i] = occurrencesTemp[i];
        }

        return (uniqueBeneficiaries, occurrences);
    }

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
