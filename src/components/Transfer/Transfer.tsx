import * as React from 'react';
import { FC, useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import {
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
import { act } from 'react-dom/test-utils';

const { Text } = Typography;

export interface TransferProps {
  placeholder?: string;
  data: ReadonlyArray<{ name: string; isChecked: boolean }>;
}

export const Transfer: FC<TransferProps> = (props): React.ReactElement => {
  const { placeholder, data } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [savedItems, setSavedItems] = useState<Map<string, boolean>>(new Map());
  const [items, setItems] = useState<
    ReadonlyArray<{ name: string; isChecked: boolean }>
  >(data);
  const checkedItems = items?.filter(item => item.isChecked);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    const map: Map<string, boolean> = new Map();

    checkedItems?.forEach(item => {
      if (!savedItems.has(item.name)) {
        map.set(item.name, false);
      }
    });

    items?.forEach(item => {
      if (!savedItems.has(item.name)) {
        map.set(item.name, false);
      }
    });

    setItems(prevState =>
      prevState?.map(item => {
        item.isChecked = !map.has(item.name);
        return item;
      })
    );
  }, [isOpen]);

  const handleClickOutside: EventListener = (e: Event) => {
    if (!ref?.current?.contains(e.target as Node)) {
      act(() => {
        setOpen(false);
      });
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  };

  const onChange = (name: string, isChecked: boolean) => {
    setItems(prevState =>
      prevState?.map(item => {
        if (item.name === name) {
          item.isChecked = isChecked;
        }
        return item;
      })
    );
  };

  const uncheckAll = () => {
    setValue('');
    setItems(prevState =>
      prevState?.map(item => {
        item.isChecked = false;
        return item;
      })
    );
  };

  const submit = () => {
    const arr = checkedItems?.map(item => item.name);
    const map: Map<string, boolean> = new Map();

    checkedItems?.forEach(item => {
      map.set(item.name, true);
    });

    setValue(arr.join(`, `));
    setSavedItems(map);
  };

  const isHalfOpen = checkedItems?.length > 0;

  return (
    <StyledTransferContainer ref={ref}>
      <StyledTransfer isHalfOpen={isHalfOpen} isOpen={isOpen}>
        <StyledTransferSide isHalfOpen={isHalfOpen} isOpen={isOpen}>
          <StyledTransferSideHeader>
            <StyledTransferInput
              isOpen={isOpen}
              value={value}
              placeholder={placeholder}
              iconLeft={'search'}
              isFullWidth
              onFocus={() => setOpen(!isOpen)}
            />
          </StyledTransferSideHeader>
          {isOpen && (
            <StyledTransferUl>
              {items?.map((item, index) => (
                <StyledTransferLi key={index}>
                  <Checkbox
                    isChecked={item.isChecked}
                    onChange={isChecked => onChange(item.name, isChecked)}
                  >
                    <Text>{item.name}</Text>
                  </Checkbox>
                </StyledTransferLi>
              ))}
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
                {`Odstranit vše`}
              </Button>
            </StyledTransferSideHeader>
            <StyledTransferUl>
              {checkedItems?.map(item => (
                <StyledTransferLi
                  key={item.name}
                  onClick={() => {
                    onChange(item.name, false);
                  }}
                >
                  <StyledTransferSpan>{item.name}</StyledTransferSpan>
                  <Icon name={'error'} />
                </StyledTransferLi>
              ))}
            </StyledTransferUl>
          </StyledTransferSide>
        )}
        {isOpen && (
          <StyledTransferFooter>
            <Button
              type={'default'}
              onClick={() => setOpen(!isOpen)}
            >{`Zavřít`}</Button>
            <Button
              type={'primary'}
              onClick={() => {
                submit();
                setOpen(!isOpen);
              }}
            >{`Potvrdit`}</Button>
          </StyledTransferFooter>
        )}
      </StyledTransfer>
    </StyledTransferContainer>
  );
};
