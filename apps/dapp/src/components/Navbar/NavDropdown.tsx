import { useGetProfileData } from '@/hooks/useGetProfileData';
import { useHasAccountProfile } from '@/hooks/useHasAccountProfile';
import { toast } from '@/hooks/useToast';
import { ChevronDownIcon } from '@/ui/Icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/ui/UiDropdownMenu';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { UserProfileBadge } from '../Profile/UserProfileBadge';
import DisconnectWallet from '../Wallet/DisconnectWallet';
import UserLinks from './UserLinks';

export const NavBarDropdown = () => {
  const { isConnected } = useAccount();
  const { hasProfile } = useHasAccountProfile();
  const { profileData, isLoading, getProfileDataError } = useGetProfileData();

  useEffect(() => {
    if (getProfileDataError) {
      toast({
        title: 'Error fetching profile data',
        description: getProfileDataError?.message,
        variant: 'error',
      });
    }
  }, [getProfileDataError]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <div className="flex gap-2 items-center">
          {hasProfile && profileData && (
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
