import { FC, PropsWithChildren } from 'react';
export interface ColumnProps {
    onClick?: () => void;
    className?: Readonly<string>;
    name?: string;
}
export interface HiddenColumnProps extends ColumnProps {
    isHeader?: Readonly<boolean>;
}
export declare const Column: FC<Readonly<PropsWithChildren<HiddenColumnProps>>>;
