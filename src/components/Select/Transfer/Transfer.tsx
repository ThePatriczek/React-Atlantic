import * as React from 'react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Position, Size } from '../../../types';
import { Button } from '../../Button';
import { Checkbox } from '../../Checkbox';
import { Icon } from '../../Icon';
import { NotFound } from '../../NotFound';
import { Option, OptionProps } from '../Option';
import {
  checkChildrenAndOptions,
  getPositionOfElementInViewport,
  isElementInViewport,
  OptionType
} from '../Select.utils';
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
  notFoundComponent?: ReactNode;
  size?: Size;
  chosenComponent?: (checked: number, total: number) => ReactNode;
  onChange?: (item: OptionType[]) => void;
  onCancel?: (items: OptionType[]) => void;
  onSubmit?: (items: OptionType[]) => void;
  className?: string;
}

export interface TransferItems extends OptionType {
  isChecked?: boolean;
  className?: string;
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
    chosenComponent
  } = props;

  const [isOpen, setOpen] = useState<boolean>(false);
  const [resultValue, setResultValue] = useState<string>('');
  const [searchedValue, setSearchedValue] = useState<string>('');
  const [savedItems, setSavedItems] = useState<Map<string, boolean>>(new Map());
  const [isFocused, setFocus] = useState<boolean>(false);
  const [items, setItems] = useState<TransferItems[]>(
    checkChildrenAndOptions(children, options)
  );
  const [position, setPosition] = useState<Position | 'unset' | null>('unset');
  const ref = useRef<HTMLDivElement>(null);
  const checkedItems: TransferItems[] = items.filter(item => item.isChecked);
  const isHalfOpen: boolean = checkedItems.length > 0;

  useEffect(() => {
    if (isOpen) {
      window.onmousedown = onMouseDown;
    }

    ref.current && !isElementInViewport(ref.current)
      ? setPosition(getPositionOfElementInViewport(ref.current))
      : setPosition('unset');

    const map: Map<string, boolean> = new Map();

    checkedItems.forEach(item => {
      if (!savedItems.has(item.value)) {
        map.set(item.value, false);
      }
    });

    items.forEach(item => {
      if (!savedItems.has(item.value)) {
        map.set(item.value, false);
      }
    });

    setItems(prevState =>
      prevState.map(item => {
        item.isChecked = !map.has(item.value);
        return item;
      })
    );

    setSearchedValue('');

    return () => {
      window.onmousedown = null;
    };
  }, [isOpen]);

  const onMouseDown: EventListener = (e: Event) => {
    if (!ref.current?.contains(e.target as Node)) {
      setOpen(false);
      setFocus(false);
    }
  };

  const onChange = (value: string, isChecked: boolean) => {
    setItems(prevState => {
      const arr = prevState.map(item => {
        if (item.value === value) {
          item.isChecked = isChecked;
        }
        return item;
      });

      props.onChange?.(
        arr
          .filter(item => item.isChecked)
          .map(item => ({
            value: item.value,
            label: item.label,
            className: item.className && item.className
          }))
      );

      return arr;
    });
  };

  const uncheckAll = () => {
    setItems(prevState =>
      prevState.map(item => {
        item.isChecked = false;
        return item;
      })
    );
  };

  const onClose = () => {
    setOpen(!isOpen);

    if (props.onCancel) {
      const arr: OptionType[] = [];
      items.forEach(item => {
        const obj = {
          value: item.value,
          label: item.label,
          className: item.className && item.className
        };
        if (savedItems.has(item.value)) {
          arr.push(obj);
        }
      });

      props.onCancel(arr);
    }
  };

  const onSubmit = () => {
    if (props.onSubmit) {
      const arr: OptionType[] = [];
      checkedItems.forEach(item => {
        const obj = {
          value: item.value,
          label: item.label,
          className: item.className && item.className
        };
        arr.push(obj);
      });

      props.onSubmit(arr);
    }
    const arr = checkedItems.map(item => item.value);
    const map: Map<string, boolean> = new Map();

    checkedItems.forEach(item => {
      map.set(item.value, true);
    });

    setResultValue(arr.join(`, `));
    setSavedItems(map);

    setOpen(!isOpen);
    setFocus(!isFocused);
  };

  const inputOnChange = (value: string) => {
    setSearchedValue(value);
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

  const RightSide = (
    <StyledTransferSide isHalfOpen={isHalfOpen} isOpen={isOpen}>
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
        {checkedItems.map(item => (
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
      <Button size={size} type={'default'} onClick={onClose}>
        {closeText}
      </Button>
      <Button size={size} type={'primary'} onClick={onSubmit}>
        {submitText}
      </Button>
    </StyledTransferFooter>
  );

  return (
    <StyledTransferContainer
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
        ref={ref}
        position={position}
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

Transfer.defaultProps = {
  isDisabled: false,
  submitText: 'Submit',
  closeText: 'Close',
  deleteAllText: 'Delete all',
  placeholder: 'Select an option',
  size: 'medium',
  notFoundComponent: <NotFound title={`No items found...`} />,
  chosenComponent: (checked, total) => (
    <>
      <strong>{`Chosen: `}</strong>
      {`${checked} of ${total}`}
    </>
  )
};

Transfer.Option = Option;
