import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Component, tests } from './Timeline.test';
import { defaultValues } from '../../constants/defaultValues';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Timeline', module);

stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const index = number(`index:`, defaultValues.index);
    const onChange = action(`onChange`);

    const Timeline = Component(index, onChange);

    specs(() => tests(Timeline));

    return Timeline;
  },
  {
    info: { inline: true }
  }
);
