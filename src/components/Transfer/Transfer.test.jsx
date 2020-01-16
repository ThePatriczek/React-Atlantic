import { mount } from 'enzyme';
import React from 'react';
import { Transfer } from './Transfer';
import expect from 'expect';

export const Component = (placeholder, data) => {
  return <Transfer placeholder={placeholder} data={data} />;
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
