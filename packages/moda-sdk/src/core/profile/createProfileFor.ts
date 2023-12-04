import { Hash } from 'viem';
import { isValidAddress } from '../../utils/isValidAddress';
import { ProfileABI } from '../abi/ProfileABI';
import { getModaConfig } from '../config';
import { ProfileAddress } from '../constants/ProfileAddress';
import { CreateProfileForArgs } from '../types';

export async function createProfileFor(
  createProfileForArgs: CreateProfileForArgs,
): Promise<Hash> {
  const { publicClient, walletClient } = getModaConfig();

  if (publicClient === undefined) {
    throw new Error('Public client is undefined');
  }

  if (walletClient === undefined) {
    throw new Error('Wallet client is undefined');
  }

  const { contractAddress, metadataUri } = createProfileForArgs;

  if (isValidAddress(contractAddress) === false) {
    throw new Error('Invalid contract address');
  }

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
