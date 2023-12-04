import { ConfigError } from '../types.ts';
import { AddressError } from '../types.ts';
import { createProfile } from './createProfile';
import { metadataUri, profileAddress } from './testing/constants.ts';
import { mockConfig } from './testing/mockConfig.ts';

describe('createProfile', () => {
  it('Returns a txHash', async () => {
    const result = await createProfile({
      config: mockConfig,
      profileAddress,
      metadataUri,
    });

    if (!result.ok) {
      throw new Error('Expected result to be successful');
    }

    expect(result.ok).toBeTruthy;
    expect(result.value).toBe('txHash');
  });

  it('Should fail if config is not verifiable', async () => {
    const result = await createProfile({
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
    const result = await createProfile({
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
    const result = await createProfile({
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
