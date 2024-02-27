import './globals.css';

import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import WrongNetworkDialog from '@/components/Wallet/WrongNetworkDialog';
import {
  DEFAULT_WEB3_STORAGE_PROPS,
  Web3StorageProvider,
} from '@/context/Web3StorageProvider';
import { Toaster } from '@/ui/UiToaster';
import { Barlow } from 'next/font/google';
import WagmiWrapper from '../components/WagmiWrapper';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta name="robots" content="noindex" />
      </head>
      <body className={`${barlow.className} bg-whiteBackground`}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        ) : null}

        <WagmiWrapper>
          <Web3StorageProvider {...DEFAULT_WEB3_STORAGE_PROPS}>
            {children}
            <Toaster />
            <WrongNetworkDialog />
          </Web3StorageProvider>
        </WagmiWrapper>
      </body>
    </html>
  );
}
