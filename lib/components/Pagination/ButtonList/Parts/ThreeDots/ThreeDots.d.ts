import { FC } from 'react';
interface ThreeDotsProps {
    onClick?: (value: boolean) => void;
    isRight: boolean;
    unique: number;
    text: string;
}
export declare const ThreeDots: FC<ThreeDotsProps>;
export {};
