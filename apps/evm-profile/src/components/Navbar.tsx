'use client';

import { useFilterEvent } from '@/hooks/useFilterEvent';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { clx } from '../utils/clx';
import DisconnectWallet from './Wallet/DisconnectWallet';

interface NavbarProps {
  links?: { href: Url; text: string }[];
}

export const NavBar = ({ links }: NavbarProps) => {
  useFilterEvent();
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
          {links?.map((link) => (
            <Link
              key={link.text}
              className="font-bold text-xl italic"
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
          <DisconnectWallet />
        </div>
      </div>
    </nav>
  );
};
