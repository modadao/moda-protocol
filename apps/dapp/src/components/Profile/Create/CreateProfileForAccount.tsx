'use client';

import { useToast } from '@/hooks/useToast';
import { ProfileMetadataSchema } from '@/types';
import { IPFS_GATEWAY } from '@/utils/constants';
import { defaultProfileMetadata } from '@/utils/defaultProfileMetadata';
import { uploadProfileData } from '@/utils/profileHelpers';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import {
  ProfileAddresses,
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
    address: ProfileAddresses.mumbai,
    onLogs() {
      setIsCreatingProfile(false);
    },
  });

  const createProfile = async () => {
    setIsCreatingProfile(true);
    const hash = await uploadProfileData(profileData);
    const uri = `${IPFS_GATEWAY}${hash}`;

    const profileMintResult = await simulateProfileMint(config, {
      address: ProfileAddresses.mumbai,
      args: [uri],
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
