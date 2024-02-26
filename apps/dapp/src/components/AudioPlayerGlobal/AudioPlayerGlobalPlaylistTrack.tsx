'use client';

import { usePlaylistPlayerStore } from '@/hooks/usePlaylistPlayerStore';
import { Track } from '@/types';
import { clx } from '@/utils/clx';
import Image from 'next/image';
import { IoPauseSharp, IoPlaySharp } from 'react-icons/io5';

interface PlaylistTrackProps {
  track: Track;
  trackIndex: number;
}

export const PlaylistTrack = ({ track, trackIndex }: PlaylistTrackProps) => {
  const { currentTrackIndex, setCurrentTrackIndex, play, isPlaying, pause } =
    usePlaylistPlayerStore();

  const setTrackAndPlay = (trackIndex: number) => {
    setCurrentTrackIndex(trackIndex);
    play();
  };

  const handleTrackClick = () => {
    if (currentTrackIndex === trackIndex) {
      return isPlaying ? pause() : play();
    }
    setTrackAndPlay(Number(trackIndex));
  };

  return (
    <button
      type="button"
      className={clx('block w-full text-left py-1 px-2 rounded', {
        'bg-zinc-100 hover:bg-zinc-200': currentTrackIndex === trackIndex,
        'hover:bg-zinc-50': currentTrackIndex !== trackIndex,
      })}
      onClick={handleTrackClick}
    >
      <div className="flex italic items-center gap-2">
        {/* "Up next" number */}
        {currentTrackIndex !== trackIndex && (
          <div className="min-w-[0.5rem] text-left font-bold text-xs">
            {trackIndex - currentTrackIndex}
          </div>
        )}
        <div className="aspect-square w-8 h-8 relative">
          {track.coverImage?.url && (
            <Image
              className="block"
              src={track.coverImage?.url}
              alt={''}
              width={32}
              height={32}
            />
          )}

          {currentTrackIndex === trackIndex && (
            <div className="absolute inset-0 w-full h-full flex justify-center items-center text-white bg-black bg-opacity-20">
              {isPlaying ? (
                <IoPauseSharp className="w-3 h-3" />
              ) : (
                <IoPlaySharp className="w-3 h-3" />
              )}
            </div>
          )}
        </div>

        <div>
          <div className="text-sm font-bold">{track?.title}</div>
          <div className="text-xs text-zinc-500">
            {track?.artists.map((artist) => artist?.title).join(', ')}
          </div>
        </div>
      </div>
    </button>
  );
};
