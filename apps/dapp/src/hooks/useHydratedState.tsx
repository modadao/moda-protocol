import { useEffect, useState } from 'react';

export function useHydratedState(initialState = false) {
  const [isHydrated, setIsHydrated] = useState(initialState);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
}
