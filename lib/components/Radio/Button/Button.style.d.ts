import { Size } from '../../../types';
interface StyledRadioButtonProps {
    isChecked?: boolean;
    isDisabled?: boolean;
    size?: Size;
}
export declare const StyledRadioButtonInputHidden: import("styled-components").StyledComponent<"input", any, {
    type: "radio";
}, "type">;
export declare const StyledRadioButtonLabel: import("styled-components").StyledComponent<"label", any, StyledRadioButtonProps, never>;
export declare const StyledRadioButtonSpan: import("styled-components").StyledComponent<"span", any, StyledRadioButtonProps, never>;
export {};
