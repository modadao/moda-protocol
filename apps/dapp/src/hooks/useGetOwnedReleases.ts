import { ReleaseData } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useAccount } from 'wagmi';

export const useGetOwnedReleases = (): {
  releases: ReleaseData[];
  isFetching: boolean;
  error: Error | null;
  refetch: () => void;
} => {
  const { address } = useAccount();

  const {
    data: releases,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ['ownedReleases'],
    queryFn: async () => {
      const response = await fetch(`/api/owned-releases/${address}`);
      if (!response.ok) throw new Error('Error fetching releases');
      return response.json();
    },
    enabled: !!address,
  });

  return { releases, isFetching, error, refetch };
};
