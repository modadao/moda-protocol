'use client';

import { useToast } from '@/hooks/useToast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/ui/UiToast';
import { AlertIcon, SuccessIcon } from './Icons';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, ...props }) {
        const { variant } = props;
        // TODO: Implement remaining icons
        const icon =
          variant === 'error' ? (
            <AlertIcon className="text-red-500" />
          ) : variant === 'success' ? (
            <SuccessIcon className="text-black" />
          ) : null;

        return (
          <Toast key={id} {...props}>
            <div className="grid w-full">
              {title && (
                <ToastTitle variant={variant}>
                  <div className="flex items-center gap-2">
                    {icon && icon}
                    {title}
                  </div>
                  <ToastClose />
                </ToastTitle>
              )}
              {description && (
                <ToastDescription variant={variant}>
                  {description}
                </ToastDescription>
              )}
            </div>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
