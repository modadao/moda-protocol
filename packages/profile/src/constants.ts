export type Address = `0x${string}`;
import { polygonMumbai } from '@wagmi/chains';

export const ProfileAddresses: { [chainId: number]: Address } = {
  [polygonMumbai.id]: '0xAFc5A45d643fb0ff142233Fb23C3991934E0045e',
};
