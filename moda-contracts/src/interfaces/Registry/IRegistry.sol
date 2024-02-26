// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IAccessControl} from "@openzeppelin/contracts/access/IAccessControl.sol";
import {IManagement} from "../IManagement.sol";
import {ISplitsFactory} from "../ISplitsFactory.sol";
import {ICatalog} from "../Catalog/ICatalog.sol";

/// @notice IRegistry defines the interface of the top level contract where all catalogs are registered.
interface IRegistry is IAccessControl {
    /// @notice Emitted when a catalog is registered for an organization
    event CatalogRegistered(address indexed catalog, address registrar);

    /// @notice Emitted when a catalog is unregistered
    event CatalogUnregistered(address indexed catalog, address registrar);

    /// @notice Emitted when the treasury fee is changed by a default admin
    event TreasuryFeeChanged(uint32 oldFee, uint32 newFee);

    /// @notice Emitted when the treasury address is changed by a default admin
    event TreasuryChanged(address oldTreasury, address newTreasury);

    // Catalogs

    /**
     * @notice Register a new catalog. Only a default admin can call this.
     * @param catalog A contract that implements the ICatalog interface
     */
    function registerCatalog(ICatalog catalog) external;

    /**
     * @notice Unregisters a deprecated or malicious catalog
     * @param catalog The address of the catalog
     */
    function unregisterCatalog(address catalog) external;

    /**
     * @notice Check if a catalog is registered
     * @param catalog The address of a catalog
     */
    function isRegisteredCatalog(address catalog) external view returns (bool);

    // Treasury

    /**
     * @notice Sets the numerator for calculating the percentage of fees to be sent to the Treasury
     * @notice TreasuryFee is based on a denominator of 10,000 (e.g. 1000 is 10.0%). Max of 10%
     * @param fee The percentage of fees to be sent to the Treasury
     */
    function setTreasuryFee(uint32 fee) external;

    /**
     * @notice Sets the address of the Treasury
     * @param treasury The address of theTreasury
     */
    function setTreasury(address treasury) external;

    /**
     * @notice Sets a splits factory
     * @param splitsFactory A contract that implements ISplitsFactory
     */
    function setSplitsFactory(ISplitsFactory splitsFactory) external;

    /**
     * @notice Sets the address of the management contract. The caller must be a default admin.
     * @param management A contract that implements the IManagement interface
     */
    function setManagement(IManagement management) external;
}
