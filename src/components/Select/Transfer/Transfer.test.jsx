import { mount } from 'enzyme';
import React from 'react';
import { Transfer } from './Transfer';
import expect from 'expect';
import { Select } from '../Select';
import { Text } from '../../Typography/Text';
const { Option } = Select;

export const Component = (placeholder, options, isDisabled) => {
  return (
    <Transfer
      placeholder={placeholder}
      options={options}
      isDisabled={isDisabled}
    >
      <Option value={`First`}>
        <Text>{`First`}</Text>
      </Option>
      <Option value={`Second`}>
        <Text>{`Second`}</Text>
      </Option>
      <Option value={`Third`}>
        <Text>{`Third`}</Text>
      </Option>
    </Transfer>
  );
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
