import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, className, type, ...props }, ref) => {
    return (
      <div className="flex flex-col items-left">
        {errorMessage ? (
          <label className="font-bold text-black italic">{errorMessage}</label>
        ) : (
          <label className="font-bold">{label}</label>
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-60 rounded-md border border-black px-2 py-2 placeholder-gray-900',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
