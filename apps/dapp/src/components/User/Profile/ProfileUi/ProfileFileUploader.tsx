import { UploadIcon } from '@/ui/Icons/UploadIcon';
import { UiFileUploader } from '@/ui/UiFileUploader';
import { UiSpinner } from '@/ui/UiSpinner';
import { ChangeEvent, SyntheticEvent } from 'react';

interface ProfileFileUploaderProps {
  uploadFunction: (
    e: SyntheticEvent | ChangeEvent<HTMLInputElement>,
  ) => Promise<void>;
  isUploading?: boolean;
  errorMessage?: string;
  fileName?: string;
  innerText?: string;
}

export default function ProfileFileUploader({
  uploadFunction,
  isUploading,
  errorMessage,
  fileName,
  innerText,
}: ProfileFileUploaderProps) {
  return (
    <UiFileUploader uploadFunction={uploadFunction}>
      <div className="flex flex-row h-10 w-60 bg-white rounded-md border border-black justify-between items-center">
        {errorMessage ? (
          <h3 className="font-bold ml-6 text-black italic">{errorMessage}</h3>
        ) : (
          <h3 className="font-bold ml-6 max-w-40 truncate">
            {fileName ? fileName : innerText}
          </h3>
        )}
        <div className="flex flex-col cursor-pointer items-center justify-center h-10 w-10 border-l border-black rounded-md">
          {isUploading ? (
            <UiSpinner />
          ) : (
            <div>
              <UploadIcon className="h-5 w-5" />
            </div>
          )}
        </div>
      </div>
    </UiFileUploader>
  );
}
