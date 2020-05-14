import { shallow } from 'enzyme';
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

export const tests = (
  input = Component(
    defaultValues.isDisabled,
    defaultValues.isLoading,
    defaultValues.isAlternative,
    defaultValues.placeholder,
    defaultValues.iconRight,
    defaultValues.iconLeft,
    defaultValues.size,
    defaultValues.autoFocus,
    defaultValues.defaultValue,
    defaultValues.value
  )
) => {
  let output = shallow(input);

  return describe('Input', () => {
    it(`Should have isDisabled: ${input.props.isDisabled}`, () => {
      expect(output.props().isDisabled).toEqual(input.props.isDisabled);
    });

    if (input.props.isAlternative) {
      it(`Should have isAlternative: ${input.props.isAlternative}`, () => {
        expect(output.find('StyledInput').props().placeholder).toEqual('');
      });
      it(`Should have placeholder: ''`, () => {
        expect(output.find('StyledInput').props().placeholder).toEqual('');
      });
    }

    if (input.props.isLoading) {
      it(`Should have iconRight: ${input.props.isLoading}`, () => {
        expect(output.props().iconRight).toEqual(input.props.isLoading);
      });
      it(`Should have isLoading:  ${input.props.isLoading}`, () => {
        expect(output.props().iconRight).toEqual(input.props.isLoading);
      });
    }

    it(`Should have size: ${input.props.size}`, () => {
      expect(output.props().size).toEqual(input.props.size);
    });

    if (!input.props.isAlternative) {
      it(`Should have placeholder: ${input.props.placeholder}`, () => {
        expect(output.find('StyledInput').props().placeholder).toEqual(
          input.props.placeholder
        );
      });
    }

    if (input.props.value === input.props.defaultValue) {
      it(`Should have defaultValue: ${input.props.defaultValue}`, () => {
        expect(output.find('StyledInput').props().value).toEqual(
          input.props.defaultValue
        );
      });
    } else
      it(`Should have defaultValue: ${input.props.defaultValue}`, () => {
        expect(output.find('StyledInput').props().value).toEqual(
          input.props.value
        );
      });

    it(`Should have value: ${input.props.value}`, () => {
      expect(output.find('StyledInput').props().value).toEqual(
        input.props.value
      );
    });
  });
};

tests();
