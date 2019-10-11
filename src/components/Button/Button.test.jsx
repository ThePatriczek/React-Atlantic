import { mount } from 'enzyme';
import React from 'react';
import { Button } from './Button';
import { defaultValues } from '../../constants/defaultValues';

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

let output;

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
  output = mount(button);

  return describe('Button', () => {
    it(`Should have isDisabled: ${button.props.isDisabled}`, () => {
      expect(output.props().isDisabled).toEqual(button.props.isDisabled);
    });
    it(`Should have isFullWidth: ${button.props.isFullWidth}`, () => {
      expect(output.props().isFullWidth).toEqual(button.props.isFullWidth);
    });
    it(`Should have isRound: ${button.props.isRound}`, () => {
      expect(output.props().isRound).toEqual(button.props.isRound);
    });
    it(`Should have size: ${button.props.size}`, () => {
      expect(output.props().size).toEqual(button.props.size);
    });
    it(`Should have type: ${button.props.type}`, () => {
      expect(output.props().type).toEqual(button.props.type);
    });
    it(`onClick should have been called if Button is not disabled`, () => {
      const mockClick = jest.fn();

      output.setProps({
        onClick: mockClick
      });

      output.simulate('click');

      if (!button.props.isDisabled) {
        expect(mockClick).toHaveBeenCalled();
      } else {
        expect(mockClick).not.toHaveBeenCalled();
      }
    });
    it(`Should have children: ${button.props.children}`, () => {
      expect(output.text()).toEqual(button.props.children);
    });
  });
};

tests();
