import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { describe, it, specs } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import { Radio } from '../Radio';
import { action } from '@storybook/addon-actions';

const { Button } = Radio;

const stories = storiesOf('Radio', module);

stories.addDecorator(withKnobs);

stories.add(
  'Radio.Button',
  () => {
    const isDefaultChecked = boolean(`isDefaultChecked:`, false);
    const isChecked = boolean(`isChecked:`, false);
    const isDisabled = boolean(`isDisabled:`, false);
    const children = text(`children:`, `Change me, please 🥺`);
    const size = select('size:', ['small', 'medium', 'large'], 'medium');

    const radioButton = (
      <Button
        isChecked={isChecked}
        isDefaultChecked={isDefaultChecked}
        isDisabled={isDisabled}
        onChange={action(`onChange`)}
        size={size}
      >
        {children}
      </Button>
    );

    specs(() =>
      describe('Checkbox', () => {
        const wrapper = mount(radioButton);

        it(`Should have isChecked: ${isChecked}`, () => {
          expect(wrapper.prop('isChecked')).toEqual(isChecked);
        });

        it(`Should have isDisabled: ${isDisabled}`, () => {
          expect(wrapper.prop('isDisabled')).toEqual(isDisabled);
        });

        it(`Should have size: ${size}`, () => {
          expect(wrapper.prop('size')).toEqual(size);
        });

        it(`Should have isDefaultChecked: ${isDefaultChecked}`, () => {
          expect(wrapper.prop('isDefaultChecked')).toEqual(isDefaultChecked);
        });

        it(`Should have children: ${children}`, () => {
          expect(wrapper.prop('children')).toEqual(children);
        });
      })
    );

    return radioButton;
  },
  {
    info: { inline: true }
  }
);
