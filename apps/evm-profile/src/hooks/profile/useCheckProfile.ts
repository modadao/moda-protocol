import { useReadProfileBalanceOf } from 'profile';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useProfileState } from './useProfileState';

export const useCheckProfile = () => {
  const { address } = useAccount();
  const { profileAddress } = useProfileState();
  const { data: userBalance, isFetched } = useReadProfileBalanceOf({
    address: profileAddress,
    args: [address],
  });

  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    if (Number(userBalance) === 1) setHasProfile(true);
  }, [userBalance]);

  return { hasProfile, isFetched };
};
