'use client';

import { useToast } from '@/hooks/useToast';
import { useUploadJson } from '@/hooks/useUploadJson';
import { ProfileMetadataSchema } from '@/types';
import { getChainInfo } from '@/utils';
import { defaultProfileMetadata } from '@/utils/defaultProfileMetadata';
import { zodResolver } from '@hookform/resolvers/zod';
import { Addresses } from 'drop-sdk';
import { useRouter } from 'next/navigation';
import {
  simulateProfileMint,
  useWatchProfileTransferEvent,
  useWriteProfileMint,
} from 'profile';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import { config } from '../../../WagmiWrapper';
import ProfileDataForm from '../ProfileUi/ProfileDataForm';

interface CreateProfileForAccountProps {
  isContract: boolean;
}

export default function CreateProfileForAccount({
  isContract,
}: CreateProfileForAccountProps) {
  const { isTestnet } = getChainInfo();

  const profileAddress = isTestnet ? Addresses.Profile.mumbai : '';

  const router = useRouter();
  const { address } = useAccount();
  const { toast } = useToast();
  const formMethods = useForm({
    defaultValues: defaultProfileMetadata,
    resolver: zodResolver(ProfileMetadataSchema),
  });

  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || '';

  const { uploadJson, uploadJsonError } = useUploadJson();

  const [isCreatingProfile, setIsCreatingProfile] = useState(false);

  const { getValues } = formMethods;
  const profileData = getValues();

  const {
    writeContract: profileMint,
    isSuccess: isProfileMintSuccess,
    isPending: isProfileMintPending,
    error: profileMintError,
    isError: isProfileMintError,
    reset: resetProfileMint,
  } = useWriteProfileMint();

  useWatchProfileTransferEvent({
    address: profileAddress,
    onLogs() {
      setIsCreatingProfile(false);
    },
  });

  const createProfile = async () => {
    setIsCreatingProfile(true);
    const uri = await uploadJson(profileData);

    if (uploadJsonError) {
      toast({
        title: 'Error',
        description: uploadJsonError.message,
        variant: 'error',
      });
      setIsCreatingProfile(false);
      return;
    }

    const url = `${storageUrl}${uri}`;

    const profileMintResult = await simulateProfileMint(config, {
      address: profileAddress,
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
        description: profileMintError?.message,
        variant: 'error',
      });
      resetProfileMint();
    }
  }, [
    isProfileMintSuccess,
    router,
    isLoading,
    isProfileMintError,
    profileMintError,
    resetProfileMint,
    toast,
    address,
  ]);

  return (
    <FormProvider {...formMethods}>
      <ProfileDataForm
        submitData={createProfile}
        headerText="CREATE PROFILE"
        subHeaderText="FOR ACCOUNT"
        buttonText="Create Profile"
        isLoading={isProfileMintPending}
        isContract={isContract}
      />
    </FormProvider>
  );
}
