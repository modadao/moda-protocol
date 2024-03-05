import { useGetTrackMetadata } from '@/hooks/useGetTrackMetadata';
import { PauseButton, PlayButton } from '@/ui/Icons';
import { DraggableItem, DroppableItem } from '@/ui/UiSortableDragAndDrop';
import { Dispatch, SetStateAction, useRef, useState } from 'react';

interface ReleaseTrackListProps {
  releaseTrackUris: string[];
  setReleaseTrackUris: Dispatch<SetStateAction<string[]>>;
}

export default function ReleaseTrackList({
  releaseTrackUris,
  setReleaseTrackUris,
}: ReleaseTrackListProps) {
  return (
    <DroppableItem
      list={releaseTrackUris as (string | number)[]}
      setList={
        setReleaseTrackUris as Dispatch<SetStateAction<(string | number)[]>>
      }
    >
      <div className="flex flex-col font-bold">
        <h3 className="text-md ml-5">Track List</h3>
        <div className="flex flex-col items-start justify-center gap-4 w-[350px]">
          {releaseTrackUris.map((uri, index) => (
            <Track key={uri} uri={uri} number={index + 1} />
          ))}
        </div>
      </div>
    </DroppableItem>
  );
}

interface TrackProps {
  uri: string;
  number: number;
}

function Track({ uri, number }: TrackProps) {
  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || '';
  const { trackMetadata, isLoading, error } = useGetTrackMetadata(uri);

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
  return (
    <DraggableItem id={uri}>
      <div className="w-[350px] flex flex-row items-center gap-2">
        <h3 className="w-4 text-xl">{`${number}. `}</h3>

        <div className=" w-full p-1 border border-black bg-white rounded-md">
          <div className="p-2 border border-black bg-black text-white rounded-md w-full h-10 ">
            {isLoading ? (
              <h3>loading track...</h3>
            ) : error ? (
              <h3>error loading track</h3>
            ) : (
              <div className="flex flex-row items-center justify-start gap-24">
                {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
                <audio
                  src={`${storageUrl}${trackMetadata.animation_url}`}
                  ref={audioRef}
                />
                {!isPlaying ? (
                  <PlayButton
                    className="rounded-full h-5 w-5 bg-white flex flex-col items-center justify-center"
                    className_Icon="h-3 w-3 text-black font-semibold"
                    onClick={togglePlayPause}
                    fill="black"
                  />
                ) : (
                  <PauseButton
                    className="rounded-full h-5 w-5 bg-white flex flex-col items-center justify-center"
                    className_Icon="h-3 w-3 text-black font-semibold fill-black"
                    onClick={togglePlayPause}
                  />
                )}
                <h3>{trackMetadata.name}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </DraggableItem>
  );
}
