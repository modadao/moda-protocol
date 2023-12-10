'use client';

import Link from 'next/link';
import Menu from './Menu';
import UserProfileBadge from './UserProfileBadge';
import UserProfileDropdown from './UserProfileDropdown';

export default function Header() {
  return (
    <nav className="flex items-center relative sticky top-0 h-16 z-50  bg-whiteBackground">
      <div className="flex flex-row items-center w-fit ml-8 text-center gap-12 ">
        <h1 className="text-xl font-bold">
          <Link href={'/'}>Logo</Link>
        </h1>
        <Menu />
      </div>
      <div className="flex flex-row items-center gap-4 absolute right-8 top-3">
        <UserProfileDropdown />
        <UserProfileBadge />
      </div>
    </nav>
  );
}
