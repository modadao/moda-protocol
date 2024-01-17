'use client';

import { NavBar } from '@/components/Navbar';

export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />

      <div className="container mx-auto p-8 flex justify-center">
        {children}
      </div>
    </>
  );
}
