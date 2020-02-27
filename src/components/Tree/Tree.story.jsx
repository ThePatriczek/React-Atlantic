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
    <>
      <Tree
        isAlternative={isAlternative}
        nodes={[
          <Tree.Node>
            <Text>{`Node 1`}</Text>
            <Tree.Node>
              <Text>{`Node 1.1`}</Text>
            </Tree.Node>
          </Tree.Node>
        ]}
      >
        <Tree.Node isDefaultOpen onChange={console.log} id={5} data={1}>
          <Text>{`Node 2`}</Text>

          <Tree.Node isOpen onChange={onChange}>
            <Text>{`Node 2.1`}</Text>
            <Tree.Node>
              <Text>{`Node 2.1.1`}</Text>
            </Tree.Node>
            <Tree.Node isOpen>
              <Text>{`Node 2.1.2`}</Text>
            </Tree.Node>
          </Tree.Node>
        </Tree.Node>

        <Tree.Node>
          <Text>{`Node 3`}</Text>
          <Tree.Node>
            <Text>{`Node 3.1`}</Text>
          </Tree.Node>
        </Tree.Node>
      </Tree>
    </>
  );
});
