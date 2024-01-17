'use client';

import { NavBar } from '@/components/Navbar';
import { useAccount } from 'wagmi';

export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address } = useAccount();

  return (
    <>
      <NavBar links={[{ href: `./profile/${address}`, text: 'Profile' }]} />

      <div>{children}</div>
    </>
  );
}
