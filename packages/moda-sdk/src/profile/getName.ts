import { Address, PublicClient, WalletClient } from 'viem';
import { AddressError, Config, ConfigError } from '../types';
import { isValidAddress } from '../utils/isValidAddress';
import { Result } from '../utils/types';
import { verifyConfig } from '../utils/verifyConfig';
import { ProfileABI } from './abi/ProfileABI';
import { ProfileError } from './types';

interface GetNameArgs {
  config: Config;
  profileAddress: Address;
}

export type ReaderClient = Pick<PublicClient, 'readContract'>;
export type WriterClient = Pick<WalletClient, 'writeContract'>;

export async function getName({
  config,
  profileAddress,
}: GetNameArgs): Promise<
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
    functionName: 'name',
  });

  if (data) {
    return { ok: true, value: data as string };
  }
  return { ok: false, error: ProfileError.NameUndefined };
}
