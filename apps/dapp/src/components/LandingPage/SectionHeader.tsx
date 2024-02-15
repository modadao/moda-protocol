'use client';

import { UiButton } from '@/ui/UiButton';
import { clx } from '@/utils/clx';
import Link from 'next/link';

export const SectionHeader = () => {
  return (
    <div className="md:container md:mx-auto px-4 py-9 z-[50] relative">
      <div className="absolute h-[51px] w-4 bottom-0 left-[59px] bg-black-line bg-no-repeat bg-center md:hidden " />
      <h1
        className={clx([
          'text-black font-extrabold uppercase italic leading-clamped',
          'text-[64px]',
          'md:text-[171px]',
        ])}
      >
        HEADER
      </h1>
      <h1
        className={clx([
          'font-extrabold uppercase italic leading-clamped',
          'text-[64px]',
          'md:text-[171px]',
          'outlined-text md:outlined-text-lg',
        ])}
      >
        HEADER
      </h1>
      <p
        className={clx([
          'font-extrabold italic text-5xl leading-[.9] mt-4 max-w-[342px]',
          'md:text-[80px] md:max-w-[602px]',
        ])}
      >
        CONTENT
      </p>
      <Link href="/all-drops">
        <UiButton size="smToDefault" className="w-[229px] mt-8 mb-[126px]">
          View Drops
        </UiButton>
      </Link>
    </div>
  );
};
