import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { defaultValues } from '../../constants/defaultValues';
import { Component, tests } from './Select.test';
import { specs } from 'storybook-addon-specifications';

const stories = storiesOf('Select', module);
stories.addDecorator(withKnobs);

stories.add(
  'Playground',
  () => {
    const isMulti = boolean(`isMulti:`, defaultValues.isMulti);
    const isDisabled = boolean(`isDisabled:`, defaultValues.isDisabled);
    const isFullWidth = boolean(`isFullWidth:`, defaultValues.isFullWidth);
    const size = select(
      `size:`,
      ['small', `medium`, 'large'],
      defaultValues.size
    );
    const placeholder = text(`placeholder:`, defaultValues.placeholder);
    const defaultValue = select(
      `defaultValue:`,
      ['value 1', `value 2`, 'value 3'],
      defaultValues.selectDefaultValueOne
    );
    const value = select(
      `value:`,
      ['value 1', `value 2`, 'value 3'],
      defaultValues.selectDefaultValueTwo
    );

    const isAlternative = boolean(
      'isAlternative: ',
      defaultValues.isAlternative
    );
    const onChange = action(`onChange`);

    const component = Component(
      size,
      isMulti,
      placeholder,
      value,
      defaultValue,
      isDisabled,
      isFullWidth,
      null,
      isAlternative,
      onChange
    );

    specs(() => tests(component));

    return component;
  },
  {
    info: { inline: true }
  }
);
