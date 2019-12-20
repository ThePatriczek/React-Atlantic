import * as React from 'react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { defaultValues } from '../../constants/defaultValues';
import { specs } from 'storybook-addon-specifications';
import { Component, tests } from './Skeleton.test';

const stories = storiesOf('Skeleton', module);

stories.addDecorator(withKnobs);

stories.add(
  'Overview',
  () => {
    return (
      <>
        <div style={{ height: 100 }}>
          <Skeleton />
        </div>
        <Skeleton shape={'circle'} size={'large'} />
        <Skeleton shape={'circle'} size={'medium'} />
        <Skeleton shape={'circle'} size={'small'} />
        <Skeleton shape={'rectangle'} size={'small'} />
        <Skeleton shape={'rectangle'} size={'medium'} />
        <Skeleton shape={'rectangle'} size={'large'} />
        <Skeleton shape={'rectangle'} width={200} />
      </>
    );
  },
  {
    info: { inline: true }
  }
);

stories.add(
  'Playground',
  () => {
    const size = select(
      `size:`,
      ['small', 'medium', 'large'],
      defaultValues.size
    );
    const shape = select(
      `shape:`,
      ['rectangle', 'circle'],
      defaultValues.shape
    );

    const width = text(`width:`, defaultValues.width.toString());
    const height = text(`height:`, defaultValues.height.toString());

    const skeleton = Component(
      shape,
      size,
      parseInt(width) || undefined,
      parseInt(height) || undefined
    );

    specs(() => tests(skeleton));

    return skeleton;
  },
  {
    info: { inline: true }
  }
);
