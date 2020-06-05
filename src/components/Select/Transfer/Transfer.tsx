import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';
import { useEventListener } from '../../../hooks/EventHandlers/useEventListener';
import { Direction, Size } from '../../../types';
import { NotFound } from '../../NotFound';
import { Option, OptionProps } from '../Option';
import { checkChildrenAndOptions, OptionType } from '../Select.utils';
import { Footer } from './Footer';
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';
import { StyledTransfer, StyledTransferContainer, StyledTransferForm } from './style';
import {
  distinguishTypeAndReturnLabel,
  getMergedItems
} from './Transfer.utils';

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
  isAlternative?: boolean;
  isFullWidth?: boolean;
  direction?: Direction;
  visibleRows?: number;
  openWidth?: string;
  halfOpenWidth?: string;
}

export interface TransferItem extends OptionType {
  isChecked?: boolean;
  className?: string;
}

export interface BothSidesProps {
  visibleRows?: number;
}

export const Transfer: FC<PropsWithChildren<TransferProps>> & {
  Option: FC<OptionProps>;
} = (props): ReactElement => {
  const {
    value,
    defaultValue,
    placeholder,
    options,
    isDisabled,
    children,
    closeText,
    submitText,
    deleteAllText,
    notFoundComponent,
    isAlternative,
    size,
    chosenComponent,
    isFullWidth,
    direction,
    visibleRows,
    openWidth,
    halfOpenWidth
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
  const ref = useRef<HTMLDivElement>(null);
  const isHalfOpen: boolean = checkedItems.length > 0;

  const { onKeyDown } = useEventListener({
    ref,
    deps: [isOpen],
    isOpen,
    onMouseDown: () => {
      setOpen(false);
      setFocus(false);
    },
    onEscape: () => {
      setOpen(false);
      setFocus(false);
    }
  });

  useEffect(() => {
    if (defaultValue && !value) {
      const map: Map<string, boolean> = new Map(
        defaultValue.map(item => [item.value, true])
      );

      setResultValue(
        defaultValue.map(item => distinguishTypeAndReturnLabel(item)).join(`, `)
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
        value.map(item => distinguishTypeAndReturnLabel(item)).join(`, `)
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
  }, [isOpen]);

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
      const arr = checkedItems.map(item => distinguishTypeAndReturnLabel(item));
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
      size={size}
      isOpen={isOpen}
      isHalfOpen={isHalfOpen}
      isFullWidth={isFullWidth}
    >
      <StyledTransfer
        size={size}
        ref={ref}
        isFullWidth={isFullWidth}
        isHalfOpen={isHalfOpen}
        isOpen={isOpen}
        isFocused={isFocused}
        isDisabled={isDisabled}
        direction={direction}
        openWidth={openWidth}
        halfOpenWidth={halfOpenWidth}
      >
        <StyledTransferForm onSubmit={formSubmit} direction={direction}>
          <LeftSide
            isAlternative={isAlternative}
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
            visibleRows={visibleRows}
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
              visibleRows={visibleRows}
            />
          )}
        </StyledTransferForm>
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
  visibleRows: 5,
  notFoundComponent: <NotFound title={`No items found...`} />,
  chosenComponent: (checked, total) => (
    <>
      <strong>{`Chosen: `}</strong>
      {`${checked} of ${total}`}
    </>
  )
};

Transfer.Option = Option;
