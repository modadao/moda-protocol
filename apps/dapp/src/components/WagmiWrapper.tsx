'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { polygon, polygonMumbai } from '@wagmi/chains';
import React from 'react';
import { http } from 'viem';
import { WagmiProvider, createConfig } from 'wagmi';

interface WagmiWrapperProps {
  children: React.ReactNode;
}

const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL || '';

export const config = createConfig({
  chains: [polygon, polygonMumbai],

  transports: {
    [polygon.id]: http(rpcUrl),
    [polygonMumbai.id]: http(rpcUrl),
  },
});

const queryClient = new QueryClient();

const WagmiWrapper = ({ children }: WagmiWrapperProps) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default WagmiWrapper;
