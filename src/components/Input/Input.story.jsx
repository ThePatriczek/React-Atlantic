import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { describe, it, specs } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import { Input } from './Input';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => (
  <div>
    <div>
      <Input placeholder={`Default input`} />
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
    const isLoading = boolean(`isLoading:`, false);
    const isDisabled = boolean(`isDisabled:`, false);
    const isAlternative = boolean(`isAlternative:`, false);
    const autoFocus = boolean(`autoFocus:`, false);
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
      null
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
      null
    );
    const size = select(`size:`, ['small', `medium`, 'large'], 'medium');
    const placeholder = text(`placeholder:`, `Change me, please 🥺`);
    const defaultValue = text(`defaultValue:`, `Change me, please 🥺`);
    const value = text(`value:`, `Change me, please 🥺`);

    const input = (
      <Input
        isDisabled={isDisabled}
        isLoading={isLoading}
        isAlternative={isAlternative}
        placeholder={placeholder}
        iconRight={iconRight}
        iconLeft={iconLeft}
        size={size}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        value={value}
        onChange={action(`onChange`)}
        onEnterPress={action(`onEnterPress`)}
        onFocus={action(`onFocus`)}
        onBlur={action(`onBlur`)}
      />
    );

    specs(() =>
      describe('Input', () => {
        const wrapper = mount(input);

        it(`Should have isDisabled: ${isDisabled}`, () => {
          expect(wrapper.prop('isDisabled')).toEqual(isDisabled);
        });

        it(`Should have isLoading: ${isLoading}`, () => {
          expect(wrapper.prop('isLoading')).toEqual(isLoading);
        });

        it(`Should have isAlternative: ${isAlternative}`, () => {
          expect(wrapper.prop('isAlternative')).toEqual(isAlternative);
        });

        it(`Should have iconRight: ${iconRight}`, () => {
          expect(wrapper.prop('iconRight')).toEqual(iconRight);
        });

        it(`Should have iconLeft: ${iconLeft}`, () => {
          expect(wrapper.prop('iconLeft')).toEqual(iconLeft);
        });

        it(`Should have size: ${size}`, () => {
          expect(wrapper.prop('size')).toEqual(size);
        });

        it(`Should have placeholder: ${placeholder}`, () => {
          expect(wrapper.prop('placeholder')).toEqual(placeholder);
        });
      })
    );

    return input;
  },
  {
    info: { inline: true }
  }
);
