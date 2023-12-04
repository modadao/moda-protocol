import { AddressError, ConfigError } from '../types';
import { getProfiles } from './getProfiles';
import {
  profileAddress,
  userAddress,
  userAddressTwo,
} from './testing/constants';
import { mockConfig } from './testing/mockConfig';

describe('getProfiles', () => {
  it('Should return a list of profiles', async () => {
    const result = await getProfiles({
      config: mockConfig,
      profileAddress,
      userAddresses: [userAddress, userAddressTwo],
    });

    if (!result.ok) {
      throw new Error('Expected result to be successful');
    }
    expect(result.ok).toBe(true);
    expect(result.value).toEqual(['data', 'data']);
  });

  it('Should fail if config is not verifiable', async () => {
    const result = await getProfiles({
      config: { publicClient: undefined, walletClient: undefined },
      profileAddress,
      userAddresses: [userAddress, userAddressTwo],
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }

    expect(result.error).toBe(ConfigError.PublicClientUndefined);
  });

  it('Should fail if the publicClient is defined but the walletClient is not', async () => {
    const result = await getProfiles({
      config: {
        publicClient: mockConfig.publicClient,
        walletClient: undefined,
      },
      profileAddress,
      userAddresses: [userAddress, userAddressTwo],
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }

    expect(result.error).toBe(ConfigError.WalletClientUndefined);
  });

  it('Should fail if profileAddress is invalid', async () => {
    const result = await getProfiles({
      config: mockConfig,
      profileAddress: '0xInvalidAddress',
      userAddresses: [userAddress, userAddressTwo],
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }
    expect(result.error).toBe(AddressError.ProfileAddressInvalid);
  });

  it('Should fail if a userAddress is invalid', async () => {
    const result = await getProfiles({
      config: mockConfig,
      profileAddress,
      userAddresses: ['0xInvalidAddress', userAddressTwo],
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }
    expect(result.error).toBe(AddressError.UserAddressInvalid);
  });
});
