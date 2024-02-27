import { ProfileAddresses, useReadProfileBalanceOf } from 'profile';
import { useEffect, useState } from 'react';
import { polygonMumbai } from 'viem/chains';
import { useAccount } from 'wagmi';

export const useHasAccountProfile = () => {
  const { address } = useAccount();
  const { data: userBalance, isFetched } = useReadProfileBalanceOf({
    address: ProfileAddresses[polygonMumbai.id],
    args: [address],
  });

  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    if (Number(userBalance) === 1) {
      setHasProfile(true);
    }
  }, [userBalance]);

  return { hasProfile, isFetched };
};
