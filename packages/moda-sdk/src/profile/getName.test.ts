import { getName } from "./getName";
import { mockConfig } from "./testing/mockConfig";
import { profileAddress } from "./testing/constants";
import { AddressError, ConfigError } from "../types";

describe('getName', () => {
    it("Should return a list of names", async () => {
        const result = await getName({
            config: mockConfig,
            profileAddress,
        });

        if (!result.ok) {
            throw new Error("Expected result to be successful");
        }

        expect(result.ok).toBeTruthy;
        expect(result.value).toBe("data");
    });

    it('Should fail if config is not verifiable', async () => {
        const result = await getName({
          config: { publicClient: undefined, walletClient: undefined },
          profileAddress,

        });
    
        if (result.ok) {
          throw new Error('Expected result to be unsuccessful');
        }
    
        expect(result.error).toBe(ConfigError.PublicClientUndefined);
      });
    
      it('Should fail if the publicClient is defined but the walletClient is not', async () => {
        const result = await getName({
          config: {
            publicClient: mockConfig.publicClient,
            walletClient: undefined,
          },
          profileAddress,
     
        });
    
        if (result.ok) {
          throw new Error('Expected result to be unsuccessful');
        }
    
        expect(result.error).toBe(ConfigError.WalletClientUndefined);
      });

      it('Should fail if profileAddress is invalid', async () => {
        const result = await getName({
          config: mockConfig,
          profileAddress: '0xInvalidAddress',

        });
    
        if (result.ok) {
          throw new Error('Expected result to be unsuccessful');
        }
        expect(result.error).toBe(AddressError.ProfileAddressInvalid);
    });


});