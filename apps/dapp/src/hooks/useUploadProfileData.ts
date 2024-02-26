import { ProfileMetadata } from '@/types';
import { useMutation } from '@tanstack/react-query';

const upload = async (json: ProfileMetadata) => {
  const response = await fetch('/api/storage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(json),
  });

  if (!response.ok) throw new Error('Network response was not ok.');

  const result = await response.json();

  return result.IpfsHash;
};

export const useUploadProfileData = () => {
  const { mutateAsync: uploadProfileData, error: uploadProfileDataError } =
    useMutation({
      mutationFn: upload,
    });

  return { uploadProfileData, uploadProfileDataError };
};
