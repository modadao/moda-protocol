'use client';

import { useHydratedState } from '@/hooks/useHydratedState';
import { usePlaylistPlayerStore } from '@/hooks/usePlaylistPlayerStore';
import { Track } from '@/types';
import { useEffect, useState } from 'react';
import { PlaylistTrack } from './AudioPlayerGlobalPlaylistTrack';

interface AudioPlayerGlobalPlaylistProps {
  playlist: Track[];
}

export const AudioPlayerGlobalPlaylist = ({
  playlist,
}: AudioPlayerGlobalPlaylistProps) => {
  const { currentTrackIndex } = usePlaylistPlayerStore();

  const isHydrated = useHydratedState();

  const [activeTrack, setActiveTrack] = useState<Track | null>(null);

  useEffect(() => {
    setActiveTrack(playlist[currentTrackIndex]);
  }, [playlist, currentTrackIndex]);

  if (!isHydrated || !playlist) return null;

  return (
    <section className="rounded-t-lg p-4 shadow-2xl bg-white space-y-2">
      {activeTrack && currentTrackIndex >= 0 && (
        <div className="space-y-2">
          <h1 className="font-bold italic">Playing</h1>
          <PlaylistTrack track={activeTrack} trackIndex={currentTrackIndex} />
        </div>
      )}

      {currentTrackIndex >= 0 &&
        Number(currentTrackIndex) < playlist.length - 1 && (
          <div className="space-y-2">
            <h1 className="font-bold italic">Up Next</h1>
            <div className="max-h-48 overflow-auto">
              {playlist.map(
                (track, trackIndex) =>
                  trackIndex > currentTrackIndex && (
                    <PlaylistTrack
                      key={`${track?.id}-${trackIndex}`}
                      track={track}
                      trackIndex={trackIndex}
                    />
                  ),
              )}
            </div>
          </div>
        )}
    </section>
  );
};
