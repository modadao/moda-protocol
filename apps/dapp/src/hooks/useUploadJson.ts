import { ProfileMetadata, ReleaseMetadata, TrackMetadata } from '@/types';
import { useMutation } from '@tanstack/react-query';

const upload = async (
  json: ProfileMetadata | TrackMetadata | ReleaseMetadata,
) => {
  const response = await fetch('/api/storage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(json),
  });

  if (!response.ok) throw new Error(response.statusText);

  const result = await response.json();

  return result.uri;
};

export const useUploadJson = () => {
  const { mutateAsync: uploadJson, error: uploadJsonError } = useMutation({
    mutationFn: upload,
  });

  return { uploadJson, uploadJsonError };
};
