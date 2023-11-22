// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IAccessControl} from "@openzeppelin/contracts/access/IAccessControl.sol";
import {IMembership} from "./IMembership.sol";

interface IModaRegistry is IAccessControl {
    /// @dev Emitted when a catalog owner changes the membership contract
    event CatalogMembershipChanged(string name, address indexed membership);

    /// @dev Emitted when a catalog is registered for an organization
    event CatalogRegistered(string name, address indexed catalog, address registrar);

    /// @dev Emitted when a catalog is unregistered
    event CatalogUnregistered(string name, address indexed catalog, address registrar);

    /// @dev Emitted when a manager is added by an artist
    event ManagerAdded(address indexed artist, address indexed manager);

    /// @dev Emitted when a manager is removed by an artist
    event ManagerRemoved(address indexed artist, address indexed manager);

    /// @dev Emitted when the treasury fee is changed by a default admin
    event TreasuryFeeChanged(uint256 oldFee, uint256 newFee);

    /// @dev Emitted when the treasury address is changed by a default admin
    event TreasuryChanged(address oldTreasury, address newTreasury);

    /**
     * @dev Represents a registered catalog
     * name - The name of the catalog
     * catalog - The address of the catalog
     * membership - The address of the membership contract
     */
    struct Catalog {
        string name;
        address catalog;
        address membership;
    }

    // Membership

    /**
     * @dev Checks if the user is a member of a particular catalog.
     * This is a proxy to the Membership contract instance deployed by the catalog owner.
     * @param index - The index of the catalog
     * @param user - The address of the user to check
     */
    function isMember(uint256 index, address user) external returns (bool);

    /**
     * @dev Sets a membership contract for a particular catalog
     * @notice The caller must be a default admin
     * @param index - The index of the catalog
     * @param membership - An instance of a membership contract that follows the IMembership interface
     */
    function setCatalogMembership(uint256 index, IMembership membership) external;

    // Catalogs

    /**
     * @dev Registers a new catalog
     * @notice Only a default admin can call this
     * @param name - The name of the catalog
     * @param catalog - The address of the catalog
     * @param membership - A contract address that implements IMembership
     */
    function registerCatalog(string calldata name, address catalog, IMembership membership) external;

    /**
     * @dev Unregisters a deprecated or malicious catalog
     * @notice Only a default admin can call this
     * @param index - The index of the catalog
     */
    function unregisterCatalog(uint256 index) external;

    /**
     * @dev Returns a info about a particular catalog
     * @param index - The index of the catalog
     */
    function getCatalogInfo(uint256 index) external view returns (Catalog memory);

    /// @dev Returns the total number of catalogs
    function getCatalogCount() external view returns (uint256);

    // Artist Management

    /**
     * @dev Grants a manager role to a list of addresses for a particular artist caller
     * @param managers - The addresses of the managers
     */
    function addManagers(address[] calldata managers) external;

    /**
     * @dev Revokes a manager role to a list of addresses for a particular artist caller
     * @param managers - The addresses of the managers
     */
    function removeManagers(address[] calldata managers) external;

    /**
     * @dev Returns the total number of managers for a particular artist
     * @param artist - The address of the artist
     */
    function getManagerCount(address artist) external view returns (uint256);

    /**
     * @dev Returns a manager at a particular index for a particular artist
     * @param artist - The address of the artist
     * @param index - The index of the manager
     */
    function getManager(address artist, uint256 index) external view returns (address);

    /**
     * @dev Returns true if the address is a manager for a particular artist
     * @param artist - The address of the artist
     * @param who - The address of the manager
     */
    function isManager(address artist, address who) external view returns (bool);

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
}
