import React, { Ref } from 'react';
import { Props } from '../../types.js';
import { PropsForFeatures } from '../../utils/render.js';
interface ListboxRenderPropArg<T> {
    open: boolean;
    disabled: boolean;
    value: T;
}
interface ButtonRenderPropArg {
    open: boolean;
    disabled: boolean;
    value: any;
}
declare type ButtonPropsWeControl = 'type' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded' | 'aria-labelledby' | 'disabled' | 'onKeyDown' | 'onClick';
interface LabelRenderPropArg {
    open: boolean;
    disabled: boolean;
}
declare type LabelPropsWeControl = 'ref' | 'onClick';
interface OptionsRenderPropArg {
    open: boolean;
}
declare type OptionsPropsWeControl = 'aria-activedescendant' | 'aria-labelledby' | 'aria-orientation' | 'onKeyDown' | 'role' | 'tabIndex';
declare let OptionsRenderFeatures: number;
interface OptionRenderPropArg {
    active: boolean;
    selected: boolean;
    disabled: boolean;
}
declare type ListboxOptionPropsWeControl = 'role' | 'tabIndex' | 'aria-disabled' | 'aria-selected' | 'onPointerLeave' | 'onMouseLeave' | 'onPointerMove' | 'onMouseMove' | 'onFocus';
export declare let Listbox: (<TTag extends React.ElementType<any> = React.ExoticComponent<{
    children?: React.ReactNode;
}>, TType = string, TActualType = TType extends (infer U)[] ? U : TType>(props: Props<TTag, ListboxRenderPropArg<TType>, "value" | "name" | "disabled" | "defaultValue" | "multiple" | "onChange" | "by" | "horizontal"> & {
    value?: TType | undefined;
    defaultValue?: TType | undefined;
    onChange?(value: TType): void;
    by?: (keyof TActualType & string) | ((a: TActualType, z: TActualType) => boolean) | undefined;
    disabled?: boolean | undefined;
    horizontal?: boolean | undefined;
    name?: string | undefined;
    multiple?: boolean | undefined;
}, ref: React.Ref<TTag>) => JSX.Element) & {
    displayName: string;
} & {
    Button: (<TTag_1 extends React.ElementType<any> = "button">(props: Props<TTag_1, ButtonRenderPropArg, ButtonPropsWeControl>, ref: Ref<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Label: (<TTag_2 extends React.ElementType<any> = "label">(props: Props<TTag_2, LabelRenderPropArg, LabelPropsWeControl>, ref: Ref<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Options: (<TTag_3 extends React.ElementType<any> = "ul">(props: Props<TTag_3, OptionsRenderPropArg, OptionsPropsWeControl> & (({
        static?: undefined;
    } & {
        unmount?: boolean | undefined;
    }) | ({
        unmount?: undefined;
    } & {
        static?: boolean | undefined;
    })), ref: Ref<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Option: (<TTag_4 extends React.ElementType<any> = "li", TType_1 = unknown>(props: Props<TTag_4, OptionRenderPropArg, "value" | ListboxOptionPropsWeControl> & {
        disabled?: boolean | undefined;
        value: TType_1;
    }, ref: Ref<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
};
export {};
