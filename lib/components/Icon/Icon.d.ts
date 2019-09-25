import * as React from 'react';

export declare type IconName = 'arrowUp' | 'arrowDoubleUp' | 'arrowRight' | 'arrowDoubleRight' | 'arrowDown' | 'arrowDoubleDown' | 'arrowLeft' | 'arrowDoubleLeft' | 'hamburger' | 'loading';
export interface IconProps {
    name: IconName;
    isRotating?: boolean;
}
export declare const Icon: React.FC<IconProps>;
export declare type Icon = typeof Icon;
