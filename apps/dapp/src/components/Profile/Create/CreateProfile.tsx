'use client';

import CreateProfileForAccount from './CreateProfileForAccount';
import CreateProfileForContract from './CreateProfileForContract';

interface CreateProfileProps {
  isContract: boolean;
}

export default function CreateProfile({ isContract }: CreateProfileProps) {
  return (
    <div>
      {!isContract && <CreateProfileForAccount isContract={isContract} />}
      {isContract && <CreateProfileForContract isContract={isContract} />}
    </div>
  );
}
