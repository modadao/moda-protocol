'use client';
import * as W3 from '@web3-storage/w3up-client';
import { PropsWithChildren, createContext, useState } from 'react';

export interface Web3StorageState {
  client: W3.Client | undefined;
  setClient: (c: W3.Client | undefined) => void;
}

export const DEFAULT_WEB3_STORAGE_PROPS = {
  client: undefined,
  setClient: () => null,
};

export const Web3StorageContext = createContext<Web3StorageState>({
  ...DEFAULT_WEB3_STORAGE_PROPS,
});

export const Web3StorageProvider: React.FC<
  PropsWithChildren<Web3StorageState>
> = ({ children }) => {
  const [client, setClient] = useState<W3.Client>();

  return (
    <Web3StorageContext.Provider value={{ client, setClient }}>
      {children}
    </Web3StorageContext.Provider>
  );
};
