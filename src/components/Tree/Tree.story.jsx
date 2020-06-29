import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tree } from './Tree';
import { action } from '@storybook/addon-actions';
import { defaultValues } from '../../constants/defaultValues';
import { Button, Icon, Typography } from '../';

const stories = storiesOf('Tree', module);

stories.addDecorator(withKnobs);

const { Text } = Typography;

stories.add('Playground', () => {
  const isAlternative = boolean(`isAlternative:`, defaultValues.isAlternative);
  const onChange = action(`onChange`);

  return (
    <div style={{ height: 300 }}>
      <Tree
        isAlternative={isAlternative}
        size={'medium'}
        onChange={onChange}
        nodes={[
          {
            title: <Text>{`Node 1`}</Text>,
            children: [{ title: <Text>{`Node 1.1`}</Text> }]
          },
          {
            title: (
              <div>
                <Button size={'medium'}>
                  <Icon name={'folder'} />
                </Button>
                <Text>{`Node 2`}</Text>
              </div>
            ),
            children: [
              {
                title: <Text>{`Node 2.1`}</Text>,
                children: [
                  {
                    title: <Text>{`Node 2.1.1`}</Text>
                  },
                  {
                    title: <Text>{`Node 2.1.2`}</Text>
                  }
                ]
              },
              {
                title: <Text>{`Node 2.1`}</Text>,
                children: [
                  {
                    title: <Text>{`Node 2.1.1`}</Text>
                  },
                  {
                    title: <Text>{`Node 2.1.2`}</Text>
                  }
                ]
              }
            ]
          },
          {
            title: <Text>{`Node 3`}</Text>,
            children: [{ title: <Text>{`Node 3.1`}</Text> }]
          }
        ]}
      />
    </div>
  );
});
