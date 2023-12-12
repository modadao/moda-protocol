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

## Owned by Moda

### Moda Registry

### Management

### Splits Factory

### Catalog Factory

### Releases Factory

## Owned by an Organisation

### Catalog

### Releases

### Marketplace



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
