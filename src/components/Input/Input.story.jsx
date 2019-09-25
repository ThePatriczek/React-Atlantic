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
    const placeholder = text(`Placeholder:`, `Change me, please 🥺`);
    const size = select(`Size:`, ['small', `medium`, 'large'], 'medium');
    const iconRight = select(
      `iconRight:`,
      [
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
      'hamburger'
    );
    const iconLeft = select(
      `iconLeft:`,
      [
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
      'arrowUp'
    );

    const input = (
      <Input
        isDisabled={isDisabled}
        placeholder={placeholder}
        iconRight={iconRight}
        //iconLeft={iconLeft}
        size={size}
        isLoading={isLoading}
        isAlternative={isAlternative}
      />
    );

    /*specs(() =>
      describe('Input', () => {
        const wrapper = mount(input);

        it(`Should have isDisabled: ${isDisabled}`, () => {
          expect(wrapper.prop('isDisabled')).toEqual(isDisabled);
        });

        it(`Should have isDisabled: ${size}`, () => {
          expect(wrapper.prop('size')).toEqual(size);
        });

        it(`Should have isAlternative: ${isAlternative}`, () => {
          expect(wrapper.prop('size')).toEqual(isAlternative);
        });

        it(`Should have isLoading: ${isLoading}`, () => {
          expect(wrapper.prop('size')).toEqual(isLoading);
        });

        it(`Should have iconRight: ${iconRight}`, () => {
          expect(wrapper.prop('size')).toEqual(iconRight);
        });
      })
    );*/

    return input;
  },
  {
    info: { inline: true }
  }
);
