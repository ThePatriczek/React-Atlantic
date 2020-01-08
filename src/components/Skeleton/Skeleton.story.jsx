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
        <Skeleton shape={'rectangle'} width={200} height={60} />
        <Skeleton width={'90%'} size={'large'} />
        <Skeleton width={'10cm'} size={'large'} />
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

    let isMeasureWidth = false;
    if (width.includes('%') || width.includes('cm')) {
      isMeasureWidth = true;
    }

    const skeleton = Component(
      shape,
      size,
      isMeasureWidth ? width : parseInt(width) || undefined,
      parseInt(height) || undefined
    );

    specs(() => tests(skeleton));

    return skeleton;
  },
  {
    info: { inline: true }
  }
);
