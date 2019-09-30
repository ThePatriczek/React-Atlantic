import { HorizontalPosition, Size, Type } from '../../types';
interface StyledSwitchProps {
    isChecked?: boolean;
    isDisabled?: boolean;
    textPosition?: HorizontalPosition;
    size?: Size;
    htmlType?: Type;
}
export declare const StyledSwitchInputHidden: import("styled-components").StyledComponent<"input", any, {
    type: "checkbox";
}, "type">;
export declare const StyledSwitchLabel: import("styled-components").StyledComponent<"label", any, StyledSwitchProps, never>;
export declare const StyledSwitcherWrap: import("styled-components").StyledComponent<"div", any, StyledSwitchProps, never>;
export declare const StyledSwitcherTrue: import("styled-components").StyledComponent<"div", any, StyledSwitchProps, never>;
export declare const StyledSwitcherToggler: import("styled-components").StyledComponent<"div", any, StyledSwitchProps, never>;
export declare const StyledSwitcherFalse: import("styled-components").StyledComponent<"div", any, StyledSwitchProps, never>;
export {};
