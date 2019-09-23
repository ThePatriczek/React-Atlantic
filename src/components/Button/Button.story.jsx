import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs, describe, it } from 'storybook-addon-specifications';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import { Button, ButtonType } from './Button';

const stories = storiesOf('Components/Button', module);

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
    const falsy = false;
    const size = select(`Size:`, ['small', `medium`, 'large'], 'medium');
    const type = select(
      `Type:`,
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
    const isDisabled = boolean(`isDisabled:`, falsy);
    const isFullWidth = boolean(`isFullWidth:`, falsy);
    const isRound = boolean(`isRound:`, falsy);
    const txt = text(`Text:`, `Change me!`);
    const button = (
      <Button
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        isRound={isRound}
        size={size}
        type={type}
        onClick={action(`onClick`)}
      >
        {txt}
      </Button>
    );

    specs(() =>
      describe('Hello World', () => {
        const wrapper = mount(button);
        it('Should have the "Change me!" label', () => {
          const text = 'Change me!';

          expect(wrapper.text()).toEqual(text);
        });
        it('"onClick" should have been called once', () => {
          const mockClick = jest.fn();

          wrapper.setProps({
            onClick: mockClick
          });
          wrapper.simulate('click');

          expect(mockClick).toHaveBeenCalledTimes(1);
        });
        it(`Should have "Disabled" prop to equal ${falsy}`, () => {
          expect(wrapper.prop('isDisabled')).toEqual(falsy);
        });
        it(`Should have "isRound" prop to equal ${falsy}`, () => {
          expect(wrapper.prop('isRound')).toEqual(falsy);
        });
        it(`Should have "isFullWidth" prop to equal ${falsy}`, () => {
          expect(wrapper.prop('isFullWidth')).toEqual(falsy);
        });
        it('Should have "type" prop defined', () => {
          expect(wrapper.prop('type')).toBeDefined();
        });
        it('Should have "size" prop defined', () => {
          expect(wrapper.prop('size')).toBeDefined();
        });
      })
    );

    return button;
  },
  {
    info: { inline: true }
  }
);
