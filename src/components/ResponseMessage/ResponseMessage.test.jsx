import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { defaultValues } from '../../constants/defaultValues';
import { ResponseMessage } from './ResponseMessage';

export const Component = (content, type, isLoading, isAlternative) => {
  return (
    <ResponseMessage
      content={content}
      type={type}
      isLoading={isLoading}
      isAlternative={isAlternative}
    />
  );
};

export const tests = (
  notification = Component(
    defaultValues.content,
    defaultValues.responseMessageType,
    defaultValues.isLoading,
    defaultValues.isAlternative
  )
) => {
  let output = shallow(notification);
  return describe('Notification', () => {
    it(`Should have content: ${notification.props.content}`, () => {
      expect(
        output.find('StyledReponseMessageContentSpan').props().children
      ).toEqual(notification.props.content);
    });
  });
};

tests();
