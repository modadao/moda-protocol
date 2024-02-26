import useFormattedTime from '@/hooks/useFormattedTime';
import { clx } from '@/utils/clx';

interface DurationProps {
  className?: string;
  seconds: number;
}

export const Duration = ({ className, seconds }: DurationProps) => {
  const formattedTime = useFormattedTime();
  return (
    <time dateTime={`P${Math.round(seconds)}S`} className={clx(className)}>
      {formattedTime(seconds)}
    </time>
  );
};
