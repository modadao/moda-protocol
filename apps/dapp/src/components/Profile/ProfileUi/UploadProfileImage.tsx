import { toast } from '@/hooks/useToast';
import { useUploadImage } from '@/hooks/useUploadImage';
import { ProfileMetadata } from '@/types';
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

  const { uploadImage, uploadImageError } = useUploadImage();

  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || '';

  const uploadProfileImage = async (
    e: SyntheticEvent | ChangeEvent<HTMLInputElement>,
  ) => {
    setIsUploadingImage(true);
    const imageData = await uploadImage(e);

    if (imageData) {
      const uri = imageData.uri;
      const name = imageData.fileName;
      setValue(value, `${storageUrl}${uri}`);
      toast({
        title: 'Success',
        description: 'Image uploaded successfully',
        variant: 'success',
      });
      setFileName(name);
    } else if (uploadImageError) {
      toast({
        title: 'Error',
        description: uploadImageError.message,
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
        uploadFunction={uploadProfileImage}
        loadingState={isUploadingImage}
        fileName={fileName}
        errorMessage={errorMessage}
      />
    </div>
  );
}
