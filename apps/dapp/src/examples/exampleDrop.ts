import { LatestDrop } from '@/types';
import exampleImage1 from '../../public/exampleImage1.jpg';
import exampleImage2 from '../../public/exampleImage2.jpg';
import exampleImage3 from '../../public/exampleImage3.jpg';
import exampleImage4 from '../../public/exampleImage4.jpg';

export const exampleDrops: LatestDrop[] = [
  {
    key: '1',
    spotlight: true,
    priority: 1,
    description: 'Description',
    image: exampleImage1,
    release: {
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
        other_artists: [
          {
            title: 'Secondary First Artist',
            slug: 'secondary-first-artist',
          },
        ],
      },
      slug: 'slug',
    },
  },
  {
    key: '2',
    spotlight: false,
    priority: 2,
    description: 'Description',
    image: exampleImage2,
    release: {
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
        other_artists: [
          {
            title: 'Secondary Second Artist',
            slug: 'secondary-second-artist',
          },
        ],
      },
      slug: 'slug',
    },
  },
  {
    key: '3',
    spotlight: false,
    priority: 3,
    description: 'Description',
    image: exampleImage3,
    release: {
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
        other_artists: [
          {
            title: 'Secondary Third Artist',
            slug: 'secondary-third-artist',
          },
        ],
      },
      slug: 'slug',
    },
  },
  {
    key: '4',
    spotlight: false,
    priority: 4,
    description: 'Description',
    image: exampleImage4,
    release: {
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
        other_artists: [
          {
            title: 'Secondary Fourth Artist',
            slug: 'secondary-fourth-artist',
          },
        ],
      },
      slug: 'slug',
    },
  },
];
