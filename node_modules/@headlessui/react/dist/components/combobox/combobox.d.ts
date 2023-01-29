import React, { ElementType, Ref } from 'react';
import { ByComparator, EnsureArray, Expand, Props } from '../../types.js';
import { PropsForFeatures } from '../../utils/render.js';
declare let DEFAULT_COMBOBOX_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface ComboboxRenderPropArg<T> {
    open: boolean;
    disabled: boolean;
    activeIndex: number | null;
    activeOption: T | null;
    value: T;
}
declare type O = 'value' | 'defaultValue' | 'nullable' | 'multiple' | 'onChange' | 'by';
declare type ComboboxValueProps<TValue, TNullable extends boolean | undefined, TMultiple extends boolean | undefined, TTag extends ElementType> = Extract<({
    value?: EnsureArray<TValue>;
    defaultValue?: EnsureArray<TValue>;
    nullable: true;
    multiple: true;
    onChange?(value: EnsureArray<TValue>): void;
    by?: ByComparator<TValue>;
} & Props<TTag, ComboboxRenderPropArg<EnsureArray<TValue>>, O>) | ({
    value?: TValue | null;
    defaultValue?: TValue | null;
    nullable: true;
    multiple?: false;
    onChange?(value: TValue | null): void;
    by?: ByComparator<TValue | null>;
} & Expand<Props<TTag, ComboboxRenderPropArg<TValue | null>, O>>) | ({
    value?: EnsureArray<TValue>;
    defaultValue?: EnsureArray<TValue>;
    nullable?: false;
    multiple: true;
    onChange?(value: EnsureArray<TValue>): void;
    by?: ByComparator<TValue extends Array<infer U> ? U : TValue>;
} & Expand<Props<TTag, ComboboxRenderPropArg<EnsureArray<TValue>>, O>>) | ({
    value?: TValue;
    nullable?: false;
    multiple?: false;
    defaultValue?: TValue;
    onChange?(value: TValue): void;
    by?: ByComparator<TValue>;
} & Props<TTag, ComboboxRenderPropArg<TValue>, O>), {
    nullable?: TNullable;
    multiple?: TMultiple;
}>;
declare type ComboboxProps<TValue, TNullable extends boolean | undefined, TMultiple extends boolean | undefined, TTag extends ElementType> = ComboboxValueProps<TValue, TNullable, TMultiple, TTag> & {
    disabled?: boolean;
    __demoMode?: boolean;
    name?: string;
};
declare function ComboboxFn<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, true, true, TTag>, ref: Ref<TTag>): JSX.Element;
declare function ComboboxFn<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, true, false, TTag>, ref: Ref<TTag>): JSX.Element;
declare function ComboboxFn<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, false, false, TTag>, ref: Ref<TTag>): JSX.Element;
declare function ComboboxFn<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(props: ComboboxProps<TValue, false, true, TTag>, ref: Ref<TTag>): JSX.Element;
interface InputRenderPropArg {
    open: boolean;
    disabled: boolean;
}
declare type InputPropsWeControl = 'role' | 'aria-labelledby' | 'aria-expanded' | 'aria-activedescendant' | 'onKeyDown' | 'onChange' | 'displayValue';
interface ButtonRenderPropArg {
    open: boolean;
    disabled: boolean;
    value: any;
}
declare type ButtonPropsWeControl = 'type' | 'tabIndex' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded' | 'aria-labelledby' | 'disabled' | 'onClick' | 'onKeyDown';
interface LabelRenderPropArg {
    open: boolean;
    disabled: boolean;
}
declare type LabelPropsWeControl = 'ref' | 'onClick';
interface OptionsRenderPropArg {
    open: boolean;
}
declare type OptionsPropsWeControl = 'aria-activedescendant' | 'aria-labelledby' | 'hold' | 'onKeyDown' | 'role' | 'tabIndex';
declare let OptionsRenderFeatures: number;
interface OptionRenderPropArg {
    active: boolean;
    selected: boolean;
    disabled: boolean;
}
declare type ComboboxOptionPropsWeControl = 'role' | 'tabIndex' | 'aria-disabled' | 'aria-selected';
export declare let Combobox: typeof ComboboxFn & {
    displayName: string;
} & {
    Input: (<TTag extends React.ElementType<any> = "input", TType = {}[] | undefined>(props: Props<TTag, InputRenderPropArg, InputPropsWeControl> & {
        displayValue?(item: TType): string;
        onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    }, ref: Ref<HTMLInputElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Button: (<TTag_1 extends React.ElementType<any> = "button">(props: Props<TTag_1, ButtonRenderPropArg, ButtonPropsWeControl>, ref: Ref<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Label: (<TTag_2 extends React.ElementType<any> = "label">(props: Props<TTag_2, LabelRenderPropArg, LabelPropsWeControl>, ref: Ref<HTMLLabelElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
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
    })) & {
        hold?: boolean | undefined;
    }, ref: Ref<HTMLUListElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Option: (<TTag_4 extends React.ElementType<any> = "li", TType_1 = {}[] | undefined>(props: Props<TTag_4, OptionRenderPropArg, "value" | ComboboxOptionPropsWeControl> & {
        disabled?: boolean | undefined;
        value: TType_1;
    }, ref: Ref<HTMLLIElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
};
export {};
