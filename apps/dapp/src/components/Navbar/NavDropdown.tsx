import { useGetProfileData } from '@/hooks/useGetProfileData';
import { useHasAccountProfile } from '@/hooks/useHasAccountProfile';
import { ChevronDownIcon } from '@/ui/Icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/ui/UiDropdownMenu';

import { useAccount } from 'wagmi';
import { UserProfileBadge } from '../Profile/UserProfileBadge';
import DisconnectWallet from '../Wallet/DisconnectWallet';
import UserLinks from './UserLinks';

export const NavBarDropdown = () => {
  const { address, isConnected } = useAccount();
  const { hasProfile } = useHasAccountProfile();
  const { profileData } = useGetProfileData(address);
  const { name, image } = profileData;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <div className="flex gap-2 items-center">
          {hasProfile && <UserProfileBadge name={name} imageUrl={image} />}
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
