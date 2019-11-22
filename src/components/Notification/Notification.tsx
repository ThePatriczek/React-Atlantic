import React, { FC, PropsWithChildren } from 'react';
import { Size, Type } from '../../types';
import { IconName } from '../Icon';
import { Paragraph } from '../Typography/Paragraph';
import {
  StyledNotificationButton,
  StyledNotificationButtonIcon,
  StyledNotificationContainer,
  StyledNotificationContentContainer,
  StyledNotificationFooter,
  StyledNotificationSpan,
  StyledNotificationTitle,
  StyledNotificationTitleContainer,
  StyledNotificationTitleIcon
} from './Notification.style';

export interface NotificationProps {
  title?: string;
  className?: string;
  size?: Size;
  type?: Type;
  isPrimaryButtonFullWidth?: boolean;
  primaryButtonIcon?: IconName;
  primaryButton?: string;
  secondaryButton?: string;
}

export const Notification: FC<PropsWithChildren<NotificationProps>> = (
  props
): React.ReactElement => {
  const {
    isPrimaryButtonFullWidth,
    children,
    title,
    className,
    size,
    type,
    primaryButtonIcon,
    secondaryButton,
    primaryButton
  } = props;

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
      <StyledNotificationTitleContainer type={type} className={className}>
        {iconTitle()}
        {title && (
          <StyledNotificationTitle type={type} className={className}>
            {title}
          </StyledNotificationTitle>
        )}
        <StyledNotificationTitleIcon
          name={'close'}
          type={type}
          className={className}
        />
      </StyledNotificationTitleContainer>
      <StyledNotificationContentContainer
        type={type}
        size={size}
        className={className}
      >
        <Paragraph>{children}</Paragraph>
      </StyledNotificationContentContainer>
      <StyledNotificationFooter type={type} size={size} className={className}>
        {secondaryButton && !isPrimaryButtonFullWidth && (
          <StyledNotificationButton className={className}>
            {secondaryButton}
          </StyledNotificationButton>
        )}
        <StyledNotificationButton
          primaryButtonIcon={primaryButtonIcon}
          secondaryButton={secondaryButton}
          isFullWidth={isPrimaryButtonFullWidth}
          className={className}
        >
          {primaryButtonIcon && (
            <StyledNotificationButtonIcon
              name={primaryButtonIcon}
              className={className}
            />
          )}
          <StyledNotificationSpan>{primaryButton}</StyledNotificationSpan>
        </StyledNotificationButton>
        <StyledNotificationSpan />
      </StyledNotificationFooter>
    </StyledNotificationContainer>
  );
};

Notification.defaultProps = {
  title: 'Notification',
  type: 'default'
};
