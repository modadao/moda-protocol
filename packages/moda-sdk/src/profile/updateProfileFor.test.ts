import { AddressError, ConfigError } from '../types.ts';
import {
  contractAddress,
  metadataUri,
  profileAddress,
} from './testing/constants.ts';
import { mockConfig } from './testing/mockConfig.ts';
import { updateProfileFor } from './updateProfileFor.ts';

describe('updateProfileFor', () => {
  it('Returns a txHash', async () => {
    const result = await updateProfileFor({
      config: mockConfig,
      profileAddress,
      contractAddress,
      metadataUri,
    });

    if (!result.ok) {
      throw new Error('Expected result to be successful');
    }
    expect(result.ok).toBe(true);
    expect(result.value).toBe('txHash');
  });

  it('Should fail if config is not verifiable', async () => {
    const result = await updateProfileFor({
      config: { publicClient: undefined, walletClient: undefined },
      profileAddress,
      contractAddress,
      metadataUri,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }
    expect(result.error).toBe(ConfigError.PublicClientUndefined);
  });

  it('Should fail if the publicClient is defined but the walletClient is not', async () => {
    const result = await updateProfileFor({
      config: {
        publicClient: mockConfig.publicClient,
        walletClient: undefined,
      },
      profileAddress,
      contractAddress,
      metadataUri,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }

    expect(result.error).toBe(ConfigError.WalletClientUndefined);
  });

  it('Should fail if profileAddress is invalid', async () => {
    const result = await updateProfileFor({
      config: mockConfig,
      profileAddress: '0xInvalidAddress',
      contractAddress,
      metadataUri,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }

    expect(result.error).toBe(AddressError.ProfileAddressInvalid);
  });

  it('Should fail if contractAddress is invalid', async () => {
    const result = await updateProfileFor({
      config: mockConfig,
      profileAddress,
      contractAddress: '0xInvalidAddress',
      metadataUri,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }
    expect(result.error).toBe(AddressError.ContractAddressInvalid);
  });
});
