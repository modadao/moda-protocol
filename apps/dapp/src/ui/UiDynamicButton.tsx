'use client';

import { button as dynamicButtonVariants } from '@/ui/UiButton';
import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof dynamicButtonVariants> {
  asChild?: boolean;
}

const DynamicButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, intent, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(dynamicButtonVariants({ size, className, intent }))}
        ref={ref}
        {...props}
      />
    );
  },
);

DynamicButton.displayName = 'Button';

export { DynamicButton, dynamicButtonVariants };
