// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IAccessControl} from "@openzeppelin/contracts/access/IAccessControl.sol";
import {IManagement} from "./IManagement.sol";

interface IModaRegistry is IAccessControl {
    /// @dev Emitted when a catalog is registered for an organization
    event CatalogRegistered(address indexed catalog, address registrar);

    /// @dev Emitted when a catalog is unregistered
    event CatalogUnregistered(address indexed catalog, address registrar);

    /// @dev Emitted when the treasury fee is changed by a default admin
    event TreasuryFeeChanged(uint256 oldFee, uint256 newFee);

    /// @dev Emitted when the treasury address is changed by a default admin
    event TreasuryChanged(address oldTreasury, address newTreasury);

    // Catalogs

    /**
     * @dev Registers a new catalog
     * @notice Only a default admin can call this
     * @param catalog - The address of the catalog
     */
    function registerCatalog(address catalog) external;

    /**
     * @dev Unregisters a deprecated or malicious catalog
     * @param catalog - The address of the catalog
     */
    function unregisterCatalog(address catalog) external;

    /**
     * @dev Check if a catalog is registered
     * @param catalog The address of a catalog
     */
    function isRegisteredCatalog(address catalog) external view returns (bool);

    // Treasury

    /**
     * @dev Sets the numerator for calculating the percentage of fees to be sent to the Moda Treasury
     * @notice TreasuryFee is based on a denominator of 10,000 (e.g. 1000 is 10.0%). Max of 10%
     * @notice The caller must be a default admin
     * @param fee - The percentage of fees to be sent to the Moda Treasury
     */
    function setTreasuryFee(uint256 fee) external;

    /**
     * @dev Sets the address of the Moda Treasury
     * @notice The caller must be a default admin
     * @param treasury - The address of the Treasury
     */
    function setTreasury(address treasury) external;

    /// @dev Returns the Treasury fee percentage
    function getTreasuryFee() external view returns (uint256);

    /**
     * @dev Sets the address of the splits factory
     * @notice The caller must be a default admin
     * @param splitsFactory - The address of the splits factory
     */
    function setSplitsFactory(address splitsFactory) external;

    /**
     * @dev Sets the address of the management contract
     * @notice The caller must be a default admin
     * @param management - An address that follows the IManagement interface
     */
    function setManagement(IManagement management) external;
}
