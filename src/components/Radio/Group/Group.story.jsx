import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Radio } from '../Radio';
import { action } from '@storybook/addon-actions';
import { Typography } from '../../Typography';

const { Group } = Radio;

const stories = storiesOf('Radio', module);
const { Text } = Typography;
stories.addDecorator(withKnobs);

stories.add(
  'Radio.Group',
  () => {
    const group = (
      <Group onChange={action(`onChange`)}>
        <div>
          <Radio value={1}>
            <Text>{`A`}</Text>
          </Radio>
        </div>
        <Radio value={2}>
          <Text>{`B`}</Text>
        </Radio>
        <Radio value={3}>
          <Text>{`C`}</Text>
        </Radio>
      </Group>
    );

    return group;
  },
  {
    info: { inline: true }
  }
);
