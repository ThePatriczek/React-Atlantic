import { FC } from 'react';
import { Size } from '../../../types';
interface ButtonListProps {
    count: number;
    currentPage: number;
    isDisabled: boolean;
    showArrowJumper: boolean;
    showDoubleArrowJumper: boolean;
    showThreeDots: boolean;
    isSimple: boolean;
    textRight?: string;
    textLeft?: string;
    onChange: (value: number) => void;
    size: Size;
}
export declare const ButtonList: FC<ButtonListProps>;
export {};
