import pinataSDK from '@pinata/sdk';

const pinata = new pinataSDK(
  process.env.NEXT_PUBLIC_PINATA_API_KEY,
  process.env.NEXT_PUBLIC_PINATA_SECRET,
);

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();

  const options = {
    pinataMetadata: {
      name: 'Profile Metadata',
    },
  };

  return new Promise<Response>((resolve) => {
    pinata
      .pinJSONToIPFS(body, options)
      .then((result) => {
        resolve(new Response(JSON.stringify(result)));
      })
      .catch((e) => {
        const error = {
          error: 'Error uploading JSON to IPFS',
          details: e.message,
        };

        resolve(new Response(JSON.stringify(error), { status: 500 }));
      });
  });
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const urlParams = new URLSearchParams(url.search);
  const tokenURI = urlParams.get('body');

  const res = await fetch(tokenURI as string);

  const body = await res.json();

  return new Response(JSON.stringify(body));
}
