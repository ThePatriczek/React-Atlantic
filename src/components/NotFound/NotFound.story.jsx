import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Component, tests } from './NotFound.test';
import { defaultValues } from '../../constants/defaultValues';

const stories = storiesOf('NotFound', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const title = text(`title:`, `Not found...`);

    const children = text(`children:`, defaultValues.children);

    const notFound = Component(title, children);

    specs(() => tests(notFound));

    return notFound;
  },
  {
    info: { inline: true }
  }
);
