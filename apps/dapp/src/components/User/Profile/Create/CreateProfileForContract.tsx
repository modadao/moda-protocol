'use client';

import { useToast } from '@/hooks/useToast';
import { useUploadJson } from '@/hooks/useUploadJson';
import { ProfileMetadataSchema } from '@/types';
import { defaultProfileMetadata } from '@/utils/defaultProfileMetadata';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import {
  simulateProfileMintFor,
  useWatchProfileTransferEvent,
  useWriteProfileMintFor,
} from 'profile';

import { Config } from '@/config';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { config } from '../../../WagmiWrapper';
import ProfileDataForm from '../ProfileUi/ProfileDataForm';

interface CreateProfileForContractProps {
  isContract: boolean;
}

export default function CreateProfileForContract({
  isContract,
}: CreateProfileForContractProps) {
  const router = useRouter();
  const { toast } = useToast();
  const formMethods = useForm({
    defaultValues: defaultProfileMetadata,
    resolver: zodResolver(ProfileMetadataSchema),
  });

  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || '';

  const { uploadJson, uploadJsonError } = useUploadJson();

  const [isCreatingProfile, setIsCreatingProfile] = useState(false);

  const { getValues } = formMethods;
  const profileData = getValues();

  useWatchProfileTransferEvent({
    address: Config.profileAddress,
    onLogs() {
      setIsCreatingProfile(false);
    },
  });

  const {
    writeContract: profileMintFor,
    isSuccess: isProfileMintForSuccess,
    isPending: isProfileMintForPending,
    error: isProfileMintForErrorObject,
    isError: isProfileMintForError,
    reset: resetProfileMintFor,
  } = useWriteProfileMintFor();

  const createProfile = async () => {
    setIsCreatingProfile(true);
    const uri = await uploadJson(profileData);

    if (uploadJsonError) {
      toast({
        title: 'Error',
        description: uploadJsonError.message,
        variant: 'error',
      });
      setIsCreatingProfile(false);
      return;
    }

    const url = `${storageUrl}${uri}`;

    const { request } = await simulateProfileMintFor(config, {
      address: Config,
      args: [profileData.profile.address, url],
    });
    profileMintFor(request);
  };

  const isLoading = useMemo(
    () => isProfileMintForPending || isCreatingProfile,
    [isProfileMintForPending, isCreatingProfile],
  );

  useEffect(() => {
    if (isProfileMintForSuccess && !isLoading) {
      toast({
        title: 'Profile Created',
        description: 'Your contract profile has been created successfully.',
        variant: 'success',
      });
      router.push(`/profile/${profileData.profile.address}`);
    } else if (isProfileMintForError) {
      toast({
        title: 'Error',
        description: isProfileMintForErrorObject?.message,
        variant: 'error',
      });

      resetProfileMintFor();
    }
  }, [
    isProfileMintForSuccess,
    router,
    isLoading,
    isProfileMintForError,
    isProfileMintForErrorObject,
    resetProfileMintFor,
    toast,
    profileData.profile.address,
  ]);

  return (
    <FormProvider {...formMethods}>
      <ProfileDataForm
        submitData={createProfile}
        headerText="CREATE PROFILE"
        subHeaderText="FOR CONTRACT"
        buttonText="Create Profile"
        isLoading={isProfileMintForPending}
        isContract={isContract}
      />
    </FormProvider>
  );
}
