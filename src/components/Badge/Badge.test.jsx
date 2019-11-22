import { shallow } from 'enzyme';
import React from 'react';
import { Badge } from './Badge';
import { defaultValues } from '../../constants/defaultValues';
import expect from 'expect';

export const Component = (type, children, size) => {
  return (
    <Badge type={type} size={size}>
      {children}
    </Badge>
  );
};

export const tests = (
  badge = Component(defaultValues.type, undefined)
) => {
  let output = shallow(badge);

  return describe('Badge', () => {
    it(`Should have type: ${badge.props.type}`, () => {
      expect(output.props().type).toEqual(badge.props.type);
    });

    it(`Should have children: ${badge.props.children}`, () => {
      expect(output.props().children).toEqual(badge.props.children);
    });

    it(`Should have size: ${badge.props.size}`, () => {
      expect(output.props().size).toEqual(badge.props.size);
    });
  });
};

tests();
