import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { Direction, Size } from '../../../../types';
import { OptionType } from '../../Select.utils';
import { TransferItem } from '../Transfer';
export interface LeftSideProps {
    placeholder?: string;
    direction?: Direction;
    isDisabled?: boolean;
    options?: OptionType[];
    closeText?: string;
    submitText?: string;
    notFoundComponent?: ReactNode;
    chosenComponent?: (checked: number, total: number) => ReactNode;
    className?: string;
    size?: Size;
    isFullWidth?: boolean;
    isHalfOpen: boolean;
    isOpen: boolean;
    items: TransferItem[];
    onChange: (value: string, isChecked: boolean) => void;
    savedItems: Map<string, boolean>;
    setFocus: Dispatch<SetStateAction<boolean>>;
    setOpen: Dispatch<SetStateAction<boolean>>;
    isFocused: boolean;
    resultValue: string;
    setSearchedValue: Dispatch<SetStateAction<string>>;
    searchedValue: string;
    isAlternative?: boolean;
    inputOnChange: (value: string) => void;
    onKeyDown: (e: any) => void;
}
declare const LeftSide: FC<LeftSideProps>;
export default LeftSide;
