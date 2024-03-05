import Image from 'next/image';
import React from 'react';
import { UserIcon } from '../../../ui/Icons/UserIcon';

interface UserProfileBadgeProps {
  name: string;
  imageUrl?: string;
}

export const UserProfileBadge = ({ name, imageUrl }: UserProfileBadgeProps) => {
  return (
    <>
      <div className="max-w-[4rem] md:max-w-[6rem] truncate italic font-extrabold text-base">
        {name}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          className="rounded-full w-6 h-6"
          alt="Profile Photo"
          width={24}
          height={24}
        />
      ) : (
        <UserIcon />
      )}
    </>
  );
};
