import { mount } from 'enzyme';
import React from 'react';
import { Input } from './Input';
import { defaultValues } from '../../constants/defaultValues';
import expect from 'expect';

export const Component = (
  isDisabled,
  isLoading,
  isAlternative,
  placeholder,
  iconRight,
  iconLeft,
  size,
  autoFocus,
  defaultValue,
  value,
  onChange,
  onEnterPress,
  onFocus,
  onBlur
) => {
  return (
    <Input
      isDisabled={isDisabled}
      isLoading={isLoading}
      isAlternative={isAlternative}
      placeholder={placeholder}
      iconRight={iconRight}
      iconLeft={iconLeft}
      size={size}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      onEnterPress={onEnterPress}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

let output;

export const tests = (input = Component(defaultValues.isDisabled)) => {
  output = mount(input);

  return describe('Input', () => {
    it(`Should have isDisabled: ${input.props.isDisabled}`, () => {
      expect(output.props().isDisabled).toEqual(input.props.isDisabled);
    });

    it(`Should have isLoading: ${input.props.isLoading}`, () => {
      expect(output.props().isLoading).toEqual(input.props.isLoading);
    });

    it(`Should have isAlternative: ${input.props.isAlternative}`, () => {
      expect(output.props().isAlternative).toEqual(input.props.isAlternative);
    });

    it(`Should have iconRight: ${input.props.iconRight}`, () => {
      expect(output.props().iconRight).toEqual(input.props.iconRight);
    });

    it(`Should have iconLeft: ${input.props.iconLeft}`, () => {
      expect(output.props().iconLeft).toEqual(input.props.iconLeft);
    });

    it(`Should have size: ${input.props.size}`, () => {
      expect(output.props().size).toEqual(input.props.size);
    });

    it(`Should have placeholder: ${input.props.placeholder}`, () => {
      expect(output.props().placeholder).toEqual(input.props.placeholder);
    });

    it(`Should have defaultValue: ${input.props.defaultValue}`, () => {
      expect(output.props().defaultValue).toEqual(input.props.defaultValue);
    });

    it(`Should have value: ${input.props.value}`, () => {
      expect(output.props().value).toEqual(input.props.value);
    });
  });
};

tests();
