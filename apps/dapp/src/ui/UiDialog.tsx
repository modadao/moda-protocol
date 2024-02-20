'use client';

import { cn } from '@/utils';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
import { CloseIcon } from './Icons';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props} />
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-60 bg-gray-950 bg-opacity-70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        {
          fixed: true,

          // Position
          'left-[50%] top-[25%] translate-x-[-50%] bottom-0': true,
          'md:left-auto md:right-0 md:top-0 md:bottom-0 md:translate-x-0': true,

          // Duration
          'duration-600': true,

          // Fade
          'data-[state=open]:animate-in': true,
          'data-[state=closed]:animate-out': true,
          'data-[state=closed]:fade-out-0': true,
          'data-[state=open]:fade-in-0': true,

          // Direction
          'data-[state=closed]:slide-out-to-bottom-full': true,
          'data-[state=open]:slide-in-from-bottom-full': true,
          'data-[state=closed]:slide-out-to-left-1/2': true,
          'data-[state=open]:slide-in-from-left-1/2': true,

          // Direction MD
          'md:data-[state=closed]:slide-out-to-bottom-0': true,
          'md:data-[state=open]:slide-in-from-bottom-0': true,
          'md:data-[state=closed]:slide-out-to-right-full': true,
          'md:data-[state=open]:slide-in-from-right-full': true,

          // Border
          'rounded-tl-lg rounded-tr-lg shadow-xl': true,
          'md:border-l md:rounded-none': true,
        },

        'z-60 grid w-full max-w-lg gap-4 bg-background p-6 shadow-lg md:w-full',

        className,
      )}
      {...props}
    >
      <div className="overflow-y-auto">{children}</div>
      <DialogPrimitive.Close className="flex absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <div className="text-sm mr-1">Close</div>
        <CloseIcon className="m-auto hover:cursor-pointer" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
