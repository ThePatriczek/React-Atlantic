import { ChangeEvent, KeyboardEvent } from 'react';
export interface UseOnChangeValue {
    onChangeInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, handlersWithEvent?: Readonly<boolean>) => void;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>, onEnterPress?: (value: Readonly<unknown>) => void, handlersWithEvent?: Readonly<boolean>) => void;
    onKeyDownTextArea: (e: KeyboardEvent<HTMLTextAreaElement>, onEnterPress?: (value: Readonly<string>) => void) => void;
    value: Readonly<unknown>;
}
export interface UseEventHandlersProps {
    isDisabled?: Readonly<boolean>;
    defaultValue?: Readonly<unknown>;
    value?: Readonly<string>;
    onChange?: (x: string | ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>) => void;
    deps?: ReadonlyArray<unknown>;
}
export declare const useKeyboardChange: (props: Readonly<UseEventHandlersProps>) => Readonly<UseOnChangeValue>;
