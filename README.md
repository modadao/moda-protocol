<div align="center">
  <img src="./logo.svg" alt="Logo" height="60" />
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

1. Install dependencies
```bash
pnpm i
```

2. Set up environment variables
```bash
cp ./moda-contracts/.env-local ./moda-contracts/.env
# Add your values to ./moda-contracts/.env
```

## Generate Smart Contract Documentation

1. `pnpm c:docs`
2. Visit [localhost:8080](localhost:8080)

### Deploy Membership

Membership is a way to control who has access to your Catalog. The default implementation defines any address as a "member", which means anyone can register tracks in the Catalog. You can extend this logic to define your own rules such as NFT-gates, minimal ERC-20 balance amounts, or a generic whitelist. See Membership.sol in `./moda-contracts/src/Membership.sol`

1. Deploy contract `pnpm 1_deploy_Membership --chain mumbai`

### Deploy Catalog

2. Deploy contract `pnpm 2_deploy_Catalog --chain mumbai --sender <YOUR_OWNER_ADDRESS>`

Then look in the console for your Catalog address:

```
 $ Your Catalog was deployed to:
 $ <ADDRESS>
```

## (Optional, but not recommended) Deploy Common-Good Contracts

These contracts have already been deployed on Mumbai. It is recommended that you use the ones already deployed so that the creators can benefit, but if you need to change certain features you are free to redeploy these. If you would like these contracts on a particular chain please reach out to the team and we will help facilitate. 

### Deploy Registry
`pnpm c:deploy_Registry --chain mumbai`

### Deploy Profile
`pnpm c:deploy_Profile --chain mumbai`

### Deploy Management
`pnpm c:deploy_Management --chain mumbai`

### Deploy Splits Factory
`pnpm c:deploy_SplitsFactory --chain mumbai`

### Deploy CatalogFactory
`pnpm c:deploy_CatalogFactory --chain mumbai`

### Register Contracts with Registry
`pnpm c:set_OfficialContracts --chain mumbai --sender <public address of who deployed the Registry>`

### Deploy ReleasesFactory
`pnpm _deploy_ReleasesFactory --chain mumbai --sender <ADDRESS>`

### Deploy OpenReleasesFactory
`pnpm _deploy_OpenReleasesFactory --chain mumbai --sender <ADDRESS>`

## Smart Contract Testing

Navigate to the moda-contracts directory and run

```bash
pnpm test
```

To generate a coverage report run

```bash
pnpm coverage
```

## License

`moda-protocol` is [Apache licensed](LICENSE).

## Contributing

Contributions are welcome and appreciated! Check out the
[contributing guide](CONTRIBUTING.md) before you dive in.

## Code of Conduct

Everyone interacting in this repo is expected to follow the
[code of conduct](CODE_OF_CONDUCT.md).
