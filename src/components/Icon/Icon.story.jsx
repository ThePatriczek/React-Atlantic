import * as React from 'react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { specs } from 'storybook-addon-specifications';
import { defaultValues } from '../../constants/defaultValues';
import { Component, tests } from './Icon.test';
import { StyledItem, StyledItemLabel, StyledLayout } from './Icon.story.style';
import { Icon, IconsMap } from './Icon';

const stories = storiesOf('Icon', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => (
  <>
    <StyledLayout>
      {Object.keys(IconsMap).map(key => (
        <StyledItem>
          <Icon name={key} />
          <StyledItemLabel>{key}</StyledItemLabel>
        </StyledItem>
      ))}
    </StyledLayout>
  </>
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
        'loading',
        'ban',
        'hourGlass'
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
