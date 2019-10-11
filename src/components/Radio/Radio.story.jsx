import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Radio } from './Radio';
import { action } from '@storybook/addon-actions';
import { defaultValues } from '../../constants/defaultValues';
import { Component, tests } from './Radio.test';

const stories = storiesOf('Radio', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const isDefaultChecked = boolean(
      `isDefaultChecked:`,
      defaultValues.isDefaultChecked
    );
    const isChecked = boolean(`isChecked:`, defaultValues.isChecked);
    const isDisabled = boolean(`isDisabled:`, defaultValues.isDisabled);
    const children = text(`children:`, defaultValues.children);
    const position = select(
      `Position:`,
      ['left', `right`],
      defaultValues.position
    );
    const onChange = action(`onChange`);

    const radio = Component(
      isDefaultChecked,
      isChecked,
      isDisabled,
      children,
      position,
      onChange
    );

    specs(() => tests(radio));

    return radio;
  },
  {
    info: { inline: true }
  }
);
