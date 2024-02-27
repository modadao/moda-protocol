'use client';

import { config } from '@/components/WagmiWrapper';
import { Config } from '@/config';
import { useGetProfileData } from '@/hooks/useGetProfileData';
import { useToast } from '@/hooks/useToast';
import { useUploadProfileData } from '@/hooks/useUploadProfileData';
import { ProfileMetadataSchema } from '@/types';
import { defaultProfileMetadata } from '@/utils';
import { IPFS_GATEWAY } from '@/utils/constants';
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

  const { uploadProfileData, uploadProfileDataError } = useUploadProfileData();

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
    const ipfsHash = await uploadProfileData(profileData);

    if (uploadProfileDataError) {
      toast({
        title: 'Error',
        description: uploadProfileDataError.message,
        variant: 'error',
      });
      setIsUpdatingData(false);
      return;
    }

    const uri = `${IPFS_GATEWAY}${ipfsHash}`;

    const { request } = await simulateProfileUpdateProfileFor(config, {
      address: Config.profileAddress,
      args: [contractAddress, uri],
    });
    updateProfileFor(request);
  };

  const isLoading = useMemo(
    () => isUpdateProfileForPending || isUpdatingData,
    [isUpdateProfileForPending, isUpdatingData],
  );

  useEffect(() => {
    if (getProfileDataError) {
      toast({
        title: 'Error fetching contract profile data',
        description: getProfileDataError?.message,
        variant: 'error',
      });
    }
  }, [getProfileDataError, toast]);

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
        headerText="EDIT"
        buttonText="Save"
        isLoading={isLoading}
        loadingText="Updating Profile..."
        isContract={isContract}
      />
    </FormProvider>
  );
}
