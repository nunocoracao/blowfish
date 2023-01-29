import React, { MutableRefObject, Ref, MouseEventHandler } from 'react';
import { Props } from '../../types.js';
import { PropsForFeatures } from '../../utils/render.js';
declare type MouseEvent<T> = Parameters<MouseEventHandler<T>>[0];
interface PopoverRenderPropArg {
    open: boolean;
    close(focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null> | MouseEvent<HTMLElement>): void;
}
interface ButtonRenderPropArg {
    open: boolean;
}
declare type ButtonPropsWeControl = 'type' | 'aria-expanded' | 'aria-controls' | 'onKeyDown' | 'onClick';
interface OverlayRenderPropArg {
    open: boolean;
}
declare type OverlayPropsWeControl = 'aria-hidden' | 'onClick';
declare let OverlayRenderFeatures: number;
interface PanelRenderPropArg {
    open: boolean;
    close: (focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>) => void;
}
declare type PanelPropsWeControl = 'onKeyDown';
declare let PanelRenderFeatures: number;
interface GroupRenderPropArg {
}
export declare let Popover: (<TTag extends React.ElementType<any> = "div">(props: Props<TTag, PopoverRenderPropArg, "1D45E01E-AF44-47C4-988A-19A94EBAF55C">, ref: Ref<HTMLElement>) => JSX.Element) & {
    displayName: string;
} & {
    Button: (<TTag_1 extends React.ElementType<any> = "button">(props: Props<TTag_1, ButtonRenderPropArg, ButtonPropsWeControl>, ref: Ref<HTMLButtonElement>) => JSX.Element) & {
        displayName: string;
    };
    Overlay: (<TTag_2 extends React.ElementType<any> = "div">(props: Props<TTag_2, OverlayRenderPropArg, OverlayPropsWeControl> & (({
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
    Panel: (<TTag_3 extends React.ElementType<any> = "div">(props: Omit<import('../../types.js').PropsOf<TTag_3>, ("as" | "children" | "refName" | "className") | "onKeyDown"> & {
        as?: TTag_3 | undefined;
        children?: React.ReactNode | ((bag: PanelRenderPropArg) => React.ReactElement<any, string | React.JSXElementConstructor<any>>);
        refName?: string | undefined;
    } & (true extends (import('../../types.js').PropsOf<TTag_3> extends never ? never : "className" extends keyof import('../../types.js').PropsOf<TTag_3> ? true : never) ? {
        className?: import('../../types.js').PropsOf<TTag_3>["className"] | ((bag: PanelRenderPropArg) => string) | undefined;
    } : {}) & (({
        static?: undefined;
    } & {
        unmount?: boolean | undefined;
    }) | ({
        unmount?: undefined;
    } & {
        static?: boolean | undefined;
    })) & {
        focus?: boolean | undefined;
    }, ref: Ref<HTMLDivElement>) => JSX.Element) & {
        displayName: string;
    };
    Group: (<TTag_4 extends React.ElementType<any> = "div">(props: Props<TTag_4, GroupRenderPropArg, "1D45E01E-AF44-47C4-988A-19A94EBAF55C">, ref: Ref<HTMLElement>) => JSX.Element) & {
        displayName: string;
    };
};
export {};
