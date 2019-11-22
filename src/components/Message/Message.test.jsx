import { shallow } from 'enzyme';
import React from 'react';
import { defaultValues } from '../../constants/defaultValues';
import { Message } from './Message';

export const Component = (
  children,
  type,
  isLoading,
  isAlternative,
  onClick
) => {
  return (
    <Message
      type={type}
      isLoading={isLoading}
      isAlternative={isAlternative}
      onClick={onClick}
    >
      {children}
    </Message>
  );
};

export const tests = (
  message = Component(
    defaultValues.children,
    defaultValues.type,
    defaultValues.isLoading,
    defaultValues.isAlternative
  )
) => {
  let output = shallow(message);

  return describe('Notification', () => {
    it(`Should have children: ${message.props.children}`, () => {
      expect(output.find('StyledMessageContentSpan').props().children).toEqual(
        message.props.children
      );
    });

    it(`Should have type: ${message.props.type}`, () => {
      if (message.props.type === 'default') {
        expect(output.find('StyledMessageContainer').props().type).toEqual(
          'primary'
        );
      } else
        expect(output.find('StyledMessageContainer').props().type).toEqual(
          message.props.type
        );
    });

    if (message.props.isLoading) {
      it(`Should have isLoading: ${message.props.isLoading}`, () => {
        expect(output.find('StyledMessageIconLoading').props().name).toEqual(
          'loading'
        );
      });
    }

    it(`Should have isAlternative: ${message.props.isAlternative}`, () => {
      if (!message.props.isLoading) {
        expect(output.find('StyledMessageIcon').props().isAlternative).toEqual(
          message.props.isAlternative
        );
      }
      expect(
        output.find('StyledMessageContainer').props().isAlternative
      ).toEqual(message.props.isAlternative);
      expect(
        output.find('StyledMessageContentSpan').props().isAlternative
      ).toEqual(message.props.isAlternative);
    });

    it(`onClick should have been called`, () => {
      const mockCallBack = jest.fn();

      output.setProps({
        onClick: mockCallBack
      });
      output.simulate('click');

      expect(mockCallBack).toHaveBeenCalled();
    });
  });
};

tests();
