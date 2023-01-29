import fs from 'fs';
export type FsError = Error & {
    code?: string;
    path?: string;
};
export { chmodSync, mkdirSync, readdirSync, renameSync, rmdirSync, rmSync, statSync, unlinkSync, } from 'fs';
export declare const promises: {
    chmod: (path: fs.PathLike, mode: fs.Mode) => Promise<void>;
    mkdir: (path: fs.PathLike, options?: fs.Mode | (fs.MakeDirectoryOptions & {
        recursive?: boolean | null;
    }) | undefined | null) => Promise<string | undefined>;
    readdir: (path: fs.PathLike) => Promise<string[]>;
    rename: (oldPath: fs.PathLike, newPath: fs.PathLike) => Promise<void>;
    rm: (path: fs.PathLike, options: fs.RmOptions) => Promise<void>;
    rmdir: (path: fs.PathLike) => Promise<void>;
    stat: (path: fs.PathLike) => Promise<fs.Stats>;
    unlink: (path: fs.PathLike) => Promise<void>;
};
