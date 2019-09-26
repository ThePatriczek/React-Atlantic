import * as React from 'react';
import { HorizontalPosition, Size } from '../../types';
import { Icon, IconName } from '../Icon';
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
  icon?: IconName;
  iconPosition?: HorizontalPosition;
  children?: React.ReactText;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    type,
    isDisabled,
    isRound,
    size,
    isFullWidth,
    htmlType,
    icon,
    iconPosition
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
      {icon && iconPosition === 'left' && <Icon name={icon} />}

      {children && <Text>{children}</Text>}

      {icon && iconPosition === 'right' && <Icon name={icon} />}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: 'medium',
  isFullWidth: false,
  isDisabled: false,
  isRound: false,
  type: 'default',
  iconPosition: 'left'
};

Button.displayName = `Button`;
