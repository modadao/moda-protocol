import * as React from 'react';

import { cn } from '@/lib/utils';
import { FaSearch } from 'react-icons/fa';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const UiSearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex items-center h-10 w-96 rounded-lg border border-gray-400 bg-white',
          className,
        )}
      >
        <input
          className="h-8 w-full p-2 rounded-md placeholder-gray-900 focus:outline-none"
          type={type}
          ref={ref}
          {...props}
        />
        <FaSearch className="mr-2" />
      </div>
    );
  },
);
UiSearchInput.displayName = 'SearchInput';

export { UiSearchInput };
