import React, { FC, ReactNode } from 'react';
import { Direction, Size } from '../../../../types';
import {
  StyledTransferItem,
  StyledTransferRightList,
  StyledTransferSide
} from '../style/Transfer.style';
import { BothSidesProps, TransferItem } from '../Transfer';
import { transferItemsRender } from '../Transfer.utils';
import {
  StyledChosenHeader,
  StyledDeleteAllButton,
  StyledDeleteOneButton,
  StyledDeleteOneIcon,
  StyledTransferDeleteAllButtonIcon,
  StyledTransferSpan
} from './style';

interface RightSideProps extends BothSidesProps {
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

export const RightSide: FC<RightSideProps> = props => {
  const {
    chosenComponent,
    checkedItems,
    isHalfOpen,
    isOpen,
    items,
    uncheckAll,
    size,
    deleteAllText,
    onChange,
    isFullWidth,
    direction,
    visibleRows
  } = props;

  return (
    <StyledTransferSide
      direction={direction}
      isHalfOpen={isHalfOpen}
      isOpen={isOpen}
      isFullWidth={isFullWidth}
      size={size}
      side={'right'}
    >
      <StyledChosenHeader size={size}>
        <StyledTransferSpan>
          {chosenComponent?.(checkedItems.length, items.length)}
        </StyledTransferSpan>
        <StyledDeleteAllButton
          isTransparent
          globalSize={size}
          size={'small'}
          type={'error'}
          onClick={() => {
            uncheckAll();
          }}
        >
          {size === 'small' && (
            <StyledTransferDeleteAllButtonIcon name={'trash'} size={size} />
          )}
          {size !== 'small' && deleteAllText}
        </StyledDeleteAllButton>
      </StyledChosenHeader>
      <StyledTransferRightList visibleRows={visibleRows} size={size}>
        {checkedItems.map((item: any) => (
          <StyledTransferItem
            size={size}
            key={item.value}
            onClick={() => {
              onChange(item.value, false);
            }}
          >
            {transferItemsRender(item)}
            <StyledDeleteOneButton size={size}>
              <StyledDeleteOneIcon name={'error'} />
            </StyledDeleteOneButton>
          </StyledTransferItem>
        ))}
      </StyledTransferRightList>
    </StyledTransferSide>
  );
};
