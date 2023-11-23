// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface IManagement {
    /// @dev Emitted when a manager is added or removed by an artist
    event ManagementPermissionSet(address indexed artist, address indexed manager, bool isManager);

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
}
