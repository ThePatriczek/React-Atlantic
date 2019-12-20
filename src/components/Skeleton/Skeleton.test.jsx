import React from 'react';
import { shallow } from 'enzyme';
import { Skeleton } from './Skeleton';
import expect from 'expect';
import { defaultValues } from '../../constants/defaultValues';

export const Component = (shape, size, width, height) => {
  return <Skeleton shape={shape} size={size} width={width} height={height} />;
};

export const tests = (
  skeleton = Component(
    defaultValues.shape,
    defaultValues.size,
    defaultValues.width,
    defaultValues.height
  )
) => {
  let output = shallow(skeleton);

  return describe(`Skeleton`, () => {
    it(`Should have shape: ${skeleton.props.shape}`, () => {
      expect(output.props().shape).toEqual(skeleton.props.shape);
    });

    it(`Should have size: ${skeleton.props.size}`, () => {
      expect(output.props().size).toEqual(skeleton.props.size);
    });

    it(`Should have width: ${skeleton.props.width}`, () => {
      expect(output.props().width).toEqual(skeleton.props.width);
    });

    it(`Should have height: ${skeleton.props.height}`, () => {
      expect(output.props().height).toEqual(skeleton.props.height);
    });
  });
};

tests();
