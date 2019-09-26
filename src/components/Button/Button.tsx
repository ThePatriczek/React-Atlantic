import * as React from 'react';
import { Size } from '../../types';
import { Typography } from '../Typography';
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
    isRound,
    size,
    isFullWidth,
    htmlType
  } = props;
  const { Text } = Typography;
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
      isRound={!!isRound}
      size={size as any}
      isFullWidth={!!isFullWidth}
      onAnimationEnd={() => setAnimation(false)}
      animationRunning={animation}
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
  type: 'default'
};

Button.displayName = `Button`;
