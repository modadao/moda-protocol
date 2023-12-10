import { useAccount, useConnect, useDisconnect } from 'wagmi';

export const useWeb3Connect = () => {
  const { connect, connectors } = useConnect();
  const { disconnect, isSuccess: disconnected } = useDisconnect();
  const { address, isConnected, isDisconnected } = useAccount();

  const [connector] = connectors;

  return {
    connect,
    disconnect,
    connector,
    address,
    isConnected,
    disconnected,
    isDisconnected,
  };
};
