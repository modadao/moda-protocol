import { ProfileABI } from '../abi/ProfileABI';
import { ProfileAddress } from '../constants/ProfileAddress';
import { CreateProfileForArgs } from '../types';

export async function createProfileFor(
  createProfileForArgs: CreateProfileForArgs,
): Promise<`0x${string}`> {
  const { publicClient, walletClient, contractAddress, metadataUri } =
    createProfileForArgs;

  const [account] = await walletClient.getAddresses();
  const { request } = await publicClient.simulateContract({
    account,
    abi: ProfileABI,
    address: ProfileAddress,
    functionName: 'mintFor',
    args: [contractAddress, metadataUri],
  });

  const txHash = await walletClient.writeContract(request);

  return txHash;
}
