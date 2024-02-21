import Link from 'next/link';
import React from 'react';

export const MainLinks = () => {
  return (
    <>
      <Link href="/all-drops" className="italic font-extrabold">
        All Drops
      </Link>
      <Link href="/blog" className="italic font-extrabold">
        Blog
      </Link>
    </>
  );
};
