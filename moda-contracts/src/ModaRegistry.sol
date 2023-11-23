// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IModaRegistry} from "./interfaces/IModaRegistry.sol";
import {IOfficialModaContracts} from "./interfaces/IOfficialModaContracts.sol";
import {IManagement} from "./interfaces/IManagement.sol";
import "@openzeppelin/contracts/access/extensions/AccessControlEnumerable.sol";

contract ModaRegistry is IModaRegistry, IOfficialModaContracts, AccessControlEnumerable {
    using EnumerableSet for EnumerableSet.AddressSet;

    /// @dev The max fee MODA can set. This is calculated as the numerator. e.g. 1_000 / 10_000 = 10%
    uint256 constant MAX_TREASURY_FEE = 1_000;

    // State Variables

    /// @dev only an address with a verifier role can verify a track
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");

    /// @dev only an address with a releases registrar role can register a releases contract
    bytes32 public constant RELEASES_REGISTRAR_ROLE = keccak256("RELEASES_REGISTRAR_ROLE");

    /// @dev an address with AUTO_VERIFIED_ROLE will have their tracks verified on registration
    bytes32 public constant AUTO_VERIFIED_ROLE = keccak256("AUTO_VERIFIED_ROLE");

    address payable _treasury;
    uint256 _treasuryFee;
    address _splitsFactory;
    IManagement _management;

    EnumerableSet.AddressSet _catalogs;

    // Errors

    error AddressCannotBeZero();
    error CatalogAlreadyRegistered();
    error CatalogIsNotRegistered();
    error CatalogRegistrationFailed();
    error CatalogUnregistrationFailed();

    constructor(
        address payable treasury,
        uint256 treasuryFee,
        address splitsFactory,
        IManagement management
    ) {
        _treasury = treasury;
        _treasuryFee = treasuryFee;
        _splitsFactory = splitsFactory;
        _management = management;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// @inheritdoc IModaRegistry
    function registerCatalog(address catalog) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (catalog == address(0)) revert AddressCannotBeZero();
        if (_catalogs.contains(catalog)) revert CatalogAlreadyRegistered();

        if (_catalogs.add(catalog)) {
            emit CatalogRegistered(catalog, msg.sender);
            return;
        }

        revert CatalogRegistrationFailed();
    }

    /// @inheritdoc IModaRegistry
    /// @notice Only a default admin can call this
    function unregisterCatalog(address catalog) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (!_catalogs.contains(catalog)) revert CatalogIsNotRegistered();

        if (_catalogs.remove(catalog)) {
            emit CatalogUnregistered(catalog, msg.sender);
            return;
        }

        revert CatalogUnregistrationFailed();
    }

    /// @inheritdoc IModaRegistry
    function isRegisteredCatalog(address catalog) external view returns (bool) {
        return _catalogs.contains(catalog);
    }

    /// @inheritdoc IModaRegistry
    function setTreasuryFee(uint256 newFee) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(newFee <= MAX_TREASURY_FEE, "Fee too high");

        uint256 oldFee = _treasuryFee;
        _treasuryFee = newFee;

        emit TreasuryFeeChanged(oldFee, newFee);
    }

    /// @inheritdoc IModaRegistry
    function setTreasury(address newTreasury) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (newTreasury == address(0)) revert AddressCannotBeZero();
        address oldTreasury = _treasury;
        _treasury = payable(newTreasury);
        emit TreasuryChanged(oldTreasury, newTreasury);
    }

    /// @inheritdoc IOfficialModaContracts
    function getTreasury() external view returns (address) {
        return _treasury;
    }

    /// @inheritdoc IModaRegistry
    function getTreasuryFee() external view returns (uint256) {
        return _treasuryFee;
    }

    /// @inheritdoc IModaRegistry
    function setSplitsFactory(address splitsFactory) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _splitsFactory = splitsFactory;
    }

    /// @inheritdoc IOfficialModaContracts
    function getSplitsFactory() external view returns (address) {
        return _splitsFactory;
    }

    /// @inheritdoc IModaRegistry
    function setManagement(IManagement management) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _management = management;
    }

    /// @inheritdoc IOfficialModaContracts
    function getManagement() external view returns (IManagement) {
        return _management;
    }
}
