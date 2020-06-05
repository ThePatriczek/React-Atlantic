import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Transfer } from './Transfer';
import { Component, tests } from './Transfer.test';
import { defaultValues } from '../../../constants/defaultValues';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Transfer', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const placeholder = text('Placeholder: ', defaultValues.placeholder);
    const closeText = text('Close text: ', defaultValues.closeText);
    const submitText = text('Submit text: ', defaultValues.submitText);
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
    const visibleRows = select(
      'Visible rows: ',
      [3, 5, 7],
      defaultValues.visibleRows
    );
    const deleteAllText = text(
      'Delete all button: ',
      defaultValues.deleteAllText
    );

    const isDisabled = boolean('isDisabled: ', defaultValues.isDisabled);
    const isFullWidth = boolean('isFullWidth: ', defaultValues.isFullWidth);
    const isAlternative = boolean(
      'isAlternative: ',
      defaultValues.isAlternative
    );

    const options = defaultValues.options;
    const onChange = action(`onChange`);
    const onCancel = action(`onCancel`);
    const onSubmit = action(`onSubmit`);

    const transfer = Component(
      placeholder,
      isDisabled,
      closeText,
      submitText,
      deleteAllText,
      options,
      size,
      isFullWidth,
      direction,
      isAlternative,
      visibleRows,
      onChange,
      onCancel,
      onSubmit
    );

    specs(() => tests(transfer));

    return transfer;
  },
  {
    info: { inline: true }
  }
);
