import { FC } from 'react';
interface ArrowButtonProps {
    visible: boolean;
    onClick: () => void;
    isDisabled: boolean;
    isSimple: boolean;
    unique: number;
}
export declare const ArrowButton: FC<ArrowButtonProps>;
export {};
