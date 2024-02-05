import { ProfileState } from '@/context/ProfileContext';
import { useProfileState } from './useProfileState';

export const useAccountProfile = (): ProfileState['account'] => {
  const s = useProfileState();
  return s.account;
};
