/// <reference types="react" />
import { Position, Size } from '../../../types';
import { IconName } from '../../Icon';
import { OptionType } from '../Select.utils';
interface StyledTransferProps {
    isOpen?: boolean;
    isHalfOpen?: boolean;
    iconLeft?: IconName;
    placeholder?: string;
    isDisabled?: boolean;
    options?: OptionType[];
    closeText?: string;
    submitText?: string;
    deleteAllText?: string;
    notFoundMessage?: any;
    isFocused?: boolean;
    size?: Size;
    notFoundComponent?: any;
    position?: Position | 'unset' | null;
}
export declare const StyledTransferContainer: import("styled-components").StyledComponent<"div", any, StyledTransferProps, never>;
export declare const StyledTransferUl: import("styled-components").StyledComponent<"ul", any, StyledTransferProps, never>;
export declare const StyledTransferInput: import("styled-components").StyledComponent<import("react").FC<import("../../Input").InputProps> & {
    TextArea: import("react").FC<import("../../Input").TextAreaProps>;
}, any, StyledTransferProps, never>;
export declare const StyledSearchButton: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../../Button").ButtonProps>>, any, StyledTransferProps, never>;
export declare const StyledChosenHeader: import("styled-components").StyledComponent<"div", any, StyledTransferProps, never>;
export declare const StyledInputHeader: import("styled-components").StyledComponent<"div", any, StyledTransferProps, never>;
export declare const StyledTransferSide: import("styled-components").StyledComponent<"div", any, StyledTransferProps, never>;
export declare const StyledTransferFooter: import("styled-components").StyledComponent<"div", any, StyledTransferProps, never>;
export declare const StyledTransferDeleteAllButtonIcon: import("styled-components").StyledComponent<import("react").FC<import("../../Icon").IconProps>, any, StyledTransferProps, never>;
export declare const StyledTransferLi: import("styled-components").StyledComponent<"li", any, StyledTransferProps, never>;
export declare const DeleteAllButton: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../../Button").ButtonProps>>, any, StyledTransferProps, never>;
export declare const StyledTransferSpan: import("styled-components").StyledComponent<"span", any, StyledTransferProps, never>;
export declare const StyledTransfer: import("styled-components").StyledComponent<"div", any, StyledTransferProps, never>;
export {};
