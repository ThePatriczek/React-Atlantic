import * as React from 'react';

export interface RadioGroupContextState {
  value: React.ReactText;
  setValue: (value: React.ReactText) => void;
  name: string;
}

const defaultValue: RadioGroupContextState = {
  value: ``,
  setValue: () => null,
  name: ``
};

export const RadioGroupContext = React.createContext<RadioGroupContextState>(
  defaultValue
);

export const useRadioGroup = () =>
  React.useContext<RadioGroupContextState>(RadioGroupContext);

interface RadioGroupContextProviderProps {
  name: string;
  onChange?: (value: React.ReactText) => void;
}

export const RadioGroupContextProvider: React.FC<
  React.PropsWithChildren<RadioGroupContextProviderProps>
> = (
  props: React.PropsWithChildren<RadioGroupContextProviderProps>
): React.ReactElement => {
  const { children, name, onChange } = props;
  const [values, setValues] = React.useState<{
    [key: string]: React.ReactText;
  }>({ [name]: defaultValue.value });

  const getValue = (name: string) => values[name];

  const setValue = (name: string) => (value: React.ReactText) => {
    setValues({ ...values, [name]: value });

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <RadioGroupContext.Provider
      value={{ value: getValue(name), setValue: setValue(name), name }}
    >
      {children}
    </RadioGroupContext.Provider>
  );
};
