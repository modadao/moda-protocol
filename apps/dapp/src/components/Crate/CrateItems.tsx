'use client';

import type { DropNft, Release, SortDirection } from '@/types';
import { getChainInfo } from '@/utils';
import { CrateItem } from './CrateItem';

interface CrateItemsProps {
  purchases?: DropNft[] | null;
  crateReleases: Release[];
  sortDirection: SortDirection;
}

const { isTestnet } = getChainInfo();

const sortMethod: Record<'ASC' | 'DESC', (a: DropNft, b: DropNft) => number> = {
  ASC: (a: DropNft, b: DropNft) =>
    Number(a.blockNumber) - Number(b.blockNumber),
  DESC: (a: DropNft, b: DropNft) =>
    Number(b.blockNumber) - Number(a.blockNumber),
};

export const CrateItems = ({
  purchases,
  crateReleases,
  sortDirection,
}: CrateItemsProps) => {
  return (
    <div className="mt-4 space-y-[30px]">
      {purchases?.sort(sortMethod[sortDirection])?.map((item, index) => {
        const crateRelease = crateReleases.find((release) => {
          const contractAddress = isTestnet
            ? release.contract?.testnetContractAddress
            : release.contract?.contractAddress;
          return (
            contractAddress === item.tokenAddress &&
            release.tokenId === item.tokenId
          );
        });

        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        return <CrateItem key={index} item={item} release={crateRelease} />;
      })}
    </div>
  );
};
