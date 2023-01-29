import { FsError } from './fs.js';
export declare const readdirOrError: (path: string) => Promise<FsError | string[]>;
export declare const readdirOrErrorSync: (path: string) => FsError | string[];
