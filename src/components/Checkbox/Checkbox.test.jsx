import { shallow } from 'enzyme';
import React from 'react';
import { Checkbox } from './Checkbox';

export const defaultValues = {
  isChecked: false,
  isDefaultChecked: false,
  isDisabled: false,
  isPartiallyChecked: false,
  position: 'left',
  children: 'Change me, please 🥺'
};

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

let output = shallow(Component());

export const tests = (
  checkbox,
  isChecked,
  isDefaultChecked,
  isDisabled,
  isPartiallyChecked,
  position,
  children
) => {
  output = shallow(checkbox);
  console.log('IDCH:', isDefaultChecked);
  return describe('Checkbox', () => {
    it(`Should have isChecked: ${isChecked}`, () => {
      expect(output.prop('isChecked')).toEqual(isChecked);
    });

    it(`Should have isDefaultChecked: ${isDefaultChecked}`, () => {
      expect(output.prop('isDefaultChecked')).toEqual(isDefaultChecked);
    });

    it(`Should have isDisabled: ${isDisabled}`, () => {
      expect(output.prop('isDisabled')).toEqual(isDisabled);
    });

    it(`Should have isPartiallyChecked: ${isPartiallyChecked}`, () => {
      expect(output.prop('isPartiallyChecked')).toEqual(isPartiallyChecked);
    });

    it(`Should have position: ${position}`, () => {
      expect(output.prop('position')).toEqual(position);
    });

    it(`Should have children: ${children}`, () => {
      expect(output.prop('children')).toEqual(children);
    });
  });
};

tests();
