import { Hash } from 'viem';
import { ProfileABI } from '../abi/ProfileABI';
import { getModaConfig } from '../config';
import { ProfileAddress } from '../constants/ProfileAddress';
import { CreateProfileArgs } from '../types';

export async function createProfile(
  metadataUri: CreateProfileArgs,
): Promise<Hash> {
  const { publicClient, walletClient } = getModaConfig();

  if (publicClient === undefined) {
    throw new Error('Public client is undefined');
  }

  if (walletClient === undefined) {
    throw new Error('Wallet client is undefined');
  }

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
