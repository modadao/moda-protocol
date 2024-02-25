import { LatestDrop } from '@/types';
import exampleImage1 from '../../public/exampleImage1.jpg';
import exampleImage2 from '../../public/exampleImage2.jpg';
import exampleImage3 from '../../public/exampleImage3.jpg';
import exampleImage4 from '../../public/exampleImage4.jpg';
import { bundleBadgeItems } from './BundleBadgeItems';

export const Drops: LatestDrop[] = [
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
        fileName: 'heroImage1.jpg',
        width: 3000,
        height: 3000,
      },
      saleStartTime: '2024-02-01T23:00:00+00:00',
      title: 'Title',
      album: {
        title: 'Album Title 1',
        description: 'Description 1',
        tracks: [],
        primary_artist: {
          id: '1',
          title: 'First Artist',
          image: {
            url: exampleImage1,
            fileName: 'firstArtistImage.jpg',
          },
          slug: 'first-artist',
        },
        coverImage: {
          url: exampleImage1,
        },
        other_artists: [
          {
            id: '1',
            title: 'Secondary First Artist',
            image: {
              url: exampleImage1,
              fileName: 'firstArtistImage.jpg',
            },
            slug: 'secondary-first-artist',
          },
        ],
        spotifyLink: 'https://open.spotify.com/album/0',
      },
      slug: 'Drop1',
      bundleBadgeItems: bundleBadgeItems,
      tracksDownload: {
        url: 'https://drop.audio',
      },
      releasePrice: 100,
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
        fileName: 'heroImage2.jpg',
        width: 3000,
        height: 3000,
      },
      saleStartTime: '2024-02-01T23:00:00+00:00',

      title: 'Title',
      album: {
        title: 'Album Title 2',
        description: 'Description 2',
        tracks: [],
        primary_artist: {
          id: '2',
          title: 'Second Artist',
          image: {
            url: exampleImage1,
            fileName: 'firstArtistImage.jpg',
          },
          slug: 'second-artist',
        },
        coverImage: {
          url: exampleImage2,
        },
        other_artists: [
          {
            id: '2',
            title: 'Secondary Second Artist',
            image: {
              url: exampleImage1,
              fileName: 'firstArtistImage.jpg',
            },
            slug: 'secondary-second-artist',
          },
        ],
        spotifyLink: 'https://open.spotify.com/album/1',
      },
      slug: 'Drop2',
      bundleBadgeItems: bundleBadgeItems,
      tracksDownload: {
        url: 'https://drop.audio',
      },
      releasePrice: 100,
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
        fileName: 'heroImage3.jpg',
        width: 3000,
        height: 3000,
      },
      saleStartTime: '2024-02-02T23:00:00+00:00',

      title: 'Title',

      album: {
        title: 'Album Title 3',
        description: 'Description 3',
        tracks: [],
        primary_artist: {
          id: '3',
          title: 'Third Artist',
          image: {
            url: exampleImage1,
            fileName: 'firstArtistImage.jpg',
          },
          slug: 'third-artist',
        },
        coverImage: {
          url: exampleImage3,
        },
        other_artists: [
          {
            id: '3',
            title: 'Secondary Third Artist',
            image: {
              url: exampleImage1,
              fileName: 'firstArtistImage.jpg',
            },
            slug: 'secondary-third-artist',
          },
        ],
        spotifyLink: 'https://open.spotify.com/album/2',
      },
      slug: 'Drop3',
      bundleBadgeItems: bundleBadgeItems,
      tracksDownload: {
        url: 'https://drop.audio',
      },
      releasePrice: 100,
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
        fileName: 'heroImage4.jpg',
        width: 3000,
        height: 3000,
      },
      saleStartTime: '2024-02-03T23:00:00+00:00',
      title: 'Title',
      album: {
        title: 'Album Title 4',
        description: 'Description 4',
        tracks: [],
        primary_artist: {
          id: '4',
          title: 'Fourth Artist',
          image: {
            url: exampleImage1,
            fileName: 'firstArtistImage.jpg',
          },
          slug: 'fourth-artist',
        },
        coverImage: {
          url: exampleImage4,
        },
        other_artists: [
          {
            id: '4',
            title: 'Secondary Fourth Artist',
            image: {
              url: exampleImage1,
              fileName: 'firstArtistImage.jpg',
            },
            slug: 'secondary-fourth-artist',
          },
        ],
        spotifyLink: 'https://open.spotify.com/album/3',
      },
      slug: 'Drop4',
      bundleBadgeItems: bundleBadgeItems,
      tracksDownload: {
        url: 'https://drop.audio',
      },
      releasePrice: 100,
    },
  },
];
