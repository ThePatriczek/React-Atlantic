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

  // return describe('Notification', () => {
    // it(`Should have children: ${message.props.children}`, () => {
    //   expect(output.props().children).toEqual(message.props.children);
    // });
    //
    // it(`Should have type: ${message.props.type}`, () => {
    //   expect(output.props().type).toEqual(message.props.type);
    // });
    //
    // it(`Should have isLoading: ${message.props.isLoading}`, () => {
    //   expect(output.props().isLoading).toEqual(message.props.isLoading);
    // });
    //
    // it(`Should have isAlternative: ${message.props.isAlternative}`, () => {
    //   expect(output.props().isAlternative).toEqual(message.props.isAlternative);
    // });
    //
    // it(`Should have onClick: ${message.props.onClick}`, () => {
    //   expect(output.props().onClick).toEqual(message.props.onClick);
    // });
  // });
};

// tests();
