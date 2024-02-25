import { Album } from '@/types';
import { clx } from '@/utils/clx';
import Image from 'next/image';
import Link from 'next/link';
import { Triangle } from './Triangle';

interface ReleaseDescriptionProps {
  album: Album;
}

export const ReleaseDescription = ({ album }: ReleaseDescriptionProps) => {
  const { primary_artist: primaryArtist, description } = album;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap md:flex-nowrap gap-2">
        <div className="min-w-full md:min-w-fit flex items-center">
          <Link
            href={`/artist/${primaryArtist?.slug ?? ''}`}
            className={clx({
              'w-[96px] h-[96px] rounded-full': true,
              'bg-black': !primaryArtist?.image,
            })}
          >
            {primaryArtist?.image && (
              <Image
                className="rounded-full flex-shrink-0"
                height={96}
                width={96}
                fill={false}
                src={primaryArtist?.image?.url}
                alt={primaryArtist?.image?.fileName || ''}
                priority={true}
              />
            )}
          </Link>
        </div>
        <div className="relative -mt-8 md:mt-0">
          <Triangle className="ml-28 md:hidden" />
          <div className="bg-white px-3 py-5 md:py-4 rounded-ss-2xl rounded-se-2xl rounded-ee-2xl">
            <div className="text-sm font-normal whitespace-pre-line">
              {description}
            </div>
          </div>
          <Triangle className="rotate-90 -ml-[3px] hidden md:flex" />
        </div>
      </div>
    </div>
  );
};
