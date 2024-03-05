'use client';

import { config } from '@/components/WagmiWrapper';
import { Config } from '@/config';
import { useGetProfileData } from '@/hooks/useGetProfileData';
import { useToast } from '@/hooks/useToast';
import { useToastError } from '@/hooks/useToastError';
import { useUploadJson } from '@/hooks/useUploadJson';
import { ProfileMetadataSchema } from '@/types';
import { defaultProfileMetadata } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import {
  simulateProfileUpdateProfileFor,
  useWatchProfileMetadataUpdateEvent,
  useWriteProfileUpdateProfileFor,
} from 'profile';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ProfileDataForm from '../ProfileUi/ProfileDataForm';

interface EditProfileForContractProps {
  contractAddress: string;
  isContract: boolean;
}

export default function EditProfileForContract({
  contractAddress,
  isContract,
}: EditProfileForContractProps) {
  const router = useRouter();
  const { toast } = useToast();

  const { profileData, getProfileDataError } = useGetProfileData();

  const formMethods = useForm({
    defaultValues: profileData || defaultProfileMetadata,
    resolver: zodResolver(ProfileMetadataSchema),
  });

  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || '';

  const { uploadJson, uploadJsonError } = useUploadJson();

  const { getValues } = formMethods;

  const [isUpdatingData, setIsUpdatingData] = useState(false);

  const {
    writeContract: updateProfileFor,
    isPending: isUpdateProfileForPending,
    isSuccess: isUpdateProfileForSuccess,
    error: isUpdateProfileForErrorObject,
    isError: isUpdateProfileForError,
    reset: resetUpdateProfileFor,
  } = useWriteProfileUpdateProfileFor();

  useWatchProfileMetadataUpdateEvent({
    address: Config.profileAddress,
    onLogs() {
      setIsUpdatingData(false);
    },
  });

  const editProfile = async () => {
    setIsUpdatingData(true);
    const profileData = getValues();
    const uri = await uploadJson(profileData);

    if (uploadJsonError) {
      toast({
        title: 'Error',
        description: uploadJsonError.message,
        variant: 'error',
      });
      setIsUpdatingData(false);
      return;
    }

    const url = `${storageUrl}${uri}`;

    const { request } = await simulateProfileUpdateProfileFor(config, {
      address: Config.profileAddress,
      args: [contractAddress, url],
    });
    updateProfileFor(request);
  };

  const isLoading = useMemo(
    () => isUpdateProfileForPending || isUpdatingData,
    [isUpdateProfileForPending, isUpdatingData],
  );

  useToastError(getProfileDataError, 'Error fetching contract profile data');

  useEffect(() => {
    if (profileData) {
      formMethods.reset(profileData);
    }
  }, [profileData, formMethods]);

  useEffect(() => {
    if (isUpdateProfileForSuccess && !isLoading) {
      toast({
        title: 'Profile Updated',
        description: 'Your profile has been updated successfully.',
        variant: 'success',
      });
      router.push(`/profile/${contractAddress}`);
    } else if (isUpdateProfileForError) {
      setIsUpdatingData(false);
      toast({
        variant: 'error',
        title: 'Profile Update Failed',
        description: isUpdateProfileForErrorObject.shortMessage,
      });
      resetUpdateProfileFor();
    }
  }, [
    isUpdateProfileForSuccess,
    router,
    isLoading,
    isUpdateProfileForErrorObject,
    toast,
    isUpdateProfileForError,
    resetUpdateProfileFor,
    contractAddress,
  ]);

  return (
    <FormProvider {...formMethods}>
      <ProfileDataForm
        submitData={editProfile}
        headerText="EDIT PROFILE"
        subHeaderText="FOR CONTRACT"
        buttonText="Save"
        isLoading={isLoading}
        loadingText="Updating Profile..."
        isContract={isContract}
      />
    </FormProvider>
  );
}
