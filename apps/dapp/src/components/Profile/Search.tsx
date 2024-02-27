'use client';

import { UiButton } from '@/ui/UiButton';
import { useRouter } from 'next/navigation';
import { ProfileAddresses, useReadProfileBalanceOf } from 'profile';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { polygonMumbai } from 'viem/chains';
import { UiSearchInput } from '../../ui/UiSearchInput';

interface SearchData {
  searchedAddress: '' | undefined;
}

const defaultSearchData: SearchData = {
  searchedAddress: '',
};

export default function Search() {
  const router = useRouter();
  const formMethods = useForm({
    defaultValues: defaultSearchData,
  });

  const { handleSubmit, register, watch } = formMethods;

  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [isUserFound, setIsUserFound] = useState(false);
  const [isUserNotFound, setIsUserNotFound] = useState(false);

  const searchedAddress = watch('searchedAddress');

  const { data: userBalance, isFetched } = useReadProfileBalanceOf({
    address: ProfileAddresses[polygonMumbai.id],
    args: [searchedAddress],
  });

  const visitProfile = () => {
    router.push(`/profile/${searchedAddress}`);
  };

  useEffect(() => {
    if (isFetched && isSearchLoading) {
      if (Number(userBalance) === 1) {
        setIsUserFound(true);
      } else if (Number(userBalance) === 0) {
        setIsUserNotFound(true);
      }
      setIsSearchLoading(false);
    }
  }, [isFetched, isSearchLoading, userBalance]);

  useEffect(() => {
    if (searchedAddress === undefined || searchedAddress === '') {
      setIsUserFound(false);
      setIsUserNotFound(false);
    }
  }, [searchedAddress]);

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(() => setIsSearchLoading(true))}
        className="flex flex-col items-center mt-12"
      >
        <div className="flex flex-row items-center gap-3">
          <UiSearchInput {...register('searchedAddress')} />
          <UiButton className="h-10">Search</UiButton>
        </div>

        <div className="mt-4 font-bold italic text-2xl">
          {isUserFound ? (
            <div className=" flex flex-col items-center">
              <h3>Profile Found</h3>
              <UiButton
                className="border-none hover:underline text-black hover:bg-white hover:text-black italic text-lg"
                type="button"
                onClick={() => visitProfile()}
              >
                Visit
              </UiButton>
            </div>
          ) : isUserNotFound ? (
            <h3 className="mt-2 font-bold italic text-xl">User Not Found</h3>
          ) : (
            <h3 className="mt-2 font-bold italic text-xl">
              Find a Profile by Address
            </h3>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
