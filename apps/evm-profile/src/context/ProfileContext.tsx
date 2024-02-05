'use client';
import { Address, Contract, ProfileMetadata } from '@/types';
import { downloadJSON } from '@/utils/IPFS';
import {
  ProfileAddresses,
  profileAbi,
  useReadProfileAccountUri,
} from 'profile';
import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useAccount, useChainId } from 'wagmi';

export type ProfileContract = Contract<typeof profileAbi> | undefined;

export interface ProfileState {
  profileAddress?: Address;
  account: {
    uri?: string;
    profile?: ProfileMetadata;
    isFetching: boolean;
  };
}

export const ProfileContext = createContext<ProfileState>({
  account: {
    isFetching: false,
  },
});

export const ProfileProvider: React.FC<PropsWithChildren<ProfileState>> = ({
  children,
}) => {
  const chainId = useChainId();
  const { address } = useAccount();
  const profileAddress = useMemo(
    () => ProfileAddresses[chainId] || '0x0',
    [chainId],
  );

  const { data: accountUri, isPending } = useReadProfileAccountUri({
    address: profileAddress,
    args: [address],
  });

  const [profileData, setProfileData] = useState<ProfileMetadata>();
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    setIsFetchingData(true);

    if (accountUri && !isPending) {
      downloadJSON(accountUri)
        .then(({ value }) => {
          if (value) setProfileData(value);
        })
        .catch(() => setIsFetchingData(false))
        .finally(() => setIsFetchingData(false));
    }
  }, [accountUri, isPending]);

  return (
    <ProfileContext.Provider
      value={{
        profileAddress: profileAddress,
        account: {
          uri: accountUri,
          isFetching: isFetchingData || isPending,
          profile: profileData,
        },
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
