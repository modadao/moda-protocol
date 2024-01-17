'use client';

import { NavBar } from '@/components/Navbar';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />

      <div className="flex-1">{children}</div>
    </div>
  );
}
