import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { describe, it, specs } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import { Checkbox } from './Checkbox';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const isChecked = boolean(`isChecked:`, false);
    const isDefaultChecked = boolean(`isDefaultChecked:`, false);
    const isDisabled = boolean(`isDisabled:`, false);
    const isPartiallyChecked = boolean(`isPartiallyChecked:`, false);
    const position = select(`Position:`, ['left', `right`], 'left');
    const children = text(`children:`, `Change me, please 🥺`);

    const checkbox = (
      <Checkbox
        isChecked={isChecked}
        isDefaultChecked={isDefaultChecked}
        isDisabled={isDisabled}
        isPartiallyChecked={isPartiallyChecked}
        position={position}
        onChange={action(`onChange`)}
      >
        {children}
      </Checkbox>
    );

    specs(() =>
      describe('Checkbox', () => {
        const wrapper = mount(checkbox);

        it(`Should have isChecked: ${isChecked}`, () => {
          expect(wrapper.prop('isChecked')).toEqual(isChecked);
        });

        it(`Should have isDefaultChecked: ${isDefaultChecked}`, () => {
          expect(wrapper.prop('isDefaultChecked')).toEqual(isDefaultChecked);
        });

        it(`Should have isDisabled: ${isDisabled}`, () => {
          expect(wrapper.prop('isDisabled')).toEqual(isDisabled);
        });

        it(`Should have isPartiallyChecked: ${isPartiallyChecked}`, () => {
          expect(wrapper.prop('isPartiallyChecked')).toEqual(
            isPartiallyChecked
          );
        });

        it(`Should have position: ${position}`, () => {
          expect(wrapper.prop('position')).toEqual(position);
        });

        it(`Should have children: ${children}`, () => {
          expect(wrapper.prop('children')).toEqual(children);
        });
      })
    );

    return checkbox;
  },
  {
    info: { inline: true }
  }
);
