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
        <Button>{`Default`}</Button><br/>
        <Button type={'dashed'}>{`Dashed`}</Button><br/>
        <Button isDisabled>{`Disabled`}</Button><br/>
        <Button>{`Upload`}</Button><br/>
        <Button type={'transparent'}>{`Transparent`}</Button><br/>
      </div>
      <div>
        <Button type={'primary'}>{`Primary`}</Button><br/>
        <Button type={'success'}>{`Success`}</Button><br/>
        <Button type={'warning'}>{`Warning`}</Button><br/>
        <Button type={'error'}>{`Error`}</Button><br/>
      </div>
      <div>
        <Button isRound>{`Rounded`}</Button><br/>
      </div>
      <div>
        <Button size={'small'}>{`Small`}</Button><br/>
        <Button>{`Medium (default)`}</Button><br/>
        <Button size={'large'}>{`Large`}</Button><br/>
      </div>
      <div>
        <Button size={'small'} icon={'arrowLeft'}>{`Small with icon left`}</Button><br/>
        <Button icon={'arrowLeft'}>{`Medium with icon left`}</Button><br/>
        <Button size={'large'} icon={'arrowLeft'}>{`Large with icon left`}</Button><br/>
      </div>
      <div>
        <Button size={'small'} icon={'arrowRight'} iconPosition={'right'}>{`Small with icon right`}</Button><br/>
        <Button icon={'arrowRight'} iconPosition={'right'}>{`Medium with icon right`}</Button><br/>
        <Button size={'large'} icon={'arrowRight'} iconPosition={'right'}>{`Large with icon right`}</Button><br/>
      </div>
      <div>
        <Button isFullWidth>{`Full Width default`}</Button>
        <Button isFullWidth type={'primary'}>{`Full Width primary`}</Button>
        <Button isFullWidth type={'success'}>{`Full Width success`}</Button>
        <Button isFullWidth type={'warning'}>{`Full Width warning`}</Button>
        <Button isFullWidth type={'error'}>{`Full Width error`}</Button>
        <Button isFullWidth icon={'arrowLeft'}>{`Full Width default`}</Button>
        <Button isFullWidth icon={'arrowRight'} iconPosition={'right'}>{`Full Width default`}</Button>
        <Button isFullWidth type={'dashed'}>{`Full Width default`}</Button>
      </div>
      <div>
        <Button isFullWidth size={`small`} icon={'arrowLeft'}>{`Full Width small`}</Button>
        <Button isFullWidth size={`large`} icon={'arrowRight'} iconPosition={'right'}>{`Full Width large`}</Button>
        <Button isFullWidth type={`transparent`}>{`Full Width transparent`}</Button>
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
