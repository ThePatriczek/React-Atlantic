import * as React from 'react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { defaultValues } from '../../constants/defaultValues';
import { specs } from 'storybook-addon-specifications';
import { tests, Component } from './Table.test';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Table', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const sortBy = text(`sortBy:`, defaultValues.sortBy);
    const order = select(`order:`, ['asc', 'desc'], defaultValues.order);

    const onSort = action(`onSort`);

    const table = Component(sortBy, order, onSort);

    specs(() => tests(table));

    return table;
  },
  {
    info: { inline: true }
  }
);
