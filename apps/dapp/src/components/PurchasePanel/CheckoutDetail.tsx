import type { Release } from '@/api/client/generated';
import { UiInputCounter } from '@/ui/UiInputCounter';
import Image from 'next/image';

interface CheckoutDetailProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  release: Release;
}

export const CheckoutDetail = (props: CheckoutDetailProps) => {
  const { quantity, setQuantity, release } = props;
  if (!release?.album) {
    return null;
  }
  const { coverImage, primary_artist } = release.album;
  return (
    <div className="flex hover:cursor-pointer border border-mediumDarkGrey rounded-md p-2">
      <div className="flex">
        {coverImage && (
          <Image
            src={coverImage.url}
            width={64}
            height={64}
            alt={'Cover Image'}
          />
        )}
        <div className="ml-4 m-auto">
          <div className="text-lg font-bold italic leading-none">
            {release?.title}
          </div>
          <div className="text-lg italic">{primary_artist?.title}</div>
        </div>
      </div>
      <div className="flex m-auto">
        <div className="mr-4">
          <UiInputCounter
            quantity={quantity}
            quantityCallback={setQuantity}
            maxQty={release?.maxQuantity ?? 1}
          />
        </div>
        <div className="m-auto font-bold italic">
          ${((release.releasePrice ?? 0) * quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};
