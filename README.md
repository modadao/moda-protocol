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
## Deploy a Catalog Contract

A Catalog is owned by an organization and is where artists and labels register tracks. Once registered, users can create releases, music NFTs that can be single tracks or a list of tracks.

## Deploy Common-Good Contracts (Not Recommended)

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

## Automatic track verification

All registered tracks have a status that is used to represent their authenticity. Upon registration a track is given a status of PENDING, this status can be updated to VALIDATED or INVALIDATED by a privileged account. A track cannot be used to create a release without a status of VALIDATED. This step can by bypassed by a catalog owner granting the registering account with the AUTO_VERIFIED_ROLE. We have added a script that allows the catalog owner to do this from the command line. To grant the AUTO_VERIFIED_ROLE to one or more addresses you can run this command from the root: 

`pnpm add_verified_roles <address1> <address2> ....`

## Generate Smart Contract Documentation

1. `pnpm c:docs`
2. Visit [localhost:3000](localhost:3000)

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
