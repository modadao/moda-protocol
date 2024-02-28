import { Readable } from 'stream';
import pinataSDK, { PinataPinOptions, PinataPinResponse } from '@pinata/sdk';
import { PinningService } from './types';

const pinata = new pinataSDK(
  process.env.NEXT_PUBLIC_PINATA_API_KEY,
  process.env.NEXT_PUBLIC_PINATA_SECRET,
);

export default function pinningService(): PinningService<PinataPinResponse> {
  async function uploadFile(
    file: Readable,
    name: string,
  ): Promise<PinataPinResponse> {
    const options: PinataPinOptions = {
      pinataMetadata: {
        name,
      },
    };
    try {
      const result = await pinata.pinFileToIPFS(file, options);
      return result;
    } catch (e) {
      throw new Error((e as Error).message);
    }
  }

  async function uploadJSON(json: JSON): Promise<PinataPinResponse> {
    try {
      const result = await pinata.pinJSONToIPFS(json);
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
