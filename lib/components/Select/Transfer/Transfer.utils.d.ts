/// <reference types="react" />
import { TransferItem } from './Transfer';
export declare const getMergedItems: (items: ReadonlyArray<TransferItem>, checkedItems: ReadonlyArray<TransferItem>) => TransferItem[];
export declare const distinguishTypeAndReturnLabel: (item: TransferItem) => any;
export declare const transferItemsRender: (item: TransferItem, isCheckbox?: boolean | undefined) => JSX.Element | null;
