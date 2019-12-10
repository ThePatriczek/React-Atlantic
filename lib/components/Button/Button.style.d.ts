import { Size } from '../../types';
import { ButtonType } from './Button';
interface StyledButtonProps {
    styleType?: ButtonType;
    isRound: boolean;
    size: Size;
    isFullWidth: boolean;
    animationRunning?: boolean;
    isTransparent?: boolean;
}
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, StyledButtonProps, never>;
export declare const StyledTypoButton: import("styled-components").StyledComponent<"button", any, {}, never>;
export {};
