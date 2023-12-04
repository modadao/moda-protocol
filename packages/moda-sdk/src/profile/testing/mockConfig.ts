import { http, createPublicClient, createWalletClient } from 'viem';
import { polygon } from 'viem/chains';

const mockParams = {
  chain: polygon,
  transport: http(),
};

jest.mock('viem', () => {
  const originalModule = jest.requireActual('viem');
  return {
    ...originalModule,
    createPublicClient: jest.fn((_mockParams) => ({
      simulateContract: jest.fn(() => ({
        request: 'request',
      })),
      readContract: jest.fn(() => 'data'),
    })),
    createWalletClient: jest.fn((_mockParams) => ({
      getAddresses: jest.fn(() => ['account']),
      writeContract: jest.fn(() => 'txHash'),
    })),
  };
});

export const mockConfig = {
  publicClient: createPublicClient(mockParams),
  walletClient: createWalletClient(mockParams),
};
