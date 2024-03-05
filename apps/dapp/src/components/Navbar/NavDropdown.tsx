'use client';
import { useGetProfileData } from '@/hooks/useGetProfileData';
import { useHydratedState } from '@/hooks/useHydratedState';
import { useToastError } from '@/hooks/useToastError';
import { ChevronDownIcon } from '@/ui/Icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/ui/UiDropdownMenu';
import { useAccount } from 'wagmi';
import { UserProfileBadge } from '../User/Profile/UserProfileBadge';
import DisconnectWallet from '../Wallet/DisconnectWallet';
import UserLinks from './UserLinks';

export const NavBarDropdown = () => {
  const { isConnected } = useAccount();
  const { profileData, isLoading, getProfileDataError } = useGetProfileData();
  const isHydrated = useHydratedState();

  useToastError(getProfileDataError, 'Error fetching profile data');

  if (!isHydrated) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <div className="flex gap-2 items-center">
          {profileData && (
            <UserProfileBadge
              name={isLoading ? 'Loading name...' : profileData.name}
              imageUrl={isLoading ? '' : profileData.image}
            />
          )}
          <ChevronDownIcon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={10}
        align="end"
        className=" px-6 py-5 bg-white italic space-y-10 z-[70] shadow-menu-content"
      >
        <UserLinks />

        {isConnected && <DisconnectWallet />}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
