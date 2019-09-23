import * as React from 'react';
import { Size } from '../../types';
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
  isRounded?: boolean;
  isFullWide?: boolean;
  /** primary | success | warning | error | dashed | transparent */
  type?: ButtonType;
  htmlType?: 'submit' | 'button';
  /** small | medium | large */
  size?: Size;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (
  props: React.PropsWithChildren<ButtonProps>
) => {
  const {
    children,
    type,
    isDisabled,
    isRounded,
    size,
    isFullWide,
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
      styleType={isDisabled ? 'default' : type}
      disabled={isDisabled}
      onClick={onClick}
      isRounded={!!isRounded}
      size={size as any}
      isFullWide={!!isFullWide}
      onAnimationEnd={() => setAnimation(false)}
      className={animation ? `animation` : ``}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: 'medium',
  isFullWide: false,
  isDisabled: false,
  isRounded: false,
  type: 'default'
};

Button.displayName = `Button`;
