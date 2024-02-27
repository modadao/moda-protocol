import { Web3StorageAuth } from '@/types';
import { UiButton } from '@/ui/UiButton';
import { UiInput } from '@/ui/UiInput';
import { UiSpinner } from '@/ui/UiSpinner';
import { useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const Web3StorageAuthForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<Web3StorageAuth>();

  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback((d: Web3StorageAuth) => {
    setIsLoading(true);
    console.log('Log in with Web3.Storage for...', d.email);
  }, []);

  return (
    <form
      onSubmit={() => handleSubmit(login)}
      className="flex flex-col items-center justify-center gap-6"
    >
      <h1 className="text-4xl font-extrabold mt-12 italic">
        Connect to Web3.Storage
      </h1>
      <p className="my-6 max-w-xl mx-auto">
        All metadata is stored using your own Web3.Storage account as a gateway
        to IPFS. You can create a free account at{' '}
        <a className="underline" href="https://console.web3.storage/">
          Web3.Storage
        </a>
        .
      </p>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <UiInput
            {...register('email')}
            label="Email"
            errorMessage={errors.email?.message}
          />
          <UiButton className="w-52 h-12 rounded-lg text-lg mt-6" type="submit">
            {isLoading ? <UiSpinner /> : 'Send Verification Email'}
          </UiButton>

          {isLoading && (
            <h3 className="text-xl font-bold italic">
              Sending email verification...
            </h3>
          )}
        </div>
      </div>
    </form>
  );
};
