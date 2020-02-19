import React, {
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react';
import { TimelineProps } from '../Timeline';

export interface TimelineContextState {
  onChange: (index?: Readonly<number>) => void;
  activeIndex?: Readonly<number>;
}

const defaultValue: TimelineContextState = {
  onChange: () => null
};

export const TimelineContext = createContext<TimelineContextState>(
  defaultValue
);

export const useTimeline = () =>
  useContext<TimelineContextState>(TimelineContext);

interface TimelineContextProps extends TimelineProps {}

export const TimelineContextProvider: FC<Readonly<
  PropsWithChildren<Readonly<TimelineContextProps>>
>> = (props): Readonly<ReactElement> => {
  const { children, defaultActiveIndex } = props;
  const [activeIndex, setActiveIndex] = useState<Readonly<number | undefined>>(
    defaultActiveIndex
  );

  useEffect(() => {
    if (typeof props.activeIndex !== 'undefined') {
      setActiveIndex(props.activeIndex);
    }
  }, [props.activeIndex]);

  const onChange = (index: Readonly<number>) => {
    setActiveIndex(props.activeIndex ?? index);

    props.onChange?.(index);
  };

  return (
    <TimelineContext.Provider value={{ onChange, activeIndex }}>
      {children}
    </TimelineContext.Provider>
  );
};
