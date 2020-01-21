import { IconName } from './Icon';
export interface StyledIconProps {
    isRotating?: boolean;
    name?: IconName;
}
export declare const spin: () => import("styled-components").Keyframes;
export declare const StyledIcon: import("styled-components").StyledComponent<"i", any, StyledIconProps, never>;
export declare const StyledSVG: import("styled-components").StyledComponent<import("@react-spring/web").AnimatedComponent<"svg">, any, {}, never>;
