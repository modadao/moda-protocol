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

export const Web3StorageAuthSchema = z.object({
  email: z.string().email(),
});

export type Web3StorageAuth = z.infer<typeof Web3StorageAuthSchema>;

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
  id: string;
  title: string;
  image: {
    url: StaticImageData;
    fileName: string;
  };
  slug: string;
}

export interface Release {
  tokenId: number;
  contract: Contract;
  heroImage: {
    url: StaticImageData;
    fileName: string;
    width: number;
    height: number;
  };
  saleStartTime: string;
  title: string;
  album: Album;
  slug: string;
  bundleBadgeItems?: BundleBadgeItem[];
  tracksDownload?: {
    url: string;
  };
  releasePrice?: number;
}

export interface Album {
  title: string;
  description: string;
  primary_artist: Artist;
  other_artists: Artist[];
  coverImage: {
    url: StaticImageData;
  };
  spotifyLink: string;
  tracks: Track[];
}

export interface Track {
  id: string;
  title: string;
  coverImage: {
    id: string;
    url: StaticImageData;
    height: number;
    width: number;
  };
  artists: Artist[];
  mediaUpload: {
    url: string;
  };
}

export const DropNftSchema = z.object({
  tokenAddress: z.string(),
  tokenId: z.number(),
  amount: z.number(),
  blockNumber: z.number(),
});

export type DropNft = z.infer<typeof DropNftSchema>;

export type SortDirection = 'ASC' | 'DESC';

interface BundleBadgeType {
  badgeName?: string;
  badgeImage?: {
    url: StaticImageData;
  };
  badgeDescription?: string;
}

export interface BundleBadgeItem {
  id: string;
  titleOverride?: string;
  link?: string;
  buttonLinkText?: string;
  signedUrlFileName?: string;
  bundleBadgeType?: BundleBadgeType;
  download?: {
    url: string;
  };
}

export interface Contract {
  contractAddress: string;
  testnetContractAddress: string;
}

export interface FanType {
  username: string;
  profileImage: StaticImageData;
  web3Address: string;
}

export const FanSchema = z.object({
  username: z.string(),
  profileImage: z.string(),
  web3Address: z.string(),
});

export const FanSchemaArray = FanSchema.array();
