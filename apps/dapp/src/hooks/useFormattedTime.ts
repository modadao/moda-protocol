import { formatDuration, intervalToDuration } from 'date-fns';
import { useCallback } from 'react';

const useFormattedTime = () => {
  const zeroPad = useCallback(
    (num: number) => String(num).padStart(2, '0'),
    [],
  );

  // date-fns locale workaround - https://stackoverflow.com/a/65711327
  const formatted = useCallback(
    (seconds: number) =>
      formatDuration(intervalToDuration({ start: 0, end: seconds * 1000 }), {
        format: ['minutes', 'seconds'],
        zero: true,
        delimiter: ':',
        locale: { formatDistance: (_token, count: number) => zeroPad(count) },
      }),
    [zeroPad],
  );

  return formatted;
};

export default useFormattedTime;
