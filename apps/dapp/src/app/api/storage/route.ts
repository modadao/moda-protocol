import { Readable } from 'stream';
import { uploadFile, uploadJSON } from '@/storage';
import { FileError } from '@/types';

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
      result = { ok: false, error: FileError.InvalidDataError };
    }
  } else if (contentType?.includes('application/json')) {
    const json = await request.json();
    if (typeof json === 'object' && json !== null)
      result = await uploadJSON(json);
  }

  return Response.json(result);
}
