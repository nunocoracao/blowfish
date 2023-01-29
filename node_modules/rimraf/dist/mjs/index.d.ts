export interface RimrafOptions {
    preserveRoot?: boolean;
    tmp?: string;
    maxRetries?: number;
    retryDelay?: number;
    backoff?: number;
    maxBackoff?: number;
}
export declare const isRimrafOptions: (o: any) => o is RimrafOptions;
export declare const assertRimrafOptions: (o: any) => void;
export declare const nativeSync: (path: string | string[], opt?: RimrafOptions) => void;
export declare const native: ((path: string | string[], opt?: RimrafOptions) => Promise<void>) & {
    sync: (path: string | string[], opt?: RimrafOptions) => void;
};
export declare const manualSync: (path: string | string[], opt?: RimrafOptions) => void;
export declare const manual: ((path: string | string[], opt?: RimrafOptions) => Promise<void>) & {
    sync: (path: string | string[], opt?: RimrafOptions) => void;
};
export declare const windowsSync: (path: string | string[], opt?: RimrafOptions) => void;
export declare const windows: ((path: string | string[], opt?: RimrafOptions) => Promise<void>) & {
    sync: (path: string | string[], opt?: RimrafOptions) => void;
};
export declare const posixSync: (path: string | string[], opt?: RimrafOptions) => void;
export declare const posix: ((path: string | string[], opt?: RimrafOptions) => Promise<void>) & {
    sync: (path: string | string[], opt?: RimrafOptions) => void;
};
export declare const moveRemoveSync: (path: string | string[], opt?: RimrafOptions) => void;
export declare const moveRemove: ((path: string | string[], opt?: RimrafOptions) => Promise<void>) & {
    sync: (path: string | string[], opt?: RimrafOptions) => void;
};
export declare const rimrafSync: (path: string | string[], opt?: RimrafOptions) => void;
export declare const sync: (path: string | string[], opt?: RimrafOptions) => void;
export declare const rimraf: ((path: string | string[], opt?: RimrafOptions) => Promise<void>) & {
    rimraf: ((path: string | string[], opt?: RimrafOptions) => Promise<void>) & {
        sync: (path: string | string[], opt?: RimrafOptions) => void;
    };
    sync: (path: string | string[], opt?: RimrafOptions) => void;
    rimrafSync: (path: string | string[], opt?: RimrafOptions) => void;
    manual: ((path: string | string[], opt?: RimrafOptions) => Promise<void>) & {
        sync: (path: string | string[], opt?: RimrafOptions) => void;
    };
    manualSync: (path: string | string[], opt?: RimrafOptions) => void;
    native: ((path: string | string[], opt?: RimrafOptions) => Promise<void>) & {
        sync: (path: string | string[], opt?: RimrafOptions) => void;
    };
    nativeSync: (path: string | string[], opt?: RimrafOptions) => void;
    posix: ((path: string | string[], opt?: RimrafOptions) => Promise<void>) & {
        sync: (path: string | string[], opt?: RimrafOptions) => void;
    };
    posixSync: (path: string | string[], opt?: RimrafOptions) => void;
    windows: ((path: string | string[], opt?: RimrafOptions) => Promise<void>) & {
        sync: (path: string | string[], opt?: RimrafOptions) => void;
    };
    windowsSync: (path: string | string[], opt?: RimrafOptions) => void;
    moveRemove: ((path: string | string[], opt?: RimrafOptions) => Promise<void>) & {
        sync: (path: string | string[], opt?: RimrafOptions) => void;
    };
    moveRemoveSync: (path: string | string[], opt?: RimrafOptions) => void;
};
export default rimraf;
