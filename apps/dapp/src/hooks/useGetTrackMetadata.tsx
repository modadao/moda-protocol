import { TrackMetadata } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useGetTrackMetadata = (
  trackUri: string,
): {
  trackMetadata: TrackMetadata;
  isLoading: boolean;
  error: Error | null;
} => {
  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || '';
  const {
    data: trackMetadata,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['trackMetadata', trackUri],
    queryFn: async () => {
      const response = await fetch(`${storageUrl}${trackUri}`);
      if (!response.ok) throw new Error('Error fetching track metadata');
      return response.json();
    },
    enabled: !!trackUri,
  });

  return { trackMetadata, isLoading, error };
};
