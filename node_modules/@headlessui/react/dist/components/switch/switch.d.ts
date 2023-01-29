import React, { ElementType, Ref } from 'react';
import { Props } from '../../types.js';
declare let DEFAULT_GROUP_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
declare function Group<TTag extends ElementType = typeof DEFAULT_GROUP_TAG>(props: Props<TTag>): JSX.Element;
interface SwitchRenderPropArg {
    checked: boolean;
}
declare type SwitchPropsWeControl = 'role' | 'tabIndex' | 'aria-checked' | 'aria-labelledby' | 'aria-describedby' | 'onClick' | 'onKeyUp' | 'onKeyPress';
export declare let Switch: (<TTag extends React.ElementType<any> = "button">(props: Props<TTag, SwitchRenderPropArg, "value" | "name" | "onChange" | "checked" | "defaultChecked" | SwitchPropsWeControl> & {
    checked?: boolean | undefined;
    defaultChecked?: boolean | undefined;
    onChange?(checked: boolean): void;
    name?: string | undefined;
    value?: string | undefined;
}, ref: Ref<HTMLElement>) => JSX.Element) & {
    displayName: string;
} & {
    Group: typeof Group;
    Label: (<TTag_1 extends React.ElementType<any> = "label">(props: Omit<import('../../types.js').PropsOf<TTag_1>, "as" | "children" | "refName" | "className"> & {
        as?: TTag_1 | undefined;
        children?: React.ReactNode | ((bag: {}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>);
        refName?: string | undefined;
    } & (true extends (import('../../types.js').PropsOf<TTag_1> extends never ? never : "className" extends keyof import('../../types.js').PropsOf<TTag_1> ? true : never) ? {
        className?: import('../../types.js').PropsOf<TTag_1>["className"] | ((bag: {}) => string) | undefined;
    } : {}) & {
        passive?: boolean | undefined;
    }, ref: React.Ref<HTMLLabelElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Description: (<TTag_2 extends React.ElementType<any> = "p">(props: Props<TTag_2, {}, "1D45E01E-AF44-47C4-988A-19A94EBAF55C">, ref: React.Ref<HTMLParagraphElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
};
export {};
