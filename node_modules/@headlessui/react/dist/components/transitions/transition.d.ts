import React, { MutableRefObject, Ref } from 'react';
import { Props, ReactTag } from '../../types.js';
import { Features, PropsForFeatures } from '../../utils/render.js';
export interface TransitionClasses {
    enter?: string;
    enterFrom?: string;
    enterTo?: string;
    entered?: string;
    leave?: string;
    leaveFrom?: string;
    leaveTo?: string;
}
export interface TransitionEvents {
    beforeEnter?: () => void;
    afterEnter?: () => void;
    beforeLeave?: () => void;
    afterLeave?: () => void;
}
declare type TransitionChildProps<TTag extends ReactTag> = Props<TTag, TransitionChildRenderPropArg> & PropsForFeatures<typeof TransitionChildRenderFeatures> & TransitionClasses & TransitionEvents & {
    appear?: boolean;
};
declare type TransitionChildRenderPropArg = MutableRefObject<HTMLDivElement>;
declare let TransitionChildRenderFeatures: Features;
export declare let Transition: (<TTag extends React.ElementType<any> = "div">(props: TransitionChildProps<TTag> & {
    show?: boolean | undefined;
    appear?: boolean | undefined;
}, ref: Ref<HTMLElement>) => JSX.Element) & {
    displayName: string;
} & {
    Child: (<TTag_1 extends React.ElementType<any> = "div">(props: TransitionChildProps<TTag_1>, ref: MutableRefObject<HTMLElement>) => JSX.Element) & {
        displayName: string;
    };
    Root: (<TTag extends React.ElementType<any> = "div">(props: TransitionChildProps<TTag> & {
        show?: boolean | undefined;
        appear?: boolean | undefined;
    }, ref: Ref<HTMLElement>) => JSX.Element) & {
        displayName: string;
    };
};
export {};
