'use client';

import { NavBar } from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import { useAccount } from 'wagmi';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address } = useAccount();
  const pathname = usePathname();

  const isProfileOwner = pathname === `/profile/${address}` ? true : false;

  const linksOwnProfile = [
    { href: '/dashboard', text: 'Dashboard' },
    { href: '/edit', text: 'Edit' },
  ];

  const linksProfile = [{ href: '/dashboard', text: 'Dashboard' }];

  return (
    <div>
      <NavBar links={isProfileOwner ? linksOwnProfile : linksProfile} />

      <div className="flex-1">{children}</div>
    </div>
  );
}
