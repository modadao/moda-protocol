import { Readable } from 'stream';

export interface PinningService<R> {
  uploadFile(file: Readable, name: string): Promise<R>;
  uploadJSON(json: JSON): Promise<R>;
}
