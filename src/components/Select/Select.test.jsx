import { mount } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { defaultValues } from '../../constants/defaultValues';
import { Select } from './Select';
import { Typography } from '../Typography';
const { Option } = Select;
const { Text } = Typography;

export const Component = (
  size,
  isMulti,
  placeholder,
  value,
  defaultValue,
  isDisabled,
  isFullWidth,
  onChange
) => {
  return (
    <Select
      size={size}
      isMulti={isMulti}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      isFullWidth={isFullWidth}
      onChange={onChange}
    >
      <Option value={`value 1`}>
        <Text>{`Option 1`}</Text>
      </Option>
      <Option value={`value 2`}>
        <Text>{`Option 2`}</Text>
      </Option>
      <Option value={`value 3`}>
        <Text>{`Option 3`}</Text>
      </Option>
    </Select>
  );
};

let output;

export const tests = (
  select = Component(
    defaultValues.size,
    defaultValues.isMulti,
    defaultValues.placeholder,
    defaultValues.value,
    defaultValues.defaultValue,
    defaultValues.isDisabled,
    defaultValues.isFullWidth
  )
) => {
  output = mount(select);

  return describe('Select', () => {
    const wrapper = mount(select);

    it(`Should have size: ${select.props.size}`, () => {
      expect(wrapper.props().size).toEqual(select.props.size);
    });

    it(`Should have isMulti: ${select.props.isMulti}`, () => {
      expect(wrapper.props().isMulti).toEqual(select.props.isMulti);
    });

    it(`Should have placeholder: ${select.props.placeholder}`, () => {
      expect(wrapper.props().placeholder).toEqual(select.props.placeholder);
    });

    it(`Should have defaultValue: ${select.props.defaultValue}`, () => {
      expect(wrapper.props().defaultValue).toEqual(select.props.defaultValue);
    });

    it(`Should have value: ${select.props.value}`, () => {
      expect(wrapper.props().value).toEqual(select.props.value);
    });

    it(`Should have isDisabled: ${select.props.isDisabled}`, () => {
      expect(wrapper.props().isDisabled).toEqual(select.props.isDisabled);
    });

    it(`Should have isFullWidth: ${select.props.isFullWidth}`, () => {
      expect(wrapper.props().isFullWidth).toEqual(select.props.isFullWidth);
    });
  });
};

tests();
