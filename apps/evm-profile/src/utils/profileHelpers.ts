import { ProfileMetadata } from '@/types';
import { ChangeEvent, SyntheticEvent } from 'react';
import { uploadJSON } from './IPFS';
import { uploadFile } from './IPFS';

export const uploadProfileData = async (data: ProfileMetadata) => {
  const result = await uploadJSON(data);
  if (!result.ok) {
    return result.error;
  } else {
    return result.value.IpfsHash;
  }
};

export const uploadProfileImage = async (
  e: SyntheticEvent | ChangeEvent<HTMLInputElement>,
) => {
  let file: File | null = null;
  if (e.nativeEvent instanceof DragEvent) {
    e.preventDefault();
    file = e.nativeEvent.dataTransfer?.files?.[0] || null;
  } else if (e.target instanceof HTMLInputElement) {
    file = e.target.files?.[0] || null;
  }

  if (file) {
    const result = await uploadFile(file, file.name);
    if (!result.ok) {
      return result.error;
    } else {
      return { hash: result.value.IpfsHash, fileName: file.name };
    }
  }
};
