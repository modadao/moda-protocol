import { useToastError } from '@/hooks/useToastError';
import { useUploadFile } from '@/hooks/useUploadFile';
import { UploadIcon } from '@/ui/Icons/UploadIcon';
import { UiFileUploader } from '@/ui/UiFileUploader';
import { UiSpinner } from '@/ui/UiSpinner';
import Image from 'next/image';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface ArtworkUploaderProps {
  value: string;
  imageUri: string;
  errorMessage: string | undefined;
}

export default function ArtworkUploader({
  value,
  imageUri,
  errorMessage,
}: ArtworkUploaderProps) {
  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || '';

  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState('');

  const { setValue } = useFormContext();

  const { uploadFile, uploadFileError } = useUploadFile();
  useToastError(uploadFileError, 'Error uploading artwork');

  const uploadArtwork = async (
    e: SyntheticEvent | ChangeEvent<HTMLInputElement>,
  ) => {
    setIsUploading(true);

    const artworkData = await uploadFile(e);
    if (artworkData) {
      const uri = artworkData.uri;
      const name = artworkData.fileName;
      setValue(value, uri);
      setFileName(name);
    }

    setIsUploading(false);
  };

  return (
    <UiFileUploader uploadFunction={uploadArtwork}>
      {imageUri ? (
        <div className="border border-black h-[350px] w-[350px]">
          <Image src={`${storageUrl}${imageUri}`} alt="" fill={true} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center border border-dotted border-black w-[350px] h-[350px] bg-white rounded-md gap-4">
          <div className="flex flex-col justify-center items-center gap-2 font-bold text-black italic">
            <h3 className="text-2xl">Upload Artwork</h3>
            <h3 className="text-xl">Drag and Drop or choose .jpg or .png </h3>
            {errorMessage ? (
              <h3 className="font-bold ml-6 italic">{errorMessage}</h3>
            ) : (
              <h3 className="font-bold ml-6 max-w-40 truncate">{fileName}</h3>
            )}
          </div>
          <div className="text-black p-2">
            {isUploading ? (
              <UiSpinner />
            ) : (
              <div>
                <UploadIcon className="h-7 w-7" />
              </div>
            )}
          </div>
        </div>
      )}
    </UiFileUploader>
  );
}
