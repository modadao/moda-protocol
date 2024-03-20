import { ReleaseMetadata, TrackMetadata } from '@/types';

interface TrackData {
  trackName: string;
  trackImage: string;
  trackUri: string;
}

export const createTrackMetadata = ({
  trackName,
  trackImage,
  trackUri,
}: TrackData) => {
  const metadata: TrackMetadata = {
    name: trackName,
    image: trackImage,
    description: '',
    animation_url: trackUri,
    attributes: [
      {
        trait_type: 'genre',
        value: '',
      },
    ],
  };
  return metadata;
};

interface ReleaseData {
  releaseName: string;
  releaseImage: string;
  releaseDescription: string;
  releaseGenre: string;
  releaseTrackUris: string[];
}

export const createReleaseMetadata = ({
  releaseName,
  releaseImage,
  releaseDescription,
  releaseGenre,
  releaseTrackUris,
}: ReleaseData) => {
  const metadata: ReleaseMetadata = {
    name: releaseName,
    image: releaseImage,
    description: releaseDescription,
    animation_url: '',
    attributes: [
      {
        trait_type: 'tracks',
        value: releaseTrackUris,
      },
      {
        trait_type: 'genre',
        value: releaseGenre,
      },
    ],
  };
  return metadata;
};
