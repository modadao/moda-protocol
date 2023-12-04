import { PublicClient, WalletClient } from 'viem';

export interface Config {
  publicClient?: PublicClient;
  walletClient?: WalletClient;
}

export enum ConfigError {
  PublicClientUndefined = 'Public client is undefined',
  WalletClientUndefined = 'Wallet client is undefined',
}

export enum AddressError {
  ProfileAddressInvalid = 'Profile address is invalid',
  ContractAddressInvalid = 'Contract address is invalid',
  UserAddressInvalid = 'User address is invalid',
}

export enum TransactionError {
  TransactionHashUndefined = 'Transaction hash is undefined',
}
