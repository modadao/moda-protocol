import { Address } from 'viem';

export const isValidAddress = (address: Address) => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};
