import { FC, ReactNode } from 'react';
import { Direction, Size } from '../../../../types';
import { TransferItem } from '../Transfer';
interface RightSideProps {
    checkedItems: TransferItem[];
    isHalfOpen: boolean;
    isOpen: boolean;
    items: TransferItem[];
    uncheckAll: () => void;
    onChange: (value: string, isChecked: boolean) => void;
    isFullWidth?: boolean;
    deleteAllText?: string;
    size?: Size;
    direction?: Direction;
    chosenComponent?: (checked: number, total: number) => ReactNode;
}
declare const RightSide: FC<RightSideProps>;
export default RightSide;
