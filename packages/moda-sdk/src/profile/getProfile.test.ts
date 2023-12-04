import { AddressError, ConfigError } from '../types';
import { getProfile } from './getProfile';
import { profileAddress, userAddress } from './testing/constants';
import { mockConfig } from './testing/mockConfig';

describe('getProfile', () => {
  it('should return a profile', async () => {
    const result = await getProfile({
      config: mockConfig,
      profileAddress,
      userAddress,
    });

    if (!result.ok) {
      throw new Error('Expected result to be successful');
    }
    expect(result.ok).toBe(true);
    expect(result.value).toEqual('data');
  });

  it('Should fail if config is not verifiable', async () => {
    const result = await getProfile({
      config: { publicClient: undefined, walletClient: undefined },
      profileAddress,
      userAddress,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }

    expect(result.error).toBe(ConfigError.PublicClientUndefined);
  });

  it('Should fail if the publicClient is defined but the walletClient is not', async () => {
    const result = await getProfile({
      config: {
        publicClient: mockConfig.publicClient,
        walletClient: undefined,
      },
      profileAddress,
      userAddress,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }

    expect(result.error).toBe(ConfigError.WalletClientUndefined);
  });

  it('Should fail if profileAddress is invalid', async () => {
    const result = await getProfile({
      config: mockConfig,
      profileAddress: '0xInvalidAddress',
      userAddress,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }
    expect(result.error).toBe(AddressError.ProfileAddressInvalid);
  });

  it('Should fail if a userAddress is invalid', async () => {
    const result = await getProfile({
      config: mockConfig,
      profileAddress,
      userAddress: '0xInvalidAddress',
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }
    expect(result.error).toBe(AddressError.UserAddressInvalid);
  });
});
