import { cn } from '@/utils';
import React from 'react';
import { ChangeEvent, SyntheticEvent } from 'react';

interface UiFileUploaderProps {
  uploadFunction: (
    e: SyntheticEvent | ChangeEvent<HTMLInputElement>,
  ) => Promise<void>;

  accept?: string;
  multiple?: boolean;
  children?: React.ReactNode;
}

const UiFileUploader = React.forwardRef<HTMLInputElement, UiFileUploaderProps>(
  ({ uploadFunction, accept, children, ...props }, ref) => {
    return (
      <label
        className="relative h-full w-full"
        onDrop={uploadFunction}
        onDragOver={(e) => e.preventDefault()}
      >
        <div>{children}</div>
        <input
          type="file"
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          onChange={uploadFunction}
          accept={cn(
            '.jpg, .jpeg, image/jpeg, .png, image/png .mp3 .wav',
            accept,
          )}
          multiple
          ref={ref}
          {...props}
        />
      </label>
    );
  },
);

UiFileUploader.displayName = 'FileUploader';
export { UiFileUploader };
