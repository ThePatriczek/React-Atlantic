import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { describe, it, specs } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import { Button } from './Button';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add(
  'Overview',
  () => (
    <div>
      <div>
        <Button>{`Default`}</Button>
        <Button type={'dashed'}>{`Dashed`}</Button>
        <Button isDisabled>{`Disabled`}</Button>
        <Button>{`Upload`}</Button>
        <Button type={'transparent'}>{`Transparent`}</Button>
      </div>
      <div>
        <Button type={'primary'}>{`Primary`}</Button>
        <Button type={'success'}>{`Success`}</Button>
        <Button type={'warning'}>{`Warning`}</Button>
        <Button type={'error'}>{`Error`}</Button>
      </div>
      <div>
        <Button isRound>{`Rounded`}</Button>
      </div>
      <div>
        <Button size={'small'}>{`Small`}</Button>
        <Button>{`Medium (default)`}</Button>
        <Button size={'large'}>{`Large`}</Button>
      </div>
      <div>
        <Button size={'small'}>{`Small`}</Button>
        <Button>{`Medium (default)`}</Button>
        <Button size={'large'}>{`Large`}</Button>
      </div>
      <div>
        <Button isFullWidth>{`Full Wide default`}</Button>
        <Button isFullWidth type={'primary'}>{`Full Wide primary`}</Button>
        <Button isFullWidth type={'success'}>{`Full Wide success`}</Button>
        <Button isFullWidth type={'warning'}>{`Full Wide warning`}</Button>
        <Button isFullWidth type={'error'}>{`Full Wide error`}</Button>
      </div>
    </div>
  ),
  { info: { inline: true } }
);

stories.add(
  'Playground',
  () => {
    const isDisabled = boolean(`isDisabled:`, false);
    const isFullWidth = boolean(`isFullWidth:`, false);
    const isRound = boolean(`isRound:`, false);
    const size = select(`size:`, ['small', `medium`, 'large'], 'medium');
    const type = select(
      `type:`,
      [
        'default',
        'primary',
        'success',
        'warning',
        'error',
        'dashed',
        'transparent'
      ],
      'default'
    );
    const value = text(`text:`, `Change me, please 🥺`);
    const button = (
      <Button
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        isRound={isRound}
        size={size}
        type={type}
        onClick={action(`onClick`)}
      >
        {value}
      </Button>
    );

    specs(() =>
      describe('Button', () => {
        const wrapper = mount(button);

        it(`Should have the right text: ${value}`, () =>
          expect(wrapper.text()).toEqual(value));

        it(`onClick should have been called if Button is not disabled`, () => {
          const mockClick = jest.fn();

          wrapper.setProps({
            onClick: mockClick
          });

          wrapper.simulate('click');

          if (!isDisabled) {
            expect(mockClick).toHaveBeenCalled();
          } else {
            expect(mockClick).not.toHaveBeenCalled();
          }
        });

        it(`Should have isDisabled: ${isDisabled}`, () => {
          expect(wrapper.prop('isDisabled')).toEqual(isDisabled);
        });

        it(`Should have isRound: ${isRound}`, () => {
          expect(wrapper.prop('isRound')).toEqual(isRound);
        });

        it(`Should have isFullWidth: ${isFullWidth}`, () => {
          expect(wrapper.prop('isFullWidth')).toEqual(isFullWidth);
        });

        it(`Should have type: ${type}`, () => {
          expect(wrapper.prop('type')).toEqual(type);
        });

        it(`Should have size: ${size}`, () => {
          expect(wrapper.prop('size')).toEqual(size);
        });
      })
    );

    return button;
  },
  {
    info: { inline: true }
  }
);
