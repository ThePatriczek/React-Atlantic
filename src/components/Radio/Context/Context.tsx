import * as React from 'react';

export interface RadioGroupContextState {
  value: any;
  setValue: (value: any) => void;
}

const defaultValue: RadioGroupContextState = {
  value: undefined,
  setValue: () => null
};

export const RadioGroupContext = React.createContext<RadioGroupContextState>(
  defaultValue
);

export const useRadioGroup = () =>
  React.useContext<RadioGroupContextState>(RadioGroupContext);

interface RadioGroupContextProviderProps {
  onChange?: (value: any) => void;
}

export const RadioGroupContextProvider: React.FC<
  React.PropsWithChildren<RadioGroupContextProviderProps>
> = (
  props: React.PropsWithChildren<RadioGroupContextProviderProps>
): React.ReactElement => {
  const { children, onChange } = props;
  const [value, setVal] = React.useState<any>(
    defaultValue.value
  );

  const setValue = (value: any) => {
    setVal(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <RadioGroupContext.Provider value={{ value, setValue }}>
      {children}
    </RadioGroupContext.Provider>
  );
};
