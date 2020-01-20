import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { defaultValues } from '../../constants/defaultValues';
import { Notification } from './Notification';

export const Component = (children, title, size, type, onClose) => {
  return (
    <Notification title={title} size={size} type={type} onClose={onClose}>
      {children}
    </Notification>
  );
};

export const tests = (
  notification = Component(
    defaultValues.children,
    defaultValues.notificationTitle,
    defaultValues.size,
    defaultValues.type
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
