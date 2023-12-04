import { Address, PublicClient, WalletClient } from 'viem';

export type CreateProfileArgs = {
  publicClient: PublicClient;
  walletClient: WalletClient;
  metadataUri: string;
};

export type CreateProfileForArgs = {
  publicClient: PublicClient;
  walletClient: WalletClient;
  contractAddress: Address;
  metadataUri: string;
};
