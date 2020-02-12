import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Component, tests } from './Timeline.test';

const stories = storiesOf('Timeline', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const Timeline = Component();

    specs(() => tests(Timeline));

    return Timeline;
  },
  {
    info: { inline: true }
  }
);
