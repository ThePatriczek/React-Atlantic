import React, { FC, PropsWithChildren } from 'react';
import { useClick } from '../../hooks/EventHandlers/useClick';
import { Size, Type } from '../../types';
import { IconName } from '../Icon';
import { Paragraph } from '../Typography/Paragraph';
import {
  StyledNotificationCloseButton,
  StyledNotificationContainer,
  StyledNotificationContentContainer,
  StyledNotificationFooter,
  StyledNotificationTitle,
  StyledNotificationTitleContainer,
  StyledNotificationTitleIcon
} from './Notification.style';

export interface NotificationProps {
  title?: string;
  className?: string;
  size?: Size;
  type?: Type;
  onClose?: () => void;
  footer?: JSX.Element;
}

export const Notification: FC<PropsWithChildren<NotificationProps>> = (
  props
): React.ReactElement => {
  const { children, title, className, size, type, footer } = props;
  const { onClick } = useClick({ others: props });

  let titleIcon: IconName;

  const iconTitle = () => {
    switch (type) {
      case 'success':
        titleIcon = 'checkCircle';
        return <StyledNotificationTitleIcon name={titleIcon} />;
      case 'error':
        titleIcon = 'error';
        return <StyledNotificationTitleIcon name={titleIcon} />;
      case 'primary':
        titleIcon = 'info';
        return <StyledNotificationTitleIcon name={titleIcon} />;
      case 'warning':
        titleIcon = 'warning';
        return <StyledNotificationTitleIcon name={titleIcon} />;
      default:
        return null;
    }
  };

  return (
    <StyledNotificationContainer size={size} type={type} className={className}>
      <StyledNotificationTitleContainer type={type}>
        {iconTitle()}

        {title && (
          <StyledNotificationTitle type={type}>{title}</StyledNotificationTitle>
        )}

        <StyledNotificationCloseButton onClick={onClick}>
          <StyledNotificationTitleIcon name={'close'} type={type} />
        </StyledNotificationCloseButton>
      </StyledNotificationTitleContainer>

      <StyledNotificationContentContainer type={type} size={size}>
        <Paragraph>{children}</Paragraph>
      </StyledNotificationContentContainer>

      {footer && (
        <StyledNotificationFooter type={type} size={size}>
          {footer}
        </StyledNotificationFooter>
      )}
    </StyledNotificationContainer>
  );
};

Notification.defaultProps = {
  title: 'Notification',
  type: 'default'
};
