import { AllDrops } from '@/components/AllDrops';
import { exampleDrops } from '@/examples/exampleDrop';

export const dynamic = 'force-static';
export const runtime = 'nodejs';
export const revalidate = 10;

export default async function AllDropsPage() {
  return (
    <div>
      <AllDrops drops={exampleDrops} />
    </div>
  );
}
