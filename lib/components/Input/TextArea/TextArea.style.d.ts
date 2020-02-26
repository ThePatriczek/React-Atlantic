import { IconName } from '../../Icon';
export interface StyledTextAreaProps {
    isDisabled?: boolean;
    placeholder?: string;
    autoFocus?: boolean;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    onEnterPress?: (value: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    iconLeft?: IconName;
    iconRight?: IconName;
}
export declare const StyledTextAreaWrapper: import("styled-components").StyledComponent<"div", any, StyledTextAreaProps, never>;
export declare const StyledTextArea: import("styled-components").StyledComponent<"textarea", any, {}, never>;
export declare const StyledTextAreaIcon: import("styled-components").StyledComponent<"span", any, {
    iconLeft: boolean;
    iconRight: boolean;
}, never>;
