import { ReactNode, ReactElement, JSXElementConstructor } from 'react';
export declare type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;
declare let __: "1D45E01E-AF44-47C4-988A-19A94EBAF55C";
export declare type __ = typeof __;
export declare type Expand<T> = T extends infer O ? {
    [K in keyof O]: O[K];
} : never;
export declare type PropsOf<TTag extends ReactTag> = TTag extends React.ElementType ? React.ComponentProps<TTag> : never;
declare type PropsWeControl = 'as' | 'children' | 'refName' | 'className';
declare type CleanProps<TTag extends ReactTag, TOmitableProps extends PropertyKey = __> = TOmitableProps extends __ ? Omit<PropsOf<TTag>, PropsWeControl> : Omit<PropsOf<TTag>, TOmitableProps | PropsWeControl>;
declare type OurProps<TTag extends ReactTag, TSlot> = {
    as?: TTag;
    children?: ReactNode | ((bag: TSlot) => ReactElement);
    refName?: string;
};
declare type HasProperty<T extends object, K extends PropertyKey> = T extends never ? never : K extends keyof T ? true : never;
declare type ClassNameOverride<TTag extends ReactTag, TSlot = {}> = true extends HasProperty<PropsOf<TTag>, 'className'> ? {
    className?: PropsOf<TTag>['className'] | ((bag: TSlot) => string);
} : {};
export declare type Props<TTag extends ReactTag, TSlot = {}, TOmitableProps extends PropertyKey = __> = CleanProps<TTag, TOmitableProps> & OurProps<TTag, TSlot> & ClassNameOverride<TTag, TSlot>;
declare type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export declare type XOR<T, U> = T | U extends __ ? never : T extends __ ? U : U extends __ ? T : T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
export declare type ByComparator<T> = (keyof T & string) | ((a: T, b: T) => boolean);
export declare type EnsureArray<T> = T extends any[] ? T : Expand<T>[];
export {};
