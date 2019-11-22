interface StyledCheckboxProps {
    isChecked?: boolean;
    isPartiallyChecked?: boolean;
    isDisabled?: boolean;
    isTextDotted?: boolean;
    name?: string;
    position?: 'right' | 'left';
}
export declare const HiddenCheckbox: import("styled-components").StyledComponent<"input", any, {
    type: "checkbox";
}, "type">;
export declare const StyledCheckboxInputShown: import("styled-components").StyledComponent<"div", any, {
    className: "atlantic--checkbox";
} & StyledCheckboxProps, "className">;
export declare const StyledCheckboxLabel: import("styled-components").StyledComponent<"label", any, StyledCheckboxProps, never>;
export declare const StyledCheckboxMark: import("styled-components").StyledComponent<"div", any, StyledCheckboxProps, never>;
export declare const StyledCheckboxSpan: import("styled-components").StyledComponent<"span", any, StyledCheckboxProps, never>;
export declare const StyledCheckboxIcon: import("styled-components").StyledComponent<"i", any, StyledCheckboxProps, never>;
export {};
