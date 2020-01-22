import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { defaultValues } from '../../constants/defaultValues';
import { Tabs } from './Tabs';
import { Typography } from '../Typography';
import { Icon } from '../Icon';
import { action } from '@storybook/addon-actions';
import { Component, tests } from './Tabs.test';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const { Text, Paragraph } = Typography;
    const isBordered = boolean(`isBordered:`, defaultValues.isBordered);
    const isAlternative = boolean(
      `isAlternative:`,
      defaultValues.isAlternative
    );
    const size = select(
      `size:`,
      ['small', `medium`, 'large'],
      defaultValues.size
    );
    const children = text(`children:`, defaultValues.children);
    const className = text(`className:`, defaultValues.className);
    const onChange = action(`onChange`);
    const tabs = defaultValues.tabs;

    const Tabs = Component(
      tabs,
      children,
      size,
      className,
      isAlternative,
      isBordered,
      onChange
    );

    specs(() => tests(Tabs));

    return Tabs;
  },
  {
    info: { inline: true }
  }
);
