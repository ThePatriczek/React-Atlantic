/// <reference types="react" />
import ReactDatePicker from 'react-datepicker';
interface StyledDatePickerProps {
    id?: string;
    selected?: Date | null;
    className?: string;
    onChange?: (date?: Date | null) => void;
    onKeyDown?: (e: any) => void;
    onSelect?: (date: Date | null) => void;
    placeholder?: string;
    ref?: any;
}
export declare const StyledReactDatePicker: import("styled-components").StyledComponent<typeof ReactDatePicker, any, StyledDatePickerProps, never>;
export declare const StyledReactDatePickerContainer: import("styled-components").StyledComponent<"div", any, StyledDatePickerProps, never>;
export declare const StyledReactDatePickerButtonContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledReactDatePickerButton: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../Button").ButtonProps>>, any, {}, never>;
export {};
