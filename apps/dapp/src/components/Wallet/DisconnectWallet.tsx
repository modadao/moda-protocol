'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { Button } from '../Ui/Button';

export default function DisconnectWallet() {
  const router = useRouter();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (!isConnected) router.push('/');
  }, [isConnected, router]);

  return (
    <Button className="h-9 italic" onClick={() => disconnect()}>
      Disconnect
    </Button>
  );
}
