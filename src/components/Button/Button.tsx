import * as React from "react";
import { StyledButton } from "./Button.style";

export interface ButtonProps {
  onClick?: () => void;
  isDisabled?: boolean;
  children?: React.ReactText;
  icon?: string;
  iconPosition?: "left" | "right";
  /** Test description */
  type?: "submit" | "button";
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, type, isDisabled, onClick, icon, iconPosition } = props;

  return (
    <StyledButton type={type} disabled={isDisabled} onClick={onClick}>
      {icon && iconPosition === "left" && <i className={icon} />}
      {children}
      {icon && iconPosition === "right" && <i className={icon} />}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  iconPosition: "left"
};

Button.displayName = `Button`;