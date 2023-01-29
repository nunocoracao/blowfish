import React, { Ref } from 'react';
import { Props } from '../../types.js';
interface RadioGroupRenderPropArg<TType> {
    value: TType;
}
declare type RadioGroupPropsWeControl = 'role' | 'aria-labelledby' | 'aria-describedby';
interface OptionRenderPropArg {
    checked: boolean;
    active: boolean;
    disabled: boolean;
}
declare type RadioPropsWeControl = 'aria-checked' | 'onBlur' | 'onClick' | 'onFocus' | 'ref' | 'role' | 'tabIndex';
export declare let RadioGroup: (<TTag extends React.ElementType<any> = "div", TType = string>(props: Props<TTag, RadioGroupRenderPropArg<TType>, "value" | "name" | "disabled" | "defaultValue" | "onChange" | "by" | RadioGroupPropsWeControl> & {
    value?: TType | undefined;
    defaultValue?: TType | undefined;
    onChange?(value: TType): void;
    by?: (keyof TType & string) | ((a: TType, z: TType) => boolean) | undefined;
    disabled?: boolean | undefined;
    name?: string | undefined;
}, ref: Ref<HTMLElement>) => JSX.Element) & {
    displayName: string;
} & {
    Option: (<TTag_1 extends React.ElementType<any> = "div", TType_1 = unknown>(props: Props<TTag_1, OptionRenderPropArg, "value" | "disabled" | RadioPropsWeControl> & {
        value: TType_1;
        disabled?: boolean | undefined;
    }, ref: Ref<HTMLElement>) => JSX.Element) & {
        displayName: string;
    };
    Label: (<TTag_2 extends React.ElementType<any> = "label">(props: Omit<import('../../types.js').PropsOf<TTag_2>, "as" | "children" | "refName" | "className"> & {
        as?: TTag_2 | undefined;
        children?: React.ReactNode | ((bag: {}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>);
        refName?: string | undefined;
    } & (true extends (import('../../types.js').PropsOf<TTag_2> extends never ? never : "className" extends keyof import('../../types.js').PropsOf<TTag_2> ? true : never) ? {
        className?: import('../../types.js').PropsOf<TTag_2>["className"] | ((bag: {}) => string) | undefined;
    } : {}) & {
        passive?: boolean | undefined;
    }, ref: React.Ref<HTMLLabelElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Description: (<TTag_3 extends React.ElementType<any> = "p">(props: Props<TTag_3, {}, "1D45E01E-AF44-47C4-988A-19A94EBAF55C">, ref: React.Ref<HTMLParagraphElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
};
export {};
