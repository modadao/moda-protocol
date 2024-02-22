'use client';

import type { DropNft, Release } from '@/types';
import { RefreshIcon } from '@/ui/Icons/RefreshIcon';
import { UiButton } from '@/ui/UiButton';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CrateItems } from './CrateItems';
import { EmptyDownloads } from './EmptyDownloads';

interface CrateProps {
  crateNfts: DropNft[];
  crateReleases: Release[];
  hasPending?: boolean;
}

export const Crate = ({
  crateNfts,
  crateReleases,
  hasPending = false,
}: CrateProps) => {
  const router = useRouter();

  const [isRefreshing, setIsRefreshing] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setIsRefreshing(false);
  }, [crateNfts]);

  const hasPurchases = crateNfts.length >= 1;

  return (
    <div className="">
      {!hasPending && (
        <div className="w-full flex md:items-center md:justify-between max-md:flex-col">
          {/* Refresh Button */}
          <UiButton
            onClick={() => {
              setIsRefreshing(true);
              router.refresh();
            }}
            intent="secondary"
            size="xsm"
            className="text-black"
          >
            <span>Refresh crate</span>
            <RefreshIcon className={isRefreshing ? 'animate-spin' : ''} />
          </UiButton>
        </div>
      )}

      {hasPurchases ? (
        <CrateItems
          purchases={crateNfts}
          sortDirection={'DESC'}
          crateReleases={crateReleases}
        />
      ) : (
        !hasPending && <EmptyDownloads />
      )}
    </div>
  );
};
