import * as React from 'react';
import { Type } from '../../types';
import { IconName } from '../Icon';
import {
  StyledReponseMessageContentSpan,
  StyledResponseMessageContainer,
  StyledResponseMessageIcon,
  StyledResponseMessageIconSpan
} from './ResponseMessage.style';

export interface ResponseMessageProps {
  content?: string;
  type?: Type;
  isLoading?: boolean;
  isAlternative?: boolean;
}

export const ResponseMessage: React.FC<ResponseMessageProps> = (
  props: ResponseMessageProps
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
      <StyledResponseMessageIcon
        name={iconName}
        isAlternative={isAlternative}
        type={type}
      />
    );
  };

  return (
    <StyledResponseMessageContainer isAlternative={isAlternative} type={type}>
      <StyledResponseMessageIconSpan isAlternative={isAlternative}>
        {isLoading && (
          <StyledResponseMessageIcon
            isAlternative={isAlternative}
            name={'loading'}
            isRotating
          />
        )}
        {type && !isLoading && icon()}
      </StyledResponseMessageIconSpan>
      <StyledReponseMessageContentSpan isAlternative={isAlternative}>
        {content}
      </StyledReponseMessageContentSpan>
    </StyledResponseMessageContainer>
  );
};

ResponseMessage.defaultProps = {
  content: 'Change me please 🥺'
};
