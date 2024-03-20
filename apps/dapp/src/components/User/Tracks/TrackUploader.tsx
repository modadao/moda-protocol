import { useToastError } from '@/hooks/useToastError';
import { useUploadFile } from '@/hooks/useUploadFile';
import { UploadIcon } from '@/ui/Icons/UploadIcon';
import { UiFileUploader } from '@/ui/UiFileUploader';
import { UiSpinner } from '@/ui/UiSpinner';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface TrackUploaderProps {
  errorMessage: string | undefined;
}

export default function TrackUploader({ errorMessage }: TrackUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState('');

  const { setValue } = useFormContext();

  const { uploadFile, uploadFileError } = useUploadFile();
  useToastError(uploadFileError, 'Error uploading file');

  const uploadTrack = async (
    e: SyntheticEvent | ChangeEvent<HTMLInputElement>,
  ) => {
    setIsUploading(true);

    const trackData = await uploadFile(e);
    if (trackData) {
      const uri = trackData.uri;
      const name = trackData.fileName;
      setValue('trackUri', uri);
      setFileName(name);
    }

    setIsUploading(false);
  };

  return (
    <UiFileUploader uploadFunction={uploadTrack}>
      <div className="flex flex-col items-center justify-center w-[350px] h-16 p-2 rounded-md bg-white border border-black">
        <div className="h-full w-full flex flex-row justify-between items-center  bg-black rounded-md">
          <div className="flex flex-row justify-center items-center gap-2 font-semibold text-white italic">
            {errorMessage ? (
              <h3 className="font-bold ml-6 italic">{errorMessage}</h3>
            ) : (
              <h3 className="font-bold ml-6 max-w-40 truncate">
                {fileName ? fileName : 'Upload Track...'}
              </h3>
            )}
          </div>
          <div className="text-white p-2">
            {isUploading ? (
              <UiSpinner />
            ) : (
              <div>
                <UploadIcon className="h-5 w-5" />
              </div>
            )}
          </div>
        </div>
      </div>
    </UiFileUploader>
  );
}
