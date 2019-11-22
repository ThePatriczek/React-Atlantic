import * as React from 'react';
import { Type } from '../../types';
import { IconName } from '../Icon';
import {
  StyledMessageContainer,
  StyledMessageContentSpan,
  StyledMessageIcon,
  StyledMessageIconSpan
} from './Message.style';

export interface MessageProps {
  content?: string;
  type?: Type;
  isLoading?: boolean;
  isAlternative?: boolean;
}

export const Message: React.FC<MessageProps> = (
  props: MessageProps
): React.ReactElement => {
  const { content, type, isLoading, isAlternative } = props;

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

  return (
    <StyledMessageContainer isAlternative={isAlternative} type={type}>
      <StyledMessageIconSpan isAlternative={isAlternative}>
        {isLoading && (
          <StyledMessageIcon
            isAlternative={isAlternative}
            name={'loading'}
            isRotating
          />
        )}
        {type && !isLoading && icon()}
      </StyledMessageIconSpan>
      <StyledMessageContentSpan isAlternative={isAlternative}>
        {content}
      </StyledMessageContentSpan>
    </StyledMessageContainer>
  );
};

Message.defaultProps = {
  content: 'Change me please 🥺'
};
