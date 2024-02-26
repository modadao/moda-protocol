import { clx } from '@/utils/clx';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface ImageLoaderProps {
  children?: React.ReactNode;
  src?: StaticImageData | null;
  alt?: string;
}
/**
 * A component that shows a skeleton loader while the image is loading.
 * This animation will stop once the image is done loading.
 *
 * This is useful for components being generated via an array or list.
 *
 * @returns
 */
export const ImageLoader = ({ src, alt }: ImageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!src || !alt) return null;

  return (
    <Image
      className={clx(
        'h-full object-cover bg-gray-200 animate-pulse',
        !isLoading ? 'animate-none' : '', // stop animation once loaded
      )}
      src={src}
      alt={alt || 'no alt'}
      fill
      onLoadingComplete={() => setIsLoading(false)}
      loading="lazy"
    />
  );
};
