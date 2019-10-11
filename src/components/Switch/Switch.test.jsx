import { mount } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { defaultValues } from '../../constants/defaultValues';
import { Switch } from './Switch';

export const Component = (
  isChecked,
  isDisabled,
  size,
  type,
  isDefaultChecked,
  textOn,
  textOff,
  onChange
) => {
  return (
    <Switch
      isChecked={isChecked}
      isDisabled={isDisabled}
      size={size}
      type={type}
      isDefaultChecked={isDefaultChecked}
      onChange={onChange}
      textOn={textOn}
      textOff={textOff}
    />
  );
};

let output;

export const tests = (
  switcher = Component(
    defaultValues.isChecked,
    defaultValues.isDisabled,
    defaultValues.size,
    defaultValues.type,
    defaultValues.isDefaultChecked,
    defaultValues.textOn,
    defaultValues.textOff
  )
) => {
  output = mount(switcher);

  return describe('Switch', () => {
    const output = mount(switcher);

    it(`Should have type: ${switcher.props.type}`, () => {
      expect(output.props().type).toEqual(switcher.props.type);
    });

    it(`Should have textOn: ${switcher.props.textOn}`, () => {
      expect(output.props().textOn).toEqual(switcher.props.textOn);
    });

    it(`Should have textOff: ${switcher.props.textOff}`, () => {
      expect(output.props().textOff).toEqual(switcher.props.textOff);
    });

    it(`Should have isDefaultChecked: ${switcher.props.isDefaultChecked}`, () => {
      expect(output.props().isDefaultChecked).toEqual(
        switcher.props.isDefaultChecked
      );
    });

    it(`Should have isChecked: ${switcher.props.isChecked}`, () => {
      expect(output.props().isChecked).toEqual(switcher.props.isChecked);
    });

    it(`Should have isDisabled: ${switcher.props.isDisabled}`, () => {
      expect(output.props().isDisabled).toEqual(switcher.props.isDisabled);
    });

    it(`Should have size: ${switcher.props.size}`, () => {
      expect(output.props().size).toEqual(switcher.props.size);
    });
  });
};

tests();
