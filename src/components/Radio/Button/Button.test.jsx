import { shallow } from 'enzyme';
import React from 'react';
import { Radio } from '../Radio';
import expect from 'expect';
import { defaultValues } from '../../../constants/defaultValues';

export const Component = (
  isChecked,
  isDefaultChecked,
  isDisabled,
  size,
  children,
  onChange
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
    defaultValues.size,
    defaultValues.children
  )
) => {
  output = shallow(radioButton);

  return describe('Radio.Button', () => {
    it(`Should have isDisabled: ${radioButton.props.isDisabled}`, () => {
      expect(output.prop('isDisabled')).toEqual(radioButton.props.isDisabled);
    });

    it(`Should have size: ${radioButton.props.size}`, () => {
      expect(output.prop('size')).toEqual(radioButton.props.size);
    });

    if (radioButton.props.isDefaultChecked) {
      it(`Should have isChecked: ${radioButton.props.isDefaultChecked}`, () => {
        expect(output.props().isChecked).toEqual(
          radioButton.props.isDefaultChecked
        );
      });
      it(`Should have isDefaultChecked: ${true}`, () => {
        expect(output.props().isChecked).toEqual(true);
      });
    } else {
      it(`Should have isChecked: ${radioButton.props.isChecked}`, () => {
        expect(output.props().isChecked).toEqual(radioButton.props.isChecked);
      });
      it(`Should have isDefaultChecked: ${false}`, () => {
        expect(output.props().isChecked).toEqual(false);
      });
    }

    it(`Should have children: ${radioButton.props.children}`, () => {
      expect(output.find('StyledRadioButtonSpan').props().children).toEqual(
        radioButton.props.children
      );
    });
  });
};

tests();
