'use client';

import { ChevronDownIcon } from '@/ui/Icons';
import { CheckIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import { forwardRef } from 'react';

interface UiSelectProps {
  label: string;
  placeholder?: string;
  options?: string[];
  onValueChange?: (value: string) => void;
}

export const UiSelect = ({
  label,
  options,
  onValueChange,
  placeholder = 'Please select an option.',
}: UiSelectProps) => {
  return (
    <Select.Root onValueChange={(value: string) => onValueChange?.(value)}>
      <Select.Trigger
        className="w-full inline-flex items-center justify-between rounded text-base border border-[#404040] px-[15px] text-[13px] leading-none h-[48px] gap-[5px] bg-white text-black shadow-[0_2px_10px] shadow-black/10 hover:bg-gray-100 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-black data-[placeholder]:text-base data-[placeholder]:font-bold outline-none"
        aria-label={label}
      >
        <Select.Value placeholder={placeholder} className="text-black" />
        <Select.Icon className="text-black">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-black cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              {options?.map((option, index) => {
                return (
                  <SelectItem key={option + index} value={option}>
                    {option}
                  </SelectItem>
                );
              })}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-black cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

interface SelectProps {
  value: string;
  key?: string | number;
  children: React.ReactNode;
}

const SelectItem = forwardRef<HTMLDivElement, SelectProps>(
  (props: SelectProps, forwardedRef) => {
    const { children } = props;
    return (
      <Select.Item
        className="text-base leading-none text-black rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-300"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

SelectItem.displayName = 'SelectItem';
