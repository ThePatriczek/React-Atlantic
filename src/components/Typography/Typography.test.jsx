import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { defaultValues } from '../../constants/defaultValues';
import { Text } from '../Typography/Text';

export const Component = children => {
  return <Text>{children}</Text>;
};

export const tests = (text = Component(defaultValues.children)) => {
  const output = shallow(text);

  return describe('Text', () => {
    it(`Should have children: ${text.props.children}`, () => {
      expect(output.text()).toEqual(text.props.children);
    });
  });
};

tests();
