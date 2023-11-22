// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {Catalog} from "../../src/Catalog.sol";
import {IVersionInfo} from "../../src/interfaces/IVersionInfo.sol";
import {ITrackRegistration} from "../../src/interfaces/ITrackRegistration.sol";
import {IMembership} from "../../src/interfaces/IMembership.sol";
import {IReleasesRegistration} from "../../src/interfaces/Releases/IReleasesRegistration.sol";
import {IReleaseRegistration} from "../../src/interfaces/Releases/IReleaseRegistration.sol";
import {IReleasesApproval} from "../../src/interfaces/Releases/IReleasesApproval.sol";
import {IModaRegistry} from "../../src/interfaces/IModaRegistry.sol";
import {IOfficialModaContracts} from "../../src/interfaces/IOfficialModaContracts.sol";
import {IReleases} from "../../src/interfaces/Releases/IReleases.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

/// @custom:oz-upgrades-from Catalog
contract CatalogV2Mock is Catalog {
    /// State Variables

    /// @custom:storage-location erc7201:moda.storage.CatalogV2
    struct CatalogV2Storage {
        /// @dev additional variable to test upgradeability
        string _testingUpgradeVariable;
    }

    // Storage location

    // keccak256(abi.encode(uint256(keccak256("moda.storage.CatalogV2")) - 1)) & ~bytes32(uint256(0xff))
    bytes32 private constant CatalogV2StorageLocation =
        0xb8760629ab51d65b8fdd44998b12236c513908a4a393c4bcf5d9b3c642fa5700;

    function _getCatalogV2Storage() private pure returns (CatalogV2Storage storage $Version2) {
        assembly {
            $Version2.slot := CatalogV2StorageLocation
        }
    }

    /// External Functions

    /**
     * @dev For testing upgradeability
     */
    function setTestingUpgradeVariable(string calldata testingUpgradeVariable) external {
        CatalogV2Storage storage $Version2 = _getCatalogV2Storage();
        $Version2._testingUpgradeVariable = testingUpgradeVariable;
    }

    /**
     * @dev For testing upgradeability
     */
    function getTestingUpgradeVariable() external view returns (string memory) {
        CatalogV2Storage storage $Version2 = _getCatalogV2Storage();
        return $Version2._testingUpgradeVariable;
    }
}
