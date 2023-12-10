'use client';

import ConnectWallet from '@/components/ConnectWallet';
import { useWeb3Connect } from '@/hooks/useWeb3Connect';

export default function Home() {
  const { isConnected } = useWeb3Connect();

  if (!isConnected) return <ConnectWallet />;
  return (
    <main className="flex flex-col ml-auto mr-auto text-center mt-52 text-3xl">
      STUDIO
    </main>
  );
}
