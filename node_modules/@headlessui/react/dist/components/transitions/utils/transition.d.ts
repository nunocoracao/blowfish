export declare function transition(node: HTMLElement, classes: {
    enter: string[];
    enterFrom: string[];
    enterTo: string[];
    leave: string[];
    leaveFrom: string[];
    leaveTo: string[];
    entered: string[];
}, show: boolean, done?: () => void): () => void;
