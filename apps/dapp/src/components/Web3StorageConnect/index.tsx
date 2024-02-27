import { Web3StorageAuthSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Web3StorageAuthForm } from './Web3StorageAuthForm';

export const Web3StorageConnect: React.FC = () => {
  const formMethods = useForm({
    defaultValues: { email: '' },
    resolver: zodResolver(Web3StorageAuthSchema),
  });

  return (
    <FormProvider {...formMethods}>
      <Web3StorageAuthForm />
    </FormProvider>
  );
};
