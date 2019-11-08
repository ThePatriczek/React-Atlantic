import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { action } from '@storybook/addon-actions';
import { defaultValues } from '../..';
import { Component, tests } from './ResponseMessage.test';

const stories = storiesOf('Response Message', module);

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

    const reponseMessage = Component(content, type, isLoading, isAlternative);
    specs(() => tests(reponseMessage));

    return reponseMessage;
  },
  {
    info: { inline: true }
  }
);
