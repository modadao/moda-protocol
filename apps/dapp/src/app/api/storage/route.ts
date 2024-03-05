import { Readable } from 'stream';
import pinningService from '@/storage';

const { uploadFile, uploadJSON } = pinningService();

export async function POST(request: Request): Promise<Response> {
  let result;

  const contentType = request.headers.get('content-type');

  if (contentType?.includes('multipart/form-data')) {
    const formData = await request.formData();
    const file = formData.get('file') as Blob;
    const name = formData.get('name') as string;

    if (file instanceof Blob && typeof name === 'string') {
      const buffer = Buffer.from(await file.arrayBuffer());

      const readableStream = new Readable({
        read() {
          this.push(buffer);
          this.push(null);
        },
      });

      result = await uploadFile(readableStream, name);
    } else {
      return new Response('Invalid form data', { status: 400 });
    }
  } else if (contentType?.includes('application/json')) {
    const json = await request.json();
    if (typeof json === 'object' && json !== null) {
      result = await uploadJSON(json);
    } else {
      return new Response('Invalid content type', { status: 400 });
    }
  }
  return Response.json(result);
}
