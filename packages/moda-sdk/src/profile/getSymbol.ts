import { Address } from "viem";
import { AddressError, Config, ConfigError } from "../types";
import { Result } from "../utils/types";
import { verifyConfig } from "../utils/verifyConfig";
import { isValidAddress } from "../utils/isValidAddress";
import { ProfileABI } from "./abi/ProfileABI";
import { ProfileError } from "./types";

interface GetSymbolArgs {
    config: Config;
    profileAddress: Address;
}

export async function getSymbol(
    { config, profileAddress} : GetSymbolArgs,
): Promise<Result<string, ConfigError | AddressError | ProfileError>> {

  const verifiedConfig = verifyConfig(config);
  if (!verifiedConfig.ok) return verifiedConfig;

  const { publicClient } = verifiedConfig.value;

  if (!isValidAddress(profileAddress))
    return { ok: false, error: AddressError.ProfileAddressInvalid };

  const data = await publicClient.readContract({
    abi: ProfileABI,
    address: profileAddress,
    functionName: 'symbol',
  });

 

  if(data) {
    return { ok: true, value: data as string };
  }
    return { ok: false, error: ProfileError.SymbolUndefined };
}