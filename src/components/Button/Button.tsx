import * as React from 'react';
import { Size, Type } from '../../types';
import { StyledButton } from './Button.style';

export type ButtonType =
  | Type
  | 'dashed'
  | 'transparent';

export interface ButtonProps {
  onClick?: () => void;
  isDisabled?: boolean;
  isRound?: boolean;
  isFullWidth?: boolean;
  /** primary | success | warning | error | dashed | transparent */
  type?: ButtonType;
  htmlType?: 'submit' | 'button';
  /** small | medium | large */
  size?: Size;
  /** custom className */
  className?: string;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (
  props: React.PropsWithChildren<ButtonProps>
) => {
  const {
    children,
    type,
    isDisabled,
    isRound,
    size,
    isFullWidth,
    htmlType,
    className
  } = props;
  const [animation, setAnimation] = React.useState<boolean>(false);

  const onClick = () => {
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
      isRound={!!isRound}
      size={size as any}
      isFullWidth={!!isFullWidth}
      onAnimationEnd={() => setAnimation(false)}
      animationRunning={animation}
      className={className}
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
  type: 'default',
  htmlType: 'button'
};

Button.displayName = `Button`;
