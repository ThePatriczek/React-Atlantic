import * as React from "react";

export interface OptionProps extends React.PropsWithChildren<unknown> {
  value: any;
  isMultiLine?: boolean;
  className?: string;
}

export const Option: React.FC<OptionProps> = () => null;

Option.displayName = `Option`;
