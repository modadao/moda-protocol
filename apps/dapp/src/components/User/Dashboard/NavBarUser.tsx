'use client';

import { useHydratedState } from '@/hooks/useHydratedState';
import { UiButton } from '@/ui/UiButton';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { clx } from '../../../utils/clx';
import ConnectWallet from '../../Wallet/ConnectWallet';
import DashboardLinks from './DashboardLinks';
import NavDropdownProfile from './NavDropdownProfile';
import SearchModal from './Search/SearchModal';

export const NavbarDashboard = () => {
  const isHydrated = useHydratedState();
  const { isConnected } = useAccount();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  if (!isHydrated) {
    return null;
  }
  return (
    <nav
      className={clx(
        'sticky top-0 bg-white transition-colors duration-500 ease-in-out',
      )}
    >
      {isSearchOpen && (
        <SearchModal
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      )}
      <div className="relative flex items-center justify-between px-4 py-4 h-20">
        <DashboardLinks />
        <div className="flex flex-row justify-center items-center gap-6">
          <UiButton
            intent="secondary"
            className="border-none bg-white text-black hover:bg-white p-0"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            Search
          </UiButton>
          <NavDropdownProfile />
          {!isConnected && <ConnectWallet />}
        </div>
      </div>
    </nav>
  );
};
