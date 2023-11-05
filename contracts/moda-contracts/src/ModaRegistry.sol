// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "./interfaces/IModaRegistry.sol";
import "./interfaces/IMembership.sol";
import "@openzeppelin/contracts/access/extensions/AccessControlEnumerable.sol";

contract ModaRegistry is IModaRegistry, AccessControlEnumerable {
    using EnumerableSet for EnumerableSet.AddressSet;

    /// State Variables
    address payable _treasury;
    uint256 _treasuryFee;

    Catalog[] _catalogs;
    mapping(address => bool) _isCatalogRegistered;
    mapping(address => EnumerableSet.AddressSet) _managers;

    /// Errors

    error CatalogAlreadyRegistered();
    error CatalogNotRegistered();
    error AddressCannotBeZero();
    error DuplicateAddress();

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// Membership

    /**
     * @inheritdoc IModaRegistry
     */
    function isMember(uint256 index, address user) external view returns (bool) {
        return IMembership(_catalogs[index].membership).isMember(user);
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function setCatalogMembership(uint256 index, address membership) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (membership == address(0)) {
            revert AddressCannotBeZero();
        }
        _catalogs[index].membership = membership;
        emit CatalogMembershipChanged(_catalogs[index].name, membership);
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function registerCatalog(string calldata name, address catalog, address membership)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        if (catalog == address(0)) revert AddressCannotBeZero();
        if (_isCatalogRegistered[catalog]) revert CatalogAlreadyRegistered();
        _catalogs.push(Catalog({name: name, catalog: catalog, membership: membership}));
        _isCatalogRegistered[catalog] = true;

        emit CatalogRegistered(name, catalog);
        emit CatalogMembershipChanged(name, membership);
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function unregisterCatalog(uint256 index) external onlyRole(DEFAULT_ADMIN_ROLE) {
        Catalog storage catalog = _catalogs[index];
        if (catalog.catalog == address(0)) revert CatalogNotRegistered();
        _isCatalogRegistered[catalog.catalog] = false;
        emit CatalogUnregistered(catalog.name, catalog.catalog);
        catalog.name = "";
        catalog.catalog = address(0);
        catalog.membership = address(0);
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function getCatalogInfo(uint256 index) external view returns (Catalog memory) {
        return _catalogs[index];
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function getCatalogCount() external view returns (uint256) {
        return _catalogs.length;
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function addManagers(address[] calldata managers) external {
        for (uint256 i = 0; i < managers.length; i++) {
            if (_managers[msg.sender].contains(managers[i])) revert DuplicateAddress();
            if (managers[i] == address(0)) revert AddressCannotBeZero();
            _managers[msg.sender].add(managers[i]);
            emit ManagerAdded(msg.sender, managers[i]);
        }
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function removeManagers(address[] calldata managers) external {
        for (uint256 i = 0; i < managers.length; i++) {
            if (managers[i] == address(0)) revert AddressCannotBeZero();
            _managers[msg.sender].remove(managers[i]);
            emit ManagerRemoved(msg.sender, managers[i]);
        }
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function getManagerCount(address artist) external view returns (uint256) {
        return _managers[artist].length();
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function getManager(address artist, uint256 index) external view returns (address) {
        return _managers[artist].at(index);
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function isManager(address artist, address who) external view returns (bool) {
        return _managers[artist].contains(who);
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function setTreasuryFee(uint256 newFee) external onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 oldFee = _treasuryFee;
        _treasuryFee = newFee;
        emit TreasuryFeeChanged(oldFee, newFee);
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function setTreasury(address newTreasury) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (newTreasury == address(0)) revert AddressCannotBeZero();
        address oldTreasury = _treasury;
        _treasury = payable(newTreasury);
        emit TreasuryChanged(oldTreasury, newTreasury);
    }

    /**
     * @inheritdoc IModaRegistry
     */
    function getTreasury() external view returns (address, uint256) {
        return (_treasury, _treasuryFee);
    }
}
