import { FC, PropsWithChildren, ReactText } from 'react';
export declare type TitleLevel = 1 | 2 | 3 | 4 | 5;
export interface TitleProps {
    level?: TitleLevel;
    children: ReactText;
    /** custom className */
    className?: string;
}
export declare const Title: FC<PropsWithChildren<TitleProps>>;
