'use client';

import { Config } from '@/config';
import { EVMAddressSchema } from '@/types';
import { UiButton } from '@/ui/UiButton';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useReadProfileBalanceOf } from 'profile';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { UiSearchInput } from '../../../../ui/UiSearchInput';

interface SearchData {
  searchedAddress: '' | undefined;
}

const SearchDataSchema = z.object({
  searchedAddress: EVMAddressSchema.or(z.literal('')),
});

const defaultSearchData: SearchData = {
  searchedAddress: '',
};

export default function Search() {
  const formMethods = useForm({
    defaultValues: defaultSearchData,
    resolver: zodResolver(SearchDataSchema),
    mode: 'onChange',
  });

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    clearErrors,
  } = formMethods;

  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [isUserFound, setIsUserFound] = useState(false);
  const [isUserNotFound, setIsUserNotFound] = useState(false);

  const searchedAddress = watch('searchedAddress');

  const { data: userBalance, isFetched } = useReadProfileBalanceOf({
    address: Config.profileAddress,
    args: [searchedAddress],
    enabled: !!searchedAddress,
  });

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
    if (searchedAddress === '') {
      clearErrors();
      setIsUserFound(false);
      setIsUserNotFound(false);
    }
  }, [searchedAddress, clearErrors]);

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(() => setIsSearchLoading(true))}
        className="flex flex-col items-center justify-start mt-16"
      >
        <div className="flex flex-row items-center gap-3">
          <UiSearchInput {...register('searchedAddress')} />
          <UiButton className="h-10" type="submit">
            Search
          </UiButton>
        </div>

        {!errors.searchedAddress ? (
          <div className="mt-4 font-bold italic text-xl">
            {isUserFound ? (
              <div className=" flex flex-col items-center">
                <h3>Profile Found</h3>
                <Link
                  className="text-lg hover:underline cursor-pointer mt-2"
                  href={`/profile/${searchedAddress}`}
                >
                  Visit
                </Link>
              </div>
            ) : isUserNotFound ? (
              <h3 className="mt-2 font-bold italic text-xl">User Not Found</h3>
            ) : (
              <h3 className="mt-2 font-bold italic text-xl">
                Find a Profile by Address
              </h3>
            )}
          </div>
        ) : (
          <div className="mt-4 font-bold italic text-xl">
            <h3>{errors?.searchedAddress?.message}</h3>
          </div>
        )}
      </form>
    </FormProvider>
  );
}
