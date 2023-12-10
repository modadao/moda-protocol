import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useNavigateHome = (condition: boolean) => {
  const router = useRouter();
  useEffect(() => {
    if (condition && router.isReady) {
      router.push('/');
    }
  }, [condition, router, router.isReady]);

  return useNavigateHome;
};
