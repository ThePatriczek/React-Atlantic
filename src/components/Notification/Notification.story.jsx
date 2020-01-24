import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { action } from '@storybook/addon-actions';
import { defaultValues } from '../../constants/defaultValues';
import { Component, tests } from './Notification.test';

const stories = storiesOf('Notification', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const children = text('Children: ', defaultValues.notificationContent);
    const title = text('Title: ', defaultValues.notificationTitle);
    const size = select(
      'Size: ',
      ['small', 'medium', 'large'],
      defaultValues.size
    );
    const type = select(
      'Type: ',
      ['default', 'primary', 'warning', 'success', 'error'],
      defaultValues.type
    );
    const onClose = action(`onClose`);
    const notification = Component(children, title, size, type, onClose);
    specs(() => tests(notification));

    return notification;
  },
  {
    info: { inline: true }
  }
);
