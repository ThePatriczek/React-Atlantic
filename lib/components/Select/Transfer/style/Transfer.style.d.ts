import { ReactNode } from 'react';
import { Direction, HorizontalPosition, Size } from '../../../../types';
import { IconName } from '../../../Icon';
import { OptionType } from '../../Select.utils';
export interface StyledTransferProps {
    className?: string;
    isOpen?: boolean;
    direction?: Direction;
    isHalfOpen?: boolean;
    iconLeft?: IconName;
    placeholder?: string;
    isDisabled?: boolean;
    options?: OptionType[];
    globalSize?: Size;
    closeText?: string;
    submitText?: string;
    deleteAllText?: string;
    notFoundMessage?: any;
    isFocused?: boolean;
    size?: Size;
    notFoundComponent?: any;
    isFullWidth?: boolean;
    labelLeft?: string | ReactNode;
    labelTop?: string | ReactNode;
    ref?: any;
}
export interface StyledTransferSideProps extends StyledTransferProps {
    side: HorizontalPosition;
}
export declare const StyledTransferContainer: import("styled-components").StyledComponent<"div", any, StyledTransferProps, never>;
export declare const StyledTransferForm: import("styled-components").StyledComponent<"form", any, StyledTransferProps, never>;
export declare const StyledTransferSide: import("styled-components").StyledComponent<"div", any, StyledTransferSideProps, never>;
export declare const StyledTransferUl: import("styled-components").StyledComponent<"ul", any, StyledTransferProps, never>;
export declare const StyledTransferLi: import("styled-components").StyledComponent<"li", any, StyledTransferProps, never>;
export declare const StyledTransfer: import("styled-components").StyledComponent<"div", any, StyledTransferProps, never>;
