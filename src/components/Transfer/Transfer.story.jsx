import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Transfer } from './Transfer';
import { Typography } from '../Typography';
import { Component, tests } from './Transfer.test';
import { defaultValues } from '../../constants/defaultValues';

const { Text } = Typography;

const stories = storiesOf('Transfer', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const placeholder = text('Placeholder: ', defaultValues.placeholder);

    const data = [
      { name: 'first', isChecked: false },
      { name: 'second', isChecked: false },
      { name: 'third', isChecked: false },
      { name: 'fourth', isChecked: false },
      { name: 'fifth', isChecked: false },
      { name: 'sixth', isChecked: false },
      { name: 'seventh', isChecked: false },
      { name: 'eight', isChecked: false }
    ];

    const tooltip = Component(placeholder, data);

    specs(() => tests(tooltip));

    return tooltip;
  },
  {
    info: { inline: true }
  }
);
