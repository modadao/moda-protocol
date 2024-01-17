'use client';

import EditProfileForAccount from './EditProfileForAccount';
import EditProfileForContract from './EditProfileForContract';

export default function EditProfile() {
  const isContract = false; //// fetch through event
  const contractAddress = '0x01'; /// fetch through event

  return (
    <div>
      {!isContract && <EditProfileForAccount />}
      {isContract && (
        <EditProfileForContract
          contractAddress={contractAddress}
          isContract={isContract}
        />
      )}
    </div>
  );
}
