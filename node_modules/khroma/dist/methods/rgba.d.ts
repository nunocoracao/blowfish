import type { Channels } from '../types';
declare type IRgba = {
    (color: string | Channels, opacity: number): string;
    (r: number, g: number, b: number, a?: number): string;
};
declare const rgba: IRgba;
export default rgba;
