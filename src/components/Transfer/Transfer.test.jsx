import { mount } from 'enzyme';
import React from 'react';
import { Transfer } from './Transfer';
import expect from 'expect';

export const Component = placeholder => {
  return <Transfer placeholder={'Placeholder'} />;
};

export const tests = (transfer = Component()) => {
  return describe('Transfer', () => {
    const output = mount(transfer);

    it(`.`, () => {
      expect('5').toEqual('5');
    });
  });
};

tests();
