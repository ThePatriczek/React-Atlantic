import React, { Dispatch, FC, ReactNode, SetStateAction, useRef } from 'react';
import { Size } from '../../../../types';
import { Checkbox } from '../../../Checkbox';
import { Icon } from '../../../Icon';
import { OptionType } from '../../Select.utils';
import { TransferItems } from '../Transfer';
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
  items: TransferItems[];
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
    isFullWidth
  } = props;

  // const input = useRef<HTMLInputElement>(null);
  // console.log(input);
  return (
    <StyledTransferSide
      isHalfOpen={isHalfOpen}
      isOpen={isOpen}
      isFullWidth={isFullWidth}
    >
      {isOpen ? (
        <StyledInputHeader>
          <StyledTransferInput
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
            placeholder={placeholder}
            iconRight={'arrowDown'}
            isFullWidth
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
                  <>
                    {item.label}
                    {index < savedItems.size - 1 ? `, ` : ``}
                  </>
                ))}
            </>
          </StyledInputText>
        </>
      )}
      {isOpen && (
        <>
          {items.filter(item =>
            item.value.toLowerCase().includes(searchedValue.toLowerCase())
          ).length !== 0 && (
            <StyledTransferUl isOpen={isOpen}>
              {items
                .filter(item =>
                  item.value.toLowerCase().includes(searchedValue.toLowerCase())
                )
                .map(item => (
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
          {items.filter(item =>
            item.value.toLowerCase().includes(searchedValue.toLowerCase())
          ).length === 0 && <>{notFoundComponent}</>}
        </>
      )}
    </StyledTransferSide>
  );
};

export default LeftSide;
