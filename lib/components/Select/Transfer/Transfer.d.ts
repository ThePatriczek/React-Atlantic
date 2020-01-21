import * as React from 'react';
import { ReactNode } from 'react';
import { Size } from '../../../types';
import { OptionProps } from '../Option';
import { OptionType } from '../Select.utils';
export interface TransferProps {
    placeholder?: string;
    isDisabled?: boolean;
    options?: OptionType[];
    closeText?: string;
    submitText?: string;
    deleteAllText?: string;
    notFoundComponent?: ReactNode;
    size?: Size;
    chosenComponent?: (checked: number, total: number) => ReactNode;
    onChange?: (item: OptionType[]) => void;
    onCancel?: (items: OptionType[]) => void;
    onSubmit?: (items: OptionType[]) => void;
    className?: string;
}
export interface TransferItems extends OptionType {
    isChecked?: boolean;
    className?: string;
}
export declare const Transfer: React.FC<React.PropsWithChildren<TransferProps>> & {
    Option: React.FC<OptionProps>;
};
