import { shallow } from 'enzyme';
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
  options,
  isAlternative,
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
      options={options}
      isAlternative={isAlternative}
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
export const tests = (
  select = Component(
    defaultValues.size,
    defaultValues.isMulti,
    defaultValues.placeholder,
    defaultValues.selectValue,
    defaultValues.defaultValue,
    defaultValues.isDisabled,
    defaultValues.isFullWidth,
    defaultValues.options
  )
) => {
  let output = shallow(select);

  return describe('Select', () => {
    it(`Should have size: ${select.props.size}`, () => {
      expect(output.props().size).toEqual(select.props.size);
    });

    it(`Should have isMulti: ${select.props.isMulti}`, () => {
      expect(output.props().isMulti).toEqual(select.props.isMulti);
    });

    it(`Should have placeholder: ${select.props.placeholder}`, () => {
      expect(output.props().placeholder).toEqual(select.props.placeholder);
    });

    it(`Should have defaultValue: ${select.props.defaultValue}`, () => {
      expect(output.props().defaultValue).toEqual(select.props.defaultValue);
    });

    it(`Should have isDisabled: ${select.props.isDisabled}`, () => {
      expect(output.props().isDisabled).toEqual(select.props.isDisabled);
    });

    it(`Should have isFullWidth: ${select.props.isFullWidth}`, () => {
      expect(output.props().isFullWidth).toEqual(select.props.isFullWidth);
    });
  });
};

tests();
