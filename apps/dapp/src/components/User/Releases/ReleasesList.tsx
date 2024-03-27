'use client';
import { useGetOwnedReleases } from '@/hooks/useGetOwnedReleases';
import { useGetReleaseMetadata } from '@/hooks/useGetReleaseMetadata';
import { ReleaseData } from '@/types';
import { UiButton } from '@/ui/UiButton';
import { Collapsible, CollapsibleContent } from '@/ui/UiCollapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ReleaseInfo from './ReleaseInfo';
import './styles.css';

export default function ReleasesList() {
  const { releases } = useGetOwnedReleases();

  const releaseData = releases?.map((release) => {
    return {
      amountOwned: release.amountOwned,
      releaseId: release.releaseId,
      releaseUri: release.releaseUri,
    };
  });

  return (
    <div className=" w-3/4 m-auto mt-12 mb-12 ">
      <h3 className="text-3xl font-bold italic mt-6 mb-6">Releases</h3>
      <div className="w-full flex flex-col items-center justify-center gap-12">
        {releaseData?.map((data) => (
          <Release key={data.releaseUri} releaseData={data} />
        ))}
      </div>
    </div>
  );
}

interface ReleaseProps {
  releaseData: ReleaseData;
}

function Release({ releaseData }: ReleaseProps) {
  const { releaseMetadata } = useGetReleaseMetadata(releaseData.releaseUri);

  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL;

  const [isShowingContent, setIsShowingContent] = useState(false);

  return (
    <div className="w-full border border-black flex flex-col ">
      <div>
        <div className="flex flex-col md:flex-row justify-between">
          {/* IMAGE, NAME, AND TYPE */}
          <div className="flex">
            <div className="relative w-32 h-32 md:w-40 md:h-40 m-3 md:m-0">
              <Image
                src={`${storageUrl}${releaseMetadata?.image}`}
                alt={`${releaseMetadata?.name} Album Art`}
                fill
              />
            </div>
            <div className="flex flex-col ml-4 leading-none my-auto">
              <div className="italic">
                <Link href={''} className="hover:underline text-lg font-bold">
                  {releaseMetadata?.name}
                </Link>
                <h3 className="text-md">
                  Total Owned: {releaseData.amountOwned}
                </h3>
              </div>
            </div>
          </div>
          {/* BUTTONS */}
          <div className="my-auto md:pr-4">
            <div className="flex md:flex-col justify-evenly w-full my-2 md:gap-2">
              <UiButton size="sm" intent={'secondary'}>
                List
              </UiButton>
            </div>
            <div className="w-full flex justify-center md:justify-end mt-3">
              <button
                onClick={() => setIsShowingContent(!isShowingContent)}
                type="button"
              >
                <div className="hover:cursor-pointer flex gap-2">
                  View Metadata
                  <div>
                    {isShowingContent ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Collapsible open={isShowingContent}>
        <CollapsibleContent className="CollapsibleContent">
          <ReleaseInfo releaseMetadata={releaseMetadata} />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
