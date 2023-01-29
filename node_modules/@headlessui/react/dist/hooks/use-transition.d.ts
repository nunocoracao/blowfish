import { MutableRefObject } from 'react';
interface TransitionArgs {
    container: MutableRefObject<HTMLElement | null>;
    classes: MutableRefObject<{
        enter: string[];
        enterFrom: string[];
        enterTo: string[];
        leave: string[];
        leaveFrom: string[];
        leaveTo: string[];
        entered: string[];
    }>;
    direction: 'enter' | 'leave' | 'idle';
    onStart: MutableRefObject<(direction: TransitionArgs['direction']) => void>;
    onStop: MutableRefObject<(direction: TransitionArgs['direction']) => void>;
}
export declare function useTransition({ container, direction, classes, onStart, onStop }: TransitionArgs): void;
export {};
