import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { Timeline } from './Timeline';

export const Component = onChange => (
  <Timeline onChange={onChange}>
    <Timeline.Item index={0}>Item0</Timeline.Item>
    <Timeline.Item index={1}>Item1</Timeline.Item>
    <Timeline.Item index={2}>Item2</Timeline.Item>
    <Timeline.Item index={3}>Item3</Timeline.Item>
  </Timeline>
);

export const tests = (timeline = Component()) => {
  let output = shallow(timeline);

  return describe('Timeline', () => {
    it(`1`, () => {
      expect(1).toEqual(1);
    });
  });
};

tests();
