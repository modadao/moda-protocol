import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, errorMessage, className, ...props }, ref) => {
    return (
      <div className="flex flex-col items-left">
        {errorMessage ? (
          <label className="font-bold text-black italic">{errorMessage}</label>
        ) : (
          <label className="font-bold">{label}</label>
        )}
        <textarea
          className={cn(
            'flex min-h-[80px] w-60 rounded-md border border-black px-2 py-2 placeholder-gray-900',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
