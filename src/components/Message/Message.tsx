import React, { FC, MouseEvent, PropsWithChildren, ReactElement } from 'react';
import { Type } from '../../types';
import { IconName } from '../Icon';
import {
  StyledMessageContainer,
  StyledMessageContentSpan,
  StyledMessageIcon,
  StyledMessageIconLoading,
  StyledMessageIconSpan
} from './Message.style';

export interface MessageProps {
  type?: Type;
  isLoading?: boolean;
  isAlternative?: boolean;
  onClick?: () => void;
}

export const Message: FC<PropsWithChildren<MessageProps>> = (
  props
): ReactElement => {
  const { children, isLoading, isAlternative } = props;
  let type = props.type;

  if (type === 'default') {
    type = 'primary';
  }

  let iconName: IconName;

  const icon = () => {
    switch (type) {
      case 'success':
        iconName = 'checkCircle';
        break;
      case 'error':
        iconName = 'error';
        break;
      case 'primary':
      case 'default':
        iconName = 'info';
        break;
      case 'warning':
        iconName = 'warning';
        break;
      default:
        return null;
    }

    return (
      <StyledMessageIcon
        name={iconName}
        isAlternative={isAlternative}
        type={type}
      />
    );
  };

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <StyledMessageContainer
      isAlternative={isAlternative}
      type={type}
      onClick={onClick}
    >
      <StyledMessageIconSpan isAlternative={isAlternative}>
        {isLoading && (
          <StyledMessageIconLoading
            isAlternative={isAlternative}
            name={'loading'}
            isRotating
          />
        )}

        {type && !isLoading && icon()}
      </StyledMessageIconSpan>
      <StyledMessageContentSpan isAlternative={isAlternative}>
        {children}
      </StyledMessageContentSpan>
    </StyledMessageContainer>
  );
};

Message.defaultProps = {
  type: 'default'
};
