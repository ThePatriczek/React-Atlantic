import { shallow } from 'enzyme';
import React from 'react';
import { Radio } from '../Radio';
import expect from 'expect';
import { defaultValues } from '../../constants/defaultValues';

export const Component = (
  isDefaultChecked,
  isChecked,
  isDisabled,
  children,
  position,
  onChange
) => {
  return (
    <Radio
      value={`radio`}
      isChecked={isChecked}
      isDefaultChecked={isDefaultChecked}
      isDisabled={isDisabled}
      position={position}
      onChange={onChange}
    >
      {children}
    </Radio>
  );
};

let output;

export const tests = (
  radio = Component(
    defaultValues.isChecked,
    defaultValues.isDefaultChecked,
    defaultValues.isDisabled,
    defaultValues.isPartiallyChecked,
    defaultValues.position,
    defaultValues.children
  )
) => {
  output = shallow(radio);

  return describe('Radio', () => {
    const output = shallow(radio);

    it(`Should have isChecked: ${radio.props.isChecked}`, () => {
      expect(output.prop('isChecked')).toEqual(radio.props.isChecked);
    });

    it(`Should have isDisabled: ${radio.props.isDisabled}`, () => {
      expect(output.prop('isDisabled')).toEqual(radio.props.isDisabled);
    });

    it(`Should have isDefaultChecked: ${radio.props.isDefaultChecked}`, () => {
      expect(output.prop('isDefaultChecked')).toEqual(
        radio.props.isDefaultChecked
      );
    });

    it(`Should have position: ${radio.props.position}`, () => {
      expect(output.prop('position')).toEqual(radio.props.position);
    });

    it(`Should have children: ${radio.props.children}`, () => {
      expect(output.find(`StyledRadioSpan`).prop('children')).toEqual(radio.props.children);
    });
  });
};

tests();
