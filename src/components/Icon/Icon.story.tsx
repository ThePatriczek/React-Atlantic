import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
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
