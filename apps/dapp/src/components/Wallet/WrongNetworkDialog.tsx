'use client';
import { UiButton } from '@/ui/UiButton';
import { Dialog, DialogContent, DialogDescription } from '@/ui/UiDialogModal';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toHex } from 'viem';
import { polygonMumbai } from 'viem/chains';

export default function WrongNetworkDialog() {
  const router = useRouter();

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

  if (isIncorrectNetwork)
    return (
      <Dialog defaultOpen={true}>
        <DialogContent className="bg-whiteBackground">
          <DialogDescription>
            <div className="text-xl font-semibold  flex flex-col items-center justify-center gap-8 mt-6">
              <h3>Please switch to the Polygon Mumbai Test Network</h3>
              <UiButton type="button" onClick={() => handleChangeNetwork()}>
                Switch
              </UiButton>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    );
}
