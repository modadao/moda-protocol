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
  const { address } = useAccount();
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
    writeContract: updateProfile,
    isPending: isUpdateProfilePending,
    isSuccess: isUpdateProfileSuccess,
    error: isUpdateProfileErrorObject,
    isError: isUpdateProfileError,
    reset: resetUpdateProfile,
  } = useWriteProfileUpdateProfile();

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
        title: 'Profile Update Failed',
        description: 'Error uploading profile data',
        variant: 'error',
      });
      return;
    }

    const uri = `${IPFS_GATEWAY}${ipfsHash}`;

    const { request } = await simulateProfileUpdateProfile(config, {
      address: Config.profileAddress,
      args: [uri],
    });
    updateProfile(request);
  };

  const isLoading = useMemo(
    () => isUpdateProfilePending || isUpdatingData,
    [isUpdateProfilePending, isUpdatingData],
  );

  useEffect(() => {
    if (getProfileDataError) {
      toast({
        title: 'Error fetching profile data',
        description: getProfileDataError?.message,
        variant: 'error',
      });
    }
  }, [getProfileDataError, toast]);

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
        headerText="EDIT"
        buttonText="Save"
        isLoading={isLoading}
        loadingText="Updating Profile..."
        isContract={isContract}
      />
    </FormProvider>
  );
}
