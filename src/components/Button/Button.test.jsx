import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { defaultValues } from '../..';
import { Button } from './Button';

export const Component = (
  isDisabled,
  isFullWidth,
  isRound,
  size,
  type,
  children,
  onClick
) => {
  return (
    <Button
      isDisabled={isDisabled}
      isFullWidth={isFullWidth}
      isRound={isRound}
      size={size}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const tests = (
  button = Component(
    defaultValues.isDisabled,
    defaultValues.isFullWidth,
    defaultValues.isRound,
    defaultValues.size,
    defaultValues.type,
    defaultValues.children
  )
) => {
  let output = shallow(button);

  return describe('Button', () => {
    it(`Should have isDisabled: ${button.props.isDisabled}`, () => {
      expect(output.props().disabled).toEqual(button.props.isDisabled);
    });

    it(`Should have isFullWidth: ${button.props.isFullWidth}`, () => {
      expect(output.props().isFullWidth).toEqual(button.props.isFullWidth);
    });

    it(`Should have isRound: ${button.props.isRound}`, () => {
      expect(output.props().isRound).toEqual(button.props.isRound);
    });

    it(`onClick should have been called if Button is not disabled`, () => {
      const mockCallBack = jest.fn();
      output.setProps({
        onClick: mockCallBack
      });
      output.simulate('click');

      expect(mockCallBack).toHaveBeenCalled();
    });
    /*const mockClick = jest.fn();

      output.setProps({
        onClick: mockClick
      });

      if (output.props().disabled === true) {
            output.simulate('click');
        expect(mockClick.mock.calls.length).toEqual(0);
      } else {
            output.simulate('click');
        expect(mockClick.mock.calls.length).toEqual(1);
      }*/
    it(`Should have children: ${button.props.children}`, () => {
      expect(output.text()).toEqual(button.props.children);
    });
  });
};

tests();
