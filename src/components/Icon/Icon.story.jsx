import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Icon } from './Icon';
import { defaultValues } from '../../constants/defaultValues';
import { Component, tests } from './Icon.test';

const stories = storiesOf('Icon', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => (
  <div>
    <div>
      <Icon name={'hamburger'} />
    </div>
    <div>
      <Icon name={'arrowUp'} />
    </div>
    <div>
      <Icon name={'arrowRight'} />
    </div>
    <div>
      <Icon name={'arrowDown'} />
    </div>
    <div>
      <Icon name={'arrowLeft'} />
    </div>
    <div>
      <Icon name={'arrowDoubleUp'} />
    </div>
    <div>
      <Icon name={'arrowDoubleRight'} />
    </div>
    <div>
      <Icon name={'arrowDoubleDown'} />
    </div>
    <div>
      <Icon name={'arrowDoubleLeft'} />
    </div>
  </div>
));

stories.add(
  'Playground',
  () => {
    const name = select(
      `Type:`,
      [
        'hamburger',
        `arrowUp`,
        'arrowRight',
        'arrowDown',
        'arrowLeft',
        'arrowDoubleUp',
        'arrowDoubleDown',
        'arrowDoubleLeft',
        'arrowDoubleRight',
        'loading'
      ],
      defaultValues.iconName
    );
    const isRotating = boolean(`isRotating`, defaultValues.isRotating);

    const icon = Component(name, isRotating);

    specs(() => tests(icon));

    return icon;
  },
  {
    info: { inline: true }
  }
);
