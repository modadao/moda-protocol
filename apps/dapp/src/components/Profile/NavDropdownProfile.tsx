import { UserProfileBadge } from '@/components/Profile/UserProfileBadge';
import { useGetProfileContracts } from '@/hooks/useGetProfileContracts';
import { useGetProfileData } from '@/hooks/useGetProfileData';
import { useHasAccountProfile } from '@/hooks/useHasAccountProfile';
import { ChevronDownIcon } from '@/ui/Icons/ChevronDownIcon';
import { UiButton } from '@/ui/UiButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/ui/UiDropdownMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import DisconnectWallet from '../Wallet/DisconnectWallet';

export default function NavDropdownProfile() {
  const router = useRouter();
  const { address } = useAccount();
  const { hasProfile } = useHasAccountProfile();
  const { profileData } = useGetProfileData(address);
  const { name, image } = profileData;
  const [isAccountHovered, setIsAccountHovered] = useState(false);
  const [isContractsHovered, setIsContractsHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <div className="flex gap-2 items-center">
          <UserProfileBadge name={name} imageUrl={image} />
          <ChevronDownIcon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={10}
        align="end"
        className="divide-y text-xl px-6 py-5 bg-white italic space-y-2 min-w-56 z-[70] shadow-menu-content"
      >
        <DropdownMenuLabel className="text-2xl font-extrabold p-0 text-center">
          Profiles
        </DropdownMenuLabel>

        <div
          className="flex flex-row justify-between p-0 pt-2"
          onMouseEnter={() => setIsAccountHovered(true)}
          onMouseLeave={() => setIsAccountHovered(false)}
        >
          <DropdownMenuLabel className="font-extrabold p-0 text-lg">
            My Profile
          </DropdownMenuLabel>
          {isAccountHovered && !hasProfile && (
            <MenuItemButton
              text={'Create'}
              onClick={() => router.push('/create-profile?isContract=false')}
            />
          )}
        </div>

        {hasProfile ? (
          <div
            className="flex flex-row justify-between items-center py-1 px-0 pt-2"
            onMouseEnter={() => setIsProfileHovered(true)}
            onMouseLeave={() => setIsProfileHovered(false)}
          >
            <Link
              className="font-extrabold text-sm"
              href={`/profile/${address}`}
            >
              {profileData.name}
            </Link>

            {isProfileHovered && (
              <MenuItemButton
                text={'Edit'}
                onClick={() => router.push(`/edit/${address}?isContract=false`)}
              />
            )}
          </div>
        ) : (
          <h3 className="text-sm font-extrabold">None</h3>
        )}

        <div
          className="flex flex-row justify-between items-center p-0 pt-2"
          onMouseEnter={() => setIsContractsHovered(true)}
          onMouseLeave={() => setIsContractsHovered(false)}
        >
          <DropdownMenuLabel className="font-extrabold p-0 text-lg">
            Contract
          </DropdownMenuLabel>
          {isContractsHovered && (
            <MenuItemButton
              text={'Create'}
              onClick={() => router.push('/create-profile?isContract=true')}
            />
          )}
        </div>

        <NavDropdownContracts />

        <div className="pt-2">
          <Link className="italic font-extrabold " href="/">
            Home
          </Link>
        </div>
        <div className="flex flex-col items-center pt-4">
          <DisconnectWallet />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NavDropdownContracts() {
  const result = useGetProfileContracts();

  const contracts = result.ok ? result.value : [];

  return (
    <div>
      {contracts.length > 0 ? (
        <div className="mt-2">
          {contracts.map((contractAddress) => (
            <NavDropDownContract
              key={contractAddress}
              contractAddress={contractAddress}
            />
          ))}
        </div>
      ) : (
        <h3 className="text-sm font-extrabold">None</h3>
      )}
    </div>
  );
}

function NavDropDownContract({ contractAddress }: { contractAddress: string }) {
  const router = useRouter();
  const { profileData } = useGetProfileData(contractAddress);
  const [isItemHovered, setIsItemHovered] = useState(false);
  return (
    <div
      className="flex flex-row justify-between py-1 px-0"
      onMouseEnter={() => setIsItemHovered(true)}
      onMouseLeave={() => setIsItemHovered(false)}
    >
      <Link
        className="font-extrabold text-sm"
        href={`/profile/${contractAddress}`}
      >
        {profileData.name}
      </Link>
      {isItemHovered && (
        <MenuItemButton
          text={'Edit'}
          onClick={() =>
            router.push(`/edit/${contractAddress}?isContract=true`)
          }
        />
      )}
    </div>
  );
}

interface MenuItemButtonProps {
  text?: string;
  onClick?: () => void;
}

function MenuItemButton({ text, onClick }: MenuItemButtonProps) {
  return (
    <UiButton
      className=" h-4 p-0 italic bg-transparent text-black border-none text-sm hover:bg-transparent hover:underline"
      intent="secondary"
      size="sm"
      onClick={onClick}
    >
      {text}
    </UiButton>
  );
}
