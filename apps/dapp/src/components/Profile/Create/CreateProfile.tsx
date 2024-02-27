'use client';

import { Web3StorageConnect } from '@/components/Web3StorageConnect';
import { useWeb3Storage } from '@/hooks/useWeb3Storage';
import CreateProfileForAccount from './CreateProfileForAccount';
import CreateProfileForContract from './CreateProfileForContract';

interface CreateProfileProps {
  isContract: boolean;
}

export default function CreateProfile({ isContract }: CreateProfileProps) {
  const { client } = useWeb3Storage();

  return (
    <div>
      {!client ? (
        <Web3StorageConnect />
      ) : (
        <>
          {!isContract && <CreateProfileForAccount isContract={isContract} />}
          {isContract && <CreateProfileForContract isContract={isContract} />}
        </>
      )}
    </div>
  );
}
