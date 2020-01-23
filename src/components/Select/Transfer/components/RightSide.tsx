import React, { FC, ReactNode } from 'react';
import { Size } from '../../../../types';
import { Icon } from '../../../Icon';
import { TransferItems } from '../Transfer';
import {
  DeleteAllButton,
  StyledChosenHeader,
  StyledTransferDeleteAllButtonIcon,
  StyledTransferLi,
  StyledTransferSide,
  StyledTransferSpan,
  StyledTransferUl
} from '../Transfer.style';

interface RightSideProps {
  checkedItems: TransferItems[];
  isHalfOpen: boolean;
  isOpen: boolean;
  items: TransferItems[];
  uncheckAll: () => void;
  onChange: (value: string, isChecked: boolean) => void;
  isFullWidth?: boolean;
  deleteAllText?: string;
  size?: Size;
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
    isFullWidth
  } = props;

  return (
    <StyledTransferSide isHalfOpen={isHalfOpen} isOpen={isOpen} isFullWidth={isFullWidth}>
      <StyledChosenHeader size={size}>
        <StyledTransferSpan>
          {chosenComponent?.(checkedItems.length, items.length)}
        </StyledTransferSpan>
        <DeleteAllButton
          isTransparent
          size={'small'}
          type={'error'}
          onClick={() => {
            uncheckAll();
          }}
        >
          <StyledTransferDeleteAllButtonIcon name={'trash'} size={size} />
          {size === 'small' ? null : deleteAllText}
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
            <Icon name={'error'} />
          </StyledTransferLi>
        ))}
      </StyledTransferUl>
    </StyledTransferSide>
  );
};

export default RightSide;
