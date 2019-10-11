import { mount } from 'enzyme';
import React from 'react';
import { Checkbox } from './Checkbox';
import { defaultValues } from '../../constants/defaultValues';

export const Component = (
  isChecked,
  isDefaultChecked,
  isDisabled,
  isPartiallyChecked,
  position,
  children
) => {
  return (
    <Checkbox
      isChecked={isChecked}
      isPartiallyChecked={isPartiallyChecked}
      isDefaultChecked={isDefaultChecked}
      isDisabled={isDisabled}
      position={position}
    >
      {children}
    </Checkbox>
  );
};

let output;

export const tests = (
  checkbox = Component(
    defaultValues.isChecked,
    defaultValues.isDefaultChecked,
    defaultValues.isDisabled,
    defaultValues.isPartiallyChecked,
    defaultValues.position,
    defaultValues.children
  )
) => {
  output = mount(checkbox);

  return describe('Checkbox', () => {
    it(`Should have isDefaultChecked: ${checkbox.props.isDefaultChecked}`, () => {
      expect(output.props().isDefaultChecked).toEqual(
        `checkbox.props.isDefaultChecked`
      );
    });
    it(`Should have isChecked: ${checkbox.props.isChecked}`, () => {
      expect(output.props().isChecked).toEqual(checkbox.props.isChecked);
    });
    it(`Should have isDisabled: ${checkbox.props.isDisabled}`, () => {
      expect(output.props().isDisabled).toEqual(checkbox.props.isDisabled);
    });
    it(`Should have isPartiallyChecked: ${checkbox.props.isPartiallyChecked}`, () => {
      expect(output.props().isPartiallyChecked).toEqual(
        checkbox.props.isPartiallyChecked
      );
    });
    it(`Should have position: ${checkbox.props.position}`, () => {
      expect(output.props().position).toEqual(checkbox.props.position);
    });
    it(`Should have children: ${checkbox.props.children}`, () => {
      expect(output.props().children).toEqual(checkbox.props.children);
    });
  });
};

tests();
