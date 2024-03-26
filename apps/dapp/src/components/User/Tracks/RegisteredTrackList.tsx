import { useGetTrackMetadata } from '@/hooks/useGetTrackMetadata';
import { RegisteredTrack } from '@/types';
import { PauseButton, PlayButton } from '@/ui/Icons';
import { TickIcon } from '@/ui/Icons/TickIcon';
import { UiSpinner } from '@/ui/UiSpinner';
import { ToggleGroup, ToggleGroupItem } from '@/ui/UiToggleGroup';
import Image from 'next/image';
import { Dispatch, SetStateAction, useRef, useState } from 'react';

interface RegisteredTrackListProps {
  registeredTracks: RegisteredTrack[];
  isFetching: boolean;
  selectedTracks: string[];
  setSelectedTracks: Dispatch<SetStateAction<string[]>>;
}

export default function RegisteredTrackList({
  registeredTracks,
  isFetching,
  selectedTracks,
  setSelectedTracks,
}: RegisteredTrackListProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-3/5 font-bold mt-4">
      {isFetching || !registeredTracks ? (
        <div className="flex flex-col items-center justify-center mt-24">
          <UiSpinner className="h-8 w-8" />
        </div>
      ) : (
        <ToggleGroup
          className="flex flex-col gap-4 w-full justify-between items-center"
          type="multiple"
          onValueChange={(value: string[]) => setSelectedTracks(value)}
        >
          {registeredTracks.map((trackData) => (
            <div key={trackData.trackId}>
              <Track
                trackData={trackData}
                trackId={trackData.trackId}
                selectedTracks={selectedTracks}
              />
            </div>
          ))}
        </ToggleGroup>
      )}
    </div>
  );
}

interface TrackProps {
  trackData: RegisteredTrack;
  trackId: string;
  selectedTracks: string[];
}

function Track({ trackData, trackId, selectedTracks }: TrackProps) {
  const { trackMetadata, isLoading, error } = useGetTrackMetadata(
    trackData.trackUri,
  );

  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL;

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const trackSelected = selectedTracks.includes(trackId) ? true : false;

  if (isLoading) {
    return (
      <div className="flex flex-row justify-center items-center gap-24 p-4 border-b-2">
        <UiSpinner />
      </div>
    );
  }

  return (
    <div>
      {error ? (
        <h3>{error.message}</h3>
      ) : (
        <div className="flex flex-row justify-between items-center min-w-[750px]  p-4 border-b-2">
          <div className="flex flex-row gap-2 items-center">
            <ToggleGroupItem asChild value={trackId}>
              <div
                className={`h-[16px] w-[16px] rounded-full flex items-center justify-center border ${
                  trackSelected ? 'border-2 border-black' : 'border-gray-400'
                }`}
              >
                <div className="h-[15px] w-[15px] rounded-full flex items-center justify-center px-[2.5px]">
                  {trackSelected && <TickIcon className="font-semibold" />}
                </div>
              </div>
            </ToggleGroupItem>
            <div className="relative h-12 w-12 border border-black rounded-md">
              <Image
                className="rounded-md"
                src={`${storageUrl}${trackMetadata.image}`}
                alt={trackMetadata.name}
                fill
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <h3>{trackMetadata.name}</h3>

              {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
              <audio
                src={`${storageUrl}${trackMetadata.animation_url}`}
                ref={audioRef}
              />
              {!isPlaying ? (
                <PlayButton
                  className="rounded-full h-5 w-5 bg-gray-400 flex flex-col items-center justify-center"
                  className_Icon="h-3 w-3 text-white font-semibold"
                  onClick={togglePlayPause}
                />
              ) : (
                <PauseButton
                  className="rounded-full h-5 w-5 bg-gray-400 flex flex-col items-center justify-center"
                  className_Icon="h-3 w-3 text-white font-semibold"
                  onClick={togglePlayPause}
                />
              )}
            </div>
          </div>
          <h3>Track Id: {trackId}</h3>
        </div>
      )}
    </div>
  );
}
