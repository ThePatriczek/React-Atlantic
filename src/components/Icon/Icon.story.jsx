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
      <Icon name={'arrowsVertical'} />
    </div>
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
    <div>
      <Icon name={'filter'} />
    </div>
    <div>
      <Icon name={'diff'} />
    </div>
    <div>
      <Icon name={'table'} />
    </div>
    <div>
      <Icon name={'news'} />
    </div>
    <div>
      <Icon name={'filePdf'} />
    </div>
    <div>
      <Icon name={'fileDoc'} />
    </div>
    <div>
      <Icon name={'fileJpg'} />
    </div>
    <div>
      <Icon name={'filePng'} />
    </div>
    <div>
      <Icon name={'filePpt'} />
    </div>
    <div>
      <Icon name={'fileRtf'} />
    </div>
    <div>
      <Icon name={'fileTxt'} />
    </div>
    <div>
      <Icon name={'fileXls'} />
    </div>
    <div>
      <Icon name={'fileXml'} />
    </div>
    <div>
      <Icon name={'fileZip'} />
    </div>
    <div>
      <Icon name={'building'} />
    </div>
    <div>
      <Icon name={'offer'} />
    </div>
    <div>
      <Icon name={'prev'} />
    </div>
    <div>
      <Icon name={'next'} />
    </div>
    <div>
      <Icon name={'external'} />
    </div>
    <div>
      <Icon name={'change'} />
    </div>
    <div>
      <Icon name={'print'} />
    </div>
    <div>
      <Icon name={'squaresGrid'} />
    </div>
    <div>
      <Icon name={'tag'} />
    </div>
    <div>
      <Icon name={'timeline'} />
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
