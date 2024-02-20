'use client';

import { toast } from '@/hooks/useToast';
import { ShareIcon } from '@/ui/Icons';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { CheckIcon } from '@radix-ui/react-icons';
import type { VariantProps } from 'class-variance-authority';
import { useCallback, useState } from 'react';
import type { button } from './UiButton';
import { UiButton } from './UiButton';

export interface ShareButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const UiShareButton = ({
  className,
  intent,
  size,
  colorOverride,
}: ShareButtonProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      const shareUrl = window.location.href;

      try {
        await navigator.clipboard.writeText(shareUrl);
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 1800);
      } catch (error) {
        const message = getErrorMessage(error);
        console.log('Error copying to clipboard: ', message);
        toast({
          variant: 'error',
          title: 'Copy Error',
          description: message,
        });
        throw new Error(message);
      }
    },
    [],
  );

  return (
    <UiButton
      className={className}
      intent={intent}
      size={size}
      disabled={isClicked}
      suffixIcon={isClicked ? <CheckIcon width={11} /> : <ShareIcon />}
      colorOverride={colorOverride}
      onClick={(event) => handleClick(event)}
    >
      {!isClicked ? 'Share' : 'Copied'}
    </UiButton>
  );
};
