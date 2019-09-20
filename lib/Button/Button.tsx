import * as React from "react";
import { StyledButton } from "./Button.style";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  secondary?: boolean;
  withIcon?: boolean;
  nextTo?: boolean;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { value, withIcon, ...others } = props;

  // TODO: Types for Styled components
  return (
    <StyledButton {...(others as any)}>
      {value}
      {withIcon && <i>{` >`}</i>}
    </StyledButton>
  );
};

Button.defaultProps = {
  secondary: false,
  nextTo: false
};
