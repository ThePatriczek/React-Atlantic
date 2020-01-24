import { FC, PropsWithChildren } from 'react';
import { Size } from '../../../types';
import { RadioProps } from '../Radio';
export interface ButtonProps extends RadioProps {
    size?: Size;
}
export declare const Button: FC<PropsWithChildren<ButtonProps>>;
