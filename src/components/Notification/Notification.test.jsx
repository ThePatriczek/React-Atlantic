import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { defaultValues } from '../../constants/defaultValues';
import { Notification } from './Notification';

export const Component = (
  children,
  title,
  size,
  type,
  primaryButtonFullWidth,
  primaryButtonIcon,
  primaryButtonContent,
  secondaryButtonContent
) => {
  return (
    <Notification
      title={title}
      size={size}
      type={type}
      isPrimaryButtonFullWidth={primaryButtonFullWidth}
      primaryButtonIcon={primaryButtonIcon}
      primaryButton={primaryButtonContent}
      secondaryButton={secondaryButtonContent}
    >
      {children}
    </Notification>
  );
};

export const tests = (
  notification = Component(
    defaultValues.children,
    defaultValues.notificationTitle,
    defaultValues.size,
    defaultValues.type,
    defaultValues.isFullWidth,
    defaultValues.notificationButonIcon,
    defaultValues.primaryButtonContent,
    defaultValues.secondaryButtonContent
  )
) => {
  let output = shallow(notification);
  return describe('Notification', () => {
    it(`Should have title: ${notification.props.title}`, () => {
      expect(output.find('StyledNotificationTitle').props().children).toEqual(
        notification.props.title
      );
    });
  });
};

tests();
