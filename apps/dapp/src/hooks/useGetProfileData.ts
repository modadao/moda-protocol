import { getChainInfo } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { Addresses } from 'drop-sdk';
import { useReadProfileAccountUri } from 'profile';
import { useMemo } from 'react';
import { useAccount } from 'wagmi';

export const useGetProfileData = (contractProfileAddress?: string) => {
  const { address: connectedAddress } = useAccount();
  const { isTestnet } = getChainInfo();

  const profileAddress = isTestnet ? Addresses.Profile.mumbai : '';

  const address = contractProfileAddress || connectedAddress;

  const { data: accountUri, isPending } = useReadProfileAccountUri({
    address: profileAddress,
    args: [address],
    enabled: !!address,
  });

  const queryKey = useMemo(
    () => ['profileData', address, accountUri],
    [address, accountUri],
  );

  const {
    data: profileData,
    isLoading: isProfileDataLoading,
    error: getProfileDataError,
  } = useQuery({
    queryKey,
    queryFn: async () => {
      const response = await fetch(accountUri);
      if (!response.ok) throw new Error('Error fetching profile data');
      return response.json();
    },
    enabled: !!accountUri,
  });

  const isLoading = useMemo(
    () => isPending || isProfileDataLoading,
    [isPending, isProfileDataLoading],
  );

  return { profileData, isLoading, getProfileDataError };
};
