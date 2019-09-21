import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';

const stories = storiesOf('Components', module);

stories.add('Button', () => <Button>{`Test`}</Button>, {
  info: { inline: true }
});
