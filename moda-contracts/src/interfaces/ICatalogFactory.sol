// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

interface ICatalogFactory {
    event CatalogDeployed(
        address indexed deployer,
        address catalog,
        string catalogName,
        string chainId,
        string catalogVersion
    );

    /**
     * @dev Deploys a new catalog
     * @param catalogName The name of the product the catalog is used for
     * @param chainId The chain id of the network the catalog is deployed on
     * @param catalogVersion The version of the catalog
     * @param modaRegistry The address of the MODA registry
     * @param splitsFactory The address of the splits factory
     * @param modaBeneficiary The address of the MODA beneficiary
     */
    function deployCatalog(
        string calldata catalogName,
        string calldata chainId,
        string calldata catalogVersion,
        address modaRegistry,
        address splitsFactory,
        address modaBeneficiary
    ) external;
}
