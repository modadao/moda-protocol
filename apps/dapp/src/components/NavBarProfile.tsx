'use client';

import Link from 'next/link';
import { clx } from '../utils/clx';
import NavDropdown from './NavDropdown';
import DisconnectWallet from './Wallet/DisconnectWallet';

export const NavBarProfile = () => {
  return (
    <nav
      className={clx(
        'sticky top-0 z-60 bg-white transition-colors duration-500 ease-in-out',
      )}
    >
      <div className="relative flex items-center justify-between px-4 py-4 h-20">
        <h1>
          <Link className="font-extrabold text-3xl italic " href={'/'}>
            EVM Profile
          </Link>
        </h1>

        <div className="flex flex-row justify-center items-center gap-6">
          <NavDropdown />
          <DisconnectWallet />
        </div>
      </div>
    </nav>
  );
};
