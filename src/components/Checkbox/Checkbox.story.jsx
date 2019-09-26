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
    const textPosition = select(`Text position:`, ['left', `right`], 'right');
    const value = text(`Text:`, `Change me, please 🥺`);

    const checkbox = (
      <Checkbox
        isChecked={isChecked}
        isDefaultChecked={isDefaultChecked}
        isDisabled={isDisabled}
        isPartiallyChecked={isPartiallyChecked}
        text={value}
        textPosition={textPosition}
        onChange={action(`onChange`)}
      />
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

        it(`Should have textPosition: ${textPosition}`, () => {
          expect(wrapper.prop('textPosition')).toEqual(textPosition);
        });

        it(`Should have text: ${value}`, () => {
          expect(wrapper.prop('text')).toEqual(value);
        });
      })
    );

    return checkbox;
  },
  {
    info: { inline: true }
  }
);
