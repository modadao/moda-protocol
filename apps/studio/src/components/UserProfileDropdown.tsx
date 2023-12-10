'use client';
import { useWeb3Connect } from '@/hooks/useWeb3Connect';
import { Dropdown, DropdownContent, DropdownTrigger } from '@/ui/Dropdown';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { FaChevronDown } from 'react-icons/fa6';
import ConnectButton from './ConnectButton';

export default function UserProfileDropdown() {
  const { isConnected } = useWeb3Connect();
  return (
    <Dropdown>
      <DropdownTrigger>
        <FaChevronDown className="h-4 w-4" />
      </DropdownTrigger>
      <DropdownContent
        className="border border-black border-2 rounded-md px-6 py-5 bg-whitesmoke space-y-4 mr-12 w-56"
        sideOffset={20}
      >
        <div className="flex flex-col items-center justify-start gap-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <CgProfile className="w-24 h-24 hover:opacity-70" />
            <ConnectButton />
          </div>
          {isConnected && (
            <div className="flex flex-col gap-4">
              <h3 className="hover:opacity-80 cursor-pointer">
                <Link href={'/profile'}>Profile</Link>
              </h3>
            </div>
          )}
        </div>
      </DropdownContent>
    </Dropdown>
  );
}
