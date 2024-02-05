'use client';

import { useAccountProfile } from '@/hooks/profile';
import ProfileContent from './Content/ProfileContent';
import ProfileHeader from './Content/ProfileHeader';

export default function Profile() {
  const { isFetching } = useAccountProfile();

  if (isFetching) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-3xl font-extrabold italic">
        <h3>Fetching Profile...</h3>
      </div>
    );
  }

  return (
    <>
      <ProfileHeader />
      <ProfileContent />
    </>
  );
}
