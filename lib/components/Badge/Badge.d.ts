import { FC, ReactText } from 'react';
import { Size, Type } from '../../types';
export interface BadgeProps {
    children?: ReactText;
    /** primary | success | warning | error */
    type?: Type;
    /** small | medium | large */
    size?: Size;
    /** custom className */
    className?: string;
}
export declare const Badge: FC<BadgeProps>;
