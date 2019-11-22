import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Component, tests } from './DatePicker.test';

const stories = storiesOf('Date Picker', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const datePicker = Component();

    specs(() => tests(datePicker));

    return datePicker;
  },
  {
    info: { inline: true }
  }
);
