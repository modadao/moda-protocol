'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export const Dropdown = DropdownMenuPrimitive.Root;
export const DropdownTrigger = DropdownMenuPrimitive.Trigger;

type DropdownContentProps = DropdownMenuPrimitive.DropdownMenuContentProps & {
  children: React.ReactNode;
};

export function DropdownContent({
  children,
  className,
  ...props
}: DropdownContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content className={className} {...props}>
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
}
