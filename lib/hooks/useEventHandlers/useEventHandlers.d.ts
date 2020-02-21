import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from 'react';
export interface UseOnChangeValue {
    onChangeClick: (e: MouseEvent<HTMLLabelElement> | ChangeEvent<HTMLInputElement>, isPartiallyChecked?: Readonly<boolean>) => void;
    onChangeInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, handlersWithEvent?: Readonly<boolean>) => void;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>, onEnterPress?: (value: Readonly<unknown>) => void, handlersWithEvent?: Readonly<boolean>) => void;
    onKeyDownTextArea: (e: KeyboardEvent<HTMLTextAreaElement>, onEnterPress?: (value: Readonly<string>) => void) => void;
    onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>, onBlur?: () => void) => void;
    onFocus: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>, onFocus?: () => void) => void;
    onClick: () => void;
    isChecked: Readonly<boolean>;
    isFocused: Readonly<boolean>;
    value: Readonly<unknown>;
}
export declare type EventHandlers = MouseEvent<HTMLLabelElement> | ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | KeyboardEvent<HTMLTextAreaElement>;
interface UseEventHandlersProps {
    isDisabled?: Readonly<boolean>;
    isDefaultChecked?: Readonly<boolean>;
    defaultValue?: Readonly<unknown>;
    others?: any;
}
export declare const useEventHandlers: (props: Readonly<UseEventHandlersProps>) => Readonly<UseOnChangeValue>;
export {};
