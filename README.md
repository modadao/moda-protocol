<div align="center">
  <img src="./moda-logo.svg" alt="MODA" height="60" />
  <br/>
  <br/>
  <a href="https://www.npmjs.com/package/modadao">
    <img src="https://img.shields.io/npm/v/modadao?style=flat&label=Version" />
  </a>
  <br/>
  <p>A web3 protocol for distributing music on EVM chains.</p>

  [![k1]][k2]

  [k1]: https://img.shields.io/twitter/follow/moda_dao?style=flat
  [k2]: https://x.com/MODA_DAO
</div>


## Getting Started

```bash
pnpm i
```

# Contracts

## Deployed by Moda

## Moda Registry

The Moda Registry is designed to facilitate the registration and management of Catalogs and serve as a source of truth for the ecosystem.

### Features

#### Catalog Registration and Management
- Allows organizations to register their Catalogs, subject to a vetting process for quality assurance.
- Facilitates automatic Catalog registration via the Catalog Factory, achieved by assigning the factory the `CATALOG_REGISTRAR_ROLE`. This ensures a seamless and consistent registration process.
- Provides functionality for the unregistration of Catalogs, ensuring flexibility in catalog management.


#### Official MODA Contract Addresses Lookup
- Serves as a reliable source for locating official MODA contract addresses, including Treasury, SplitsFactory, and Management contracts.
- Ensures users and organizations within the MODA ecosystem have access to verified and official contract addresses.

#### Role-Based Access and Security
- Implements role-based access control to define specific permissions and responsibilities within the ecosystem.

#### Treasury and Fee Management
- Manages a treasury system with a predefined fee structure for transactions within the ecosystem.
- Allows for the adjustment of treasury parameters by authorized roles.



## Management

The Management contract is specifically designed to store and track management accounts. These accounts are authorized to perform actions on behalf of a track owner.

### Features

#### Managerial Role Assignment and Revocation
- Provides the ability for track owners to assign and revoke managerial roles. This feature ensures that individuals or entities can act on behalf of the track owner for specific tasks or decisions.
- Ensures an organized system for keeping track of which accounts have been granted managerial privileges.


## Splits Factory

The Splits Factory contract in the MODA ecosystem is designed to automate the creation of split contracts for revenue sharing amongst track beneficiaries. It is called by the Releases contract when creating a release.

### Features

#### Automated Split Contract Creation
- The contract is responsible for generating new split contracts using the 0xSplit's SplitMain contract. This process includes adding the MODA Treasury as a beneficiary in every split.

#### Beneficiary and Treasury Integration
- It accepts a list of beneficiaries for each track, incorporating the MODA Treasury into the split to ensure proper distribution of revenues.
- The allocation percentage for the MODA Treasury will be dynamically determined through a process that is currently under development. This process will factor in an organization's ownership of $MODA tokens to calculate the treasury's share



### Catalog Factory

The Catalog Factory is specifically designed for the deployment of Catalog contracts within the MODA ecosystem. It holds the `CATALOG_REGISTRAR_ROLE`, and is an official contract that can be used by an organization to deploy their own Catalog. 

### Features

#### Catalog Deployment
- Enables the deployment of new Catalog contracts, leveraging the Beacon Proxy pattern to deploy a lightweight proxy that delegates it's calls to a master Catalog contract.

#### Integration with MODA Registry
- Automatically registers each newly created Catalog with the MODA Registry.

#### Customizable Catalog Creation
- Allows creation of Catalogs with specified names and a customized membership contract.


### Releases Factory

The Releases Factory is specifically designed for the easy deployment of custom Releases contracts.

### Features

#### Simplified Deployment Process
- Streamlines the creation of Releases contracts by cloning a master Releases implementation, this significantly decreases deployment cost.

#### MODA Registry and Catalog Integration
- Integration with the Moda Registry guarantees only the official Splits Factory contract is used in each deployed Releases.
- A Releases contract deployed from the factory is immediately registered in a Catalog of the deployers choosing.

