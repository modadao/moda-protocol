'use client';
import { useHydratedState } from '@/hooks/useHydratedState';
import { Logo } from '@/ui/Icons/Logo';
import { clx } from '@/utils/clx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import ConnectWallet from '../Wallet/ConnectWallet';
import { NavBarDropdown } from './NavDropdown';

export const NavBar = ({
  useScrollHandler = true,
}: {
  navButtons?: boolean;
  useScrollHandler?: boolean;
}) => {
  const isHydrated = useHydratedState();
  const { isConnected } = useAccount();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setIsScrolled(window.scrollY > 5);
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <nav
      className={clx(
        'sticky top-0 z-60 bg-white transition-colors duration-500 ease-in-out',
        {
          'bg-opacity-100': useScrollHandler && isScrolled,
          'bg-opacity-0': useScrollHandler && !isScrolled,
        },
      )}
    >
      <div className="relative flex items-center justify-between px-4 py-4 h-20">
        <h1>
          <Link className="font-extrabold text-3xl italic uppercase" href={'/'}>
            <Logo />
          </Link>
        </h1>

        {/* Mobile */}

        <div className="flex gap-2 md:hidden items-center justify-center">
          <ConnectWallet />

          <Link
            href="/profile"
            className="flex gap-2 items-center justify-center"
          />
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="flex items-center gap-8">
            <NavBarDropdown />
            {!isConnected && <ConnectWallet />}
          </div>
        </div>
      </div>
    </nav>
  );
};
