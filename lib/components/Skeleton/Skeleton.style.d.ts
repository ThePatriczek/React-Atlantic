import { Shape, Size } from '../../types';
interface StyledSkeletonProps {
    size?: Size;
    width?: number | string;
    height?: number;
    shape?: Shape;
    bgColor?: string;
    animationColors?: {
        alpha: string;
        beta: string;
        gamma: string;
    };
}
export declare const StyledSkeleton: import("styled-components").StyledComponent<"div", any, StyledSkeletonProps, never>;
export {};
