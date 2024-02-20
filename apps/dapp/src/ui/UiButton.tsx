'use client';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const button = cva(
  'flex items-center justify-center rounded-lg cursor-pointer font-extrabold italic gap-2',
  {
    variants: {
      intent: {
        primary: ['bg-black hover:bg-gray-700', 'text-white'],
        secondary: [
          'bg-white hover:bg-gray-200',
          'text-black',
          'border border-black',
        ],
        transparent: ['bg-transparent border hover:bg-black hover:text-white '],
      },

      size: {
        xsm: ['py-2 px-5 text-xs'],
        sm: ['py-2.5 px-6 text-sm'],
        // Responsive from sm to default on md breakpoint
        smToDefault: ['py-2.5 md:py-3.5 px-6 text-sm md:text-base'],
        default: ['py-3.5 px-6 text-base'],
      },
      colorOverride: {
        white: ['border-white text-white'],
      },
    },
    compoundVariants: [
      { intent: 'primary', size: 'default' },
      { intent: 'secondary', size: 'default' },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

export const UiButton: React.FC<ButtonProps> = ({
  className,
  type,
  intent,
  size,
  colorOverride,
  prefixIcon,
  suffixIcon,
  ...props
}: ButtonProps) => (
  <button
    className={button({ intent, size, colorOverride, className })}
    type={type || 'button'}
    {...props}
  >
    {prefixIcon && prefixIcon}
    {props.children}
    {suffixIcon && suffixIcon}
  </button>
);
