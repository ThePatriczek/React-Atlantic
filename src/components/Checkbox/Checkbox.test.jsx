import { shallow } from 'enzyme';
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
export const tests = (
  isChecked,
  isDefaultChecked,
  isDisabled,
  isPartiallyChecked,
  position,
  children
) => {
  if (isDefaultChecked) {
    output = shallow(
      Component(
        isChecked,
        isDefaultChecked,
        isDisabled,
        isPartiallyChecked,
        position,
        children
      )
    );
  } else
    output = shallow(
      Component(
        defaultValues.isChecked,
        defaultValues.isDefaultChecked,
        defaultValues.isDisabled,
        defaultValues.isPartiallyChecked,
        defaultValues.position,
        defaultValues.children
      )
    );

  return describe('Checkbox', () => {
    if (isDefaultChecked !== undefined) {
      it(`Should have isDefaultChecked: ${isDefaultChecked}`, () => {
        expect(output.props().isDefaultChecked).toEqual(isDefaultChecked);
      });
    } else {
      it(`Should have isDefaultChecked: ${defaultValues.isDefaultChecked}`, () => {
        console.log(output.props());
        expect(output.props().isDefaultChecked).toEqual(
          defaultValues.isDefaultChecked
        );
      });
    }
    /* if (checkbox.props.isChecked) {
      it(`Should have isChecked: ${checkbox.props.isChecked}`, () => {
        expect(output.prop('isChecked')).toEqual(checkbox.props.isChecked);
      });
    } else
      it(`Should have isChecked: ${defaultValues.isChecked}`, () => {
        expect(output.prop('isChecked')).toEqual(defaultValues.isChecked);
      });

    if (checkbox.props.isDisabled) {
      it(`Should have isDisabled: ${checkbox.props.isDisabled}`, () => {
        expect(output.prop('isDisabled')).toEqual(checkbox.props.isDisabled);
      });
    } else
      it(`Should have isDisabled: ${defaultValues.isDisabled}`, () => {
        expect(output.prop('isDisabled')).toEqual(defaultValues.isDisabled);
      });

    if (checkbox.props.isPartiallyChecked) {
      it(`Should have isPartiallyChecked: ${checkbox.props.isPartiallyChecked}`, () => {
        expect(output.prop('isPartiallyChecked')).toEqual(
          checkbox.props.isPartiallyChecked
        );
      });
    } else
      it(`Should have isPartiallyChecked: ${defaultValues.isPartiallyChecked}`, () => {
        expect(output.prop('isPartiallyChecked')).toEqual(
          defaultValues.isPartiallyChecked
        );
      });

    if (checkbox.props.position) {
      it(`Should have position: ${checkbox.props.position}`, () => {
        expect(output.prop('position')).toEqual(checkbox.props.position);
      });
    } else
      it(`Should have position: ${defaultValues.position}`, () => {
        expect(output.prop('position')).toEqual(defaultValues.position);
      });

    if (checkbox.props.children) {
      it(`Should have children: ${checkbox.props.children}`, () => {
        expect(output.prop('children')).toEqual(checkbox.props.children);
      });
    } else
      it(`Should have children: ${defaultValues.children}`, () => {
        expect(output.prop('children')).toEqual(defaultValues.children);
      });*/
  });
};

tests();
