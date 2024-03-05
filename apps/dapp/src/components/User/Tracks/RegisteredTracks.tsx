'use client';

import { useGetRegisteredTracks } from '@/hooks/useGetRegisteredTracks';
import { toast } from '@/hooks/useToast';
import { RefreshIcon } from '@/ui/Icons/RefreshIcon';
import { UiButton } from '@/ui/UiButton';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CreateRelease from './CreateRelease';
import RegisteredTrackList from './RegisteredTrackList';
import UploadTrack from './UploadTrack';

export default function RegisteredTracks() {
  const [isUploadTrack, setIsUploadTrack] = useState(false);
  const [isCreatingRelease, setIsCreatingRelease] = useState(false);
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const router = useRouter();

  const result = useGetRegisteredTracks();
  const registeredTracks = result.ok ? result.value.registeredTracks : [];
  const isFetching = result.ok ? result.value.isFetching : false;
  const refetch = result.ok && result.value.refetch;

  const isSelectedTracks = selectedTracks.length > 0;

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (refetch && isRefreshing) {
      refetch();
    }
  }, [isUploadTrack, refetch, isRefreshing]);

  useEffect(() => {
    if (!isFetching) {
      setIsRefreshing(false);
    }
  }, [isFetching]);

  useEffect(() => {
    if (!result.ok) {
      toast({
        title: 'Error',
        description: 'Error fetching registered tracks',
        variant: 'error',
      });
    }
  }, [result.ok]);

  if (isUploadTrack) {
    return (
      <UploadTrack
        isUploadTrack={isUploadTrack}
        setIsUploadTrack={setIsUploadTrack}
      />
    );
  }

  if (isCreatingRelease) {
    return (
      <CreateRelease
        selectedTracks={selectedTracks}
        setSelectedTracks={setSelectedTracks}
        isCreatingRelease={isCreatingRelease}
        setIsCreatingRelease={setIsCreatingRelease}
      />
    );
  }
  return (
    <div className="flex flex-col justify-center items-center font-bold italic">
      <h3 className="text-3xl mt-6">Registered Tracks</h3>
      <div className="text-lg text-center mt-4">
        <h3>Start uploading Tracks to Register them in our Catalog</h3>
        <h3>Once registered you can select tracks to create a Release</h3>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 mt-6">
        <UiButton
          intent="primary"
          size="sm"
          onClick={() => setIsUploadTrack(!isUploadTrack)}
        >
          Upload Track
        </UiButton>
        <UiButton
          onClick={() => {
            setIsRefreshing(true);
            setSelectedTracks([]);
            router.refresh();
          }}
          intent="secondary"
          size="sm"
          className="text-black"
        >
          <span>Refresh Tracks</span>
          <RefreshIcon className={isRefreshing ? 'animate-spin' : ''} />
        </UiButton>

        {isSelectedTracks && (
          <UiButton
            intent="secondary"
            size="sm"
            onClick={() => setIsCreatingRelease(!isCreatingRelease)}
          >
            Create Release
          </UiButton>
        )}
      </div>

      <RegisteredTrackList
        registeredTracks={registeredTracks}
        isFetching={isFetching}
        selectedTracks={selectedTracks}
        setSelectedTracks={setSelectedTracks}
      />
    </div>
  );
}
