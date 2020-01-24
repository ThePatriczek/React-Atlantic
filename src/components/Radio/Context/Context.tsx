import React, {
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState
} from 'react';

export interface RadioGroupContextState {
  value: any;
  setValue: (value: any) => void;
}

const defaultValue: RadioGroupContextState = {
  value: undefined,
  setValue: () => null
};

export const RadioGroupContext = createContext<RadioGroupContextState>(
  defaultValue
);

export const useRadioGroup = () =>
  useContext<RadioGroupContextState>(RadioGroupContext);

interface RadioGroupContextProviderProps {
  onChange?: (value: any) => void;
}

export const RadioGroupContextProvider: FC<PropsWithChildren<
  RadioGroupContextProviderProps
>> = (
  props: PropsWithChildren<RadioGroupContextProviderProps>
): ReactElement => {
  const { children, onChange } = props;
  const [value, setVal] = useState<any>(defaultValue.value);

  const setValue = (value: any) => {
    setVal(value);

    onChange?.(value);
  };

  return (
    <RadioGroupContext.Provider value={{ value, setValue }}>
      {children}
    </RadioGroupContext.Provider>
  );
};
