'use client';

import { useHydratedState } from '@/hooks/useHydratedState';
import { usePlaylistPlayerStore } from '@/hooks/usePlaylistPlayerStore';
import { UiSlider } from '@/ui/UiSlider';
import isEqual from 'fast-deep-equal/es6/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoPauseSharp, IoPlaySharp } from 'react-icons/io5';
import { dispatch } from 'use-bus';
import { Album, Track } from '../../types';
import { Duration } from '../AudioPlayerGlobal/Duration';

interface ReleaseTrackProps {
  children?: React.ReactNode;
  track: Track;
  album?: Album;
  index: number;
}

export const ReleaseTrack = ({ track, album, index }: ReleaseTrackProps) => {
  const isHydrated = useHydratedState();

  const {
    isPlaying,
    currentTrackIndex,
    playlist,
    setPlaylist,
    play,
    pause,
    setCurrentTrackIndex,
    currentTime,
    currentDuration,
  } = usePlaylistPlayerStore();

  const [isSeeking, setIsSeeking] = useState(false);
  const [shouldResume, setShouldResume] = useState<boolean | null>(null);
  const [seekIntent, setSeekIntent] = useState<number>(0);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [samePlaylist, setSamePlaylist] = useState(false);

  useEffect(() => {
    if (playlist && currentTrackIndex >= 0) {
      setCurrentTrackId(playlist[currentTrackIndex]?.id);
    }
  }, [playlist, currentTrackIndex]);

  useEffect(() => {
    setSamePlaylist(isEqual(playlist, album?.tracks));
  }, [playlist, album?.tracks]);

  const handleSliderSeekChange = (value: number[]) => {
    if (shouldResume === null) setShouldResume(isPlaying);
    pause();
    setIsSeeking(true);
    setSeekIntent(value[0]);
  };

  const handleSliderSeekCommit = (value: number[]) => {
    dispatch({ type: '@@player/seek', payload: value[0] });
    setTimeout(() => {
      setIsSeeking(false);
      shouldResume ? play() : pause();
      setShouldResume(null);
    }, 200);
  };

  const handleTrackClick = () => {
    if (!album?.tracks) return;

    const isCurrentTrack = currentTrackId === track?.id;

    if (!samePlaylist) {
      setPlaylist(album.tracks);
    }

    setCurrentTrackIndex(index);

    if (isCurrentTrack) {
      isPlaying ? pause() : play();
    } else {
      play();
    }
  };

  return (
    <article className="flex items-center gap-2">
      <div className="aspect-square w-[88px] h-[88px] md:w-20 md:h-20 relative">
        {track?.coverImage?.url && (
          <Image
            className="absolute inset-0 block"
            src={track?.coverImage?.url}
            alt={''}
            fill
          />
        )}

        {isHydrated && (
          <button
            type="button"
            onClick={() => handleTrackClick()}
            className="w-full h-full absolute group flex items-center justify-center"
          >
            {currentTrackId === track?.id && isPlaying ? (
              <IoPauseSharp className="w-12 h-12 text-white p-3" />
            ) : (
              <IoPlaySharp className="opacity-100 group-hover:opacity-90 transition-opacity w-12 h-12 text-white p-3" />
            )}
          </button>
        )}
      </div>

      <div className="flex-auto overflow-hidden">
        <AnimatePresence>
          <motion.div layout className="relative w-full">
            <h1 className="text-sm md:text-base font-extrabold italic hover:underline leading-tight truncate">
              <Link href={`/tracks/${track.id}`}>{track?.title}</Link>
            </h1>
            <div className="relative italic text-gray-500 font-bold text-xs leading-tight truncate flex flex-wrap">
              {track?.artists?.map((artist, index) => (
                <div key={artist?.id} className="flex">
                  {index === 0 ? null : <div>,&nbsp;</div>}
                  <Link
                    href={`/artist/${artist.slug}`}
                    className="hover:underline"
                  >
                    {artist.title}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {isHydrated && currentTrackId === track?.id && (
          <div className="py-1 md:py-2">
            <UiSlider
              value={isSeeking ? seekIntent : currentTime}
              max={currentDuration}
              onValueChange={handleSliderSeekChange}
              onValueCommit={handleSliderSeekCommit}
            />
          </div>
        )}
      </div>

      {isHydrated && currentTrackId === track?.id && (
        <div className="font-extrabold italic text-sm">
          <Duration seconds={currentDuration} />
        </div>
      )}
    </article>
  );
};
