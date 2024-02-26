import { AllDrops } from '@/components/AllDrops';
import { Drops } from '@/examples/Drop';

export const dynamic = 'force-static';
export const runtime = 'nodejs';
export const revalidate = 10;

export default async function AllDropsPage() {
  return (
    <div>
      <AllDrops drops={Drops} />
    </div>
  );
}
