'use client';

import Image from 'next/image';
import Link from 'next/link';
import exampleImage1 from '../../../public/exampleImage1.jpg';
import exampleImage2 from '../../../public/exampleImage2.jpg';
import exampleImage3 from '../../../public/exampleImage3.jpg';

export const SectionLatestDrops = () => {
  const otherDrops = [
    { image: exampleImage1, key: 1 },
    { image: exampleImage2, key: 2 },
    { image: exampleImage3, key: 3 },
  ];

  return (
    <div className="grid grid-cols-2 relative bg-black w-full border-white border-y-8">
      {/* Latest Drops */}

      <Link
        href={'https://drop.audio/'}
        className="relative col-span-2 md:col-span-1 h-[401px] md:h-[758px] overflow-hidden"
      >
        <Image
          className="object-cover blur-[26px] scale-110"
          alt={''}
          src={otherDrops[0].image}
          fill
          priority
        />

        <div className="absolute top-0 left-0 bg-dropOverlay bg-opacity-60 w-full h-full" />

        <div className="absolute top-0 left-0 h-full w-full md:px-12 group">
          <div className="mx-auto w-fit">
            <h1 className="text-white text-4xl font-extrabold italic mb-[22px] pl-[35px] pt-[22px] md:pl-0 md:pt-8">
              Latest Drops
            </h1>
            <div className="relative w-full h-full flex flex-col items-center xl:items-start md:pt-[76px] group">
              <div className="relative w-[180px] md:w-[300px] xl:w-[406px] h-[180px] md:h-[300px] xl:h-[406px]">
                <Image
                  className="object-cover rounded-lg group-hover:scale-110 transition ease-in-out duration-300"
                  alt={'Cover Photo'}
                  src={otherDrops[0].image}
                  fill
                  priority
                />
              </div>
              <div className="text-white italic font-extrabold flex flex-col items-center md:items-start space-y-1 md:space-y-2 mt-5 md:mt-6">
                <div className="flex">
                  <p className="font-extrabold opacity-75 text-base">
                    description
                  </p>
                </div>
                <h1 className="text-2xl md:text-5xl font-extrabold italic max-w-[317px] md:max-w-full text-center md:text-left leading-9 line-clamp-2">
                  title
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="relative col-span-2 md:col-span-1 grid grid-rows-3">
        {otherDrops.map((drop) => {
          return (
            <Link
              href={'https://drop.audio/'}
              key={drop.key}
              className="relative w-full cursor-pointer overflow-hidden min-h-[327px] md:min-h-[252.667px]"
            >
              <Image
                className="object-cover w-full h-full blur-[66px] scale-150"
                alt={'Cover Photo'}
                src={drop.image}
                fill
                priority
              />

              <div className="absolute top-0 left-0 bg-dropOverlay bg-opacity-60 w-full h-full" />

              <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center pt-[35px] md:pt-0 md:pl-8 xl:pl-20 2xl:pl-[171px] group">
                <div className="relative w-[159px] xl:w-[194px] h-[159px] xl:h-[194px] shrink-0">
                  <Image
                    className="object-cover rounded-lg group-hover:scale-110 transition ease-in-out duration-300"
                    alt={'Cover Photo'}
                    src={drop.image}
                    fill
                    priority
                  />
                </div>
                <div className="text-white italic font-extrabold flex flex-col items-center md:items-start space-y-1 md:space-y-0 mt-5 md:mt-0 md:pl-7">
                  <div className="mb-1">
                    {/* <ReleaseStatus release={drop.release} /> */}
                  </div>
                  <p className="font-extrabold opacity-75 text-base">
                    Featured Release
                  </p>
                  <h1 className="text-2xl xl:text-[32px] font-extrabold italic max-w-[281px] md:max-w-[317px] text-center md:text-left leading-9 line-clamp-3">
                    Release title
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
