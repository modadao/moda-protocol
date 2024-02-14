# EVM Profile


## Description
Create a profile for an account or a contract. 
- Add metadata.
- View other profiles.

The profile contract is currently deployed on the Mumbai testnet at the following address:

```shell
0x03152fe681eD035D41178C5b6E6a4b8D70902345
```

## Setup Environment

Before running the project

1. From the root of the monorepo, run the following command to generate the necessary Wagmi hooks for the profile:

    ```shell
    pnpm run generate:profile
    ```

2. Navigate to the `apps/evm-profile` directory:
   ```shell
   cd apps/evm-profile
   ```

3. Copy the `.env.example` file and rename it to `env.local`:
   ```shell
   cp .env.example .env.local
   ```

4. Edit the `env.local` file and fill in the necessary environment variables, including an RPC URL for the desired network, a Pinata API key, and a Pinata secret key.

## How to Run
To run the project, execute the following command:

From the evm-profile root:

```shell
pnpm run dev

```

From the monorepo root:

```shell
pnpm run evm-profile:dev
```
