'use client';

import { Dispatch, SetStateAction } from 'react';
import { Button } from '../Ui/Button';

interface ChooseProfileTypeProps {
  setIsProfileTypeSelected: Dispatch<SetStateAction<boolean>>;
  setIsContract: Dispatch<SetStateAction<boolean>>;
}

export default function ChooseProfileType({
  setIsProfileTypeSelected,
  setIsContract,
}: ChooseProfileTypeProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-6xl font-extrabold mt-36 italic">
      <h3 className="">Create Profile</h3>
      <div className="flex flex-row justify-center items-center mt-6 gap-2">
        <Button
          variant="scaleUp"
          onClick={() => {
            setIsProfileTypeSelected(true);
          }}
        >
          Account
        </Button>
        <h3 className="text-2xl">or</h3>
        <Button
          variant="scaleUp"
          onClick={() => {
            setIsProfileTypeSelected(true);
            setIsContract(true);
          }}
        >
          Contract
        </Button>
      </div>
    </div>
  );
}
