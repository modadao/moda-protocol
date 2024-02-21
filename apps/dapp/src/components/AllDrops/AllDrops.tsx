import { LatestDrop } from '../../types';
import { OtherDrops } from './OtherDrops';
import { SpotlightHeader } from './SpotlightHeader';

interface AllDropsProps {
  drops: LatestDrop[];
}

export const AllDrops = ({ drops }: AllDropsProps) => {
  const spotlight = drops.find((drop) => drop.spotlight);

  const otherDrops = drops.filter((drop) => drop.spotlight === false);

  return (
    <div className="mb-10">
      <div className="relative w-full flex justify-center pb-4">
        <h1 className="italic font-extrabold text-3xl">Latest Drops</h1>
      </div>
      {spotlight && <SpotlightHeader drop={spotlight} />}
      <OtherDrops otherDrops={otherDrops} />
    </div>
  );
};
