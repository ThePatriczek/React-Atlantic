import {
  boolean,
  select,
  text,
  withKnobs,
  object
} from '@storybook/addon-knobs';
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
    const children = text(`children:`, defaultValues.dumbText);
    const className = text(`className:`, defaultValues.className);
    const onChange = action(`onChange`);
    const animationConfig = object(
      `animationConfig`,
      {
        mass: 1,
        tension: 1000,
        friction: 120
      },
      `animation`
    );
    const tabs = defaultValues.tabs;

    const Tabs = Component(
      tabs,
      children,
      size,
      className,
      isAlternative,
      isBordered,
      onChange,
      animationConfig
    );

    specs(() => tests(Tabs));

    return Tabs;
  },
  {
    info: { inline: true }
  }
);
