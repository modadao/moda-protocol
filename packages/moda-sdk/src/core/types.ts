import { Address, PublicClient, WalletClient } from 'viem';

export type ModaConfig = {
  publicClient?: PublicClient;
  walletClient?: WalletClient;
};

export type CreateProfileArgs = {
  metadataUri: string;
};

export type CreateProfileForArgs = {
  contractAddress: Address;
  metadataUri: string;
};
