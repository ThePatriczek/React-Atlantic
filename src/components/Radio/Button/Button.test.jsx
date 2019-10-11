import { mount } from 'enzyme';
import React from 'react';
import { Radio } from '../Radio';
import expect from 'expect';
import { defaultValues } from '../../../constants/defaultValues';

export const Component = (
  isChecked,
  isDefaultChecked,
  isDisabled,
  onChange,
  size,
  children
) => {
  return (
    <Radio.Button
      isChecked={isChecked}
      isDefaultChecked={isDefaultChecked}
      isDisabled={isDisabled}
      onChange={onChange}
      size={size}
    >
      {children}
    </Radio.Button>
  );
};

let output;

export const tests = (
  radioButton = Component(
    defaultValues.isChecked,
    defaultValues.isDefaultChecked,
    defaultValues.isDisabled,
    defaultValues.isPartiallyChecked,
    defaultValues.position,
    defaultValues.children
  )
) => {
  output = mount(radioButton);

  return describe('Radio.Button', () => {
    const wrapper = mount(radioButton);

    it(`Should have isChecked: ${radioButton.props.isChecked}`, () => {
      expect(wrapper.prop('isChecked')).toEqual(radioButton.props.isChecked);
    });

    it(`Should have isDisabled: ${radioButton.props.isDisabled}`, () => {
      expect(wrapper.prop('isDisabled')).toEqual(radioButton.props.isDisabled);
    });

    it(`Should have size: ${radioButton.props.size}`, () => {
      expect(wrapper.prop('size')).toEqual(radioButton.props.size);
    });

    it(`Should have isDefaultChecked: ${radioButton.props.isDefaultChecked}`, () => {
      expect(wrapper.prop('isDefaultChecked')).toEqual(
        radioButton.props.isDefaultChecked
      );
    });

    it(`Should have children: ${radioButton.props.children}`, () => {
      expect(wrapper.prop('children')).toEqual(radioButton.props.children);
    });
  });
};

tests();
