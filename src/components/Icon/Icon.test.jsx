import { mount } from 'enzyme';
import React from 'react';
import { Icon } from './Icon';
import { defaultValues } from '../../constants/defaultValues';

export const Component = (name, isRotating) => {
  return <Icon name={name} isRotating={isRotating} />;
};

let output;

export const tests = (
  icon = Component(defaultValues.iconName, defaultValues.isRotating)
) => {
  output = mount(icon);

  return describe('Icon', () => {
    it(`Should have name: ${icon.props.name}`, () => {
      expect(output.props().name).toEqual(icon.props.name);
    });
    it(`Should have isRotating: ${icon.props.isRotating}`, () => {
      expect(output.props().isRotating).toEqual(icon.props.isRotating);
    });
  });
};

tests();
