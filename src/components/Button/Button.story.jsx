import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';
import { mount } from 'enzyme';
import expect from 'expect';
import { specs, describe, it } from 'storybook-addon-specifications';

const stories = storiesOf('Button', module);

stories.add(
  'With text',
  function() {
    const story = <Button>{`Hello World`}</Button>;

    specs(() =>
      describe('Hello World', function() {
        it('Should have the Hello World label', function() {
          let output = mount(story);
          expect(output.text()).toContain('Hello World');
        });
      })
    );
    return story;
  },
  {
    info: { inline: true }
  }
);