#### Customizable Releases Creation
- Offers customization for new Releases contracts with specific names, symbols, and administrative roles.


## Deployed by an Organisation

### Catalog

The Catalog contract is designed to effectively manage track and release registrations. 

### Features

#### Track and Release Management
- Enables registration and management of tracks, including detailed tracking of important and relevant ownership data.
- Manages the registration and deregistration of a Releases contract, enabling it to be quickly and dependably authenticated.

#### Track Release Authorization
- Provides a mechanism to restrict the release of a user's track by any Releases contract. Users have with the option to grant approval to a Releases contract for a single track or to authorize the release of all their tracks globally. This feature ensures that the release of tracks occurs only with the explicit consent of the track owner.

#### Metadata and Status Management
- Offers functionalities for updating and managing track metadata, including registration, fingerprint, and validation hashes.
- Allows modification of track statuses to accurately reflect their current state in the ecosystem.


### Releases

The Releases contract is specifically tailored for artists or labels to create and manage their own release tokens. It integrates essential standards like ERC1155 for control over token supply and ERC2981 for royalty management.


### Features

#### Release Token Creation
- Enables the minting of new release tokens by authorized release admins, with the ability to specify metadata, total supply, and track IDs.

#### Royalty Management
- Implements the ERC2981 standard to manage royalties, enabling the assignment of a specific royalty percentage for each token.

#### Metadata and URI Handling
- Provides the functionality for an authorized user to set and update the URI of each token.

#### Role-Based Access Control
- Leverages Openzeppelin's `AccessControlUpgradeable` for managing roles and permissions, ensuring that only authorized users can perform critical functions like creating and withdrawing releases.

#### Withdrawal and Transfer of Release Tokens
- Allows release admins to withdraw release tokens and transfer them to designated addresses.

### Open Releases

The Open Releases contract offers similar functionalities to the standard Releases contract but is designed with fewer permission restrictions. It's intended for a one-time deployment by an organization within the MODA ecosystem to enable track owners to independently create releases with their tracks. This approach simplifies the process by removing the need for additional approvals, as it inherently requires the minting user to be the track owner. This design choice streamlines release creation, making it more accessible and straightforward for track owners to participate in the ecosystem without complex permission layers.


### Marketplace

The Marketplace contract is designed to enable the buying and selling of Releases. 

### Features

#### Sell and Purchase
- Allows users to list and sell their Releases, providing options to define key sale parameters such as price, supply, and duration.
- Enables buyers to securely purchase Releases, handling the transfer of tokens and funds efficiently.

#### Treasury Fee Integration
- Incorporates a treasury system, enabling an organization to set a percentage of each sale's revenue to be allocated as a fee.

#### Seller Withdrawals
- Allows sellers to easilty withdraw tokens from sales.

#### Authenticity in Trading
- Ensures that only releases from registered Releases contracts can be listed for sale, providing buyers with the confidence that they are purchasing authentic and verified releases.



## Set Contract Environment Variables

Navigate to the moda-contracts directory and run 

```bash
cp ./.env.example ./.env
```

Fill in the environment variables


## Smart Contract Testing

Navigate to the moda-contracts directory and run

```bash
pnpm test
```

To generate a coverage report run

```bash
pnpm coverage
```

## Smart Contract Deployment and Verification


Navigate to the moda-contracts directory and deploy contracts in the following order. The contracts will be verified upon deployment.

```bash
pnpm deploy_ModaRegistry
```

```bash
pnpm deploy_Management
```

```bash
pnpm deploy_SplitsFactory
```

```bash
pnpm deploy_CatalogFactory
```

## License

`moda-protocol` is [Apache licensed](LICENSE).

## Contributing

Contributions are welcome and appreciated! Check out the
[contributing guide](CONTRIBUTING.md) before you dive in.

## Code of Conduct

Everyone interacting in this repo is expected to follow the
[code of conduct](CODE_OF_CONDUCT.md).
