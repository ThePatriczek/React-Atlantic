import { FC } from 'react';
import { Shape, Size } from '../../types';
export interface SkeletonProps {
    /** small | medium | large */
    size?: Size;
    /** circle |  rectangle */
    shape?: Shape;
    /** custom className */
    className?: string;
    /** width */
    width?: number;
    /** height */
    height?: number;
}
export declare const Skeleton: FC<SkeletonProps>;
