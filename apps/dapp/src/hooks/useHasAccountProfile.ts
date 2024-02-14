import { ProfileAddresses, useReadProfileBalanceOf } from 'profile';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

export const useHasAccountProfile = () => {
  const { address } = useAccount();
  const { data: userBalance, isFetched } = useReadProfileBalanceOf({
    address: ProfileAddresses.mumbai,
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
