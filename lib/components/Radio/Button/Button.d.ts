import * as React from 'react';
import { Size } from '../../../types';
import { RadioProps } from '../Radio';
export interface ButtonProps {
    size?: Size;
}
export declare const Button: React.FC<React.PropsWithChildren<RadioProps & ButtonProps>>;
