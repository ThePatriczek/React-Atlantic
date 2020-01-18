import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Transfer } from './Transfer';
import { Typography } from '../../Typography';
import { Component, tests } from './Transfer.test';
import { defaultValues } from '../../../constants/defaultValues';

const { Text } = Typography;

const stories = storiesOf('Transfer', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const placeholder = text('Placeholder: ', defaultValues.placeholder);

    const isDisabled = boolean('isDisabled', defaultValues.isDisabled);
    const options = [
      { value: 'first', label: 'first', isChecked: false },
      { value: 'second', label: 'second', isChecked: false },
      { value: 'third', label: 'third', isChecked: false }
    ];

    const tooltip = Component(placeholder, options, isDisabled);

    specs(() => tests(tooltip));

    return tooltip;
  },
  {
    info: { inline: true }
  }
);
