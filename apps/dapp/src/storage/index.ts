import { Readable } from 'stream';
import pinataSDK, { PinataPinOptions } from '@pinata/sdk';
import { PinningService, StorageResult } from './types';

const pinata = new pinataSDK(
  process.env.NEXT_PUBLIC_PINATA_API_KEY,
  process.env.NEXT_PUBLIC_PINATA_SECRET,
);

export default function pinningService(): PinningService<StorageResult> {
  async function uploadFile(
    file: Readable,
    name: string,
  ): Promise<StorageResult> {
    const options: PinataPinOptions = {
      pinataMetadata: {
        name,
      },
    };
    try {
      const pinataResponse = await pinata.pinFileToIPFS(file, options);
      const result: StorageResult = {
        uri: pinataResponse.IpfsHash,
      };

      return result;
    } catch (e) {
      throw new Error((e as Error).message);
    }
  }

  async function uploadJSON(json: JSON): Promise<StorageResult> {
    try {
      const pinataResponse = await pinata.pinJSONToIPFS(json);
      const result: StorageResult = {
        uri: pinataResponse.IpfsHash,
      };
      return result;
    } catch (e) {
      throw new Error((e as Error).message);
    }
  }
  return {
    uploadFile,
    uploadJSON,
  };
}
