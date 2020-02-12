import React, {
  FC,
  PropsWithChildren,
  ReactChild,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';
import { Direction, Position, Size } from '../../../types';
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
import { StyledTransfer, StyledTransferContainer } from './Transfer.style';
import { distinguishTypeOfLabel, getMergedItems } from './Transfer.utils';

export interface TransferProps {
  value?: OptionType[];
  defaultValue?: OptionType[];
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
  direction?: Direction;
}

export interface TransferItem extends OptionType {
  isChecked?: boolean;
  className?: string;
}

export const Transfer: FC<PropsWithChildren<TransferProps>> & {
  Option: FC<OptionProps>;
} = (props): ReactElement => {
  const {
    value,
    className,
    defaultValue,
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
    isFullWidth,
    direction
  } = props;

  const [isOpen, setOpen] = useState<boolean>(false);
  const [resultValue, setResultValue] = useState<string>('');
  const [searchedValue, setSearchedValue] = useState<string>('');
  const [isFocused, setFocus] = useState<boolean>(false);
  const [items, setItems] = useState<TransferItem[]>(
    checkChildrenAndOptions(children, options)
  );
  const checkedItems: TransferItem[] = items.filter(item => item.isChecked);
  const [savedItems, setSavedItems] = useState<Map<string, boolean>>(new Map());
  const [position, setPosition] = useState<Position | 'unset' | null>('unset');
  const ref = useRef<HTMLDivElement>(null);
  const isHalfOpen: boolean = checkedItems.length > 0;

  useEffect(() => {
    if (defaultValue && !value) {
      const map: Map<string, boolean> = new Map(
        defaultValue.map(item => [item.value, true])
      );

      setResultValue(
        defaultValue.map(item => distinguishTypeOfLabel(item)).join(`, `)
      );
      setSavedItems(map);
      setItems(
        getMergedItems(checkChildrenAndOptions(children, options), defaultValue)
      );
    }
  }, []);

  useEffect(() => {
    if (value) {
      const map: Map<string, boolean> = new Map(
        value.map(item => [item.value, true])
      );

      setResultValue(
        value.map(item => distinguishTypeOfLabel(item)).join(`, `)
      );
      setSavedItems(map);
      setItems((prevState: ReadonlyArray<TransferItem>) =>
        getMergedItems(prevState, value)
      );
    }
  }, [value]);

  useEffect(() => {
    if (isDisabled) {
      setOpen(false);
      setFocus(false);
    }
  }, [isDisabled]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('mousedown', onMouseDown);
      window.addEventListener('keydown', onKeyDown);
    }

    ref.current && !isElementInViewport(ref.current)
      ? setPosition(getPositionOfElementInViewport(ref.current))
      : setPosition('unset');

    if (!value) {
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
    }

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('keydown', onKeyDown);
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
    if (!isDisabled) {
      setItems((prevState: ReadonlyArray<TransferItem>) => {
        const arr = prevState.map((oldItem: Readonly<TransferItem>) => {
          const item = { ...oldItem };

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

        return props.value ? [...prevState] : arr;
      });
    }
  };

  const uncheckAll = () => {
    if (!isDisabled) {
      setItems((prevState: Readonly<TransferItem[]>) => {
        const arr = prevState.map((oldItem: Readonly<TransferItem>) => {
          const item = { ...oldItem };
          item.isChecked = false;

          return item;
        });

        props.onChange?.([]);

        return props.value ? [...prevState] : arr;
      });
    }
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
    if (!isDisabled) {
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
      const arr = checkedItems.map(item => distinguishTypeOfLabel(item));
      const map: Map<string, boolean> = new Map();

      checkedItems.forEach(item => {
        map.set(item.value, true);
      });

      setResultValue(arr.join(`, `));
      setSavedItems(map);

      setOpen(!isOpen);
      setFocus(!isFocused);
    }
  };

  const inputOnChange = (value: string) => {
    setSearchedValue(value);
  };

  const sortedItems = () => {
    return items.sort((a, b) => {
      if (
        typeof a.label === 'object' &&
        typeof b.label === 'object' &&
        b.label &&
        a.label &&
        'props' in a.label &&
        'props' in b.label
      ) {
        return a.label.props?.children
          .toString()
          .localeCompare(b.label.props?.children.toString());
      } else if (b.label && a.label) {
        return a.label.toString().localeCompare(b.label.toString());
      }
    });
  };

  return (
    <StyledTransferContainer
      className={className}
      placeholder={placeholder}
      deleteAllText={deleteAllText}
      closeText={closeText}
      submitText={submitText}
      isDisabled={isDisabled}
      options={options}
      notFoundComponent={notFoundComponent}
      size={size}
      isFullWidth={isFullWidth}
      direction={direction}
    >
      <StyledTransfer
        size={size}
        ref={ref}
        isFullWidth={isFullWidth}
        position={position}
        isHalfOpen={isHalfOpen}
        isOpen={isOpen}
        isFocused={isFocused}
        isDisabled={isDisabled}
        direction={direction}
      >
        <form onSubmit={formSubmit}>
          <LeftSide
            direction={direction}
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
            items={sortedItems()}
            isFullWidth={isFullWidth}
          />
          {isOpen && isHalfOpen && (
            <RightSide
              direction={direction}
              chosenComponent={chosenComponent}
              checkedItems={checkedItems}
              isHalfOpen={isHalfOpen}
              isOpen={isOpen}
              isFullWidth={isFullWidth}
              items={sortedItems()}
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
