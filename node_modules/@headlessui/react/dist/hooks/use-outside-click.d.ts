import { MutableRefObject } from 'react';
declare type Container = MutableRefObject<HTMLElement | null> | HTMLElement | null;
declare type ContainerCollection = Container[] | Set<Container>;
declare type ContainerInput = Container | ContainerCollection;
export declare function useOutsideClick(containers: ContainerInput | (() => ContainerInput), cb: (event: MouseEvent | PointerEvent | FocusEvent, target: HTMLElement) => void, enabled?: boolean): void;
export {};
