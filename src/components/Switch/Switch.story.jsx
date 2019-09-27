import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { describe, it, specs } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import { Switch } from './Switch';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Switch', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const isChecked = boolean(`isChecked:`, false);
    const isDisabled = boolean(`isDisabled:`, false);
    const isDefaultChecked = boolean(`isDefaultChecked:`, false);
    const textLeft = text('textLeft:', 'Yes');
    const textRight = text('textRight:', 'No');
    const size = select(`size:`, ['small', `medium`, 'large'], 'medium');
    const name = text('name:', 'Name');
    const type = select(
      `type:`,
      ['primary', 'success', 'warning', 'error'],
      'primary'
    );

    const switcher = (
      <Switch
        isChecked={isChecked}
        isDisabled={isDisabled}
        size={size}
        htmlType={type}
        isDefaultChecked={isDefaultChecked}
        onChange={action(`onChange`)}
        textLeft={textLeft}
        textRight={textRight}
        name={name}
      />
    );
    specs(() =>
      describe('Checkbox', () => {
        const wrapper = mount(switcher);

        it(`Should have type: ${type}`, () => {
          expect(wrapper.prop('htmlType')).toEqual(type);
        });

        it(`Should have name: ${name}`, () => {
          expect(wrapper.prop('name')).toEqual(name);
        });

        it(`Should have textLeft: ${textLeft}`, () => {
          expect(wrapper.prop('textLeft')).toEqual(textLeft);
        });

        it(`Should have textRight: ${textRight}`, () => {
          expect(wrapper.prop('textRight')).toEqual(textRight);
        });

        it(`Should have isDefaultChecked: ${isDefaultChecked}`, () => {
          expect(wrapper.prop('isDefaultChecked')).toEqual(isDefaultChecked);
        });

        it(`Should have isChecked: ${isChecked}`, () => {
          expect(wrapper.prop('isChecked')).toEqual(isChecked);
        });

        it(`Should have isDisabled: ${isDisabled}`, () => {
          expect(wrapper.prop('isDisabled')).toEqual(isDisabled);
        });

        it(`Should have size: ${size}`, () => {
          expect(wrapper.prop('size')).toEqual(size);
        });
      })
    );

    return switcher;
  },
  {
    info: { inline: true }
  }
);
