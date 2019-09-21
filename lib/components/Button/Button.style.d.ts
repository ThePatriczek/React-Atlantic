import { Size } from '../../types';
import { ButtonType } from './Button';
interface StyledButtonProps {
    type?: ButtonType;
    isRounded: boolean;
    size: Size;
    isFullWide: boolean;
}
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, StyledButtonProps, never>;
export {};
