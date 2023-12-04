import { AddressError, ConfigError } from '../types.ts';
import { metadataUri, profileAddress } from './testing/constants.ts';
import { mockConfig } from './testing/mockConfig.ts';
import { updateProfile } from './updateProfile';

describe('updateProfile', () => {
  it('Returns a txHash', async () => {
    const result = await updateProfile({
      config: mockConfig,
      profileAddress,
      metadataUri,
    });

    if (!result.ok) {
      throw new Error('Expected result to be successful');
    }

    expect(result.ok).toBe(true);
    expect(result.value).toBe('txHash');
  });

  it('Should fail if config is not verifiable', async () => {
    const result = await updateProfile({
      config: { publicClient: undefined, walletClient: undefined },
      profileAddress,
      metadataUri,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }

    expect(result.error).toBe(ConfigError.PublicClientUndefined);
  });

  it('Should fail if the publicClient is defined but the walletClient is not', async () => {
    const result = await updateProfile({
      config: {
        publicClient: mockConfig.publicClient,
        walletClient: undefined,
      },
      profileAddress,
      metadataUri,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }

    expect(result.error).toBe(ConfigError.WalletClientUndefined);
  });

  it('Should fail if profileAddress is invalid', async () => {
    const result = await updateProfile({
      config: mockConfig,
      profileAddress: '0xInvalidAddress',
      metadataUri,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }
    expect(result.error).toBe(AddressError.ProfileAddressInvalid);
  });
});
