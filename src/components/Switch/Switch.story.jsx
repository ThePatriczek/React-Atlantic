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
    const textOn = text('textOn:', 'on');
    const textOff = text('textOff:', 'off');
    const size = select(`size:`, ['small', `medium`, 'large'], 'medium');
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
        type={type}
        isDefaultChecked={isDefaultChecked}
        onChange={action(`onChange`)}
        textOn={textOn}
        textOff={textOff}
      />
    );
    specs(() =>
      describe('Checkbox', () => {
        const wrapper = mount(switcher);

        it(`Should have type: ${type}`, () => {
          expect(wrapper.prop('type')).toEqual(type);
        });

        it(`Should have textOn: ${textOn}`, () => {
          expect(wrapper.prop('textOn')).toEqual(textOn);
        });

        it(`Should have textOff: ${textOff}`, () => {
          expect(wrapper.prop('textOff')).toEqual(textOff);
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
