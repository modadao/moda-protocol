import { PublicClient, WalletClient } from 'viem';
import { createProfile, createProfileFor } from './profile';
import { CreateProfileArgs } from './types';

export class ModaClient {
  private publicClient: PublicClient;
  private walletClient: WalletClient;

  constructor(publicClient: PublicClient, walletClient: WalletClient) {
    this.publicClient = publicClient;
    this.walletClient = walletClient;
  }

  async createProfile(metadataUri: string): Promise<`0x${string}`> {
    const createProfileArgs: CreateProfileArgs = {
      publicClient: this.publicClient,
      walletClient: this.walletClient,
      metadataUri: metadataUri,
    };

    return await createProfile(createProfileArgs);
  }

  async createProfileFor(
    contractAddress: `0x${string}`,
    metadataUri: string,
  ): Promise<`0x${string}`> {
    const createProfileForArgs = {
      publicClient: this.publicClient,
      walletClient: this.walletClient,
      contractAddress: contractAddress,
      metadataUri: metadataUri,
    };

    return await createProfileFor(createProfileForArgs);
  }
}
