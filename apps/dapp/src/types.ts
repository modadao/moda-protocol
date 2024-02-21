import { MetaMaskInpageProvider } from '@metamask/providers';
import { StaticImageData } from 'next/image';
import { z } from 'zod';
import { isValidAddress } from './utils/isValidAddress';

export type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

export interface ProfileMetadata {
  name: string;
  image: string;
  description: string;
  animation_url?: string;
  profile: {
    banner: string;
    spotify: string;
    instagram: string;
    twitter: string;
    address?: `0x${string}` | undefined;
  };
}

export const EVMAddressSchema = z.string().refine(
  (val) => {
    return isValidAddress(val);
  },
  { message: 'Invalid EVM address' },
);

export const ProfileMetadataSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  image: z
    .string()
    .min(1, { message: 'Image is required' })
    .url({ message: 'Invalid image url' }),
  description: z.string().min(1, { message: 'Description is required' }),
  animation_url: z.string().url().optional(),
  profile: z.object({
    banner: z
      .string()
      .min(1, { message: 'Banner is required' })
      .url({ message: 'Invalid banner url' }),
    spotify: z
      .string()
      .url({ message: 'Invalid url' })
      .or(z.literal(''))
      .optional(),
    instagram: z
      .string()
      .url({ message: 'Invalid url' })
      .or(z.literal(''))
      .optional(),
    twitter: z
      .string()
      .url({ message: 'Invalid url' })
      .or(z.literal(''))
      .optional(),
    evmAddress: EVMAddressSchema.or(z.literal('0x')).optional(),
  }),
});

export enum JsonError {
  JSONParseError = 'Error parsing JSON',
  JSONUploadError = 'Error uploading JSON',
  JSONDownloadError = 'Error downloading JSON',
}

export enum FileError {
  FileUploadError = 'Error uploading file',
}

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export interface LatestDrop {
  key: string;
  spotlight: boolean;
  priority: number;
  description: string;
  image: StaticImageData;
  release: Release;
}

export interface Artist {
  title: string;
  slug: string;
}

export interface Release {
  heroImage: {
    url: StaticImageData;
    width: number;
    height: number;
  };
  saleStartTime: string;
  title: string;
  album: {
    primary_artist: Artist;
    other_artists: Artist[];
  };
  slug: string;
}
