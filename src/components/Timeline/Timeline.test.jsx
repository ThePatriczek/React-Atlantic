import { shallow } from 'enzyme';
import React from 'react';
import expect from 'expect';
import { Timeline } from './Timeline';
import { defaultValues } from '../../constants/defaultValues';

export const Component = (index, onChange, onClick, onCaptionClick) => (
  <Timeline onChange={onChange} defaultActiveIndex={index} activeIndex={index}>
    <Timeline.Item
      captions={[
        { value: `Caption1`, onClick: onCaptionClick },
        { value: `Caption2` },
        { value: `Caption3`, onClick: onCaptionClick }
      ]}
      onClick={onClick}
      buttons={[
        {
          icon: 'diff',
          size: 'medium',
          text: { content: 'Click me', position: 'right' },
          onClick
        },
        { icon: 'search', text: { content: 'Click me too!' }, onClick }
      ]}
    >
      {`Item0`}
    </Timeline.Item>
    <Timeline.Item type={'success'}>{`Item1`}</Timeline.Item>
    <Timeline.Item
      type={'error'}
      buttons={[{ icon: 'diff' }]}
    >{`Item2`}</Timeline.Item>
    <Timeline.Item
      type={'warning'}
      onClick={onClick}
      captions={[{ value: `Caption` }]}
    >{`Item3`}</Timeline.Item>
    <Timeline.Item
      type={'default'}
      onClick={onClick}
      captions={[{ value: `Caption` }]}
    >{`Item3`}</Timeline.Item>
    <Timeline.Item
      onClick={onClick}
      captions={[{ value: `Caption` }]}
    >{`Item3`}</Timeline.Item>
  </Timeline>
);

export const tests = (timeline = Component(defaultValues.index)) => {
  let output = shallow(timeline);

  return describe('Timeline', () => {
    it(`Should have activeIndex: ${timeline.props.activeIndex}`, () => {
      expect(output.props().activeIndex).toEqual(timeline.props.activeIndex);
    });

    it(`Should have defaultActiveIndex: ${timeline.props.defaultActiveIndex}`, () => {
      expect(output.props().defaultActiveIndex).toEqual(
        timeline.props.defaultActiveIndex
      );
    });

    it(`Should have onChange: ${timeline.props.onChange}`, () => {
      expect(output.props().onChange).toEqual(timeline.props.onChange);
    });
  });
};

tests();
