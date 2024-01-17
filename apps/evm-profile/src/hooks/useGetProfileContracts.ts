import { Result } from '@/types';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

export const useGetProfileContracts = (): Result<
  string[],
  string | undefined
> => {
  const { address } = useAccount();

  const [contracts, setContracts] = useState<string[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchProfileContracts = async () => {
      try {
        const response = await fetch(`/api/contract-profiles/${address}`, {
          method: 'GET',
        });
        const contracts = await response.json();
        setContracts(contracts);
      } catch (_e) {
        setError('Error fetching contracts. Please try again.');
      }
    };
    fetchProfileContracts();
  }, [address]);

  if (contracts === undefined) {
    return { ok: false, error: error };
  }
  return { ok: true, value: contracts };
};
