import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { Timeline } from './Timeline';
import { defaultValues } from '../../constants/defaultValues';

export const Component = (index, onChange) => (
  <Timeline onChange={onChange} index={index}>
    <Timeline.Item index={0}>Item0</Timeline.Item>
    <Timeline.Item index={1}>Item1</Timeline.Item>
    <Timeline.Item index={2}>Item2</Timeline.Item>
    <Timeline.Item index={3}>Item3</Timeline.Item>
  </Timeline>
);

export const tests = (timeline = Component(defaultValues.index)) => {
  let output = shallow(timeline);

  return describe('Timeline', () => {
    it(`1`, () => {
      expect(1).toEqual(1);
    });
  });
};

tests();
