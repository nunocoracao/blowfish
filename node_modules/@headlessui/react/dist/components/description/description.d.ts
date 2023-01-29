import React, { ReactNode, Ref } from 'react';
import { Props } from '../../types.js';
interface SharedData {
    slot?: {};
    name?: string;
    props?: {};
}
interface DescriptionProviderProps extends SharedData {
    children: ReactNode;
}
export declare function useDescriptions(): [
    string | undefined,
    (props: DescriptionProviderProps) => JSX.Element
];
export declare let Description: (<TTag extends React.ElementType<any> = "p">(props: Props<TTag, {}, "1D45E01E-AF44-47C4-988A-19A94EBAF55C">, ref: Ref<HTMLParagraphElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
    displayName: string;
};
export {};
