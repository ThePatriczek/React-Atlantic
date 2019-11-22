import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { defaultValues } from '../../constants/defaultValues';
import { Component, tests } from './Badge.test';

const stories = storiesOf('Badge', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const type = select(
      `type:`,
      ['default', 'primary', 'success', 'warning', 'error'],
      defaultValues.type
    );

    const size = select(
      `size:`,
      ['small', `medium`, 'large'],
      defaultValues.size
    );

    const children = text(`children:`, undefined);

    const badge = Component(type, children, size);

    specs(() => tests(badge));

    return badge;
  },
  {
    info: { inline: true }
  }
);
