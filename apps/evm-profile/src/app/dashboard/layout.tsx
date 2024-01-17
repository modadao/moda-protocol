'use client';

import { NavBar } from '@/components/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />

      <div>{children}</div>
    </>
  );
}
