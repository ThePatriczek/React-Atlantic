import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { describe, it, specs } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import { Icon } from './Icon';

const stories = storiesOf('Icon', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => (
  <div>
    <div>
      <Icon name={'hamburger'} />
    </div>
    <div>
      <Icon name={'arrowUp'} />
    </div>
    <div>
      <Icon name={'arrowRight'} />
    </div>
    <div>
      <Icon name={'arrowDown'} />
    </div>
    <div>
      <Icon name={'arrowLeft'} />
    </div>
    <div>
      <Icon name={'arrowDoubleUp'} />
    </div>
    <div>
      <Icon name={'arrowDoubleRight'} />
    </div>
    <div>
      <Icon name={'arrowDoubleDown'} />
    </div>
    <div>
      <Icon name={'arrowDoubleLeft'} />
    </div>
  </div>
));

stories.add(
  'Playground',
  () => {
    const icon = (
      <Icon
        name={select(
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
            'arrowDoubleRight'
          ],
          'hamburger'
        )}
      />
    );

    specs(() =>
      describe('Icon', () => {
        const wrapper = mount(icon);

        it(`Should have "name" prop defined`, () =>
          expect(wrapper.find('name')).toBeDefined());
      })
    );

    return icon;
  },
  {
    info: { inline: true }
  }
);
