'use client';

import { Album, BundleBadgeItem } from '@/types';
import { VerifiedIcon } from '@/ui/Icons';
import { Dialog, DialogContent } from '@/ui/UiDialog';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface BundlePanelProps {
  isOpen: boolean;
  setIsOpen?: (open: boolean) => void;
  badgeItems?: BundleBadgeItem[];
  album: Album;
}

export const BundleDialog = ({
  isOpen,
  setIsOpen,
  badgeItems,
  album,
}: BundlePanelProps) => {
  const [showMore, setShowMore] = useState(false);
  const {
    description,
    other_artists: otherArtists,
    primary_artist: primaryArtist,
    title,
  } = album;
  const artists = [primaryArtist, ...otherArtists];
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white">
        <div className="px-2 pt-4 pb-24">
          <h3 className="italic font-extrabold text-lg">Drop Bundle Options</h3>
          <h3 className="italic font-extrabold text-lg mt-7 mb-2">
            Bundle Includes
          </h3>
          <div className="space-y-4">
            {badgeItems?.map((badgeItem) => {
              const badgeType = badgeItem.bundleBadgeType;
              return (
                <div key={badgeItem.id} className="flex gap-3 items-center">
                  <div className="min-h-fit flex items-center">
                    <div className="bg-white rounded border flex justify-center items-center flex-col flex-shrink-0 w-[98px] h-[98px] xl:w-36 xl:h-36 space-y-1 xl:space-y-2">
                      <div className="relative w-11 h-11 xl:w-[74px] xl:h-[74px]">
                        {badgeType?.badgeImage && (
                          <Image
                            src={badgeType?.badgeImage.url}
                            alt={`${badgeType.badgeName} Icon`}
                            fill
                          />
                        )}
                      </div>
                      {/* <h5 className="text-xs italic font-extrabold">
                        {badgeItem.titleOverride ?? badgeType?.badgeName}
                      </h5> */}
                    </div>
                  </div>
                  <div>
                    <h3 className="italic font-extrabold text-lg">
                      {badgeItem.titleOverride ?? badgeType?.badgeName}
                    </h3>
                    <p className="text-sm">{badgeType?.badgeDescription}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-7">
            <h3 className="italic font-extrabold text-lg">Drop Description</h3>
            <p
              className={cn({
                'text-sm whitespace-pre-wrap pt-2': true,
                'line-clamp-6': !showMore,
              })}
            >
              {description}
            </p>
            {description && String(description)?.length > 300 && (
              <button
                type="button"
                className="underline text-base italic font-extrabold cursor-pointer"
                tabIndex={0}
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                <span>Read {showMore ? 'less' : 'more'}</span>
              </button>
            )}
          </div>
          <div className="mt-7">
            <h3 className="italic font-extrabold text-lg">
              Artists Featured on {title}
            </h3>
          </div>
          <div className="space-y-4 pt-4">
            {artists?.map((artist, index) => {
              const { title, image, slug } = artist ?? {};

              return (
                <Link
                  href={`/artist/${slug}`}
                  key={`${title ?? index}-${index}`}
                  className="flex gap-4 group"
                >
                  <div className="relative w-12 h-12">
                    {image && (
                      <Image
                        src={image.url}
                        alt={`${title ?? 'Artist'} Profile Picture`}
                        fill
                        className="object-cover rounded-full"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl italic font-extrabold group-hover:underline">
                      {title}
                    </h3>
                    <VerifiedIcon />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
