import './globals.css';

import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import WrongNetworkDialog from '@/components/Wallet/WrongNetworkDialog';
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
          {children}
          <Toaster />
          <WrongNetworkDialog />
        </WagmiWrapper>
      </body>
    </html>
  );
}
