import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { defaultValues } from '../..';
import { Component, tests } from './Message.test';

const stories = storiesOf('Message', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const content = text('Content: ', defaultValues.content);
    const type = select(
      'Type: ',
      ['default', 'primary', 'warning', 'success', 'error'],
      defaultValues.type
    );
    const isLoading = boolean('isLoading: ', defaultValues.isLoading);
    const isAlternative = boolean(
      'isAlternative: ',
      defaultValues.isAlternative
    );

    const message = Component(content, type, isLoading, isAlternative);
    specs(() => tests(message));

    return message;
  },
  {
    info: { inline: true }
  }
);
