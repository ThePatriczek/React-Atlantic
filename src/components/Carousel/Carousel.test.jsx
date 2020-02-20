import React from 'react';
import { shallow } from 'enzyme';
import { Carousel } from './Carousel';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { defaultValues } from '../../constants/defaultValues';

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
    it(`Should have activeSlide: ${carousel.props.activeSlide}`, () => {
      expect(output.props().activeSlide).toEqual(carousel.props.activeSlide);
    });
    it(`Should have autoHeight: ${carousel.props.autoHeight}`, () => {
      expect(output.props().autoHeight).toEqual(carousel.props.autoHeight);
    });
    it(`Should have auto: ${carousel.props.auto}`, () => {
      expect(output.props().auto).toEqual(carousel.props.auto);
    });
  });
};

tests();
