'use client';

import { useGetProfileData } from '@/hooks/useGetProfileData';
import ProfileContent from './Content/ProfileContent';
import ProfileHeader from './Content/ProfileHeader';

interface ProfileProps {
  address: string;
}

export default function Profile({ address }: ProfileProps) {
  const { isLoading } = useGetProfileData(address);

  return (
    <div className="flex flex-col justify-between">
      {isLoading ? (
        <div className="flex flex-col justify-center items-center text-3xl font-extrabold mt-60 italic">
          <h3>Fetching Profile...</h3>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <ProfileHeader address={address} />
          <ProfileContent address={address} />
        </div>
      )}
    </div>
  );
}
