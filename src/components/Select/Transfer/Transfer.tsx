import * as React from 'react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Size } from '../../../types';
import { Button } from '../../Button';
import { Checkbox } from '../../Checkbox';
import { Icon } from '../../Icon';
import { Option, OptionProps } from '../Option';
import { checkChildrenAndOptions, OptionType } from '../Select.utils';
import {
  DeleteAllButton,
  StyledChosenHeader,
  StyledInputHeader,
  StyledSearchButton,
  StyledTransfer,
  StyledTransferContainer,
  StyledTransferDeleteAllButtonIcon,
  StyledTransferFooter,
  StyledTransferInput,
  StyledTransferLi,
  StyledTransferSide,
  StyledTransferSpan,
  StyledTransferUl
} from './Transfer.style';

export interface TransferProps {
  placeholder?: string;
  isDisabled?: boolean;
  options?: OptionType[];
  closeText?: string;
  submitText?: string;
  deleteAllText?: string;
  notFoundComponent?: any;
  size?: Size;
  chosenText?: (chosen: string, outOf: string) => { [key: string]: string };
}

export const Transfer: React.FC<React.PropsWithChildren<TransferProps>> & {
  Option: React.FC<OptionProps>;
} = (props: React.PropsWithChildren<TransferProps>) => {
  const {
    placeholder,
    options,
    isDisabled,
    children,
    closeText,
    submitText,
    deleteAllText,
    notFoundComponent,
    size,
    chosenText
  } = props;
  const [isOpen, setOpen] = useState<boolean>(false);
  const [resultValue, setResultValue] = useState<string>('');
  const [searchedValue, setSearchedValue] = useState<string>('');
  const [savedItems, setSavedItems] = useState<Map<string, boolean>>(new Map());
  const [isFocused, setFocus] = useState<boolean>(false);
  const [items, setItems] = useState<OptionType[]>(
    checkChildrenAndOptions(children, options)
  );
  const ref = useRef<HTMLDivElement>(null);
  const checkedItems = items?.filter(item => item.isChecked);
  const isHalfOpen = checkedItems?.length > 0;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    const map: Map<string, boolean> = new Map();

    checkedItems?.forEach(item => {
      if (!savedItems.has(item.value)) {
        map.set(item.value, false);
      }
    });

    items?.forEach(item => {
      if (!savedItems.has(item.value)) {
        map.set(item.value, false);
      }
    });

    setItems(prevState =>
      prevState?.map(item => {
        item.isChecked = !map.has(item.value);
        return item;
      })
    );

    setSearchedValue('');
  }, [isOpen]);

  const handleClickOutside: EventListener = (e: Event) => {
    if (!ref?.current?.contains(e.target as Node)) {
      setOpen(false);
      setFocus(false);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  };

  const onChange = (value: string, isChecked: boolean) => {
    setItems(prevState =>
      prevState.map(item => {
        if (item.value === value) {
          item.isChecked = isChecked;
        }
        return item;
      })
    );
  };

  const uncheckAll = () => {
    setResultValue('');
    setItems(prevState =>
      prevState.map(item => {
        item.isChecked = false;
        return item;
      })
    );
  };

  const submit = () => {
    const arr = checkedItems?.map(item => item.value);
    const map: Map<string, boolean> = new Map();

    checkedItems.forEach(item => {
      map.set(item.value, true);
    });

    setResultValue(arr.join(`, `));
    setSavedItems(map);
  };

  const inputOnChange = (value: string) => {
    setSearchedValue(value);
  };

  const assembleChosenText = (object: any) => {
    return (
      <>
        <strong>{`${object && object.chosen}: `}</strong>
        {`${checkedItems.length} ${object && object.outOf} ${items.length}`}
      </>
    );
  };

  const LeftSide = (
    <StyledTransferSide isHalfOpen={isHalfOpen} isOpen={isOpen}>
      {isOpen ? (
        <StyledInputHeader>
          <StyledTransferInput
            onChange={inputOnChange}
            isOpen={isOpen}
            value={searchedValue}
            placeholder={placeholder}
            iconRight={'arrowUp'}
            isFullWidth
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
        <StyledTransferInput
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
      )}
      {isOpen && (
        <>
          {items?.filter(item =>
            item.value.toLowerCase().includes(searchedValue.toLowerCase())
          ).length !== 0 && (
            <StyledTransferUl isOpen={isOpen}>
              {items
                ?.filter(item =>
                  item.value.toLowerCase().includes(searchedValue.toLowerCase())
                )
                .map(item => (
                  <StyledTransferLi key={item.value} size={size}>
                    <Checkbox
                      isChecked={item.isChecked}
                      onChange={isChecked => onChange(item.value, isChecked)}
                    >
                      {item.label}
                    </Checkbox>
                  </StyledTransferLi>
                ))}
            </StyledTransferUl>
          )}
          {items?.filter(item =>
            item.value.toLowerCase().includes(searchedValue.toLowerCase())
          ).length === 0 && <>{notFoundComponent}</>}
        </>
      )}
    </StyledTransferSide>
  );

  const RightSide = (
    <StyledTransferSide isHalfOpen={isHalfOpen} isOpen={isOpen}>
      <StyledChosenHeader size={size}>
        <StyledTransferSpan>
          {assembleChosenText(chosenText)}
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
        {checkedItems?.map(item => (
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

  const Footer = (
    <StyledTransferFooter>
      <Button size={size} type={'default'} onClick={() => setOpen(!isOpen)}>
        {closeText}
      </Button>
      <Button
        size={size}
        type={'primary'}
        onClick={() => {
          submit();
          setOpen(!isOpen);
          setFocus(!isFocused);
        }}
      >
        {submitText}
      </Button>
    </StyledTransferFooter>
  );

  return (
    <StyledTransferContainer
      ref={ref}
      placeholder={placeholder}
      deleteAllText={deleteAllText}
      closeText={closeText}
      submitText={submitText}
      isDisabled={isDisabled}
      options={options}
      notFoundComponent={notFoundComponent}
      size={size}
    >
      <StyledTransfer
        isHalfOpen={isHalfOpen}
        isOpen={isOpen}
        isFocused={isFocused}
        isDisabled={isDisabled}
      >
        {LeftSide}
        {isOpen && isHalfOpen && RightSide}
        {isOpen && Footer}
      </StyledTransfer>
    </StyledTransferContainer>
  );
};

Transfer.Option = Option;
