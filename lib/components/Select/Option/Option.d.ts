import * as React from 'react';
export interface OptionProps extends React.PropsWithChildren<unknown> {
    value: string | string[] | number;
    className?: string;
}
export declare const Option: React.FC<OptionProps>;
