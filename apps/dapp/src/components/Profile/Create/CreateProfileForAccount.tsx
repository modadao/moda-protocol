'use client';

import { Config } from '@/config';
import { useToast } from '@/hooks/useToast';
import { useUploadProfileData } from '@/hooks/useUploadProfileData';
import { ProfileMetadataSchema } from '@/types';
import { defaultProfileMetadata } from '@/utils/defaultProfileMetadata';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import {
  simulateProfileMint,
  useWatchProfileTransferEvent,
  useWriteProfileMint,
} from 'profile';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import { config } from '../../WagmiWrapper';
import ProfileDataForm from '../ProfileUi/ProfileDataForm';

interface CreateProfileForAccountProps {
  isContract: boolean;
}

export default function CreateProfileForAccount({
  isContract,
}: CreateProfileForAccountProps) {
  const router = useRouter();
  const { address } = useAccount();
  const { toast } = useToast();
  const formMethods = useForm({
    defaultValues: defaultProfileMetadata,
    resolver: zodResolver(ProfileMetadataSchema),
  });

  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || '';

  const { uploadProfileData, uploadProfileDataError } = useUploadProfileData();

  const [isCreatingProfile, setIsCreatingProfile] = useState(false);

  const { getValues } = formMethods;
  const profileData = getValues();

  const {
    writeContract: profileMint,
    isSuccess: isProfileMintSuccess,
    isPending: isProfileMintPending,
    error: isProfileMintErrorObject,
    isError: isProfileMintError,
    reset: resetProfileMint,
  } = useWriteProfileMint();

  useWatchProfileTransferEvent({
    address: Config.profileAddress,
    onLogs() {
      setIsCreatingProfile(false);
    },
  });

  const createProfile = async () => {
    setIsCreatingProfile(true);
    const uri = await uploadProfileData(profileData);

    if (uploadProfileDataError) {
      toast({
        title: 'Error',
        description: uploadProfileDataError.message,
        variant: 'error',
      });
      setIsCreatingProfile(false);
      return;
    }

    const url = `${storageUrl}${uri}`;

    const profileMintResult = await simulateProfileMint(config, {
      address: Config.profileAddress,
      args: [url],
    });
    profileMint(profileMintResult.request);
  };

  const isLoading = useMemo(
    () => isProfileMintPending || isCreatingProfile,
    [isProfileMintPending, isCreatingProfile],
  );

  useEffect(() => {
    if (isProfileMintSuccess && !isLoading) {
      toast({
        title: 'Profile Created',
        description: 'Your profile has been created successfully.',
        variant: 'success',
      });
      router.push(`/profile/${address}`);
    } else if (isProfileMintError) {
      toast({
        title: 'Error',
        description: isProfileMintErrorObject?.message,
        variant: 'error',
      });
      resetProfileMint();
    }
  }, [
    isProfileMintSuccess,
    router,
    isLoading,
    isProfileMintError,
    isProfileMintErrorObject,
    resetProfileMint,
    toast,
    address,
  ]);

  return (
    <FormProvider {...formMethods}>
      <ProfileDataForm
        submitData={createProfile}
        headerText="CREATE"
        buttonText="Create Profile"
        isLoading={isProfileMintPending}
        isContract={isContract}
      />
    </FormProvider>
  );
}
