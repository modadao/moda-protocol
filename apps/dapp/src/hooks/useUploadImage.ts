import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, SyntheticEvent } from 'react';

const upload = async (e: SyntheticEvent | ChangeEvent<HTMLInputElement>) => {
  let file: File | null = null;
  if (e.nativeEvent instanceof DragEvent) {
    e.preventDefault();
    file = e.nativeEvent.dataTransfer?.files?.[0] || null;
  } else if (e.target instanceof HTMLInputElement) {
    file = e.target.files?.[0] || null;
  }

  if (file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);

    const response = await fetch('/api/storage', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Network response was not ok.');

    const result = await response.json();

    return { ipfsHash: result.IpfsHash, fileName: file.name };
  }
};

export const useUploadImage = () => {
  const { mutateAsync: uploadImage, error: uploadImageError } = useMutation({
    mutationFn: upload,
  });

  return { uploadImage, uploadImageError };
};