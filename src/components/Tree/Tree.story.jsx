import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tree } from './Tree';
import { Typography } from '../Typography';
import { action } from '@storybook/addon-actions';
import { defaultValues } from '../../constants/defaultValues';

const stories = storiesOf('Tree', module);

stories.addDecorator(withKnobs);

const { Text } = Typography;

stories.add('Playground', () => {
  const isAlternative = boolean(`isAlternative:`, defaultValues.isAlternative);
  const onChange = action(`onChange`);

  return (
    <div style={{ height: 300, width: 500 }}>
      <Tree
        isAlternative={isAlternative}
        size={'medium'}
        onChange={onChange}
        nodes={[
          {
            title: <Text>{`Node 1`}</Text>,
            children: [{ title: <Text>{`Node 1.1`}</Text> }]
          }
        ]}
      />
    </div>
  );
});
