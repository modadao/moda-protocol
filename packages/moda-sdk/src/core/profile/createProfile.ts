import { Hash } from 'viem';
import { ProfileABI } from '../abi/ProfileABI';
import { ProfileAddress } from '../constants/ProfileAddress';
import { CreateProfileArgs } from '../types';

export async function createProfile(
  createProfileArgs: CreateProfileArgs,
): Promise<Hash> {
  const { publicClient, walletClient, metadataUri } = createProfileArgs;

  const [account] = await walletClient.getAddresses();
  const { request } = await publicClient.simulateContract({
    account,
    abi: ProfileABI,
    address: ProfileAddress,
    functionName: 'mint',
    args: [metadataUri],
  });

  const txHash = await walletClient.writeContract(request);

  return txHash;
}
