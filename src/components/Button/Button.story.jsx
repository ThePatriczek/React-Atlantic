import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import { mount } from 'enzyme';
import expect from 'expect';
import * as React from 'react';
import { describe, it, specs } from 'storybook-addon-specifications';
import { Button } from './Button';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add(
  'Button',
  () => {
    const button = (
      <Button isDisabled={boolean('Disabled', false)}>
        {text('Label', 'Test')}
      </Button>
    );

    specs(() =>
      describe('Hello World', () => {
        it('Should have the Hello World label', () => {
          const output = mount(button);
          expect(output.text()).toContain('Test');
        });
      })
    );

    return button;
  },
  { info: { inline: true }, notes: 'A very simple example of addon notes' }
);
