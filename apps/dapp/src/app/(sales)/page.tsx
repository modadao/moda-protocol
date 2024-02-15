import { LandingPage } from '@/components/LandingPage/LandingPage';
import type { Metadata } from 'next';

export const dynamic = 'force-static';
export const runtime = 'nodejs';
export const revalidate = 30;

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default async function Home() {
  return <LandingPage />;
}
