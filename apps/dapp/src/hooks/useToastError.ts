import { useEffect } from 'react';
import { useToast } from './useToast';

export const useToastError = (error: Error | null, title?: string) => {
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: title || 'Error',
        description: error?.message,
        variant: 'error',
      });
    }
  }, [error, title, toast]);
};
