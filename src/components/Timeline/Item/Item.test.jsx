import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { Item } from './Item';

export const Component = () => <Item />;

export const tests = (item = Component()) => {
  let output = shallow(item);

  return describe('Item', () => {
    it(``, () => {
      expect(1).toEqual(1);
    });
  });
};

tests();
