import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Transfer } from './Transfer';
import { Component, tests } from './Transfer.test';
import { defaultValues } from '../../../constants/defaultValues';

const stories = storiesOf('Transfer', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const placeholder = text('Placeholder: ', defaultValues.placeholder);
    const isDisabled = boolean('isDisabled: ', defaultValues.isDisabled);
    const closeButton = text('Close button: ', defaultValues.closeButton);
    const submitButton = text('Submit button: ', defaultValues.submitButton);
    const notFoundMessage = text(
      'Not found message: ',
      defaultValues.notFoundMessage
    );
    const deleteAllButton = text(
      'Delete all button: ',
      defaultValues.deleteAllButton
    );
    const options = defaultValues.options;

    const transfer = Component(
      placeholder,
      isDisabled,
      closeButton,
      submitButton,
      deleteAllButton,
      options,
      notFoundMessage
    );

    specs(() => tests(transfer));

    return transfer;
  },
  {
    info: { inline: true }
  }
);
