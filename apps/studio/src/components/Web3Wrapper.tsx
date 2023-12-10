'use client';
import { hardhat, polygonMumbai } from '@wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { WagmiConfig, createConfig } from 'wagmi';

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',

    appName: 'Drop Studio',

    chains: [polygonMumbai, hardhat],
  }),
);

const Web3Wrapper = ({ children }: { children?: React.ReactNode }) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider theme="auto" mode="light">
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default Web3Wrapper;
