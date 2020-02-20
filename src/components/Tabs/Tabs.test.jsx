import { shallow } from 'enzyme';
import React from 'react';
import { Tabs } from './Tabs';
import { defaultValues } from '../../constants/defaultValues';
import expect from 'expect';

export const Component = (
  tabs,
  children,
  size,
  className,
  isAlternative,
  isBordered,
  onChange,
  animationConfig
) => (
  <Tabs
    tabs={tabs}
    size={size}
    className={className}
    isAlternative={isAlternative}
    isBordered={isBordered}
    onChange={onChange}
    animationConfig={animationConfig}
  >
    {children}
  </Tabs>
);

export const tests = (
  tabs = Component(
    defaultValues.tabs,
    defaultValues.children,
    defaultValues.size,
    defaultValues.className,
    defaultValues.isAlternative,
    defaultValues.isBordered
  )
) => {
  let output = shallow(tabs);

  return describe('Tabs', () => {
    it(`Should have tabs: ${tabs.props.tabs}`, () => {
      expect(output.props().tabs).toEqual(tabs.props.tabs);
    });
    it(`Should have children: ${tabs.props.children}`, () => {
      expect(output.find(`TabsWithContext`).props().children).toEqual(
        tabs.props.children
      );
    });
    it(`Should have size: ${tabs.props.size}`, () => {
      expect(output.props().size).toEqual(tabs.props.size);
    });
    it(`Should have className: ${tabs.props.className}`, () => {
      expect(output.props().className).toEqual(tabs.props.className);
    });
    it(`Should have isAlternative: ${tabs.props.isAlternative}`, () => {
      expect(output.props().isAlternative).toEqual(tabs.props.isAlternative);
    });
    it(`Should have isBordered: ${tabs.props.isBordered}`, () => {
      expect(output.props().isBordered).toEqual(tabs.props.isBordered);
    });
  });
};

tests();
