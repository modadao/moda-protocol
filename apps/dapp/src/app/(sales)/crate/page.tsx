import { Crate } from '@/components/Crate';

import { Drops } from '@/examples/Drop';
import { Nfts } from '@/examples/Nfts';

export const dynamic = 'force-dynamic';

export default async function CratePage() {
  const crateReleases = [
    Drops[0].release,
    Drops[1].release,
    Drops[2].release,
    Drops[3].release,
  ];

  const crateNfts = Nfts;

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
