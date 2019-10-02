interface StyledRadioProps {
    isChecked?: boolean;
    isDisabled?: boolean;
    name?: string;
    textPosition?: 'right' | 'left';
}
export declare const StyledRadioInputHidden: import("styled-components").StyledComponent<"input", any, {
    type: "radio";
}, "type">;
export declare const StyledRadioLabel: import("styled-components").StyledComponent<"label", any, StyledRadioProps, never>;
export declare const StyledRadioSpan: import("styled-components").StyledComponent<"span", any, StyledRadioProps, never>;
export declare const StyledRadioInputShown: import("styled-components").StyledComponent<"div", any, StyledRadioProps, never>;
export declare const StyledRadioMark: import("styled-components").StyledComponent<"div", any, StyledRadioProps, never>;
export {};
