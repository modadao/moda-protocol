'use client';

import type { SortDirection } from '@/types';
import { ArrowDown } from '@/ui/Icons';
import { UiButton } from '@/ui/UiButton';
import type { Dispatch, SetStateAction } from 'react';

interface SortButtonProps {
  sortDirection: SortDirection;
  setSortDirection: Dispatch<SetStateAction<SortDirection>>;
}

/**
 * Handles sorting for the `CrateItems.tsx` component.
 *
 * @returns
 */
export const SortButton = ({
  sortDirection,
  setSortDirection,
}: SortButtonProps) => {
  return (
    <UiButton
      intent="secondary"
      size="xsm"
      className="self-end"
      onClick={() =>
        setSortDirection((prevState) => (prevState === 'ASC' ? 'DESC' : 'ASC'))
      }
      suffixIcon={
        <ArrowDown className={sortDirection === 'ASC' ? '' : 'rotate-180'} />
      }
    >
      Sort By
    </UiButton>
  );
};
