import { IconName } from './Icon';

export interface StyledIconProps {
    isRotating?: boolean;
    name?: IconName;
}
export declare const spin: () => import("styled-components").Keyframes;
export declare const StyledIcon: import("styled-components").StyledComponent<"i", any, StyledIconProps, never>;
