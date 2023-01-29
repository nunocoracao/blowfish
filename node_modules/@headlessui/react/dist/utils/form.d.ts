declare type Entries = [string, string][];
export declare function objectToFormEntries(source?: Record<string, any>, parentKey?: string | null, entries?: Entries): Entries;
export declare function attemptSubmit(element: HTMLElement): void;
export {};
