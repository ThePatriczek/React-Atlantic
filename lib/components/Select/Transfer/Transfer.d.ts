import { FC, PropsWithChildren, ReactNode } from 'react';
import { Direction, Size } from '../../../types';
import { OptionProps } from '../Option';
import { OptionType } from '../Select.utils';
export interface TransferProps {
    value?: OptionType[];
    defaultValue?: OptionType[];
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
    isAlternative?: boolean;
    isFullWidth?: boolean;
    direction?: Direction;
}
export interface TransferItem extends OptionType {
    isChecked?: boolean;
    className?: string;
}
export declare const Transfer: FC<PropsWithChildren<TransferProps>> & {
    Option: FC<OptionProps>;
};
