import { Address } from 'viem';
import { AddressError, Config, ConfigError } from '../types';
import { isValidAddress } from '../utils/isValidAddress';
import { Result } from '../utils/types';
import { verifyConfig } from '../utils/verifyConfig';
import { ProfileABI } from './abi/ProfileABI';
import { ProfileError } from './types';

interface GetOwnerByIdArgs {
  config: Config;
  profileAddress: Address;
  tokenId: number;
}

export async function getOwnerById({
  config,
  profileAddress,
  tokenId,
}: GetOwnerByIdArgs): Promise<
  Result<string, ConfigError | AddressError | ProfileError>
> {
  const verifiedConfig = verifyConfig(config);
  if (!verifiedConfig.ok) return verifiedConfig;

  const { publicClient } = verifiedConfig.value;

  if (!isValidAddress(profileAddress))
    return { ok: false, error: AddressError.ProfileAddressInvalid };

  const data = await publicClient.readContract({
    abi: ProfileABI,
    address: profileAddress,
    functionName: 'ownerOf',
    args: [tokenId],
  });

  if (data) {
    return { ok: true, value: data as string };
  }
  return { ok: false, error: ProfileError.OwnerUndefined };
}
