import { Contract } from '../types';
import { getChainInfo } from './getChainInfo';

const { isTestnet } = getChainInfo();

export const getContractAddress = (contract: Contract | null | undefined) => {
  if (!contract) {
    return null;
  }
  return isTestnet ? contract.testnetContractAddress : contract.contractAddress;
};
