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

import { Config } from '@/config';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { config } from '../../WagmiWrapper';
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
    const hash = await uploadProfileData(profileData);
    const uri = `${IPFS_GATEWAY}${hash}`;
    const { request } = await simulateProfileMintFor(config, {
      address: Config,
      args: [profileData.profile.address, uri],
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
        headerText="CREATE"
        buttonText="Create Profile"
        isLoading={isProfileMintForPending}
        isContract={isContract}
      />
    </FormProvider>
  );
}
