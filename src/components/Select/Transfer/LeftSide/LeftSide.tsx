import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useMemo
} from 'react';
import { Props as TooltipProps } from 'react-tooltip';
import { ListProps } from 'react-virtualized';
import { theme } from '../../../../theme';
import { Direction, Size } from '../../../../types';
import { Checkbox } from '../../../Checkbox';
import { Icon } from '../../../Icon';
import { Tooltip } from '../../../Tooltip';
import { Text } from '../../../Typography';
import { OptionType } from '../../Select.utils';
import {
  StyledTransferItem,
  StyledTransferLeftList,
  StyledTransferSide
} from '../style/Transfer.style';
import { BothSidesProps, TransferItem } from '../Transfer';
import { transferItemsRender } from '../Transfer.utils';
import { StyledSearchCancel, StyledTransferInput } from './style';

export interface LeftSideProps extends BothSidesProps {
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
  ListProps?: ListProps;
  withTooltips?: boolean;
  TooltipProps?: TooltipProps;
}

export const LeftSide: FC<LeftSideProps> = props => {
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
    direction,
    visibleRows,
    ListProps,
    withTooltips,
    TooltipProps
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
    if (!isOpen && !isDisabled) {
      setOpen(!isOpen);
      setFocus(!isFocused);
    }
  };

  const Row = ({ index, style }) => {
    const item = filtered[index];
    const itemTextContent =
      typeof item.label === 'string'
        ? `${item.label}`
        : `${(item.label as any).props.children.toString()}`;

    if (item) {
      return (
        <StyledTransferItem
          data-for="transfer-tooltip"
          data-tip={itemTextContent}
          key={item.value}
          size={size}
          style={style}
        >
          <Checkbox
            isChecked={item.isChecked}
            onChange={isChecked => {
              if (typeof isChecked === 'boolean') {
                onChange(item.value, isChecked);
              }
            }}
          >
            {transferItemsRender(item, true)}
          </Checkbox>
        </StyledTransferItem>
      );
    }

    return null;
  };

  const getHeight = useCallback(() => {
    const map = new Map<Size, number>();
    map.set('small', parseInt(theme.height.sm, 0));
    map.set('medium', parseInt(theme.height.md, 0));
    map.set('large', parseInt(theme.height.lg, 0));
    return map.get(size || 'medium');
  }, [size]);

  const getListHeight = useCallback(() => {
    const defaultVisibleRows = 5;
    const rowHeight = getHeight();
    const listVisibleRows = visibleRows ? visibleRows : defaultVisibleRows;

    return listVisibleRows * (rowHeight as number);
  }, [visibleRows, size]);

  return (
    <StyledTransferSide
      direction={direction}
      isHalfOpen={isHalfOpen}
      isOpen={isOpen}
      isFullWidth={isFullWidth}
      size={size}
      side={'left'}
    >
      <StyledTransferInput
        isDisabled={isDisabled}
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
        <StyledSearchCancel onClick={() => setSearchedValue('')} size={size}>
          <Icon name={'clear'} />
        </StyledSearchCancel>
      )}
      {isOpen && (
        <>
          {filtered.length > 0 && (
            <StyledTransferLeftList
              height={getListHeight()}
              width={300}
              rowCount={filtered.length}
              rowHeight={getHeight() as number}
              rowRenderer={Row}
              {...ListProps}
              onScroll={() => Tooltip.rebuild()}
            />
          )}
          {filtered.length === 0 && <>{notFoundComponent}</>}
          {withTooltips && (
            <Tooltip id="transfer-tooltip" place="top" {...TooltipProps} />
          )}
        </>
      )}
    </StyledTransferSide>
  );
};
