import {
  Web3StorageContext,
  Web3StorageState,
} from '@/context/Web3StorageProvider';
import { useContext } from 'react';

export const useWeb3Storage = () =>
  useContext<Web3StorageState>(Web3StorageContext);
