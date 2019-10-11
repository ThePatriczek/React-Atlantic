import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { action } from '@storybook/addon-actions';
import { defaultValues } from '../..';
import { Component, tests } from './Switch.test';

const stories = storiesOf('Switch', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const isChecked = boolean(`isChecked:`, defaultValues.isChecked);
    const isDisabled = boolean(`isDisabled:`, defaultValues.isDisabled);
    const isDefaultChecked = boolean(
      `isDefaultChecked:`,
      defaultValues.isDefaultChecked
    );
    const textOn = text('textOn:', defaultValues.textOn);
    const textOff = text('textOff:', defaultValues.textOff);
    const size = select(
      `size:`,
      ['small', `medium`, 'large'],
      defaultValues.size
    );
    const type = select(
      `type:`,
      ['primary', 'success', 'warning', 'error'],
      defaultValues.type
    );
    const onChange = action(`onChange`);

    const switcher = Component(
      isChecked,
      isDisabled,
      size,
      type,
      isDefaultChecked,
      textOn,
      textOff,
      onChange
    );
    specs(() => tests(switcher));

    return switcher;
  },
  {
    info: { inline: true }
  }
);
