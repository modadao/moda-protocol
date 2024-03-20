import { getChainInfo } from '@/utils';
import { Addresses } from 'drop-sdk';
import { useReadProfileBalanceOf } from 'profile';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

export const useHasAccountProfile = () => {
  const { address } = useAccount();
  const { isTestnet } = getChainInfo();

  const profileAddress = isTestnet ? Addresses.Profile.mumbai : '';

  const { data: userBalance, isFetched } = useReadProfileBalanceOf({
    address: profileAddress,
    args: [address],
  });
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    setHasProfile(Number(userBalance) === 1);
  }, [userBalance]);

  return { hasProfile, isFetched };
};
