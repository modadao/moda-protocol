'use client';
import { Album, BundleBadgeItem } from '@/types';
import { UiButton } from '@/ui/UiButton';
import Image from 'next/image';
import { useState } from 'react';
import { BundleDialog } from '../BundleDialog/BundleDialog';

interface ReleaseBadgesProps {
  album: Album;
  badgeItems: BundleBadgeItem[] | undefined;
}

export const ReleaseBadges = ({ badgeItems, album }: ReleaseBadgesProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="pt-2">
        {/* Header */}
        <h4 className="text-sm font-medium italic">Deluxe Edition Contains:</h4>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {badgeItems?.map((badgeItem) => {
            const badgeType = badgeItem.bundleBadgeType;
            return (
              <button
                type="button"
                key={badgeItem.id}
                onClick={() => setIsOpen(true)}
                className="bg-white rounded border flex justify-center items-center flex-col flex-shrink-0 w-10 h-10 overflow-hidden"
              >
                <div className="relative w-11 h-11">
                  {badgeType?.badgeImage && (
                    <Image
                      src={badgeType?.badgeImage?.url}
                      alt={`${badgeType?.badgeName} Icon`}
                      fill
                    />
                  )}
                </div>
              </button>
            );
          })}
          <UiButton
            intent="transparent"
            size="xsm"
            className="h-10 rounded-sm"
            onClick={() => setIsOpen(true)}
          >
            See Details
          </UiButton>
        </div>
      </div>
      <BundleDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        badgeItems={badgeItems}
        album={album}
      />
    </>
  );
};
