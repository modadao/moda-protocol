import { Crate } from '@/components/Crate';

import { exampleDrops } from '@/examples/exampleDrop';
import { exampleNfts } from '@/examples/exampleNfts';

export const dynamic = 'force-dynamic';

export default async function CratePage() {
  const crateReleases = [
    exampleDrops[0].release,
    exampleDrops[1].release,
    exampleDrops[2].release,
    exampleDrops[3].release,
  ];

  const crateNfts = exampleNfts;

  return (
    <div className="md:px-4 pb-40">
      <div className="container mx-auto">
        <main className="px-20 max-md:p-2 space-y-4">
          <div>
            <div className="text-2xl font-extrabold italic">Your Crate</div>
            <Crate
              crateNfts={crateNfts}
              crateReleases={crateReleases}
              hasPending={false}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
