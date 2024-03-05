import { config } from '@/components/WagmiWrapper';
import { toast } from '@/hooks/useToast';
import { useUploadJson } from '@/hooks/useUploadJson';
import { TrackData } from '@/types';
import { ChevronLeftIcon } from '@/ui/Icons';
import { UiButton } from '@/ui/UiButton';
import { createTrackMetadata } from '@/utils/createMetadata';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Addresses,
  simulateCatalogRegisterTrack,
  useWriteCatalogRegisterTrack,
} from 'drop-sdk';
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import * as z from 'zod';
import RegisterTrackForm from './RegisterTrackForm';

interface UploadTracksProps {
  isUploadTrack: boolean;
  setIsUploadTrack: Dispatch<SetStateAction<boolean>>;
}

const defaultTrackData: TrackData = {
  trackName: '',
  trackImage: '',
  trackUri: '',
};

const TrackDataSchema = z.object({
  trackName: z.string().min(1, { message: 'Name is required' }),
  trackImage: z.string().min(1, { message: 'Image is required' }),
  trackUri: z.string().min(1, { message: 'Track URI is required' }),
});

export default function UploadTrack({
  isUploadTrack,
  setIsUploadTrack,
}: UploadTracksProps) {
  const catalogAddress = Addresses.Examples.Catalog.mumbai;
  const formMethods = useForm({
    defaultValues: defaultTrackData,
    resolver: zodResolver(TrackDataSchema),
  });

  const { getValues } = formMethods;

  const [isRegisterTrackLoading, setIsRegisterTrackLoading] = useState(false);

  const track = getValues();

  const { uploadJson } = useUploadJson();
  const { address } = useAccount();

  const {
    writeContract: register,
    isPending: isRegisterTrackPending,
    isSuccess: isRegisterTrackSuccess,
    error: registerTrackError,
    isError: isRegisterTrackError,
    reset: resetRegisterTrack,
  } = useWriteCatalogRegisterTrack();

  const registerTrack = async () => {
    setIsRegisterTrackLoading(true);
    const track = getValues();
    const trackMetadata = createTrackMetadata(track);
    const trackUri = await uploadJson(trackMetadata);
    const registerTrackResult = await simulateCatalogRegisterTrack(config, {
      address: catalogAddress,
      args: [address, address, trackUri],
    });
    register(registerTrackResult.request);
    setIsRegisterTrackLoading(false);
  };

  const isLoading = useMemo(() => {
    return isRegisterTrackPending || isRegisterTrackLoading;
  }, [isRegisterTrackLoading, isRegisterTrackPending]);

  useEffect(() => {
    if (isRegisterTrackSuccess) {
      toast({
        title: 'Track Registered',
        description: `Track ${track.trackName} registered successfully`,
        variant: 'success',
      });
    } else if (isRegisterTrackError) {
      toast({
        title: 'Error',
        description: registerTrackError.message,
        variant: 'error',
      });
      resetRegisterTrack();
    }
  }, [
    isRegisterTrackSuccess,
    isRegisterTrackError,
    registerTrackError,
    track.trackName,
    resetRegisterTrack,
  ]);

  return (
    <div className="relative bg-whiteBackground h-full">
      <UiButton
        className="absolute top-0 right-12 hover:underline pt-0"
        intent="text"
        size="lg"
        onClick={() => setIsUploadTrack(!isUploadTrack)}
      >
        <div className="flex flex-row items-center">
          <ChevronLeftIcon />
          <span>Back</span>
        </div>
      </UiButton>

      <FormProvider {...formMethods}>
        <RegisterTrackForm
          registerTrack={registerTrack}
          isLoading={isLoading}
        />
      </FormProvider>
    </div>
  );
}
