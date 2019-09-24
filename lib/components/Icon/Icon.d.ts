import * as React from 'react';

export declare type IconName = 'arrowUp' | 'arrowDoubleUp' | 'arrowRight' | 'arrowDoubleRight' | 'arrowDown' | 'arrowDoubleDown' | 'arrowLeft' | 'arrowDoubleLeft' | 'hamburger';
export interface IconProps {
    name: IconName;
}
export declare const Icon: React.FC<IconProps>;
export declare type Icon = typeof Icon;
