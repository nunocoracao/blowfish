import React, { ReactNode, Ref } from 'react';
import { Props } from '../../types.js';
interface SharedData {
    slot?: {};
    name?: string;
    props?: {};
}
interface LabelProviderProps extends SharedData {
    children: ReactNode;
}
export declare function useLabels(): [string | undefined, (props: LabelProviderProps) => JSX.Element];
export declare let Label: (<TTag extends React.ElementType<any> = "label">(props: Omit<import('../../types.js').PropsOf<TTag>, "as" | "children" | "refName" | "className"> & {
    as?: TTag | undefined;
    children?: React.ReactNode | ((bag: {}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>);
    refName?: string | undefined;
} & (true extends (import('../../types.js').PropsOf<TTag> extends never ? never : "className" extends keyof import('../../types.js').PropsOf<TTag> ? true : never) ? {
    className?: import('../../types.js').PropsOf<TTag>["className"] | ((bag: {}) => string) | undefined;
} : {}) & {
    passive?: boolean | undefined;
}, ref: Ref<HTMLLabelElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
    displayName: string;
};
export {};
