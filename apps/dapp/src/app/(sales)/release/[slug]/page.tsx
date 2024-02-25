import { ReleaseFans } from '@/components/Release';
import { SectionAlbum } from '@/components/Release/SectionAlbum';
import { Drops } from '@/examples/Drop';
import { fans } from '@/examples/Fans';

export const dynamic = 'force-static';
export const runtime = 'nodejs';
export const revalidate = 120;

interface PageProps {
  params: { slug: string };
}

export default async function ReleasePage({ params }: PageProps) {
  if (params.slug === 'undefined') {
    console.trace('No release specified');
    throw new Error('Release slug is undefined');
  }

  const release = Drops.find(
    (drop) => drop.release.slug === params.slug,
  )?.release;

  const showFans = fans.length > 0;

  return (
    <div className="md:px-4">
      <div className="container mx-auto pb-96 max-w-5xl">
        <main>
          <SectionAlbum release={release} />
          {showFans && <ReleaseFans fans={fans} />}
        </main>
      </div>
    </div>
  );
}
