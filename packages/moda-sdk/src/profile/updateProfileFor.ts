import { Address, BaseError, ContractFunctionRevertedError, Hash } from 'viem';
import { Config, ConfigError, TransactionError } from '../types';
import { AddressError } from '../types';
import { isValidAddress } from '../utils/isValidAddress';
import { Result } from '../utils/types';
import { verifyConfig } from '../utils/verifyConfig';
import { ProfileABI } from './abi/ProfileABI';

interface UpdateProfileForArgs {
  config: Config;
  profileAddress: Address;
  contractAddress: Address;
  metadataUri: string;
}

export async function updateProfileFor(
  updateProfileForArgs: UpdateProfileForArgs,
): Promise<Result<Hash, AddressError | ConfigError | string>> {
  const { config, profileAddress, contractAddress, metadataUri } =
    updateProfileForArgs;

  const verifiedConfig = verifyConfig(config);
  if (!verifiedConfig.ok) return verifiedConfig;
  const { publicClient, walletClient } = verifiedConfig.value;

  if (!isValidAddress(profileAddress))
    return { ok: false, error: AddressError.ProfileAddressInvalid };

  if (!isValidAddress(contractAddress))
    return { ok: false, error: AddressError.ContractAddressInvalid };

  const [account] = await walletClient.getAddresses();

  let txHash;

  try {
    const { request } = await publicClient.simulateContract({
      account,
      abi: ProfileABI,
      address: profileAddress,
      functionName: 'updateProfileFor',
      args: [contractAddress, metadataUri],
    });

    txHash = await walletClient.writeContract(request);
  } catch (e) {
    if (e instanceof BaseError) {
      const revertError = e.walk(
        (_e) => _e instanceof ContractFunctionRevertedError,
      ) as ContractFunctionRevertedError | null;
      if (revertError) {
        const errorName = revertError.data?.errorName ?? '';
        return { ok: false, error: errorName };
      }
    }
  }

  if (txHash) {
    return { ok: true, value: txHash };
  } else {
    return { ok: false, error: TransactionError.TransactionHashUndefined };
  }
}
