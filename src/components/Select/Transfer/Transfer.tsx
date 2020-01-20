import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { Button } from '../../Button';
import { Checkbox } from '../../Checkbox';
import { Icon } from '../../Icon';
import { Typography } from '../../Typography';
import { Option, OptionProps } from '../Option';
import { checkChildrenAndOptions, OptionType } from '../Select.utils';
import {
  StyledSearchButton,
  StyledTransfer,
  StyledTransferContainer,
  StyledTransferDeleteAllButtonIcon,
  StyledTransferFooter,
  StyledTransferInput,
  StyledTransferLi,
  StyledTransferSide,
  StyledTransferSideHeader,
  StyledTransferSpan,
  StyledTransferUl
} from './Transfer.style';

const { Text } = Typography;

export interface TransferProps {
  placeholder?: string;
  isDisabled?: boolean;
  options?: OptionType[];
  closeButton?: string;
  submitButton?: string;
  deleteAllButton?: string;
  notFoundMessage: string;
}

export const Transfer: React.FC<React.PropsWithChildren<TransferProps>> & {
  Option: React.FC<OptionProps>;
} = (props: React.PropsWithChildren<TransferProps>) => {
  const {
    placeholder,
    options,
    isDisabled,
    children,
    closeButton,
    submitButton,
    deleteAllButton,
    notFoundMessage
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [resultValue, setResultValue] = useState<string>('');
  const [searchedValue, setSearchedValue] = useState<string>('');
  const [savedItems, setSavedItems] = useState<Map<string, boolean>>(new Map());
  const [items, setItems] = useState<OptionType[]>(
    checkChildrenAndOptions(children, options)
  );
  const checkedItems = items?.filter(item => item.isChecked);

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
      act(() => {
        setOpen(false);
      });
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

  const inputOnChange = (e: any) => {
    setSearchedValue(e);
  };

  const isHalfOpen = checkedItems?.length > 0;

  return (
    <StyledTransferContainer
      ref={ref}
      placeholder={placeholder}
      deleteAllButton={deleteAllButton}
      closeButton={closeButton}
      submitButton={submitButton}
      isDisabled={isDisabled}
      options={options}
      notFoundMessage={notFoundMessage}
    >
      <StyledTransfer isHalfOpen={isHalfOpen} isOpen={isOpen}>
        <StyledTransferSide isHalfOpen={isHalfOpen} isOpen={isOpen}>
          <StyledTransferSideHeader>
            {isOpen ? (
              <>
                <StyledTransferInput
                  onChange={inputOnChange}
                  isOpen={isOpen}
                  value={searchedValue}
                  placeholder={placeholder}
                  iconLeft={searchedValue ? undefined : 'search'}
                  isFullWidth
                />
                {searchedValue && (
                  <StyledSearchButton
                    onClick={() => setSearchedValue('')}
                    size={'medium'}
                  >
                    <Icon name={'clear'} />
                  </StyledSearchButton>
                )}
              </>
            ) : (
              <StyledTransferInput
                isDisabled={isDisabled}
                isOpen={isOpen}
                value={resultValue}
                placeholder={placeholder}
                iconLeft={'search'}
                isFullWidth
                onFocus={() => setOpen(!isOpen)}
              />
            )}
          </StyledTransferSideHeader>
          {isOpen && (
            <StyledTransferUl>
              {items
                ?.filter(item =>
                  item.value.toLowerCase().includes(searchedValue.toLowerCase())
                )
                .map(item => (
                  <StyledTransferLi key={item.value}>
                    <Checkbox
                      isChecked={item.isChecked}
                      onChange={isChecked => onChange(item.value, isChecked)}
                    >
                      <StyledTransferSpan>{item.label}</StyledTransferSpan>
                    </Checkbox>
                  </StyledTransferLi>
                ))}
              {items?.filter(item =>
                item.value.toLowerCase().includes(searchedValue.toLowerCase())
              ).length === 0 && (
                <StyledTransferLi>
                  <Text>{notFoundMessage}</Text>
                </StyledTransferLi>
              )}
            </StyledTransferUl>
          )}
        </StyledTransferSide>

        {isOpen && isHalfOpen && (
          <StyledTransferSide isHalfOpen={isHalfOpen} isOpen={isOpen}>
            <StyledTransferSideHeader>
              <StyledTransferSpan>
                <strong>{`Vybráno: `}</strong>
                {`${checkedItems.length} z ${items.length}`}
              </StyledTransferSpan>
              <Button
                isTransparent
                size={'small'}
                type={'error'}
                onClick={() => {
                  uncheckAll();
                }}
              >
                <StyledTransferDeleteAllButtonIcon name={'trash'} />
                {deleteAllButton}
              </Button>
            </StyledTransferSideHeader>
            <StyledTransferUl>
              {checkedItems?.map(item => (
                <StyledTransferLi
                  key={item.value}
                  onClick={() => {
                    onChange(item.value, false);
                  }}
                >
                  <StyledTransferSpan>{item.label}</StyledTransferSpan>
                  <Icon name={'error'} />
                </StyledTransferLi>
              ))}
            </StyledTransferUl>
          </StyledTransferSide>
        )}
        {isOpen && (
          <StyledTransferFooter>
            <Button type={'default'} onClick={() => setOpen(!isOpen)}>
              {closeButton}
            </Button>
            <Button
              type={'primary'}
              onClick={() => {
                submit();
                setOpen(!isOpen);
              }}
            >
              {submitButton}
            </Button>
          </StyledTransferFooter>
        )}
      </StyledTransfer>
    </StyledTransferContainer>
  );
};

Transfer.Option = Option;
