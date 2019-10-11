import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs } from 'storybook-addon-specifications';
import { Input } from './Input';
import { Component, tests } from './Input.test';
import { defaultValues } from '../../constants/defaultValues';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => (
  <div>
    <div>
      <Input placeholder={`Default input`} />
      <Input placeholder={`FullWidth input`} isFullWidth />
      <Input placeholder={`FullWidth input`} isFullWidth isAlternative />
      <Input placeholder={`Loading...`} isLoading />
      <Input
        placeholder={`Disabled input`}
        isDisabled
        iconRight={'hamburger'}
        isAlternative
      />
      <Input placeholder={`Icon left`} iconLeft={'arrowLeft'} />
      <Input placeholder={`Icon right`} iconRight={'hamburger'} />
    </div>
    <div>
      <Input placeholder={`Alertnative input`} isAlternative />
      <Input
        placeholder={`Alertnative Icon left`}
        isAlternative
        iconLeft={'hamburger'}
      />
      <Input
        placeholder={`Alertnative Icon right`}
        isAlternative
        iconRight={'hamburger'}
      />
    </div>
    <div>
      <Input
        placeholder={`Small input`}
        iconRight={'hamburger'}
        size={'small'}
        isAlternative
      />
      <Input
        placeholder={`Medium input`}
        iconRight={'hamburger'}
        size={'medium'}
        isAlternative
      />
      <Input
        placeholder={`Large input`}
        iconRight={'hamburger'}
        size={'large'}
        isAlternative
      />
    </div>
  </div>
));

stories.add(
  'Playground',
  () => {
    const isLoading = boolean(`isLoading:`, defaultValues.isLoading);
    const isDisabled = boolean(`isDisabled:`, defaultValues.isDisabled);
    const isAlternative = boolean(
      `isAlternative:`,
      defaultValues.isAlternative
    );
    const autoFocus = boolean(`autoFocus:`, defaultValues.autoFocus);
    const iconRight = select(
      `iconRight:`,
      [
        null,
        'hamburger',
        `arrowUp`,
        'arrowRight',
        'arrowDown',
        'arrowLeft',
        'arrowDoubleUp',
        'arrowDoubleDown',
        'arrowDoubleLeft',
        'arrowDoubleRight'
      ],
      defaultValues.iconRight
    );
    const iconLeft = select(
      `iconLeft:`,
      [
        null,
        'hamburger',
        `arrowUp`,
        'arrowRight',
        'arrowDown',
        'arrowLeft',
        'arrowDoubleUp',
        'arrowDoubleDown',
        'arrowDoubleLeft',
        'arrowDoubleRight'
      ],
      defaultValues.iconLeft
    );
    const size = select(
      `size:`,
      ['small', `medium`, 'large'],
      defaultValues.size
    );
    const placeholder = text(`placeholder:`, defaultValues.placeholder);
    const defaultValue = text(`defaultValue:`, defaultValues.defaultValue);
    const value = text(`value:`, defaultValues.value);
    const onChange = action(`onChange`);
    const onEnterPress = action(`onEnterPress`);
    const onFocus = action(`onFocus`);
    const onBlur = action(`onBlur`);
    const input = Component(
      isDisabled,
      isLoading,
      isAlternative,
      placeholder,
      iconRight,
      iconLeft,
      size,
      autoFocus,
      defaultValue,
      value,
      onChange,
      onEnterPress,
      onFocus,
      onBlur
    );

    specs(() => tests(input));

    return input;
  },
  {
    info: { inline: true }
  }
);
