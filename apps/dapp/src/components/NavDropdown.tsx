import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/Ui/Dropdown-menu';
import { ChevronDownIcon } from '@/components/Ui/Icons/ChevronDownIcon';
import { UserProfileBadge } from '@/components/Ui/UserProfileBadge';
import { useGetProfileContracts } from '@/hooks/useGetProfileContracts';
import { useGetProfileData } from '@/hooks/useGetProfileData';
import { useHasAccountProfile } from '@/hooks/useHasAccountProfile';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { Button } from './Ui/Button';

export default function NavDropdown() {
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
        className="text-xl font-bold px-6 py-5 bg-white italic space-y-2 min-w-64 z-[70] shadow-menu-content"
      >
        <DropdownMenuLabel className="text-2xl">Profiles</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="flex flex-row justify-between p-0"
          onMouseEnter={() => setIsAccountHovered(true)}
          onMouseLeave={() => setIsAccountHovered(false)}
        >
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          {isAccountHovered && !hasProfile && (
            <MenuItemButton
              text={'Create'}
              onClick={() => router.push('/create-profile?isContract=false')}
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {hasProfile ? (
          <DropdownMenuItem
            className="flex flex-row justify-between py-2 px-0"
            onMouseEnter={() => setIsProfileHovered(true)}
            onMouseLeave={() => setIsProfileHovered(false)}
          >
            <Link href={`/profile/${address}`}>{profileData.name}</Link>

            {isProfileHovered && (
              <MenuItemButton
                text={'Edit'}
                onClick={() => router.push(`/edit/${address}?isContract=false`)}
              />
            )}
          </DropdownMenuItem>
        ) : (
          <h3 className="text-sm font-semibold">None</h3>
        )}
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="flex flex-row justify-between p-0"
          onMouseEnter={() => setIsContractsHovered(true)}
          onMouseLeave={() => setIsContractsHovered(false)}
        >
          <DropdownMenuLabel>Contract</DropdownMenuLabel>
          {isContractsHovered && (
            <MenuItemButton
              text={'Create'}
              onClick={() => router.push('/create-profile?isContract=true')}
            />
          )}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <NavDropdownContracts />
        <DropdownMenuSeparator />
        <DropdownMenuItem className="py-2 px-0 text-lg font-semibold">
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
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
        <div>
          {contracts.map((contractAddress) => (
            <NavDropDownContract
              key={contractAddress}
              contractAddress={contractAddress}
            />
          ))}
        </div>
      ) : (
        <h3 className="text-sm font-semibold">None</h3>
      )}
    </div>
  );
}

function NavDropDownContract({ contractAddress }: { contractAddress: string }) {
  const router = useRouter();
  const { profileData } = useGetProfileData(contractAddress);
  const [isItemHovered, setIsItemHovered] = useState(false);
  return (
    <DropdownMenuItem
      className="flex flex-row justify-between py-2 px-0 "
      onMouseEnter={() => setIsItemHovered(true)}
      onMouseLeave={() => setIsItemHovered(false)}
    >
      <Link href={`/profile/${contractAddress}`}>{profileData.name}</Link>
      {isItemHovered && (
        <MenuItemButton
          text={'Edit'}
          onClick={() =>
            router.push(`/edit/${contractAddress}?isContract=true`)
          }
        />
      )}
    </DropdownMenuItem>
  );
}

interface MenuItemButtonProps {
  text?: string;
  onClick?: () => void;
}

function MenuItemButton({ text, onClick }: MenuItemButtonProps) {
  return (
    <Button
      className=" h-4 text-sm italic hover:underline bg-transparent hover:bg-transparent cursor-pointer border-none hover:text-black "
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
