'use client';
import { useState } from 'react';
import ChooseProfileType from '../ChooseProfileType';
import CreateProfileForAccount from './CreateProfileForAccount';
import CreateProfileForContract from './CreateProfileForContract';

export default function CreateProfile() {
  const [isProfileTypeSelected, setIsProfileTypeSelected] = useState(false);
  const [isContract, setIsContract] = useState(false);

  return (
    <div className="container h-full flex flex-col items-center justify-center">
      {!isProfileTypeSelected && (
        <ChooseProfileType
          setIsProfileTypeSelected={setIsProfileTypeSelected}
          setIsContract={setIsContract}
        />
      )}
      {isProfileTypeSelected && !isContract && (
        <CreateProfileForAccount isContract={isContract} />
      )}
      {isProfileTypeSelected && isContract && (
        <CreateProfileForContract isContract={isContract} />
      )}
    </div>
  );
}
