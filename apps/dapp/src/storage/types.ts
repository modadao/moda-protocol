import { Readable } from 'stream';

export interface PinningService<StorageResult> {
  uploadFile(file: Readable, name: string): Promise<StorageResult>;
  uploadJSON(json: JSON): Promise<StorageResult>;
}

export interface StorageResult {
  uri: string;
  timestamp?: string;
}
