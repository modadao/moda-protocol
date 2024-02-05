'use client';

import { useAccountProfile } from '@/hooks/profile';
import { toIpfsUrl } from '@/utils/toIpfsUrl';
import Image from 'next/image';
import { useMemo } from 'react';

export default function ProfileHeader() {
  const { profile } = useAccountProfile();
  const imageUrl = useMemo(() => toIpfsUrl(profile?.image), [profile?.image]);
  const bannerUrl = useMemo(
    () => toIpfsUrl(profile?.profile?.banner),
    [profile],
  );

  return (
    <div className="w-full flex flex-col gap-6 items-center mt-8">
      {profile?.profile?.banner && (
        <div className="w-full h-[220px] bg-black/10 overflow-hidden">
          <Image src={bannerUrl} alt="Banner" objectFit="cover" fill />
        </div>
      )}
      <img
        className="rounded-sm object-cover bg-black/10 w-[256px]"
        src={imageUrl}
        alt="Profile"
      />
    </div>
  );
}
