import * as React from 'react';
import { Size } from '../../../types';

export interface OptionProps extends React.PropsWithChildren<unknown> {
  value: string | string[] | number;
  className?: string;
  size: Size;
}

export const Option: React.FC<OptionProps> = () => null;

Option.displayName = `Item`;
