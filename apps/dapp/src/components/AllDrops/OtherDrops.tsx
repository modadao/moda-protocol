'use client';

import { ReleaseStatusTag } from '@/components/ReleaseStatusTag';
import { LatestDrop } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface OtherDropsProps {
  otherDrops: LatestDrop[];
}

// Priority field set in Hygraph
const byPriority = (a: LatestDrop, b: LatestDrop) => {
  // Prioritize if a number from 1 - Infinity is provided
  const priority1 = a.priority ?? Infinity;
  const priority2 = b.priority ?? Infinity;
  return priority1 - priority2;
};

export const OtherDrops = ({ otherDrops }: OtherDropsProps) => {
  const orderedList = otherDrops.sort(byPriority);

  return (
    <div className="flex flex-wrap gap-2 justify-center pt-10">
      {orderedList.map((drop) => {
        const { release } = drop;

        if (!release) return null; // This should never happen

        const { heroImage, title, album, slug } = release;
        const { primary_artist, other_artists } = album ?? {};
        const { url } = heroImage ?? {};
        const { title: primaryArtistTitle, slug: primaryArtistSlug } =
          primary_artist ?? {};

        return (
          <div
            key={slug}
            className="relative w-[268px] h-auto bg-white border flex-shrink-0 last:mr-2 md:last:mr-0"
          >
            {/* Album Art - Top Half */}
            <div className="relative w-full flex justify-center">
              <Link
                href={`/release/${slug}`}
                className="relative w-[268px] h-[268px] cursor-pointer"
              >
                {url && (
                  <Image
                    alt={`${title} Release Artwork`}
                    className="object-cover aspect-square"
                    src={url}
                    fill
                    priority
                  />
                )}
              </Link>
            </div>
            {/* Lower Content */}
            <div className="relative p-4 md:px-4 md:py-5">
              <div className="flex flex-row items-center justify-between gap-2 italic font-medium">
                <div className="line-clamp-2">
                  <Link
                    href={`/artist/${primaryArtistSlug}`}
                    className="text-base hover:underline"
                  >
                    {primaryArtistTitle}
                  </Link>
                  {other_artists?.map((artist) => {
                    return (
                      <span key={artist.slug}>
                        ,{' '}
                        <Link
                          href={`/artist/${artist.slug}`}
                          className="italic text-base font-medium hover:underline"
                        >
                          {artist.title}
                        </Link>
                      </span>
                    );
                  })}
                </div>
                <ReleaseStatusTag />
              </div>
              <Link
                href={`/release/${slug}`}
                className="italic font-extrabold text-sm pt-2 line-clamp-3 hover:underline"
              >
                {title}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
