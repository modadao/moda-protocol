import { LatestDrop } from '@/types';
import { UiButton } from '@/ui/UiButton';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

interface SpotlightHeaderProps {
  drop: LatestDrop;
}

export const SpotlightHeader = ({ drop }: SpotlightHeaderProps) => {
  const { release } = drop;
  const { heroImage, saleStartTime } = release ?? {};

  const startDate =
    saleStartTime && format(new Date(saleStartTime), "dd MMMM, hh:mm aaaaa'm'");

  return (
    <div className="relative w-full py-10 overflow-hidden">
      {heroImage?.url && (
        <Image
          className="object-cover blur-[14px] scale-110"
          alt={`${release?.title} Background`}
          src={heroImage.url}
          fill
          priority
        />
      )}
      <div className="absolute top-0 left-0 bg-[#070D0E] bg-opacity-60 w-full h-full" />

      <div className="flex flex-col md:flex-row p-6 h-full w-full gap-8 max-w-xl md:max-w-3xl mx-auto">
        <div className="relative">
          {heroImage?.url && (
            <Link href={`/release/${release?.slug}`}>
              <Image
                className="object-cover rounded overflow-hidden max-w-xl md:max-w-sm w-full"
                alt={`${release?.title} Background`}
                src={heroImage.url}
                width={Number(heroImage?.width)}
                height={Number(heroImage?.height)}
              />
            </Link>
          )}
        </div>
        <div className="relative flex flex-col justify-center text-center md:text-left">
          <div className="space-y-6">
            <div>
              <span className="bg-gray-500 text-sm px-2 py-1 rounded-md mb-2 text-white font-bold italic">
                {startDate ? <>Starts {startDate}</> : <>Coming Soon</>}
              </span>
            </div>
            <div className="space-y-1">
              <h4 className="text-base opacity-70 text-white font-bold italic">
                Exclusive Re-Issue
              </h4>
              <div className="space-y-6">
                <h1 className="italic font-extrabold text-5xl md:text-7xl text-white">
                  {release?.album?.primary_artist?.title}
                </h1>
                <div className="flex justify-center md:justify-start">
                  <Link href={`/release/${release?.slug}`}>
                    <UiButton size="xsm" intent={'secondary'}>
                      See Drop Details
                    </UiButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
