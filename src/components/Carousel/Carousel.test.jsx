import React from 'react';
import { shallow } from 'enzyme';
import { Carousel } from './Carousel';

export const Component = (children, auto, autoHeight, activeSlide) => {
  //todo:add props
  return (
    <Carousel
      children={children}
      auto={auto}
      autoHeight={autoHeight}
      activeSlide={activeSlide}
    />
  );
};

export const tests = (carousel = Component()) => {
  let output = shallow(carousel);

  return describe(`Carousel`, () => {
    // it(`Should have total: ${pagination.props.total}`, () => {
    //   expect(output.props().total).toEqual(pagination.props.total);
    // });
  });
};

tests();
