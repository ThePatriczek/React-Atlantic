import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Component, tests } from './Popconfirm.test';
import { defaultValues } from '../../constants/defaultValues';

const stories = storiesOf('Popconfirm', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const children = text(`children:`, undefined);
    const content = text(`content:`, undefined);
    const cancelText = text(`cancelText:`, defaultValues.closeText);
    const confirmText = text(`confirmText:`, defaultValues.submitText);

    const position = select(
      'Position: ',
      ['left', 'right', 'bottom', 'top'],
      defaultValues.position
    );

    const popconfirm = Component(
      children,
      position,
      content,
      cancelText,
      confirmText
    );

    specs(() => tests(popconfirm));

    return popconfirm;
  },
  {
    info: { inline: true }
  }
);
