import React, { FC, ReactNode } from 'react';
import { Direction, Size } from '../../../../types';
import {
  StyledTransferLi,
  StyledTransferSide,
  StyledTransferUl
} from '../style/Transfer.style';
import { TransferItem } from '../Transfer';
import { transferItemsRender } from '../Transfer.utils';
import {
  DeleteAllButton,
  StyledChosenHeader,
  StyledDeleteOneButton,
  StyledDeleteOneIcon,
  StyledTransferDeleteAllButtonIcon,
  StyledTransferSpan
} from './style';

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
    direction
  } = props;

  return (
    <StyledTransferSide
      direction={direction}
      isHalfOpen={isHalfOpen}
      isOpen={isOpen}
      isFullWidth={isFullWidth}
    >
      <StyledChosenHeader size={size}>
        <StyledTransferSpan>
          {chosenComponent?.(checkedItems.length, items.length)}
        </StyledTransferSpan>
        <DeleteAllButton
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
        </DeleteAllButton>
      </StyledChosenHeader>
      <StyledTransferUl>
        {checkedItems.map((item: any) => (
          <StyledTransferLi
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
          </StyledTransferLi>
        ))}
      </StyledTransferUl>
    </StyledTransferSide>
  );
};
