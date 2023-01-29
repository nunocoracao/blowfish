import React, { MutableRefObject, Ref } from 'react';
import { Props } from '../../types.js';
import { PropsForFeatures } from '../../utils/render.js';
interface DialogRenderPropArg {
    open: boolean;
}
declare type DialogPropsWeControl = 'role' | 'aria-modal' | 'aria-describedby' | 'aria-labelledby';
declare let DialogRenderFeatures: number;
interface OverlayRenderPropArg {
    open: boolean;
}
declare type OverlayPropsWeControl = 'aria-hidden' | 'onClick';
interface BackdropRenderPropArg {
    open: boolean;
}
declare type BackdropPropsWeControl = 'aria-hidden' | 'onClick';
interface PanelRenderPropArg {
    open: boolean;
}
interface TitleRenderPropArg {
    open: boolean;
}
export declare let Dialog: (<TTag extends React.ElementType<any> = "div">(props: Props<TTag, DialogRenderPropArg, DialogPropsWeControl> & (({
    static?: undefined;
} & {
    unmount?: boolean | undefined;
}) | ({
    unmount?: undefined;
} & {
    static?: boolean | undefined;
})) & {
    open?: boolean | undefined;
    onClose(value: boolean): void;
    initialFocus?: React.MutableRefObject<HTMLElement | null> | undefined;
    __demoMode?: boolean | undefined;
}, ref: Ref<HTMLDivElement>) => JSX.Element) & {
    displayName: string;
} & {
    Backdrop: (<TTag_1 extends React.ElementType<any> = "div">(props: Props<TTag_1, BackdropRenderPropArg, BackdropPropsWeControl>, ref: Ref<HTMLDivElement>) => JSX.Element) & {
        displayName: string;
    };
    Panel: (<TTag_2 extends React.ElementType<any> = "div">(props: Props<TTag_2, PanelRenderPropArg, "1D45E01E-AF44-47C4-988A-19A94EBAF55C">, ref: Ref<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Overlay: (<TTag_3 extends React.ElementType<any> = "div">(props: Props<TTag_3, OverlayRenderPropArg, OverlayPropsWeControl>, ref: Ref<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Title: (<TTag_4 extends React.ElementType<any> = "h2">(props: Props<TTag_4, TitleRenderPropArg, "1D45E01E-AF44-47C4-988A-19A94EBAF55C">, ref: Ref<HTMLHeadingElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Description: (<TTag_5 extends React.ElementType<any> = "p">(props: Props<TTag_5, {}, "1D45E01E-AF44-47C4-988A-19A94EBAF55C">, ref: React.Ref<HTMLParagraphElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
};
export {};
