import { FocusEvent } from 'react';
export interface UseFocusValue {
    onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>, onBlur?: () => void) => void;
    onFocus: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>, onFocus?: () => void) => void;
    isFocused: Readonly<boolean>;
}
export declare const useFocus: () => Readonly<UseFocusValue>;
