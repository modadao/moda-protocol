import { LatestDrop } from '@/types';
import exampleImage1 from '../../public/exampleImage1.jpg';
import exampleImage2 from '../../public/exampleImage2.jpg';
import exampleImage3 from '../../public/exampleImage3.jpg';
import exampleImage4 from '../../public/exampleImage4.jpg';
import { bundleBadgeItems } from './BundleBadgeItems';

export const exampleDrops: LatestDrop[] = [
  {
    key: '1',
    spotlight: true,
    priority: 1,
    description: 'Description',
    image: exampleImage1,
    release: {
      tokenId: 0,
      contract: {
        contractAddress: '0x',
        testnetContractAddress: '0x',
      },
      heroImage: {
        url: exampleImage1,
        width: 3000,
        height: 3000,
      },
      saleStartTime: '2024-02-01T23:00:00+00:00',
      title: 'Title',
      album: {
        primary_artist: {
          title: 'First Artist',
          slug: 'first-artist',
        },
        coverImage: {
          url: exampleImage1,
        },
        other_artists: [
          {
            title: 'Secondary First Artist',
            slug: 'secondary-first-artist',
          },
        ],
        spotifyLink: 'https://open.spotify.com/album/0',
      },
      slug: 'slug',
      bundleBadgeItems: bundleBadgeItems,
      tracksDownload: {
        url: 'https://drop.audio',
      },
    },
  },
  {
    key: '2',
    spotlight: false,
    priority: 2,
    description: 'Description',
    image: exampleImage2,
    release: {
      tokenId: 1,
      contract: {
        contractAddress: '0x',
        testnetContractAddress: '0x',
      },
      heroImage: {
        url: exampleImage2,
        width: 3000,
        height: 3000,
      },
      saleStartTime: '2024-02-01T23:00:00+00:00',

      title: 'Title',
      album: {
        primary_artist: {
          title: 'Second Artist',
          slug: 'second-artist',
        },
        coverImage: {
          url: exampleImage2,
        },
        other_artists: [
          {
            title: 'Secondary Second Artist',
            slug: 'secondary-second-artist',
          },
        ],
        spotifyLink: 'https://open.spotify.com/album/1',
      },
      slug: 'slug',
      bundleBadgeItems: bundleBadgeItems,
      tracksDownload: {
        url: 'https://drop.audio',
      },
    },
  },
  {
    key: '3',
    spotlight: false,
    priority: 3,
    description: 'Description',
    image: exampleImage3,
    release: {
      tokenId: 2,
      contract: {
        contractAddress: '0x',
        testnetContractAddress: '0x',
      },
      heroImage: {
        url: exampleImage3,
        width: 3000,
        height: 3000,
      },
      saleStartTime: '2024-02-02T23:00:00+00:00',

      title: 'Title',
      album: {
        primary_artist: {
          title: 'Third Artist',
          slug: 'third-artist',
        },
        coverImage: {
          url: exampleImage3,
        },
        other_artists: [
          {
            title: 'Secondary Third Artist',
            slug: 'secondary-third-artist',
          },
        ],
        spotifyLink: 'https://open.spotify.com/album/2',
      },
      slug: 'slug',
      bundleBadgeItems: bundleBadgeItems,
      tracksDownload: {
        url: 'https://drop.audio',
      },
    },
  },
  {
    key: '4',
    spotlight: false,
    priority: 4,
    description: 'Description',
    image: exampleImage4,
    release: {
      tokenId: 3,
      contract: {
        contractAddress: '0x',
        testnetContractAddress: '0x',
      },
      heroImage: {
        url: exampleImage4,
        width: 3000,
        height: 3000,
      },
      saleStartTime: '2024-02-03T23:00:00+00:00',
      title: 'Title',
      album: {
        primary_artist: {
          title: 'Fourth Artist',
          slug: 'fourth-artist',
        },
        coverImage: {
          url: exampleImage4,
        },
        other_artists: [
          {
            title: 'Secondary Fourth Artist',
            slug: 'secondary-fourth-artist',
          },
        ],
        spotifyLink: 'https://open.spotify.com/album/3',
      },
      slug: 'slug',
      bundleBadgeItems: bundleBadgeItems,
      tracksDownload: {
        url: 'https://drop.audio',
      },
    },
  },
];
