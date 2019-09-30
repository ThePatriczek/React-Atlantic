import * as React from 'react';
export declare type TitleLevel = 1 | 2 | 3 | 4 | 5;
export interface TitleProps {
    level?: TitleLevel;
    children: React.ReactText;
    /** custom className */
    className?: string;
}
export declare const Title: React.FC<React.PropsWithChildren<TitleProps>>;
