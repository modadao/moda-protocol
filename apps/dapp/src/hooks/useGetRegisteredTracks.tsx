import { Result } from '@/types';
import { RegisteredTrack } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useAccount } from 'wagmi';

export const useGetRegisteredTracks = (): Result<
  {
    registeredTracks: RegisteredTrack[];
    isFetching: boolean;
    refetch: () => void;
  },
  string | undefined
> => {
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

  if (registeredTracks === undefined) {
    return { ok: false, error: error?.message };
  }
  return { ok: true, value: { registeredTracks, isFetching, refetch } };
};
