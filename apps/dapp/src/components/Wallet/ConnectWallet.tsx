'use client';

import { UiButton } from '@/ui/UiButton';
import { useConnect } from 'wagmi';

export default function ConnectWallet() {
  const { connectors, connect } = useConnect();
  const connector = connectors[0];

  return (
    <UiButton size="sm" onClick={() => connect({ connector })}>
      Connect Wallet
    </UiButton>
  );
}
