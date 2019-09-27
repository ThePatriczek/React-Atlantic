import { Size } from '../../types';
export interface StyledInputWrapperProps {
    isLoading?: boolean;
    iconLeft?: boolean;
    iconRight?: boolean;
    isFocused?: boolean;
    hasValue?: boolean;
    isDisabled?: boolean;
    size: Size;
    isFullWidth?: boolean;
}
export declare const StyledInputWrapper: import("styled-components").StyledComponent<"span", any, StyledInputWrapperProps, never>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, {
    isRound?: boolean | undefined;
    size: Size;
    isFullWidth?: boolean | undefined;
}, never>;
export declare const StyledInputWrapperAlt: import("styled-components").StyledComponent<"span", any, StyledInputWrapperProps, never>;
