'use client';

import { Release } from '@/types';
import { Artist } from '@/types';
import { AnimatedNumber } from '@/ui/AnimatedNumber';
import { VerifiedIcon } from '@/ui/Icons';
import { UiButton } from '@/ui/UiButton';
import { UiShareButton } from '@/ui/UiShareButton';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BundleDialog } from '../BundleDialog';
import { PurchasePanel } from '../PurchasePanel';
import { ReleaseBadges } from './ReleaseBadges';
import { ReleaseDescription } from './ReleaseDescription';
import { ReleaseTracks } from './ReleaseTracks';

interface SectionAlbumProps {
  release: Release | undefined;
}

export const SectionAlbum = ({ release }: SectionAlbumProps) => {
  const album = release?.album;

  const [isPurchasePanelOpen, setIsPurchasePanelOpen] = useState(false);
  const [releaseBadgesOpen, setReleaseBadgesOpen] = useState(false);

  if (!album) {
    return null;
  }

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="w-full flex justify-end pb-4">
        <UiShareButton
          size="xsm"
          intent="secondary"
          className="px-3 pt-1 pb-1.5"
        />
      </div>
      {/* Header with Album Art */}
      <div className="relative text-white">
        <div className="absolute inset-0 overflow-hidden">
          {album.coverImage && (
            <Image
              fill
              src={album.coverImage?.url}
              alt={''}
              priority={true}
              className="blur-2xl"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-[#070D0E] bg-opacity-70" />
        <div className="relative mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 px-6 py-8 md:px-12 md:py-12 gap-8 md:gap-12 lg:gap-56">
            <div className="aspect-square shadow-2xl relative lg:-mr-40 lg:-mb-20 mx-6 md:mx-0">
              {album.coverImage && (
                <Image
                  className="absolute inset-0 object-cover"
                  fill
                  src={album.coverImage?.url}
                  alt={''}
                  priority={true}
                />
              )}
            </div>

            <div className="flex flex-col justify-center gap-4">
              <div className="pr-14">
                {album?.primary_artist && (
                  <div>
                    <Link
                      href={`/artist/${album?.primary_artist?.slug}`}
                      className="font-bold text-2xl inline-flex items-center hover:underline italic"
                    >
                      {album?.primary_artist?.title}
                      <VerifiedIcon className="ml-2 text-white" />
                    </Link>
                  </div>
                )}

                <div className="text-sm text-gray-300 font-bold italic">
                  {album.other_artists.map((artist: Artist, index: number) => {
                    return (
                      <Link
                        href={`/artist/${artist.slug}`}
                        key={artist.id}
                        className="mr-0.5 hover:underline"
                      >
                        {artist.title}
                        {/* biome-ignore lint/complexity/noUselessFragments: <explanation> */}
                        {index !== album.other_artists.length - 1 && <>, </>}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold italic">{album?.title}</h1>
                <h2 className="text-xl font-bold italic">Deluxe Edition</h2>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-3xl font-bold italic">
                  {release.releasePrice ? (
                    <>${release.releasePrice.toFixed(2)}</>
                  ) : (
                    <></>
                  )}
                </div>

                {
                  <div className="font-bold italic text-gray-400 flex">
                    <div className="text-xl leading-7">
                      <span>
                        <AnimatedNumber number={100} />
                      </span>
                      /
                    </div>
                  </div>
                }
              </div>

              <UiButton intent="secondary" size="sm">
                Purchase
              </UiButton>

              {/* Deluxe Badges Content */}
              {release.bundleBadgeItems &&
                release.bundleBadgeItems.length > 0 && (
                  <ReleaseBadges
                    badgeItems={release.bundleBadgeItems}
                    album={album}
                  />
                )}
            </div>
          </div>
          <div className="absolute right-2 top-2">
            <button
              type="button"
              className="relative w-20 h-20 -rotate-12 hover:rotate-12 hover:scale-110 transition-transform"
              onClick={() => {
                setReleaseBadgesOpen(true);
              }}
            >
              <Image
                className=""
                fill
                src={'/badges/badge_deluxe_edition.png'}
                alt="Badge Deluxe Addition"
              />
            </button>
            <BundleDialog
              isOpen={releaseBadgesOpen}
              setIsOpen={setReleaseBadgesOpen}
              badgeItems={release.bundleBadgeItems}
              album={album}
            />
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-14">
        <ReleaseDescription album={album} />
        <ReleaseTracks album={album} />
      </div>

      <PurchasePanel
        isOpen={isPurchasePanelOpen}
        setIsOpen={setIsPurchasePanelOpen}
        release={release}
      />
    </div>
  );
};
