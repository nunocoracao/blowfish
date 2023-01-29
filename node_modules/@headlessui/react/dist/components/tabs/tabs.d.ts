import React, { Ref } from 'react';
import { Props } from '../../types.js';
import { PropsForFeatures } from '../../utils/render.js';
interface TabsRenderPropArg {
    selectedIndex: number;
}
interface ListRenderPropArg {
    selectedIndex: number;
}
declare type ListPropsWeControl = 'role' | 'aria-orientation';
interface TabRenderPropArg {
    selected: boolean;
}
declare type TabPropsWeControl = 'role' | 'type' | 'aria-controls' | 'aria-selected' | 'tabIndex';
interface PanelsRenderPropArg {
    selectedIndex: number;
}
interface PanelRenderPropArg {
    selected: boolean;
}
declare type PanelPropsWeControl = 'role' | 'aria-labelledby' | 'tabIndex';
declare let PanelRenderFeatures: number;
export declare let Tab: (<TTag extends React.ElementType<any> = "button">(props: Props<TTag, TabRenderPropArg, TabPropsWeControl>, ref: Ref<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
    displayName: string;
} & {
    Group: (<TTag_1 extends React.ElementType<any> = React.ExoticComponent<{
        children?: React.ReactNode;
    }>>(props: Omit<import('../../types.js').PropsOf<TTag_1>, "as" | "children" | "refName" | "className"> & {
        as?: TTag_1 | undefined;
        children?: React.ReactNode | ((bag: TabsRenderPropArg) => React.ReactElement<any, string | React.JSXElementConstructor<any>>);
        refName?: string | undefined;
    } & (true extends (import('../../types.js').PropsOf<TTag_1> extends never ? never : "className" extends keyof import('../../types.js').PropsOf<TTag_1> ? true : never) ? {
        className?: import('../../types.js').PropsOf<TTag_1>["className"] | ((bag: TabsRenderPropArg) => string) | undefined;
    } : {}) & {
        defaultIndex?: number | undefined;
        onChange?: ((index: number) => void) | undefined;
        selectedIndex?: number | undefined;
        vertical?: boolean | undefined;
        manual?: boolean | undefined;
    }, ref: Ref<HTMLElement>) => JSX.Element) & {
        displayName: string;
    };
    List: (<TTag_2 extends React.ElementType<any> = "div">(props: Props<TTag_2, ListRenderPropArg, ListPropsWeControl> & {}, ref: Ref<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Panels: (<TTag_3 extends React.ElementType<any> = "div">(props: Props<TTag_3, PanelsRenderPropArg, "1D45E01E-AF44-47C4-988A-19A94EBAF55C">, ref: Ref<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Panel: (<TTag_4 extends React.ElementType<any> = "div">(props: Props<TTag_4, PanelRenderPropArg, PanelPropsWeControl> & (({
        static?: undefined;
    } & {
        unmount?: boolean | undefined;
    }) | ({
        unmount?: undefined;
    } & {
        static?: boolean | undefined;
    })), ref: Ref<HTMLElement>) => JSX.Element | null) & {
        displayName: string;
    };
};
export {};
