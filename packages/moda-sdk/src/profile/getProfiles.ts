import { Address } from 'viem';
import { Config, ConfigError } from '../types';
import { AddressError } from '../types';
import { isValidAddress } from '../utils/isValidAddress';
import { Result } from '../utils/types';
import { verifyConfig } from '../utils/verifyConfig';
import { ProfileABI } from './abi/ProfileABI';
import { ProfileError } from './types';

interface GetProfilesArgs {
  config: Config;
  profileAddress: Address;
  userAddresses: Address[];
}

export async function getProfiles(
  getProfilesArgs: GetProfilesArgs,
): Promise<Result<string[], ConfigError | AddressError | ProfileError>> {
  const { config, profileAddress, userAddresses } = getProfilesArgs;

  const verifiedConfig = verifyConfig(config);
  if (!verifiedConfig.ok) return verifiedConfig;

  const { publicClient } = verifiedConfig.value;

  if (!isValidAddress(profileAddress))
    return { ok: false, error: AddressError.ProfileAddressInvalid };

  if(userAddresses.length === 0) {
    return { ok: false, error: ProfileError.AddressArrayEmpty };
  }

  const profiles: string[] = [];

  for (let i = 0; i < userAddresses.length; i++) {
    const address = userAddresses[i];
    if (address !== undefined) {
      if (!isValidAddress(address)) {
        return { ok: false, error: AddressError.UserAddressInvalid };
      }
      const data = await publicClient.readContract({
        abi: ProfileABI,
        address: profileAddress,
        functionName: 'accountUri',
        args: [userAddresses[i]],
      });
      if (data) {
        profiles.push(data as string);
      } else {
        profiles.push('Profile not found');
      }
    }
  }

  return { ok: true, value: profiles };
}
