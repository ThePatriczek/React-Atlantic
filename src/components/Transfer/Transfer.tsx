import * as React from 'react';
import { FC, useEffect, useState } from 'react';
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

const { Text } = Typography;

export interface TransferProps {
  placeholder?: string;
}

const arr = [
  { name: 'first', isChecked: false },
  { name: 'second', isChecked: false },
  { name: 'third', isChecked: false },
  { name: 'fourth', isChecked: false },
  { name: 'fifth', isChecked: false },
  { name: 'sixth', isChecked: false },
  { name: 'seventh', isChecked: false },
  { name: 'eight', isChecked: false }
];

export const Transfer: FC<TransferProps> = (props): React.ReactElement => {
  const { placeholder } = props;
  const [isOpen, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const [savedItems, setSavedItems] = useState<Map<string, boolean>>(new Map());

  const [items, setItems] = useState<
    ReadonlyArray<{ name: string; isChecked: boolean }>
  >(arr);

  const checkedItems = items.filter(item => item.isChecked);

  useEffect(() => {
    const map: Map<string, boolean> = new Map();

    checkedItems.forEach(item => {
      if (!savedItems.has(item.name)) {
        map.set(item.name, false);
      }
    });

    items.forEach(item => {
      if (!savedItems.has(item.name)) {
        map.set(item.name, false);
      }
    });

    setItems(prevState =>
      prevState.map(item => {
        item.isChecked = !map.has(item.name);
        return item;
      })
    );
  }, [isOpen]);

  const onChange = (name: string, isChecked: boolean) => {
    setItems(prevState =>
      prevState.map(item => {
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
      prevState.map(item => {
        item.isChecked = false;
        return item;
      })
    );
  };

  const submit = () => {
    const arr = checkedItems.map(item => item.name);
    const map: Map<string, boolean> = new Map();

    checkedItems.forEach(item => {
      map.set(item.name, true);
    });

    setValue(arr.join(`, `));
    setSavedItems(map);
  };

  const closeWithoutSaving = () => {
    setOpen(!isOpen);
  };

  return (
    <StyledTransferContainer>
      <StyledTransfer>
        <StyledTransferSide>
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
              {items.map((item, index) => (
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

        {isOpen && (
          <>
            <StyledTransferSide>
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
                {checkedItems.map(item => (
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
            <StyledTransferFooter>
              <Button
                type={'default'}
                onClick={closeWithoutSaving}
              >{`Zavřít`}</Button>
              <Button
                type={'primary'}
                onClick={() => {
                  submit();
                  setOpen(!isOpen);
                }}
              >{`Potvrdit`}</Button>
            </StyledTransferFooter>
          </>
        )}
      </StyledTransfer>
    </StyledTransferContainer>
  );
};
