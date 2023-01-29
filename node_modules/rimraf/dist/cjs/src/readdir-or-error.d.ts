import { FsError } from './fs.js';
export declare const readdirOrError: (path: string) => Promise<string[] | FsError>;
export declare const readdirOrErrorSync: (path: string) => string[] | FsError;
