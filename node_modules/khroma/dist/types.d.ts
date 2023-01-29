import type Channels from './channels';
declare type ALPHA = {
    a: number;
};
declare type RGB = {
    r: number;
    g: number;
    b: number;
};
declare type RGBA = RGB & ALPHA;
declare type HSL = {
    h: number;
    s: number;
    l: number;
};
declare type HSLA = HSL & ALPHA;
declare type CHANNEL = 'r' | 'g' | 'b' | 'h' | 's' | 'l' | 'a';
declare type CHANNELS = Record<CHANNEL, number>;
export type { Channels };
export type { ALPHA, RGB, RGBA, HSL, HSLA, CHANNEL, CHANNELS };
