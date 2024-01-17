'use client';

import EditProfileForAccount from './EditProfileForAccount';
import EditProfileForContract from './EditProfileForContract';

interface EditProfileProps {
  address: string;
  isContract: boolean;
}

export default function EditProfile({ address, isContract }: EditProfileProps) {
  return (
    <div>
      {!isContract && <EditProfileForAccount isContract={isContract} />}
      {isContract && (
        <EditProfileForContract
          contractAddress={address}
          isContract={isContract}
        />
      )}
    </div>
  );
}
