import ConnectWallet from '@/components/Wallet/ConnectWallet';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col font-extrabold italic items-end mt-60">
        <h1 className="text-9xl">EVM Profile</h1>
        <h3 className="text-5xl">by DROP</h3>
      </div>
      <div className="mt-12">
        <ConnectWallet />
      </div>
    </main>
  );
}
