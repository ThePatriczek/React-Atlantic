import { Size } from '../../types';
interface SelectProps {
    isMenuOpened?: boolean;
    isFocused?: boolean;
    isMulti?: boolean;
    hasValue?: boolean;
    isFullWidth?: boolean;
    isDisabled?: boolean;
    size?: Size;
}
export declare const SelectContainer: import("styled-components").StyledComponent<"div", any, SelectProps, never>;
export declare const Control: import("styled-components").StyledComponent<"div", any, SelectProps, never>;
export declare const ValueContainer: import("styled-components").StyledComponent<"div", any, SelectProps, never>;
export declare const SingleValue: import("styled-components").StyledComponent<"div", any, SelectProps, never>;
export declare const MultiValue: import("styled-components").StyledComponent<"div", any, SelectProps, never>;
export declare const ClearIndicator: import("styled-components").StyledComponent<"div", any, SelectProps, never>;
export declare const MultiValueLabel: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MultiValueRemove: import("styled-components").StyledComponent<"div", any, SelectProps, never>;
export declare const NoOptionsMessage: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CrossIcon: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const Placeholder: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const IndicatorsContainer: import("styled-components").StyledComponent<"div", any, SelectProps, never>;
export declare const DropdownIndicator: import("styled-components").StyledComponent<"div", any, SelectProps, never>;
export declare const IndicatorSeparator: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Menu: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MenuList: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, {}, never>;
export {};
