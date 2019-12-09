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
      if (button.props.isDisabled === true) {
        expect(output).toHaveStyleRule('cursor', 'not-allowed');
        expect(output).toHaveStyleRule('color', darken(0.2, '#b7b7b7'));
      }
    });

    it(`Should have isFullWidth: ${button.props.isFullWidth}`, () => {
      expect(output.props().isFullWidth).toEqual(button.props.isFullWidth);
      if (button.props.isFullWidth === true) {
        expect(output).toHaveStyleRule('width', '100%');
      }
    });

    it(`Should have isRound: ${button.props.isRound}`, () => {
      expect(output.props().isRound).toEqual(button.props.isRound);
      if (button.props.isRound === true) {
        expect(output).toHaveStyleRule(
          'border-radius',
          output.props().theme.rounded
        );
      } else {
        expect(output).toHaveStyleRule(
          'border-radius',
          output.props().theme.radius
        );
      }
    });

    it(`Should have size: ${button.props.size}`, () => {
      expect(output.props().size).toEqual(button.props.size);
      if (button.props.size === 'small') {
        expect(output).toHaveStyleRule(
          'padding',
          0 + ' ' + output.props().theme.padding.sm
        );
        expect(output).toHaveStyleRule(
          'height',
          output.props().theme.height.sm
        );
        expect(output).toHaveStyleRule(
          'font-size',
          output.props().theme.font.size.sm
        );
      } else if (button.props.size === 'large') {
        expect(output).toHaveStyleRule(
          'padding',
          0 + ' ' + output.props().theme.padding.lg
        );
        expect(output).toHaveStyleRule(
          'height',
          output.props().theme.height.lg
        );
        expect(output).toHaveStyleRule(
          'font-size',
          output.props().theme.font.size.lg
        );
      } else if (button.props.size === 'medium') {
        expect(output).toHaveStyleRule(
          'padding',
          0 + ' ' + output.props().theme.padding.md
        );
        expect(output).toHaveStyleRule(
          'height',
          output.props().theme.height.md
        );
        expect(output).toHaveStyleRule(
          'font-size',
          output.props().theme.font.size.md
        );
      }
    });

    it(`Should have type: ${button.props.type}`, () => {
      expect(output.props().styleType).toEqual(button.props.type);
      let color = `black`;
      let bgColor = output.props().theme.color.default;
      let borderColor = darken(0.1, bgColor);
      let borderType = `solid`;

      if (button.props.type === 'primary') {
        bgColor = output.props().theme.color.primary;
        color = `white`;
        borderColor = bgColor;

        expect(output).toHaveStyleRule('background-color', bgColor);
        expect(output).toHaveStyleRule(
          'border',
          '1px ' + borderType + ' ' + borderColor
        );
        expect(output).toHaveStyleRule('color', color);
      } else if (button.props.type === 'success') {
        bgColor = output.props().theme.color.success;
        color = `white`;
        borderColor = bgColor;

        expect(output).toHaveStyleRule('background-color', bgColor);
        expect(output).toHaveStyleRule(
          'border',
          '1px ' + borderType + ' ' + borderColor
        );
        expect(output).toHaveStyleRule('color', color);
      } else if (button.props.type === 'warning') {
        bgColor = output.props().theme.color[button.props.type];
        color = `white`;
        borderColor = bgColor;

        expect(output).toHaveStyleRule('background-color', bgColor);
        expect(output).toHaveStyleRule(
          'border',
          '1px ' + borderType + ' ' + borderColor
        );
        expect(output).toHaveStyleRule('color', color);
      } else if (button.props.type === 'error') {
        bgColor = output.props().theme.color.error;
        color = `white`;
        borderColor = bgColor;

        expect(output).toHaveStyleRule('background-color', bgColor);
        expect(output).toHaveStyleRule(
          'border',
          '1px ' + borderType + ' ' + borderColor
        );
        expect(output).toHaveStyleRule('color', color);
      } else if (button.props.type === 'dashed') {
        borderType = `dashed`;

        expect(output).toHaveStyleRule('background-color', bgColor);
        expect(output).toHaveStyleRule(
          'border',
          '1px ' + borderType + ' ' + borderColor
        );
        expect(output).toHaveStyleRule('color', color);
      } else if (button.props.type === 'transparent') {
        bgColor = `transparent`;
        color = output.props().theme.color.primary;
        borderColor = bgColor;

        expect(output).toHaveStyleRule('background-color', bgColor);
        expect(output).toHaveStyleRule(
          'border',
          '1px ' + borderType + ' ' + borderColor
        );
        expect(output).toHaveStyleRule('color', color);
      }
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
