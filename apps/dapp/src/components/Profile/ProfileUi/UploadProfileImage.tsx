import { toast } from '@/hooks/useToast';
import { ProfileMetadata } from '@/types';
import { IPFS_GATEWAY } from '@/utils/constants';
import { uploadProfileImage } from '@/utils/profileHelpers';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import UiFileUploader from '../../../ui/UiFileUploader';

interface UploadProfileImageProps {
  value: 'image' | 'profile.banner';
  innerText: string | undefined;
  errorMessage?: string;
}

export default function UploadProfileImage({
  value,
  innerText,
  errorMessage,
}: UploadProfileImageProps) {
  const { setValue, trigger } = useFormContext<ProfileMetadata>();
  const [fileName, setFileName] = useState('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const uploadImage = async (
    e: SyntheticEvent | ChangeEvent<HTMLInputElement>,
  ) => {
    setIsUploadingImage(true);
    const result = await uploadProfileImage(e);
    if (typeof result !== 'string' && result?.hash && result?.fileName) {
      const { hash, fileName } = result;
      setValue(value, `${IPFS_GATEWAY}${hash}`);
      toast({
        title: 'Success',
        description: 'Image uploaded successfully',
        variant: 'success',
      });
      setFileName(fileName);
    } else if (typeof result === 'string') {
      toast({
        title: 'Error',
        description: result,
        variant: 'error',
      });
      setFileName('No File Selected');
    }

    setIsUploadingImage(false);
    trigger(value);
  };
  return (
    <div className="mt-1">
      <UiFileUploader
        innerText={innerText}
        uploadFunction={uploadImage}
        loadingState={isUploadingImage}
        fileName={fileName}
        errorMessage={errorMessage}
      />
    </div>
  );
}
