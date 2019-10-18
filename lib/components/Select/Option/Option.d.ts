import * as React from 'react';
export interface OptionProps extends React.PropsWithChildren<unknown> {
    value: any;
    className?: string;
}
export declare const Option: React.FC<OptionProps>;
