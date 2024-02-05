'use client';

import { NavBar } from '@/components/Navbar';
import { ProfileContext } from '@/context/ProfileContext';
import { useContext } from 'react';
import { useAccount } from 'wagmi';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { accountUri: hasProfile } = useContext(ProfileContext);
  const { address } = useAccount();
  const linksProfile = [{ href: `profile/${address}`, text: 'Profile' }];

  const linksCreateProfile = [
    { href: '/create-profile', text: 'Create Profile' },
  ];

  return (
    <>
      <NavBar links={hasProfile ? linksProfile : linksCreateProfile} />
      {children}
    </>
  );
}
