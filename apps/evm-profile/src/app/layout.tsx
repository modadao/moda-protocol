import { ProfileContextProvider } from '@/context/ProfileContext';
import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import WagmiWrapper from '../components/WagmiWrapper';

import { Toaster } from '@/components/Ui/Toaster';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'EVM Profile',
  description: 'Create EVM compatible Profile tokens',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow.className}`}>
        <WagmiWrapper>
          <ProfileContextProvider>
            {children}
            <Toaster />
          </ProfileContextProvider>
        </WagmiWrapper>
      </body>
    </html>
  );
}
