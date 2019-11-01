import { shallow } from 'enzyme';
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
  let output = shallow(switcher);

  return describe('Switch', () => {
    it(`Should have type: ${switcher.props.type}`, () => {
      expect(output.props().htmlType).toEqual(switcher.props.type);
    });

    it(`Should have textOn: ${switcher.props.textOn}`, () => {
      expect(output.find('StyledSwitcherTrue').props().children).toEqual(
        switcher.props.textOn
      );
    });

    it(`Should have textOff: ${switcher.props.textOff}`, () => {
      expect(output.find('StyledSwitcherFalse').props().children).toEqual(
        switcher.props.textOff
      );
    });

    if (switcher.props.isDefaultChecked) {
      it(`Should have isChecked: ${switcher.props.isDefaultChecked}`, () => {
        expect(output.props().isChecked).toEqual(
          switcher.props.isDefaultChecked
        );
      });
      it(`Should have isDefaultChecked: ${switcher.props.isDefaultChecked}`, () => {
        expect(output.props().isChecked).toEqual(
          switcher.props.isDefaultChecked
        );
      });
    } else {
      it(`Should have isChecked: ${switcher.props.isChecked}`, () => {
        expect(output.props().isChecked).toEqual(switcher.props.isChecked);
      });
      it(`Should have isDefaultChecked: ${false}`, () => {
        expect(output.props().isChecked).toEqual(switcher.props.isChecked);
      });
    }

    it(`Should have isDisabled: ${switcher.props.isDisabled}`, () => {
      expect(output.props().isDisabled).toEqual(switcher.props.isDisabled);
    });

    it(`Should have size: ${switcher.props.size}`, () => {
      expect(output.props().size).toEqual(switcher.props.size);
    });
  });
};

tests();
