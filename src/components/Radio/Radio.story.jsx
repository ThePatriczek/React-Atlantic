import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { describe, it, specs } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import { Radio } from './Radio';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Radio', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const isDefaultChecked = boolean(`isDefaultChecked:`, false);
    const isChecked = boolean(`isChecked:`, false);
    const isDisabled = boolean(`isDisabled:`, false);
    const children = text(`children:`, `Change me, please 🥺`);
    const position = select(`Position:`, ['left', `right`], 'left');

    const radio = (
      <Radio
        isChecked={isChecked}
        isDefaultChecked={isDefaultChecked}
        isDisabled={isDisabled}
        position={position}
        onChange={action(`onChange`)}
      >
        {children}
      </Radio>
    );

    specs(() =>
      describe('Checkbox', () => {
        const wrapper = mount(radio);

        it(`Should have isChecked: ${isChecked}`, () => {
          expect(wrapper.prop('isChecked')).toEqual(isChecked);
        });

        it(`Should have isDisabled: ${isDisabled}`, () => {
          expect(wrapper.prop('isDisabled')).toEqual(isDisabled);
        });

        it(`Should have isDefaultChecked: ${isDefaultChecked}`, () => {
          expect(wrapper.prop('isDefaultChecked')).toEqual(isDefaultChecked);
        });

        it(`Should have position: ${position}`, () => {
          expect(wrapper.prop('position')).toEqual(position);
        });

        it(`Should have children: ${children}`, () => {
          expect(wrapper.prop('children')).toEqual(children);
        });
      })
    );

    return radio;
  },
  {
    info: { inline: true }
  }
);
