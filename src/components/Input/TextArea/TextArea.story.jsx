import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { describe, it, specs } from 'storybook-addon-specifications';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Input } from '../Input';
import { TextArea } from './TextArea';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

stories.add(
  'Input.TextArea',
  () => {
    const isDisabled = boolean(`isDisabled:`, false);
    const autoFocus = boolean(`autoFocus:`, false);
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
        'arrowDoubleRight',
        'enter'
      ],
      'enter'
    );
    const placeholder = text(`placeholder:`, `Change me, please 🥺`);
    const defaultValue = text(`defaultValue:`, `Change me, please 🥺`);
    const value = text(`value:`, `Change me, please 🥺`);

    const textArea = (
      <Input.TextArea
        isDisabled={isDisabled}
        placeholder={placeholder}
        iconRight={iconRight}
        iconLeft={iconLeft}
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
      describe('Input.TextArea', () => {
        const wrapper = shallow(textArea);

        it(`Should have isDisabled: ${isDisabled}`, () => {
          expect(wrapper.props().isDisabled).toEqual(isDisabled);
        });

        it(`Should have iconRight: ${iconRight}`, () => {
          expect(wrapper.props().iconRight).toEqual(iconRight);
        });

        it(`Should have iconLeft: ${iconLeft}`, () => {
          expect(wrapper.props().iconLeft).toEqual(iconLeft);
        });

        it(`Should have placeholder: ${placeholder}`, () => {
          expect(wrapper.props().placeholder).toEqual(placeholder);
        });

        it(`Should have defaultValue: ${defaultValue}`, () => {
          expect(wrapper.props().defaultValue).toEqual(defaultValue);
        });

        it(`Should have value: ${value}`, () => {
          expect(wrapper.props().value).toEqual(value);
        });
      })
    );

    return textArea;
  },
  {
    info: { inline: true }
  }
);
