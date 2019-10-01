import * as React from 'react';
import { RadioGroupContextProvider } from '../Context';

export interface GroupProps {
  onChange: (value: React.ReactText) => void;
}

export const Group: React.FC<React.PropsWithChildren<GroupProps>> = (
  props: React.PropsWithChildren<GroupProps>
): React.ReactElement => {
  const { children, onChange } = props;

  return (
    <RadioGroupContextProvider onChange={onChange}>
      {children}
    </RadioGroupContextProvider>
  );
};
