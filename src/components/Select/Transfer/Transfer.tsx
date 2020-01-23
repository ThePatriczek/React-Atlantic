import * as React from 'react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Position, Size } from '../../../types';
import { NotFound } from '../../NotFound';
import { Option, OptionProps } from '../Option';
import {
  checkChildrenAndOptions,
  getPositionOfElementInViewport,
  isElementInViewport,
  OptionType
} from '../Select.utils';
import Footer from './components/Footer';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import {
  StyledTransfer,
  StyledTransferContainer,
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
  isFullWidth?: boolean;
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
    chosenComponent,
    isFullWidth
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
      window.onkeydown = onKeyDown;
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
      window.onkeydown = null;
    };
  }, [isOpen]);

  const onMouseDown: EventListener = (e: Event) => {
    if (!ref.current?.contains(e.target as Node)) {
      setOpen(false);
      setFocus(false);
    }
  };

  const onKeyDown = (e: any) => {
    if (e.key === 'Escape') {
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

  const formSubmit = (e: any) => {
    e.preventDefault();
    onSubmit();
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
    const arr = checkedItems.map(item => item.label);
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
        isFullWidth={isFullWidth}
        position={position}
        isHalfOpen={isHalfOpen}
        isOpen={isOpen}
        isFocused={isFocused}
        isDisabled={isDisabled}
      >
        <form onSubmit={formSubmit}>
          <LeftSide
            isHalfOpen={isHalfOpen}
            isOpen={isOpen}
            onKeyDown={onKeyDown}
            inputOnChange={inputOnChange}
            searchedValue={searchedValue}
            placeholder={placeholder}
            setSearchedValue={setSearchedValue}
            isDisabled={isDisabled}
            resultValue={resultValue}
            setOpen={setOpen}
            setFocus={setFocus}
            size={size}
            savedItems={savedItems}
            onChange={onChange}
            notFoundComponent={notFoundComponent}
            isFocused={isFocused}
            items={items}
            isFullWidth={isFullWidth}
          />
          {isOpen && isHalfOpen && (
            <RightSide
              chosenComponent={chosenComponent}
              checkedItems={checkedItems}
              isHalfOpen={isHalfOpen}
              isOpen={isOpen}
              isFullWidth={isFullWidth}
              items={items}
              uncheckAll={uncheckAll}
              size={size}
              deleteAllText={deleteAllText}
              onChange={onChange}
            />
          )}
        </form>
        {isOpen && (
          <Footer
            closeText={closeText}
            size={size}
            onClose={onClose}
            onSubmit={onSubmit}
            submitText={submitText}
          />
        )}
      </StyledTransfer>
    </StyledTransferContainer>
  );
};

Transfer.defaultProps = {
  isFullWidth: false,
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
