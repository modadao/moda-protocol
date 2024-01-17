'use client';

import { config } from '@/components/WagmiWrapper';
import { useGetProfileData } from '@/hooks/useGetProfileData';
import { useToast } from '@/hooks/useToast';
import { ProfileMetadataSchema } from '@/types';
import { IPFS_GATEWAY } from '@/utils/constants';
import { uploadProfileData } from '@/utils/profileHelpers';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import {
  ProfileAddresses,
  simulateProfileUpdateProfile,
  useWatchProfileMetadataUpdateEvent,
  useWriteProfileUpdateProfile,
} from 'profile';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import ProfileDataForm from '../Ui/ProfileDataForm';

export default function EditProfileForAccount() {
  const { address } = useAccount();
  const router = useRouter();
  const { toast } = useToast();

  const { profileData } = useGetProfileData();

  const formMethods = useForm({
    defaultValues: profileData,
    resolver: zodResolver(ProfileMetadataSchema),
  });

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
    address: ProfileAddresses.mumbai,
    onLogs() {
      setIsUpdatingData(false);
    },
  });

  const editProfile = async () => {
    setIsUpdatingData(true);
    const profileData = getValues();
    const hash = await uploadProfileData(profileData);
    const uri = `${IPFS_GATEWAY}${hash}`;
    const { request } = await simulateProfileUpdateProfile(config, {
      address: ProfileAddresses.mumbai,
      args: [uri],
    });

    updateProfile(request);
  };

  const isLoading = useMemo(
    () => isUpdateProfilePending || isUpdatingData,
    [isUpdateProfilePending, isUpdatingData],
  );

  useEffect(() => {
    if (profileData) {
      formMethods.reset(profileData);
    }
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
        headerText="Edit Profile"
        buttonText="Save"
        isLoading={isLoading}
        loadingText="Updating Profile..."
      />
    </FormProvider>
  );
}
