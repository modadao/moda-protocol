import { Release } from '@/types';
import type { DropNft } from '@/types';
import { DownloadIcon } from '@/ui/Icons/DownloadIcon';
import { SpotifyIcon } from '@/ui/Icons/SpotifyIcon';
import { Collapsible, CollapsibleContent } from '@/ui/UiCollapsible';
import { DynamicButton } from '@/ui/UiDynamicButton';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ImageLoader } from '../ImageLoader';
import { DeluxeContent } from './DeluxeContent';
import './styles.css';

interface CrateItemProps {
  item?: DropNft;
  release: Release | undefined;
}

export const CrateItem = ({ item, release }: CrateItemProps) => {
  const spotifyLink = release?.album?.spotifyLink;

  const [isShowingContent, setIsShowingContent] = useState(false);

  const name = release?.title;

  if (!release) {
    console.log(
      `Cannot display item ${item?.tokenAddress}. Missing Data.`,
      release,
    );
    return null;
  }

  const { primary_artist } = release.album ?? {};
  const { title: primaryArtistTitle, slug: primaryArtistSlug } =
    primary_artist ?? {};

  return (
    <div className="w-full border border-black flex flex-col">
      <div>
        <div className="flex flex-col md:flex-row justify-between">
          {/* IMAGE, NAME, AND TYPE */}
          <div className="flex">
            <div className="relative w-32 h-32 md:w-40 md:h-40 m-3 md:m-0">
              <ImageLoader
                src={release.album?.coverImage?.url}
                alt={`${name} Album Art`}
              />
            </div>
            <div className="flex flex-col ml-4 leading-none my-auto">
              {/* Onchain Item */}
              {item && (
                <div>
                  {Number(item.amount) > 1 && (
                    <span className="rounded-full bg-lightGrey px-2 py-1 text-xs text-gray-600 mb-2 font-semibold w-fit">
                      Quantity: {item.amount}
                    </span>
                  )}
                </div>
              )}

              <div className="italic">
                <div className="text-gray-600">
                  <Link
                    href={`/artist/${primaryArtistSlug}`}
                    className="text-base font-medium hover:underline"
                  >
                    {primaryArtistTitle}
                  </Link>
                </div>
                <div className="font-bold text-lg">
                  <Link
                    href={`/release/${release.slug}`}
                    className="text-base font-medium hover:underline"
                  >
                    {name}
                  </Link>
                </div>
                <div className="font-bold text-md">{'Deluxe Edition'}</div>
              </div>
            </div>
          </div>
          {/* BUTTONS */}
          <div className="my-auto pb-2 md:pr-4">
            <div className="flex md:flex-col justify-evenly w-full my-2 md:gap-2">
              <div className="">
                {spotifyLink && (
                  <DynamicButton asChild size="sm" intent={'secondary'}>
                    <a href={spotifyLink} target="_blank" rel="noreferrer">
                      Add to Spotify
                      <SpotifyIcon />
                    </a>
                  </DynamicButton>
                )}
              </div>
              <div className="flex justify-end">
                {release?.tracksDownload?.url && (
                  <DynamicButton asChild size="sm" className="w-fit">
                    <a
                      href={release?.tracksDownload?.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download Tracks
                      <DownloadIcon />
                    </a>
                  </DynamicButton>
                )}
              </div>
            </div>
            <div className="w-full flex justify-center md:justify-end mt-3">
              <button
                onClick={() => setIsShowingContent(!isShowingContent)}
                type="button"
              >
                <div className="hover:cursor-pointer flex gap-2">
                  See Deluxe
                  <div>
                    {isShowingContent ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {release?.bundleBadgeItems && (
        <Collapsible open={isShowingContent}>
          <CollapsibleContent className="CollapsibleContent">
            {release?.slug && (
              <DeluxeContent
                releaseSlug={release.slug}
                bundleBadgeItems={release.bundleBadgeItems}
              />
            )}
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
};
