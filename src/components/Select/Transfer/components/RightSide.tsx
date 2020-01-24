import React, { FC, ReactNode } from 'react';
import { Direction, Size } from '../../../../types';
import { TransferItem } from '../Transfer';
import {
  DeleteAllButton,
  StyledChosenHeader,
  StyledDeleteOneButton,
  StyledDeleteOneIcon,
  StyledTransferDeleteAllButtonIcon,
  StyledTransferLi,
  StyledTransferSide,
  StyledTransferSpan,
  StyledTransferUl
} from '../Transfer.style';

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

const RightSide: FC<RightSideProps> = props => {
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
            {item.label}
            <StyledDeleteOneButton size={size}>
              <StyledDeleteOneIcon name={'error'} />
            </StyledDeleteOneButton>
          </StyledTransferLi>
        ))}
      </StyledTransferUl>
    </StyledTransferSide>
  );
};

export default RightSide;
