'use client';

import { Album } from '@/types';
import { ReleaseTrack } from './ReleaseTrack';

interface ReleaseTracksProps {
  album: Album;
}

export const ReleaseTracks = ({ album }: ReleaseTracksProps) => {
  return (
    <div className="max-w-2xl mx-auto md:px-8 py-8">
      <div className="space-y-4">
        {album?.tracks?.map((track, index) => (
          <ReleaseTrack
            key={track.id}
            track={track}
            album={album}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
