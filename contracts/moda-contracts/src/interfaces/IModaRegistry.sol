// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface IModaRegistry {
    struct Catalog {
        string name;
        address catalogAddress;
    }

    /// Membership

    /**
     * @dev Checks the msg.sender is registered to a particular catalog
     * @param catalogName The name of the catalog
     */
    function isMember(string calldata catalogName) external returns (bool);

    /// Catalogs

    /**
     * @dev Registers a new catalog
     * @notice only a default admin can call this
     * @param catalogName the name of the catalog
     * @param catalogAddress the address of the catalog
     */
    function registerCatalog(string calldata catalogName, address catalogAddress) external;

    /**
     * @dev Unregisters a deprecated or malicious catalog
     * @notice only a default admin can call this
     * @param catalogName the name of the catalog
     */
    function unregisterCatalog(string calldata catalogName) external;

    /**
     * @dev Returns a catalog at a particular index
     * @param index the index of the catalog
     */
    function catalogAt(uint256 index) external view returns (Catalog memory);

    /**
     * @dev Returns the total number of catalogs
     */
    function catalogCount() external view returns (uint256);

    /// Artist Management

    /**
     * @dev grants a manager role to a list of addresses for a particular artist caller
     * @param managers the addresses of the managers
     */
    function addManagers(address[] calldata managers) external;

    /**
     * @dev revokes a manager role to a list of addresses for a particular artist caller
     * @param managers the addresses of the managers
     */
    function removeManagers(address[] calldata managers) external;

    /**
     * @dev Returns the total number of managers for a particular artist
     * @param artist the address of the artist
     */
    function managerCount(address artist) external view returns (uint256);

    /**
     * @dev Returns a manager at a particular index for a particular artist
     * @param artist the address of the artist
     * @param index the index of the manager
     */
    function managerAt(address artist, uint256 index) external view returns (address);

    /**
     * @dev Returns true if the address is a manager for a particular artist
     * @param artist the address of the artist
     * @param who the address of the manager
     */
    function isManager(address artist, address who) external view returns (bool);

    /// Moda Treasury

    /**
     * @dev Sets the numerator for calculating the percentage of fees to be sent to the Moda Treasury
     * @notice treasuryFee is based on a denominator of 10,000 (e.g. 1000 is 10.0%). Max of 10%
     * @notice the caller must be a default admin
     * @param percentage the percentage of fees to be sent to the Moda Treasury
     */
    function setModaTreasuryFee(uint256 percentage) external;

    /**
     * @dev Sets the address of the Moda Treasury
     * @notice the caller must be a default admin
     * @param modaTreasury the address of the Moda Treasury
     */
    function setModaTreasury(address modaTreasury) external;

    /**
     * @dev Returns the moda treasury fee percentage and address
     */
    function modaFeeInfo() external view returns (uint256, address);

    /// Moda Admin

    /**
     * @dev grants a role to an address
     * @notice the caller must be a default admin
     * @param role the role to grant
     * @param account the address to grant the role to
     */
    function grantRole(bytes32 role, address account) external;

    /**
     * @dev Takes in a role, an artist address and a user addresses and returns true/false
     * if the user has the role for the artist
     * @param role the role to check
     * @param artist the address of the artist
     * @param user the address of the user to check
     */
    function hasRole(bytes32 role, address artist, address user) external view returns (bool);

    /**
     * @dev sets a membership contract for a particular catalog
     * @notice the caller must be a default admin
     * @param catalogName the name of the catalog
     * @param membership the address of the membership contract
     */
    function setCatalogMembership(string calldata catalogName, address membership) external;
}
