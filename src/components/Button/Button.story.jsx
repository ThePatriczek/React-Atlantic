import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { specs, describe, it } from 'storybook-addon-specifications';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import { Button } from './Button';

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
        <Button isRounded>{`Rounded`}</Button>
      </div>
      <div>
        <Button size={'small'}>{`Small`}</Button>
        <Button>{`Medium (default)`}</Button>
        <Button size={'large'}>{`Large`}</Button>
      </div>
      <div>
        <Button isFullWide>{`Full Wide default`}</Button>
        <Button isFullWide type={'primary'}>{`Full Wide primary`}</Button>
        <Button isFullWide type={'success'}>{`Full Wide success`}</Button>
        <Button isFullWide type={'warning'}>{`Full Wide warning`}</Button>
        <Button isFullWide type={'error'}>{`Full Wide error`}</Button>
      </div>
    </div>
  ),
  { info: { inline: true } }
);

stories.add(
  'Playground',
  () => {
    const button = (
      <Button
        isDisabled={boolean(`isDisabled:`, false)}
        isFullWide={boolean(`isFullWide:`, false)}
        isRounded={boolean(`isRounded:`, false)}
        size={select(`Size:`, ['small', `medium`, 'large'], 'medium')}
        type={select(
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
        )}
        onClick={action(`onClick`)}
      >
        {text(`Text:`, `Change me!`)}
      </Button>
    );

    specs(() =>
      describe('Hello World', () => {
        it('Should have the "Change me!" label', () => {
          const text = 'Change me!';
          const wrapper = mount(button);

          expect(wrapper.text()).toEqual(text);
        });
        it('onClick should have been called once', () => {
          const onClick = jest.fn();
          const wrapper = mount(button);

          wrapper.setProps({
            onClick: onClick
          });
          wrapper.simulate('click');

          expect(onClick).toHaveBeenCalledTimes(5);
        });
      })
    );

    return button;
  },
  {
    info: { inline: true }
  }
);
