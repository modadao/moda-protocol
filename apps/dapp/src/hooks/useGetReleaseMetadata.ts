import { ReleaseMetadata } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useGetReleaseMetadata = (
  releaseUri: string,
): {
  releaseMetadata: ReleaseMetadata;
  isLoading: boolean;
  error: Error | null;
} => {
  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || '';
  const {
    data: releaseMetadata,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['releaseMetadata', releaseUri],
    queryFn: async () => {
      const response = await fetch(`${storageUrl}${releaseUri}`);
      if (!response.ok) throw new Error('Error fetching release metadata');
      return response.json();
    },
    enabled: !!releaseUri,
  });

  return { releaseMetadata, isLoading, error };
};
