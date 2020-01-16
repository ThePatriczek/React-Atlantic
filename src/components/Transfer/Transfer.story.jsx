import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Transfer } from './Transfer';
import { Typography } from '../Typography';
import { Component, tests } from './Transfer.test';

const { Text } = Typography;

const stories = storiesOf('Transfer', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const tooltip = Component();

    specs(() => tests(tooltip));

    return tooltip;
  },
  {
    info: { inline: true }
  }
);
