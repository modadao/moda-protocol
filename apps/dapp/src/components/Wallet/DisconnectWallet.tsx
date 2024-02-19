'use client';

import { UiButton } from '@/ui/UiButton';
import { useDisconnect } from 'wagmi';

export default function DisconnectWallet() {
  const { disconnect } = useDisconnect();

  return (
    <UiButton
      className="mt-0 "
      size="sm"
      intent="secondary"
      onClick={() => disconnect()}
    >
      Disconnect
    </UiButton>
  );
}
