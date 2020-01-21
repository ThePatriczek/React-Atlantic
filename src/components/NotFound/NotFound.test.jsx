import { shallow } from 'enzyme';
import React from 'react';
import { NotFound } from './NotFound';
import { defaultValues } from '../../constants/defaultValues';
import expect from 'expect';

export const Component = (title, children) => (
  <NotFound title={title}>{children}</NotFound>
);

export const tests = (
  notFound = Component(`Not found`, defaultValues.children)
) => {
  let output = shallow(notFound);

  return describe('NotFound', () => {
    it(`Should have title: ${notFound.props.title}`, () => {
      expect(output.props().title).toEqual(notFound.props.title);
    });

    it(`Should have children: ${notFound.props.children}`, () => {
      expect(output.find(`NotFoundAnnotation`).props().children).toEqual(notFound.props.children);
    });
  });
};

tests();
