import * as React from 'react';
import { FC, useState } from 'react';
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
  { name: 'fifth', isChecked: true },
  { name: 'sixth', isChecked: false },
  { name: 'seventh', isChecked: false },
  { name: 'eight', isChecked: false }
];

export const Transfer: FC<TransferProps> = (props): React.ReactElement => {
  const { placeholder } = props;
  const [isOpen, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [savedItems, setSavedItems] = useState<
    Array<{ name: string; isChecked: boolean }>
  >();
  const [items, setItems] = useState<
    Array<{ name: string; isChecked: boolean }>
  >(arr);

  const pickingArray = [...items];
  const pickedArray = items.filter(item => item.isChecked);

  const onChange = (name: string, isChecked: boolean) => {
    pickingArray.map(item => {
      if (item.name === name) {
        item.isChecked = isChecked;
      }
    });

    setItems(pickingArray);
  };

  const uncheckOne = (item: { name: string; isChecked: boolean }) => {
    pickingArray.map(x => {
      if (item.name === x.name) {
        item.isChecked = !item.isChecked;
      }
    });

    setItems(pickingArray);
  };

  const uncheckAll = () => {
    pickingArray.map(item => {
      if (item.isChecked) {
        item.isChecked = !item.isChecked;
      }
    });

    setValue('');
    setItems(pickingArray);
    setOpen(!isOpen);
  };

  const submit = () => {
    let result = '';

    pickedArray.map((item, index) => {
      if (index === pickedArray.length - 1) {
        result += item.name;
      } else {
        result += item.name + ', ';
      }
    });

    setValue(result);
    setSavedItems(pickedArray);
  };

  const closeWithoutSaving = () => {
    // const tmp: any = [...items];
    // if (
    //   savedItems &&
    //   JSON.stringify(savedItems) !== JSON.stringify(pickedArray)
    // ) {
    //   tmp.map((x: any) =>
    //     Object.assign(
    //       x,
    //       savedItems.find((y: any) => y.name === x.name)
    //     )
    //   );
    //   setItems(tmp);
    // }

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
                  {`${pickedArray.length} z ${items.length}`}
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
                {pickedArray.map(item => (
                  <StyledTransferLi
                    key={item.name}
                    onClick={() => {
                      uncheckOne(item);
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
