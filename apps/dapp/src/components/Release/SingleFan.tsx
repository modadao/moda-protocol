'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

export const SingleFan = ({
  username,
  profileImage,
  web3Address,
}: {
  username: string;
  profileImage: StaticImageData;
  web3Address: string;
}) => {
  const [hasError, setHasError] = useState(!profileImage);

  return (
    <div className="flex text-xs m-2 flex-col">
      {hasError ? (
        <div className="rounded-full w-12 h-12 relative">
          <Jazzicon diameter={48} seed={jsNumberForAddress(web3Address)} />
          <div
            className={
              'text-3xl font-bold italic m-auto absolute left-3.5 top-1 text-white'
            }
          >
            D.
          </div>
        </div>
      ) : (
        <Image
          src={profileImage}
          alt={username}
          width={'90'}
          height={'90'}
          className="w-12 h-12 rounded-full object-cover"
          title={username}
          onError={() => {
            setHasError(true);
          }}
        />
      )}
    </div>
  );
};
