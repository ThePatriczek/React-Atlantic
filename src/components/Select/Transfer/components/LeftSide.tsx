import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { Direction, Size } from '../../../../types';
import { Checkbox } from '../../../Checkbox';
import { Icon } from '../../../Icon';
import { OptionType } from '../../Select.utils';
import { TransferItem } from '../Transfer';
import {
  StyledInputHeader,
  StyledSearchButton,
  StyledTransferInput,
  StyledTransferLi,
  StyledTransferSide,
  StyledTransferUl
} from '../Transfer.style';
import { transferItemsRender } from '../Transfer.utils';

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

const LeftSide: FC<LeftSideProps> = props => {
  const {
    items,
    isFocused,
    isHalfOpen,
    onKeyDown,
    inputOnChange,
    isOpen,
    searchedValue,
    placeholder,
    setSearchedValue,
    isAlternative,
    isDisabled,
    resultValue,
    setOpen,
    setFocus,
    size,
    onChange,
    notFoundComponent,
    isFullWidth,
    direction
  } = props;

  const filtration = (item: OptionType) => {
    if (typeof item.label === 'string') {
      return item.label.toLowerCase().includes(searchedValue.toLowerCase());
    } else if (
      item.label &&
      typeof item.label === 'object' &&
      'props' in item.label
    ) {
      return item.label.props.children
        .toLowerCase()
        .includes(searchedValue.toLowerCase());
    }
    return null;
  };

  const filtered = items.filter(filtration);

  const onFocus = () => {
    if (!isOpen) {
      setOpen(!isOpen);
      setFocus(!isFocused);
    }
  };

  return (
    <StyledTransferSide
      direction={direction}
      isHalfOpen={isHalfOpen}
      isOpen={isOpen}
      isFullWidth={isFullWidth}
    >
      <StyledInputHeader>
        <StyledTransferInput
          transferFocus={isOpen}
          isAlternative={isAlternative}
          direction={direction}
          isHalfOpen={isHalfOpen}
          onKeyDown={onKeyDown}
          onChange={inputOnChange}
          isOpen={isOpen}
          value={isOpen ? searchedValue : resultValue}
          placeholder={placeholder}
          iconRight={isOpen ? 'arrowUp' : 'arrowDown'}
          isFullWidth
          onFocus={onFocus}
          size={size}
        />
        {searchedValue && (
          <StyledSearchButton onClick={() => setSearchedValue('')} size={size}>
            <Icon name={'clear'} />
          </StyledSearchButton>
        )}
      </StyledInputHeader>
      {isOpen && (
        <>
          {filtered.length > 0 && (
            <StyledTransferUl isOpen={isOpen}>
              {filtered.map(item => (
                <StyledTransferLi key={item.value} size={size}>
                  <Checkbox
                    isChecked={item.isChecked}
                    onChange={isChecked => {
                      onChange(item.value, isChecked);
                    }}
                  >
                    {transferItemsRender(item, true)}
                  </Checkbox>
                </StyledTransferLi>
              ))}
            </StyledTransferUl>
          )}
          {filtered.length === 0 && <>{notFoundComponent}</>}
        </>
      )}
    </StyledTransferSide>
  );
};

export default LeftSide;
