import * as React from 'react';
import { RadioGroupContextProvider } from '../Context';

export interface GroupProps {
  onChange: (value: React.ReactText) => void;
  name: string;
}

export const Group: React.FC<React.PropsWithChildren<GroupProps>> = (
  props: React.PropsWithChildren<GroupProps>
): React.ReactElement => {
  const { children, name, onChange } = props;

  return (
    <RadioGroupContextProvider name={name} onChange={onChange}>
      {children}
    </RadioGroupContextProvider>
  );
};
