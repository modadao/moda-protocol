import { PublicClient, WalletClient } from 'viem';
import { Config, ConfigError } from '../types';
import { Result } from './types';

interface VerifiedConfig {
  publicClient: PublicClient;
  walletClient: WalletClient;
}

export const verifyConfig = (
  config: Config,
): Result<VerifiedConfig, ConfigError> => {
  if (!config.publicClient)
    return { ok: false, error: ConfigError.PublicClientUndefined };
  if (!config.walletClient)
    return { ok: false, error: ConfigError.WalletClientUndefined };

  return { ok: true, value: config as VerifiedConfig };
};
