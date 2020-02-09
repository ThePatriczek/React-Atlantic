import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { Direction, Size } from '../../../../types';
import { Checkbox } from '../../../Checkbox';
import { Icon } from '../../../Icon';
import { OptionType } from '../../Select.utils';
import { TransferItem } from '../Transfer';
import {
  StyledInputHeader,
  StyledInputText,
  StyledSearchButton,
  StyledTransferInput,
  StyledTransferLi,
  StyledTransferSide,
  StyledTransferUl
} from '../Transfer.style';

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
    isDisabled,
    resultValue,
    setOpen,
    setFocus,
    size,
    savedItems,
    onChange,
    notFoundComponent,
    isFullWidth,
    direction
  } = props;

  const filter = (item: OptionType) => {
    if (typeof item.label === 'string') {
      return item.label.toLowerCase().includes(searchedValue.toLowerCase());
    } else {
      return item.value.toLowerCase().includes(searchedValue.toLowerCase());
    }
  };
  const filtered = items.filter(filter);

  return (
    <StyledTransferSide
      direction={direction}
      isHalfOpen={isHalfOpen}
      isOpen={isOpen}
      isFullWidth={isFullWidth}
    >
      {isOpen ? (
        <StyledInputHeader>
          <StyledTransferInput
            direction={direction}
            isHalfOpen={isHalfOpen}
            onKeyDown={onKeyDown}
            onChange={inputOnChange}
            isOpen={isOpen}
            value={searchedValue}
            placeholder={placeholder}
            iconRight={'arrowUp'}
            isFullWidth
            autoFocus
            size={size}
          />
          {searchedValue && (
            <StyledSearchButton
              onClick={() => setSearchedValue('')}
              size={size}
            >
              <Icon name={'clear'} />
            </StyledSearchButton>
          )}
        </StyledInputHeader>
      ) : (
        <>
          <StyledTransferInput
            onKeyDown={onKeyDown}
            size={size}
            isDisabled={isDisabled}
            isOpen={isOpen}
            value={resultValue}
            isFullWidth={isFullWidth}
            placeholder={placeholder}
            iconRight={'arrowDown'}
            onFocus={() => {
              setOpen(!isOpen);
              setFocus(!isFocused);
            }}
          />
          <StyledInputText size={size}>
            <>
              {items
                .filter(item => savedItems.has(item.value))
                .map((item, index) => (
                  <span>
                    {item.label}
                    {index < savedItems.size - 1 ? `, ` : ``}
                  </span>
                ))}
            </>
          </StyledInputText>
        </>
      )}
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
                    {item.label}
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
