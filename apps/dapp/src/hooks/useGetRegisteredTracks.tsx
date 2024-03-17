import { RegisteredTrack } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useAccount } from 'wagmi';

export const useGetRegisteredTracks = (): {
  registeredTracks: RegisteredTrack[];
  isFetching: boolean;
  error: Error | null;
  refetch: () => void;
} => {
  const { address } = useAccount();

  const {
    data: registeredTracks,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ['registeredTracks'],
    queryFn: async () => {
      const response = await fetch(`/api/registered-tracks/${address}`);
      if (!response.ok) throw new Error('Error fetching registered tracks');
      return response.json();
    },
    enabled: !!address,
  });

  return { registeredTracks, isFetching, error, refetch };
};
