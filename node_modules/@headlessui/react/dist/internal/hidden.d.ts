import { ElementType, Ref } from 'react';
import { Props } from '../types.js';
export declare enum Features {
    None = 1,
    Focusable = 2,
    Hidden = 4
}
export declare let Hidden: (<TTag extends ElementType<any> = "div">(props: Omit<import('../types.js').PropsOf<TTag>, "as" | "children" | "refName" | "className"> & {
    as?: TTag | undefined;
    children?: import("react").ReactNode | ((bag: {}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>);
    refName?: string | undefined;
} & (true extends (import('../types.js').PropsOf<TTag> extends never ? never : "className" extends keyof import('../types.js').PropsOf<TTag> ? true : never) ? {
    className?: import('../types.js').PropsOf<TTag>["className"] | ((bag: {}) => string) | undefined;
} : {}) & {
    features?: Features | undefined;
}, ref: Ref<HTMLElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null) & {
    displayName: string;
};
