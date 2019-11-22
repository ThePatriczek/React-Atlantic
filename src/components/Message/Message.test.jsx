import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { defaultValues } from '../../constants/defaultValues';
import { Message } from './Message';

export const Component = (content, type, isLoading, isAlternative) => {
  return (
    <Message
      content={content}
      type={type}
      isLoading={isLoading}
      isAlternative={isAlternative}
    />
  );
};

export const tests = (
  message = Component(
    defaultValues.content,
    defaultValues.messageType,
    defaultValues.isLoading,
    defaultValues.isAlternative
  )
) => {
  let output = shallow(message);
  return describe('Notification', () => {
    it(`Should have content: ${message.props.content}`, () => {
      expect(
        output.find('StyledMessageContentSpan').props().children
      ).toEqual(message.props.content);
    });
  });
};

tests();
