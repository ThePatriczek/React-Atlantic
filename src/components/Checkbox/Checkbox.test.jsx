import { mount } from 'enzyme';
import React from 'react';
import { Checkbox } from './Checkbox';
import { defaultValues } from './defaultValues';

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

export const tests = checkbox => {
  if (checkbox) {
    output = mount(checkbox);
  } else {
    output = mount(
      Component(
        defaultValues.isChecked,
        defaultValues.isDefaultChecked,
        defaultValues.isDisabled,
        defaultValues.isPartiallyChecked,
        defaultValues.position,
        defaultValues.children
      )
    );
  }

  return describe('Checkbox', () => {
    if (checkbox) {
      it(`Should have isDefaultChecked: ${checkbox.props.isDefaultChecked}`, () => {
        expect(output.props().isDefaultChecked).toEqual(
          checkbox.props.isDefaultChecked
        );
      });
      it(`Should have isChecked: ${checkbox.props.isChecked}`, () => {
        expect(output.prop('isChecked')).toEqual(checkbox.props.isChecked);
      });
      it(`Should have isDisabled: ${checkbox.props.isDisabled}`, () => {
        expect(output.prop('isDisabled')).toEqual(checkbox.props.isDisabled);
      });
      it(`Should have isPartiallyChecked: ${checkbox.props.isPartiallyChecked}`, () => {
        expect(output.prop('isPartiallyChecked')).toEqual(
          checkbox.props.isPartiallyChecked
        );
      });
      it(`Should have position: ${checkbox.props.position}`, () => {
        expect(output.prop('position')).toEqual(checkbox.props.position);
      });
      it(`Should have children: ${checkbox.props.children}`, () => {
        expect(output.prop('children')).toEqual(checkbox.props.children);
      });
    } else {
      it(`Should have isDefaultChecked: ${defaultValues.isDefaultChecked}`, () => {
        expect(output.props().isDefaultChecked).toEqual(
          defaultValues.isDefaultChecked
        );
      });
      it(`Should have isChecked: ${defaultValues.isChecked}`, () => {
        expect(output.prop('isChecked')).toEqual(defaultValues.isChecked);
      });

      it(`Should have isDisabled: ${defaultValues.isDisabled}`, () => {
        expect(output.prop('isDisabled')).toEqual(defaultValues.isDisabled);
      });
      it(`Should have isPartiallyChecked: ${defaultValues.isPartiallyChecked}`, () => {
        expect(output.prop('isPartiallyChecked')).toEqual(
          defaultValues.isPartiallyChecked
        );
      });
      it(`Should have position: ${defaultValues.position}`, () => {
        expect(output.prop('position')).toEqual(defaultValues.position);
      });
      it(`Should have children: ${defaultValues.children}`, () => {
        expect(output.prop('children')).toEqual(defaultValues.children);
      });
    }
  });
};

tests();
