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
  simulateProfileUpdateProfileFor,
  useWatchProfileMetadataUpdateEvent,
  useWriteProfileUpdateProfileFor,
} from 'profile';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { polygonMumbai } from 'viem/chains';
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

  const { profileData } = useGetProfileData(contractAddress);

  const formMethods = useForm({
    defaultValues: profileData,
    resolver: zodResolver(ProfileMetadataSchema),
  });

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
    address: ProfileAddresses[polygonMumbai.id],
    onLogs() {
      setIsUpdatingData(false);
    },
  });

  const editProfile = async () => {
    setIsUpdatingData(true);
    const profileData = getValues();
    const hash = await uploadProfileData(profileData);
    const uri = `${IPFS_GATEWAY}${hash}`;
    const { request } = await simulateProfileUpdateProfileFor(config, {
      address: ProfileAddresses[polygonMumbai.id],
      args: [contractAddress, uri],
    });
    updateProfileFor(request);
  };

  const isLoading = useMemo(
    () => isUpdateProfileForPending || isUpdatingData,
    [isUpdateProfileForPending, isUpdatingData],
  );

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
