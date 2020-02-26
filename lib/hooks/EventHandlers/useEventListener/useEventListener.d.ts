import { MutableRefObject } from 'react';
export interface UseEventListenerValue {
    onKeyDown: EventListener;
    onMouseDown: EventListener;
    onEscape: EventListener;
    onEnter: EventListener;
}
export interface UseEventListenerProps {
    ref?: Readonly<MutableRefObject<Readonly<null> | Readonly<Element>>>;
    onMouseDown?: () => void;
    onKeyDown?: () => void;
    onEscape?: () => void;
    onEnter?: () => void;
    isOpen?: Readonly<boolean>;
    deps?: ReadonlyArray<unknown>;
}
export declare const useEventListener: (props: Readonly<UseEventListenerProps>) => Readonly<UseEventListenerValue>;
