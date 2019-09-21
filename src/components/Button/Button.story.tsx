import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add(
  'Button',
  () => (
    <Button isDisabled={boolean('Disabled', false)}>
      {text('Label', 'Test')}
    </Button>
  ),
  { info: { inline: true }, notes: 'A very simple example of addon notes' }
);
