import { BundleBadgeItem } from '@/types';
import { DynamicButton } from '@/ui/UiDynamicButton';
import Image from 'next/image';

interface BundleBadgeProps {
  releaseSlug: string;
  badgeItem: BundleBadgeItem;
}
const BundleBadgeComponent = ({ badgeItem }: BundleBadgeProps) => {
  const badgeType = badgeItem.bundleBadgeType;
  const badgeTitle = badgeItem.titleOverride ?? badgeType?.badgeName;

  return (
    <div className="flex py-3 justify-between">
      <div className="flex">
        <div className="relative bg-white rounded border flex justify-center items-center flex-col flex-shrink-0 w-8 h-8">
          {badgeType?.badgeImage && (
            <Image
              src={badgeType?.badgeImage.url}
              alt={`${badgeTitle} Icon`}
              fill
            />
          )}
        </div>

        <div className="leading-none -mt-2 mr-4 ml-2">
          {badgeTitle && (
            <div className="text-xl italic font-bold">{badgeTitle}</div>
          )}
          {badgeType?.badgeDescription && (
            <div className="text-mediumDarkGrey text-sm">
              {badgeType?.badgeDescription}
            </div>
          )}
        </div>
      </div>

      <div className={'my-auto flex gap-2'}>
        {badgeItem.link && (
          <DynamicButton
            asChild
            size="xsm"
            intent={'secondary'}
            className={'w-28'}
          >
            <a
              href={badgeItem.link}
              className="whitespace-nowrap"
              target="_blank"
              rel="noreferrer"
            >
              {badgeItem.buttonLinkText
                ? badgeItem.buttonLinkText
                : 'Claim Now'}
            </a>
          </DynamicButton>
        )}

        {badgeItem.download && !badgeItem?.signedUrlFileName && (
          <DynamicButton
            asChild
            size="xsm"
            intent={'secondary'}
            className={'w-28'}
          >
            <a
              href={badgeItem.download.url}
              className="whitespace-nowrap"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </DynamicButton>
        )}
      </div>
    </div>
  );
};

interface DeluxeContentProps {
  releaseSlug: string;
  bundleBadgeItems: BundleBadgeItem[];
}

export const DeluxeContent = ({
  releaseSlug,
  bundleBadgeItems,
}: DeluxeContentProps) => {
  return (
    <div className="w-full px-6 py-4">
      <div className="flex mb-2">
        <div className="text-lg italic font-bold">Deluxe Content</div>
      </div>
      <div className="divide-y subpixel-antialiased">
        {bundleBadgeItems?.map((badgeItem) => (
          <BundleBadgeComponent
            key={badgeItem.id}
            releaseSlug={releaseSlug}
            badgeItem={badgeItem}
          />
        ))}
      </div>
    </div>
  );
};
