import { ProfileContext, ProfileState } from '@/context/ProfileContext';
import { useContext } from 'react';

export const useProfileState: () => ProfileState = () =>
  useContext(ProfileContext);
