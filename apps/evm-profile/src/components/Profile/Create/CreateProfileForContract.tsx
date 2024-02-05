'use client';

import { useToast } from '@/hooks/useToast';
import { ProfileMetadataSchema } from '@/types';
import { IPFS_GATEWAY } from '@/utils/constants';
import { defaultProfileMetadata } from '@/utils/defaultProfileMetadata';
import { uploadProfileData } from '@/utils/profileHelpers';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import {
  simulateProfileMintFor,
  useWatchProfileTransferEvent,
  useWriteProfileMintFor,
} from 'profile';

import { config } from '@/context/WagmiWrapper';
import { useProfileState } from '@/hooks/profile';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ProfileDataForm from '../Ui/ProfileDataForm';

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

  const [isCreatingProfile, setIsCreatingProfile] = useState(false);
  const { profileAddress } = useProfileState();

  const { getValues } = formMethods;
  const profileData = getValues();

  useWatchProfileTransferEvent({
    address: profileAddress,
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
    const hash = await uploadProfileData(profileData);
    const uri = `${IPFS_GATEWAY}${hash}`;
    const { request, error } = await simulateProfileMintFor(config, {
      address: profileAddress,
      args: [profileData?.profile?.address, uri],
    });

    console.log('error', error);

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
      profileData?.profile?.address &&
        router.push(`/profile/${profileData.profile.address}`);
    } else if (isProfileMintForError) {
      toast({
        title: 'Error',
        description: isProfileMintForErrorObject?.message,
        variant: 'error',
      });
      console.log(isProfileMintForErrorObject);
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
    profileData?.profile?.address,
  ]);

  return (
    <FormProvider {...formMethods}>
      <ProfileDataForm
        submitData={createProfile}
        headerText="CREATE PROFILE"
        buttonText="Create Profile"
        isLoading={isProfileMintForPending}
        isContract={isContract}
      />
    </FormProvider>
  );
}
