'use client';
import { Config } from '@/config';
import { useReadProfileBalanceOf } from 'profile';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

interface ProfileContextProps {
  hasProfile: boolean;
}

interface ProfileContextProviderProps {
  children: ReactNode;
}

export const ProfileContext = createContext<ProfileContextProps>({
  hasProfile: false,
});

export function ProfileContextProvider({
  children,
}: ProfileContextProviderProps) {
  const { address } = useAccount();
  const { data: userBalance } = useReadProfileBalanceOf({
    address: Config.profileAddress,
    args: [address],
  });

  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    if (Number(userBalance) === 1) {
      setHasProfile(true);
    } else {
      setHasProfile(false);
    }
  }, [userBalance]);

  return (
    <ProfileContext.Provider value={{ hasProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
