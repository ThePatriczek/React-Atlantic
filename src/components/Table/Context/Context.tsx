import React, {
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react';

export type SortOrder = 'asc' | 'desc';

export interface TableContextState {
  sortBy: Readonly<string>;
  onSort: (sortBy: Readonly<string>) => void;
  order?: Readonly<SortOrder>;
}

const defaultValue: TableContextState = {
  sortBy: ``,
  onSort: () => null
};

export const TableContext = createContext<TableContextState>(defaultValue);

export const useTable = () => useContext<TableContextState>(TableContext);

interface TableContextProps {
  onSort?: (sortBy?: string, order?: SortOrder) => void;
  order?: Readonly<SortOrder>;
  sortBy?: Readonly<string>;
}

export const TableContextProvider: FC<Readonly<
  PropsWithChildren<Readonly<TableContextProps>>
>> = (props): Readonly<ReactElement> => {
  const { children } = props;
  const [sortBy, setSortBy] = useState<Readonly<string>>(defaultValue.sortBy);
  const [order, setOrder] = useState<Readonly<SortOrder>>();

  useEffect(() => {
    setSortBy(props.sortBy || ``);
  }, [props.sortBy]);

  useEffect(() => {
    setOrder(props.order);
  }, [props.order]);

  const onSort = (sortBy: Readonly<string>) => {
    setSortBy(sortBy);

    if (props.order) {
      setOrder(undefined);
      props.onSort?.(sortBy, props.order);
    } else {
      setOrder(prevOrder => {
        let order: SortOrder | undefined;

        if (prevOrder === 'asc') {
          order = 'desc';
        } else if (!prevOrder) {
          order = 'asc';
        }

        props.onSort?.(sortBy, order);

        return order;
      });
    }
  };

  return (
    <TableContext.Provider
      value={{
        sortBy,
        onSort,
        order
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
