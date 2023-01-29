import React, { Ref } from 'react';
import { Props } from '../../types.js';
import { PropsForFeatures } from '../../utils/render.js';
interface MenuRenderPropArg {
    open: boolean;
    close: () => void;
}
interface ButtonRenderPropArg {
    open: boolean;
}
declare type ButtonPropsWeControl = 'type' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded' | 'onKeyDown' | 'onClick';
interface ItemsRenderPropArg {
    open: boolean;
}
declare type ItemsPropsWeControl = 'aria-activedescendant' | 'aria-labelledby' | 'onKeyDown' | 'role' | 'tabIndex';
declare let ItemsRenderFeatures: number;
interface ItemRenderPropArg {
    active: boolean;
    disabled: boolean;
    close: () => void;
}
declare type MenuItemPropsWeControl = 'role' | 'tabIndex' | 'aria-disabled' | 'onPointerLeave' | 'onPointerMove' | 'onMouseLeave' | 'onMouseMove' | 'onFocus';
export declare let Menu: (<TTag extends React.ElementType<any> = React.ExoticComponent<{
    children?: React.ReactNode;
}>>(props: Props<TTag, MenuRenderPropArg, "1D45E01E-AF44-47C4-988A-19A94EBAF55C">, ref: Ref<HTMLElement>) => JSX.Element) & {
    displayName: string;
} & {
    Button: (<TTag_1 extends React.ElementType<any> = "button">(props: Props<TTag_1, ButtonRenderPropArg, ButtonPropsWeControl>, ref: Ref<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Items: (<TTag_2 extends React.ElementType<any> = "div">(props: Props<TTag_2, ItemsRenderPropArg, ItemsPropsWeControl> & (({
        static?: undefined;
    } & {
        unmount?: boolean | undefined;
    }) | ({
        unmount?: undefined;
    } & {
        static?: boolean | undefined;
    })), ref: Ref<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Item: (<TTag_3 extends React.ElementType<any> = React.ExoticComponent<{
        children?: React.ReactNode;
    }>>(props: Props<TTag_3, ItemRenderPropArg, MenuItemPropsWeControl> & {
        disabled?: boolean | undefined;
    }, ref: Ref<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
};
export {};
