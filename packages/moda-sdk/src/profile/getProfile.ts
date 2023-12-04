import { Address } from 'viem';
import { Config, ConfigError } from '../types';
import { AddressError } from '../types';
import { isValidAddress } from '../utils/isValidAddress';
import { Result } from '../utils/types';
import { verifyConfig } from '../utils/verifyConfig';
import { ProfileABI } from './abi/ProfileABI';
import { ProfileError } from './types';

interface GetProfileArgs {
  config: Config;
  profileAddress: Address;
  userAddress: Address;
}

export async function getProfile({
  config,
  profileAddress,
  userAddress,
}: GetProfileArgs): Promise<
  Result<string, ConfigError | AddressError | ProfileError>
> {
  const verifiedConfig = verifyConfig(config);
  if (!verifiedConfig.ok) return verifiedConfig;

  const { publicClient } = verifiedConfig.value;

  if (!isValidAddress(profileAddress))
    return { ok: false, error: AddressError.ProfileAddressInvalid };

  if (!isValidAddress(userAddress)) {
    return { ok: false, error: AddressError.UserAddressInvalid };
  }

  const data = await publicClient.readContract({
    abi: ProfileABI,
    address: profileAddress,
    functionName: 'accountUri',
    args: [userAddress],
  });

  if (data) {
    return { ok: true, value: data as string };
  } else {
    return { ok: false, error: ProfileError.ProfileNotFound };
  }
}
