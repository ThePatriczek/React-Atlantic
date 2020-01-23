import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
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
    const closeText = text('Close button: ', defaultValues.closeText);
    const submitText = text('Submit button: ', defaultValues.submitText);
    const size = select(
      'Size: ',
      ['small', 'medium', 'large'],
      defaultValues.size
    );
    const direction = select(
      'Direction: ',
      ['horizontal', 'vertical'],
      defaultValues.direction
    );
    const deleteAllText = text(
      'Delete all button: ',
      defaultValues.deleteAllText
    );

    const isDisabled = boolean('isDisabled: ', defaultValues.isDisabled);
    const isFullWidth = boolean('isFullWidth: ', defaultValues.isFullWidth);

    const options = defaultValues.options;

    const transfer = Component(
      placeholder,
      isDisabled,
      closeText,
      submitText,
      deleteAllText,
      options,
      size,
      isFullWidth,
      direction
    );

    specs(() => tests(transfer));

    return transfer;
  },
  {
    info: { inline: true }
  }
);
