import { Config } from '@/config';
import { ProfileMetadata } from '@/types';
import { downloadJSON } from '@/utils/IPFS';
import { defaultProfileMetadata } from '@/utils/defaultProfileMetadata';
import { useReadProfileAccountUri } from 'profile';
import { useEffect, useMemo, useState } from 'react';
import { useAccount } from 'wagmi';

export const useGetProfileData = (
  profileAddress?: string,
): {
  profileData: ProfileMetadata;
  isLoading: boolean;
} => {
  const { address } = useAccount();
  const { data: accountUri, isPending } = useReadProfileAccountUri({
    address: Config.profileAddress,
    args: [profileAddress ? profileAddress : address],
  });

  const [profileData, setProfileData] = useState(defaultProfileMetadata);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const isLoading = useMemo(
    () => isPending || isFetchingData,
    [isPending, isFetchingData],
  );

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsFetchingData(true);
      if (accountUri && !isPending) {
        const result = await downloadJSON(accountUri);

        if (result.value) {
          setProfileData(result.value);
          setIsFetchingData(false);
        }
      }
    };

    fetchProfileData();
  }, [accountUri, isPending]);

  return { profileData, isLoading };
};
