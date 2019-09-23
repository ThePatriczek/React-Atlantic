import * as React from 'react';
import { HorizontalPosition, Size } from '../../types';
import { StyledButton } from './Button.style';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'dashed'
  | 'transparent';

export interface ButtonProps {
  onClick?: () => void;
  isDisabled?: boolean;
  isRound?: boolean;
  isFullWidth?: boolean;
  children?: React.ReactText;
  /** primary | success | warning | error | dashed | transparent */
  type?: ButtonType;
  htmlType?: 'submit' | 'button';
  icon?: string;
  /** right | left */
  iconPosition?: HorizontalPosition;
  /** small | medium | large */
  size?: Size;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    type,
    isDisabled,
    isRound,
    size,
    isFullWidth,
    htmlType
  } = props;
  const [animation, setAnimation] = React.useState<boolean>(false);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAnimation(true);

    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <StyledButton
      type={htmlType}
      styleType={type}
      disabled={isDisabled}
      onClick={onClick}
      isRound={!!isRound}
      size={size as any}
      isFullWidth={!!isFullWidth}
      onAnimationEnd={() => setAnimation(false)}
      className={animation ? `animation` : ``}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: 'medium',
  isFullWidth: false,
  isDisabled: false,
  isRound: false,
  iconPosition: 'left',
  type: 'default'
};

Button.displayName = `Button`;
