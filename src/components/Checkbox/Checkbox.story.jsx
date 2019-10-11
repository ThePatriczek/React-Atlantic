import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Component, tests } from './Checkbox.test';
import { defaultValues } from '../../constants/defaultValues';

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const isChecked = boolean(`isChecked:`, defaultValues.isChecked);
    const isDefaultChecked = boolean(
      `isDefaultChecked:`,
      defaultValues.isDefaultChecked
    );
    const isDisabled = boolean(`isDisabled:`, defaultValues.isDisabled);
    const isPartiallyChecked = boolean(
      `isPartiallyChecked:`,
      defaultValues.isPartiallyChecked
    );
    const position = select(
      `Position:`,
      ['left', `right`],
      defaultValues.position
    );
    const children = text(`children:`, defaultValues.children);

    const checkbox = Component(
      isChecked,
      isDefaultChecked,
      isDisabled,
      isPartiallyChecked,
      position,
      children
    );

    specs(() => tests(checkbox));

    return checkbox;
  },
  {
    info: { inline: true }
  }
);
