import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { action } from '@storybook/addon-actions';
import { defaultValues } from '../..';
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
    const primaryButtonFullWidth = boolean(
      'Primary button full width: ',
      defaultValues.isFullWidth
    );

    const primaryButtonIcon = select(
      'Primary button icon: ',
      [
        'arrowUp',
        'arrowDoubleUp',
        'arrowRight',
        'arrowDoubleRight',
        'arrowDown',
        'arrowDoubleDown',
        'arrowLeft',
        'arrowDoubleLeft',
        'hamburger',
        'loading',
        'edit',
        'copy',
        'check',
        'users',
        'user',
        'upload',
        'trash',
        'search',
        'plus',
        'logout',
        'license',
        'key',
        'info',
        'import',
        'export',
        'eye',
        'eyeSlash',
        'close',
        'clear',
        'enter',
        'error',
        'warning',
        'checkCircle'
      ],
      null
    );

    const primaryButtonContent = text(
      'Primary button content: ',
      defaultValues.primaryButtonContent
    );
    const secondaryButtonContent = text(
      'Secondary button content: ',
      defaultValues.secondaryButtonContent
    );

    const notification = Component(
      children,
      title,
      size,
      type,
      primaryButtonFullWidth,
      primaryButtonIcon,
      primaryButtonContent,
      secondaryButtonContent
    );
    specs(() => tests(notification));

    return notification;
  },
  {
    info: { inline: true }
  }
);
