import { clx } from '@/utils/clx';
import * as Slider from '@radix-ui/react-slider';

interface UiSliderProps {
  value?: number;
  max?: number;
  onValueChange?: (value: number[]) => void;
  onValueCommit?: (value: number[]) => void;
  thumbLabel?: string;
  rounded?: boolean;
  isSeeking?: boolean;
  theme?: 'light' | 'dark' | 'transparent-dark';
  size?: 'sm' | 'md' | 'lg';
}

export const UiSlider = ({
  value,
  max = 100,
  onValueChange,
  onValueCommit,
  thumbLabel,
  theme = 'dark',
  size = 'md',
  rounded = true,
}: UiSliderProps) => (
  <div
    className={clx('block w-full group', {
      'border border-black': theme === 'dark',
      'border border-transparent': theme === ('light' || 'transparent-dark'),
      'h-3': size === 'lg',
      'h-2': size === 'md',
      'h-1.5': size === 'sm',
      'rounded-sm': rounded,
    })}
  >
    <Slider.Root
      onValueCommit={onValueCommit}
      onValueChange={onValueChange}
      className="relative flex items-center select-none touch-none w-full h-full bg-white"
      min={0}
      max={max}
      value={[value ?? 0]}
      step={max / 100}
    >
      <Slider.Track
        className={clx('relative grow h-full', {
          'bg-white': theme === 'light',
        })}
      >
        <Slider.Range
          className={clx('absolute h-full', {
            'bg-black group-hover:bg-zinc-700': theme === 'dark',
            'bg-black group-hover:bg-zinc-800': theme === 'transparent-dark',
            'bg-zinc-400 group-hover:bg-zinc-300': theme === 'light',
          })}
        />
      </Slider.Track>

      {thumbLabel && (
        <Slider.Thumb
          className={clx('hidden group-hover:block focus:outline-none', {
            'w-2 h-2': size === 'sm',
            'w-4 h-4': size === 'md',
            'bg-black rounded-sm': theme === 'dark',
            'bg-zinc-200': theme === 'light',
          })}
          aria-label={thumbLabel}
        />
      )}
    </Slider.Root>
  </div>
);
