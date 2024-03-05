import { config } from '@/components/WagmiWrapper';

import { toast } from '@/hooks/useToast';
import { useToastError } from '@/hooks/useToastError';
import { useUploadJson } from '@/hooks/useUploadJson';
import { CreateReleaseData } from '@/types';
import { ChevronLeftIcon } from '@/ui/Icons';
import { UiButton } from '@/ui/UiButton';
import { UiSpinner } from '@/ui/UiSpinner';
import { createReleaseMetadata } from '@/utils/createMetadata';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Addresses,
  readCatalogGetTrack,
  simulateOpenReleasesCreate,
  useWriteOpenReleasesCreate,
} from 'drop-sdk';
import {} from 'drop-sdk';
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import * as z from 'zod';
import ArtworkUploader from './ArtworkUploader';
import CreateReleaseForm from './CreateReleaseForm';
import ReleaseTrackList from './ReleaseTrackList';

interface CreateReleaseProps {
  selectedTracks: string[];
  setSelectedTracks: Dispatch<SetStateAction<string[]>>;
  isCreatingRelease: boolean;
  setIsCreatingRelease: Dispatch<SetStateAction<boolean>>;
}

const defaultCreateReleaseData: CreateReleaseData = {
  releaseName: '',
  releaseImage: '',
  releaseDescription: '',
  releaseGenre: '',
  royaltyAmount: 0,
  totalSupply: '',
};

const CreateReleaseDataSchema = z.object({
  releaseName: z.string().min(1, { message: 'Name is required' }),
  releaseImage: z.string().min(1, { message: 'Image is required' }),
  releaseGenre: z.string().min(1, { message: 'Genre is required' }),
  royaltyAmount: z
    .number()
    .min(1, { message: 'Royalty amount is required' })
    .max(21, { message: 'Royalty amount must 20% or less' }),
  totalSupply: z.string().min(1, { message: 'Total supply is required' }),
});

export default function CreateRelease({
  selectedTracks,
  setSelectedTracks,
  isCreatingRelease,
  setIsCreatingRelease,
}: CreateReleaseProps) {
  const catalogAddress = Addresses.Examples.Catalog.mumbai;
  const openReleases = Addresses.Examples.OpenReleases.mumbai;

  const formMethods = useForm({
    defaultValues: defaultCreateReleaseData,
    resolver: zodResolver(CreateReleaseDataSchema),
  });

  const {
    getValues,
    watch,
    formState: { errors },
    handleSubmit,
  } = formMethods;
  const release = getValues();
  const releaseImage = watch('releaseImage');

  console.log('errors', errors);

  const { address } = useAccount();
  const { uploadJson, uploadJsonError } = useUploadJson();
  useToastError(uploadJsonError, 'Error uploading release metadata');

  const [releaseTrackUris, setReleaseTrackUris] = useState<string[]>([]);
  const [isCreateReleaseLoading, setIsCreateReleaseLoading] = useState(false);

  const getSelectedReleaseTracks = async () => {
    for (let i = 0; i < selectedTracks.length; i++) {
      const track = await readCatalogGetTrack(config, {
        address: catalogAddress,
        args: [selectedTracks[i]],
      });

      setReleaseTrackUris((prev) => {
        return prev.includes(track.trackRegistrationHash)
          ? prev
          : [...prev, track.trackRegistrationHash];
      });
    }
  };

  const {
    writeContract: create,
    isPending: isCreatePending,
    isSuccess: isCreateSuccess,
    error: createError,
    isError: isCreateError,
    reset: resetCreate,
  } = useWriteOpenReleasesCreate();

  const isLoading = useMemo(() => {
    return isCreatePending || isCreateReleaseLoading;
  }, [isCreatePending, isCreateReleaseLoading]);

  const createRelease = async () => {
    setIsCreateReleaseLoading(true);
    const release = getValues();
    const {
      releaseName,
      releaseImage,
      releaseDescription,
      releaseGenre,
      royaltyAmount,
      totalSupply,
    } = release;

    const releaseMetadata = createReleaseMetadata({
      releaseName,
      releaseImage,
      releaseDescription,
      releaseGenre,
      releaseTrackUris,
    });
    const releaseUri = await uploadJson(releaseMetadata);
    const createResult = await simulateOpenReleasesCreate(config, {
      address: openReleases,
      args: [
        address,
        royaltyAmount * 100,
        releaseUri,
        totalSupply,
        selectedTracks,
      ],
    });

    create(createResult.request);
    setIsCreateReleaseLoading(false);
  };

  useEffect(() => {
    if (isCreateSuccess) {
      toast({
        title: 'Release Created',
        description: `Release ${release.releaseName} created successfully`,
        variant: 'success',
      });
    } else if (isCreateError) {
      toast({
        title: 'Error',
        description: createError.message,
        variant: 'error',
      });
      resetCreate();
    }
  }, [
    isCreateSuccess,
    isCreateError,
    createError,
    resetCreate,
    release.releaseName,
  ]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getSelectedReleaseTracks();
  }, []);

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(createRelease)}
        className=" relative flex flex-col items-center justify-center italic w-full gap-4 mt-6 max-w-4/5"
      >
        <UiButton
          className="absolute top-0 right-12 hover:underline pt-0"
          intent="text"
          size="lg"
          onClick={() => {
            setIsCreatingRelease(!isCreatingRelease);
            setSelectedTracks([]);
          }}
        >
          <div className="flex flex-row items-center">
            <ChevronLeftIcon />
            <span>Back</span>
          </div>
        </UiButton>
        <h3 className="text-3xl font-bold">Create Release</h3>
        <div className="flex flex-row items-start justify-between gap-12">
          <div className="mt-6">
            <ArtworkUploader
              value="releaseImage"
              imageUri={releaseImage}
              errorMessage={errors.releaseImage?.message}
            />
          </div>
          <CreateReleaseForm />

          <ReleaseTrackList
            releaseTrackUris={releaseTrackUris}
            setReleaseTrackUris={setReleaseTrackUris}
          />
        </div>
        <UiButton
          className="h-[39px] w-[350px] mt-12"
          onClick={() => createRelease()}
          type="submit"
        >
          {isLoading ? <UiSpinner /> : 'Create Release'}
        </UiButton>
      </form>
    </FormProvider>
  );
}
