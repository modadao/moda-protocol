import { ModaConfig } from '../types';

let modaConfig: ModaConfig = {};

export function setModaConfig(config: ModaConfig) {
  modaConfig = config;
}

export function getModaConfig(): ModaConfig {
  return modaConfig;
}
