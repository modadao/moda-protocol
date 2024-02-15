'use client';

import { UiButton } from '@/ui/UiButton';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAccount, useConnect } from 'wagmi';

export default function ConnectWallet() {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const connector = connectors[0];

  useEffect(() => {
    if (isConnected) {
      router.push('/');
    }
  }, [isConnected, router]);

  return (
    <UiButton size="sm" type="button" onClick={() => connect({ connector })}>
      Connect Wallet
    </UiButton>
  );
}
