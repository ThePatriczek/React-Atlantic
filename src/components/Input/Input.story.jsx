import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Input } from './Input';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => (
  <div>
    <div>
      <Input placeholder={`Default input`} />
      <Input placeholder={`Loading...`} isLoading />
      <Input
        placeholder={`Disabled input`}
        isDisabled
        iconRight={'hamburger'}
        isAlternative
      />
      <Input placeholder={`Icon left`} iconLeft={'arrowLeft'} />
      <Input placeholder={`Icon right`} iconRight={'hamburger'} />
    </div>
    <div>
      <Input placeholder={`Alertnative input`} isAlternative />
      <Input
        placeholder={`Alertnative Icon left`}
        isAlternative
        iconLeft={'hamburger'}
      />
      <Input
        placeholder={`Alertnative Icon right`}
        isAlternative
        iconRight={'hamburger'}
      />
    </div>
    <div>
      <Input
        placeholder={`Small input`}
        iconRight={'hamburger'}
        size={'small'}
        isAlternative
      />
      <Input
        placeholder={`Medium input`}
        iconRight={'hamburger'}
        size={'medium'}
        isAlternative
      />
      <Input
        placeholder={`Large input`}
        iconRight={'hamburger'}
        size={'large'}
        isAlternative
      />
    </div>
  </div>
));
