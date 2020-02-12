import React, {
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react';

export interface TimelineContextState {
  onChange: (index?: Readonly<number>) => void;
  index: Readonly<number>;
}

const defaultValue: TimelineContextState = {
  onChange: () => null,
  index: 0
};

export const TimelineContext = createContext<TimelineContextState>(
  defaultValue
);

export const useTimeline = () =>
  useContext<TimelineContextState>(TimelineContext);

interface TimelineContextProps {
  onChange?: (index: number) => void;
  index?: Readonly<number>;
}

export const TimelineContextProvider: FC<Readonly<
  PropsWithChildren<Readonly<TimelineContextProps>>
>> = (props): Readonly<ReactElement> => {
  const { children } = props;
  const [index, setIndex] = useState<Readonly<number>>(defaultValue.index);

  useEffect(() => {
    setIndex(props.index || 0);
  }, [props.index]);

  const onChange = (index: Readonly<number>) => {
    setIndex(index);

    props.onChange?.(index);
  };

  return (
    <TimelineContext.Provider value={{ onChange, index }}>
      {children}
    </TimelineContext.Provider>
  );
};
