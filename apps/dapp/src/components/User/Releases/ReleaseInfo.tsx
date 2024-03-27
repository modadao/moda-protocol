import { useGetTrackMetadata } from '@/hooks/useGetTrackMetadata';
import { ReleaseMetadata } from '@/types';
import { PauseButton, PlayButton } from '@/ui/Icons';
import { UiSpinner } from '@/ui/UiSpinner';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface ReleaseMetadataProps {
  releaseMetadata: ReleaseMetadata;
}

export default function ReleaseInfo({ releaseMetadata }: ReleaseMetadataProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col w-full justify-between p-6 font-bold italic gap-2">
        <h3 className="text-2xl ">{releaseMetadata.name}</h3>
        <div className="flex flex-row gap-2">
          <h3>Description: </h3>
          <h3 className="font-normal">{releaseMetadata.description} </h3>
        </div>
        <div className="flex flex-row gap-2">
          <h3>Genre: </h3>
          <h3 className="font-normal">
            {releaseMetadata.attributes[1].value}{' '}
          </h3>
        </div>
      </div>
      <div className="w-full italic font-bold">
        <h3 className="text-lg  pl-6">Track list</h3>
        {releaseMetadata.attributes[0].value.map((trackUri) => (
          <Track key={trackUri} trackUri={trackUri} />
        ))}
      </div>
    </div>
  );
}

interface TrackProps {
  trackUri: string;
}

function Track({ trackUri }: TrackProps) {
  const { trackMetadata, isLoading, error } = useGetTrackMetadata(trackUri);

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
        <div className="flex flex-row justify-between items-center mx-6 py-4 border-b-2 ">
          <div className="flex flex-row gap-2 items-center">
            <div className="relative h-12 w-12 shadow-md">
              <Image
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
        </div>
      )}
    </div>
  );
}
