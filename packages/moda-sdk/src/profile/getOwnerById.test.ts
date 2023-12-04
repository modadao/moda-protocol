import { AddressError, ConfigError } from '../types';
import { getOwnerById } from './getOwnerById';
import { profileAddress, tokenId } from './testing/constants';
import { mockConfig } from './testing/mockConfig';

describe('getOwnerById', () => {
  it('Should return the owner of the profile', async () => {
    const result = await getOwnerById({
      config: mockConfig,
      profileAddress,
      tokenId,
    });

    if (!result.ok) {
      throw new Error('Expected result to be successful');
    }
    expect(result.ok).toBe(true);
    expect(result.value).toEqual('data');
  });

  it('Should fail if config is not verifiable', async () => {
    const result = await getOwnerById({
      config: { publicClient: undefined, walletClient: undefined },
      profileAddress,
      tokenId,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }

    expect(result.error).toBe(ConfigError.PublicClientUndefined);
  });

  it('Should fail if the publicClient is defined but the walletClient is not', async () => {
    const result = await getOwnerById({
      config: {
        publicClient: mockConfig.publicClient,
        walletClient: undefined,
      },
      profileAddress,
      tokenId,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }

    expect(result.error).toBe(ConfigError.WalletClientUndefined);
  });

  it('Should fail if profileAddress is invalid', async () => {
    const result = await getOwnerById({
      config: mockConfig,
      profileAddress: '0xInvalidAddress',
      tokenId,
    });

    if (result.ok) {
      throw new Error('Expected result to be unsuccessful');
    }
    expect(result.error).toBe(AddressError.ProfileAddressInvalid);
  });
});
