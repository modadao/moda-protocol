'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toHex } from 'viem';
import { polygonMumbai } from 'viem/chains';
import { useAccount, useConnect } from 'wagmi';
import { Button } from '../Ui/Button';

export default function ConnectWallet() {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const connector = connectors[0];

  const [isIncorrectNetwork, setIsIncorrectNetwork] = useState(false);

  const handleChangeNetwork = async () => {
    await window.ethereum?.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: toHex(polygonMumbai.id) }],
    });
    if (
      (await window.ethereum?.request({ method: 'eth_chainId' })) ===
      toHex(polygonMumbai.id)
    ) {
      setIsIncorrectNetwork(false);
      router.refresh();
    }
  };

  useEffect(() => {
    const checkChainId = async () => {
      const chainId = await window.ethereum?.request({ method: 'eth_chainId' });
      if (chainId !== toHex(polygonMumbai.id)) {
        setIsIncorrectNetwork(true);
      }
    };
    if (window.ethereum) checkChainId();

    window.ethereum?.on('chainChanged', checkChainId);

    return () => {
      window.ethereum?.removeListener('chainChanged', checkChainId);
    };
  }, []);

  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard');
    }
  }, [isConnected, router]);

  if (isIncorrectNetwork) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 text-xl font-bold">
        <h3>Please switch to the Polygon Mumbai test network</h3>
        <Button type="button" onClick={() => handleChangeNetwork()}>
          Switch
        </Button>
      </div>
    );
  }

  return (
    <Button
      className="w-60 h-12 rounded-lg text-lg"
      type="button"
      onClick={() => connect({ connector })}
    >
      Connect Wallet
    </Button>
  );
}
