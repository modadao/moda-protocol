import { Release } from '@/types';
import { UiShareButton } from '@/ui/UiShareButton';
import Image from 'next/image';

interface ReleaseHeroProps {
  release: Release;
}

export const ReleaseHero = ({ release }: ReleaseHeroProps) => {
  const { heroImage } = release;

  return heroImage ? (
    <>
      <div className="w-full flex justify-end pb-2 pr-2">
        <UiShareButton
          size="xsm"
          intent="secondary"
          className="px-3 pt-1 pb-1.5"
        />
      </div>
      <div className="relative max-md:h-[476px]">
        {heroImage && (
          <Image
            className="max-md:h-full max-md:object-cover md:max-h-[581px] object-cover w-full"
            src={heroImage.url}
            alt={heroImage.fileName}
            width={Number(heroImage?.width)}
            height={Number(heroImage?.height)}
            priority={true}
          />
        )}
        <div className="absolute bottom-0 bg-gradient-to-t from-zinc-400 min-h-[10%] w-full flex flex-col px-2 items-center">
          <h1 className="mt-auto text-5xl/[0.8] lg:text-7xl/[0.8] max-md:max-w-[353px] max-md:text-center font-bold text-white italic">
            {release?.title}
          </h1>
        </div>
      </div>
    </>
  ) : (
    <h1 className="text-5xl lg:text-7xl font-bold italic">{release?.title}</h1>
  );
};
