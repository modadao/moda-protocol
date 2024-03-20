'use client';

import { config } from '@/components/WagmiWrapper';
import { useGetProfileData } from '@/hooks/useGetProfileData';
import { useToast } from '@/hooks/useToast';
import { useToastError } from '@/hooks/useToastError';
import { useUploadJson } from '@/hooks/useUploadJson';
import { ProfileMetadataSchema } from '@/types';
import { defaultProfileMetadata, getChainInfo } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Addresses } from 'drop-sdk';
import { useRouter } from 'next/navigation';
import {
  simulateProfileUpdateProfile,
  useWatchProfileMetadataUpdateEvent,
  useWriteProfileUpdateProfile,
} from 'profile';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import ProfileDataForm from '../ProfileUi/ProfileDataForm';

interface EditProfileForAccountProps {
  isContract: boolean;
}

export default function EditProfileForAccount({
  isContract,
}: EditProfileForAccountProps) {
  const { isTestnet } = getChainInfo();

  const profileAddress = isTestnet ? Addresses.Profile.mumbai : '';

  const { address } = useAccount();
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
    writeContract: updateProfile,
    isPending: isUpdateProfilePending,
    isSuccess: isUpdateProfileSuccess,
    error: isUpdateProfileErrorObject,
    isError: isUpdateProfileError,
    reset: resetUpdateProfile,
  } = useWriteProfileUpdateProfile();

  useWatchProfileMetadataUpdateEvent({
    address: profileAddress,
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
        title: 'Profile Update Failed',
        description: 'Error uploading profile data',
        variant: 'error',
      });
      return;
    }

    const url = `${storageUrl}${uri}`;

    const { request } = await simulateProfileUpdateProfile(config, {
      address: profileAddress,
      args: [url],
    });
    updateProfile(request);
  };

  const isLoading = useMemo(
    () => isUpdateProfilePending || isUpdatingData,
    [isUpdateProfilePending, isUpdatingData],
  );

  useToastError(getProfileDataError, 'Error fetching profile data');

  useEffect(() => {
    if (profileData) formMethods.reset(profileData);
  }, [profileData, formMethods]);

  useEffect(() => {
    if (isUpdateProfileSuccess && !isLoading) {
      toast({
        title: 'Profile Updated',
        description: 'Your profile has been updated successfully.',
        variant: 'success',
      });
      router.push(`/profile/${address}`);
    } else if (isUpdateProfileError) {
      setIsUpdatingData(false);
      toast({
        title: 'Profile Update Failed',
        description: isUpdateProfileErrorObject.shortMessage,
        variant: 'error',
      });
      resetUpdateProfile();
    }
  }, [
    isUpdateProfileSuccess,
    router,
    isLoading,
    isUpdateProfileErrorObject,
    toast,
    address,
    isUpdateProfileError,
    resetUpdateProfile,
  ]);

  return (
    <FormProvider {...formMethods}>
      <ProfileDataForm
        submitData={editProfile}
        headerText="EDIT PROFILE"
        subHeaderText="FOR ACCOUNT"
        buttonText="Save"
        isLoading={isLoading}
        loadingText="Updating Profile..."
        isContract={isContract}
      />
    </FormProvider>
  );
}
