/* eslint-disable jsx-a11y/media-has-caption */
'use client';

import { useHydratedState } from '@/hooks/useHydratedState';
import { usePlaylistPlayerStore } from '@/hooks/usePlaylistPlayerStore';
import { Track } from '@/types';
import { UiSlider } from '@/ui/UiSlider';
import { clx } from '@/utils/clx';
import * as Toggle from '@radix-ui/react-toggle';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CgPlayList } from 'react-icons/cg';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { IoCloseCircle, IoPauseSharp, IoPlaySharp } from 'react-icons/io5';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5';
import useBus from 'use-bus';
import { AudioPlayerGlobalPlaylist } from './AudioPlayerGlobalPlaylist';
import { Duration } from './Duration';

export const AudioPlayerGlobal: React.FC = () => {
  const isHydrated = useHydratedState();

  const {
    playlist,
    setPlaylist,
    currentTrackIndex,
    setCurrentTrackIndex,
    isPlaying,
    play,
    pause,
    next,
    previous,
    setCurrentTime,
    setCurrentDuration,
    getHasNextTrack,
    getHasPrevTrack,
    currentDuration,
    currentTime,
  } = usePlaylistPlayerStore();

  const audioRef = useRef<HTMLAudioElement>(null);

  const [showPlaylist, setShowPlaylist] = useState(false);
  const [shouldResume, setShouldResume] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [hasPrevTrack, setHasPrevTrack] = useState(false);
  const [hasNextTrack, setHasNextTrack] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Playback
  useEffect(() => {
    if (!audioRef.current) return;
    if ((currentTrack && isPlaying) ?? isPlaying) {
      void audioRef.current?.play();
    } else {
      void audioRef.current?.pause();
    }
  }, [currentTrack, isPlaying]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
  }, [currentTrack]);

  useEffect(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `${currentTrack?.title}`,
        artist: `${currentTrack?.artists
          .map((artist) => artist?.title)
          .join(', ')}`,
        album: `${currentTrack?.title}`,
        artwork: [
          {
            src: `${currentTrack?.coverImage?.url}`,
            sizes: '400x400',
            type: 'image/jpeg',
          },
        ],
      });
    }
    return () => {
      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = null;
      }
    };
  }, [currentTrack]);

  // CurrentTrack
  useEffect(() => {
    setCurrentTrack(playlist[currentTrackIndex]);
    setHasNextTrack(getHasNextTrack());
    setHasPrevTrack(getHasPrevTrack());
  }, [playlist, currentTrackIndex, getHasNextTrack, getHasPrevTrack]);

  // Slider / Seek
  const handleSliderChange = (value: number) => {
    if (!audioRef.current) return;
    if (shouldResume === null) setShouldResume(isPlaying);
    if (isPlaying) audioRef.current.pause();
    audioRef.current.currentTime = value;
  };

  const handleSliderCommit = (value: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = value;
    shouldResume ? audioRef.current?.play() : audioRef.current?.pause();
    setTimeout(() => {
      setShouldResume(null);
    }, 100);
  };

  // External Seek Bus
  useBus(
    '@@player/seek',
    ({ payload }) => {
      if (!audioRef?.current) return;
      if (typeof payload !== 'number') return;
      audioRef.current.currentTime = payload;
    },
    [audioRef?.current],
  );

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetaData = () => {
    if (audioRef.current) {
      setCurrentDuration(audioRef.current.duration);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleTrackEnd = () => {
    if (currentTrackIndex < playlist.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      play();
    } else {
      setCurrentTrackIndex(0); // loop back to the first track
      play();
    }
  };

  if (!isHydrated) return null;

  return (
    <AnimatePresence>
      {!!playlist.length && currentTrackIndex >= 0 && (
        <motion.div
          className="fixed left-2 right-2 bottom-2 md:left-auto md:bottom-4 md:right-4 md:w-96 select-none z-60"
          key="playlist-player"
          initial={{ opacity: 0, transform: 'translateY(50px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          exit={{ opacity: 0, transform: 'translateY(50px)' }}
        >
          <AnimatePresence>
            {showPlaylist && (
              <motion.div
                className="absolute bottom-full left-0 right-0 w-full"
                key="global-playlist"
                initial={{ opacity: 0, transform: 'translateY(50px)' }}
                animate={{ opacity: 1, transform: 'translateY(0px)' }}
                exit={{ opacity: 0, transform: 'translateY(50px)' }}
              >
                <AudioPlayerGlobalPlaylist playlist={playlist} />
                <div className="absolute -bottom-4 w-full h-8 bg-white" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-2 relative bg-black text-white rounded-lg shadow-md overflow-hidden">
            {/* Background Image */}
            <AnimatePresence>
              {currentTrack?.coverImage && (
                <motion.div
                  className="inset-0 absolute w-full h-full"
                  key={`bg-${currentTrack.coverImage.url}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    className="inset-0 absolute object-cover w-full h-full blur-md opacity-80"
                    alt={'alt'}
                    src={currentTrack.coverImage?.url}
                    width={Number(currentTrack?.coverImage?.width)}
                    height={Number(currentTrack?.coverImage?.height)}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative pl-4 py-1">
              <div className="flex relative gap-4 items-center">
                <div>
                  <div className="w-20 h-20 relative">
                    <AnimatePresence>
                      {currentTrack?.coverImage?.url && (
                        <motion.div
                          key={`thumb-${currentTrack.coverImage?.id}`}
                          className={clx(
                            'w-full h-full rounded-full absolute overflow-hidden border border-zinc-500',
                            { 'animate-spin-slow': true },
                            { pause: !isPlaying || isLoading },
                          )}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Image
                            className="inset-0 absolute w-full h-full"
                            src={currentTrack.coverImage.url}
                            alt={'alt'}
                            width={Number(currentTrack.coverImage.width)}
                            height={Number(currentTrack.coverImage.height)}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex-auto overflow-hidden">
                  {true && (
                    <div className="">
                      <div className="w-full overflow-hidden mb-1">
                        <div className="text-xs italic font-normal leading-tight truncate">
                          {currentTrack?.artists
                            ?.map((artist) => artist?.title)
                            .join(', ')}
                          {'\u00A0'}
                        </div>

                        <div className="font-bold italic leading-tight truncate">
                          <Link
                            href={`/tracks/${currentTrack?.id}`}
                            className="hover:underline"
                          >
                            {currentTrack?.title}
                          </Link>
                        </div>
                      </div>

                      <div className="flex items-end justify-center gap-2">
                        <div className="grow space-y-0.5">
                          <div className="flex items-end">
                            <div className="flex gap-1 md:gap-2">
                              <button
                                type="button"
                                disabled={!hasPrevTrack}
                                onClick={previous}
                                className="bg-black bg-opacity-25 rounded-full w-8 h-8 md:w-6 md:h-6 flex items-center justify-center disabled:opacity-50"
                              >
                                <IoPlaySkipBackSharp className="w-4 h-4 md:w-3 md:h-3" />
                              </button>

                              <Toggle.Root
                                pressed={isPlaying}
                                onPressedChange={isPlaying ? pause : play}
                                aria-label="Toggle play"
                                className="bg-black bg-opacity-25 rounded-full w-8 h-8 md:w-6 md:h-6 flex items-center justify-center"
                              >
                                {isPlaying ? (
                                  <IoPauseSharp className="w-4 h-4 md:w-3 md:h-3" />
                                ) : (
                                  <IoPlaySharp className="w-4 h-4 md:w-3 md:h-3" />
                                )}
                              </Toggle.Root>

                              <button
                                type="button"
                                onClick={next}
                                disabled={!hasNextTrack}
                                className="bg-black bg-opacity-25 rounded-full w-8 h-8 md:w-6 md:h-6 flex items-center justify-center disabled:opacity-50"
                              >
                                <IoPlaySkipForwardSharp className="w-4 h-4 md:w-3 md:h-3" />
                              </button>
                            </div>

                            <div className="ml-auto text-xs italic font-bold leading-none">
                              <div>
                                {isLoading ? (
                                  'Loading...'
                                ) : (
                                  <>
                                    <Duration seconds={currentTime} />/
                                    <Duration seconds={currentDuration} />
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="py-1">
                            <UiSlider
                              theme="light"
                              size="md"
                              thumbLabel="Current time"
                              value={audioRef.current?.currentTime}
                              max={currentDuration}
                              onValueChange={(value) =>
                                handleSliderChange(value[0])
                              }
                              onValueCommit={(value) =>
                                handleSliderCommit(value[0])
                              }
                            />
                          </div>
                        </div>

                        {/* Toggle Mute */}
                        <Toggle.Root
                          pressed={isMuted}
                          onPressedChange={(isMuted) => setIsMuted(isMuted)}
                          aria-label="Toggle mute"
                          className=" hover:opacity-70 data-[state=on]:opacity-70 flex items-center justify-center rounded"
                        >
                          {isMuted ? <FiVolumeX /> : <FiVolume2 />}
                        </Toggle.Root>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Toggle Playlist */}
              {playlist.length > 1 && (
                <Toggle.Root
                  pressed={showPlaylist}
                  onPressedChange={(pressed) => setShowPlaylist(pressed)}
                  aria-label="Toggle playlist"
                  className="absolute top-0 left-0 hover:opacity-70 data-[state=on]:opacity-70 flex items-center justify-center rounded"
                >
                  <CgPlayList className="w-6 h-6" />
                </Toggle.Root>
              )}

              {/* Close/Clear Playlist */}
              <button
                type="button"
                onClick={() => setPlaylist([])}
                className="absolute top-0 right-0 hover:opacity-70 data-[state=on]:opacity-70 flex items-center justify-center rounded"
              >
                <IoCloseCircle className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <audio
                ref={audioRef}
                src={playlist[currentTrackIndex]?.mediaUpload?.url}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetaData}
                onEnded={handleTrackEnd}
                onPlay={play}
                onPause={pause}
                muted={isMuted}
                title={String(currentTrack?.title)}
                onLoadStart={() => setIsLoading(true)}
                onCanPlay={() => setIsLoading(false)}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
