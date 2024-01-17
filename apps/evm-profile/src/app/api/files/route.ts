import { Readable } from 'stream';
import pinataSDK from '@pinata/sdk';

const pinata = new pinataSDK(
  process.env.NEXT_PUBLIC_PINATA_API_KEY,
  process.env.NEXT_PUBLIC_PINATA_SECRET,
);

export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();
  const file = formData.get('file') as Blob;
  const name = formData.get('name') as string;
  const buffer = Buffer.from(await file.arrayBuffer());

  const readableStream = new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });

  const options = {
    pinataMetadata: {
      name: name,
    },
  };

  return new Promise<Response>((resolve) => {
    pinata
      .pinFileToIPFS(readableStream, options)
      .then((result) => {
        resolve(new Response(JSON.stringify(result)));
      })
      .catch((e) => {
        const errorMessage = {
          error: 'Error uploading file to IPFS',
          details: e.message,
        };
        resolve(new Response(JSON.stringify(errorMessage), { status: 500 }));
      });
  });
}
