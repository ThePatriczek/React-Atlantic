import { FC } from 'react';
import { Size } from '../../../../../types';
interface ArrowButtonProps {
    visible: boolean;
    onClick: () => void;
    isDisabled: boolean;
    isSimple: boolean;
    unique: number;
    size: Size;
}
export declare const ArrowButton: FC<ArrowButtonProps>;
export {};
