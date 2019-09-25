import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { describe, it, specs } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import { Checkbox } from './Checkbox';

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const isChecked = boolean(`isChecked:`, false);
    const isDisabled = boolean(`isDisabled:`, false);
    const isPartiallyChecked = boolean(`isPartiallyChecked:`, false);
    const value = text(`Text:`, `Change me, please 🥺`);
    const textPosition = select(`Text position:`, ['left', `right`], 'right');

    const checkbox = (
      <Checkbox
        isChecked={isChecked}
        isDisabled={isDisabled}
        isPartiallyChecked={isPartiallyChecked}
        text={value}
        textPosition={textPosition}
      />
    );

    specs(() =>
      describe('Checkbox', () => {
        const wrapper = mount(checkbox);

        it(`Should have isDisabled: ${isDisabled}`, () => {
          expect(wrapper.prop('isDisabled')).toEqual(isDisabled);
        });
        it(`Should have isPartiallyChecked: ${isPartiallyChecked}`, () => {
          expect(wrapper.prop('isPartiallyChecked')).toEqual(
            isPartiallyChecked
          );
        });
      })
    );

    return checkbox;
  },
  {
    info: { inline: true }
  }
);
