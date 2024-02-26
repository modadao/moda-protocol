import { Result } from '@/types';

import { useQuery } from '@tanstack/react-query';
import { useAccount } from 'wagmi';

export const useGetProfileContracts = (): Result<
  { contracts: string[]; isLoading: boolean },
  string | undefined
> => {
  const { address } = useAccount();

  const {
    data: contracts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['profileContracts'],
    queryFn: async () => {
      const response = await fetch(`/api/contract-profiles/${address}`);
      if (!response.ok) throw new Error('Error fetching profile contracts');
      return response.json();
    },
    enabled: !!address,
  });

  if (contracts === undefined) {
    return { ok: false, error: error?.message };
  }
  return { ok: true, value: { contracts, isLoading } };
};
