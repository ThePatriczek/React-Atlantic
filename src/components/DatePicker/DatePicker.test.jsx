import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { DatePicker } from './DatePicker';

export const Component = () => {
  return <DatePicker isFullWidth />;
};

export const tests = (datePicker = Component()) => {
  let output = shallow(datePicker);

  return describe('datePicker', () => {
    it(`Should render itself`, () => {
      expect(output.find('StyledReactDatePicker')).toHaveLength(1);
    });
  });
};

tests();
