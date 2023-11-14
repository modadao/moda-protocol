// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "./interfaces/ICatalogFactory.sol";
import "./interfaces/ICatalog.sol";
import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";

contract CatalogFactory is ICatalogFactory {
    /// Storage Variables
    address public immutable catalogBeacon;
    address[] public catalogs;

    /// Errors
    error AddressCannotBeZero();

    /// Constructor
    constructor(address catalogBeacon_) {
        if (catalogBeacon_ == address(0)) {
            revert AddressCannotBeZero();
        }
        catalogBeacon = catalogBeacon_;
    }

    /// External Functions
    /**
     * @inheritdoc ICatalogFactory
     */
    function deployCatalog(
        string calldata catalogName,
        string calldata chainId,
        string calldata catalogVersion,
        address modaRegistry,
        address splitsFactory,
        address modaBeneficiary
    ) external {
        address catalog = address(new BeaconProxy(catalogBeacon, ""));
        catalogs.push(catalog);
        ICatalog(catalog).initialize(
            catalogName,
            chainId,
            catalogVersion,
            modaRegistry,
            splitsFactory,
            modaBeneficiary,
            msg.sender
        );

        emit CatalogDeployed(msg.sender, catalog, catalogName, chainId, catalogVersion);
    }
}
