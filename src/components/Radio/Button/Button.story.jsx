import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Radio } from '../Radio';
import { action } from '@storybook/addon-actions';
import { defaultValues } from '../../..';
import { Component, tests } from './Button.test';

const stories = storiesOf('Radio', module);

stories.addDecorator(withKnobs);

stories.add(
  'Radio.Button',
  () => {
    const isDefaultChecked = boolean(
      `isDefaultChecked:`,
      defaultValues.isDefaultChecked
    );
    const isChecked = boolean(`isChecked:`, defaultValues.isChecked);
    const isDisabled = boolean(`isDisabled:`, defaultValues.isDisabled);
    const children = text(`children:`, defaultValues.children);
    const size = select(
      'size:',
      ['small', 'medium', 'large'],
      defaultValues.size
    );
    const onChange = action(`onChange`);

    const radioButton = Component(
      isChecked,
      isDefaultChecked,
      isDisabled,
      onChange,
      size,
      children
    );

    specs(() => tests(radioButton));

    return radioButton;
  },
  {
    info: { inline: true }
  }
);
