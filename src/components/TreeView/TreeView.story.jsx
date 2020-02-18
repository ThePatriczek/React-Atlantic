import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TreeView } from './TreeView';

const stories = storiesOf('Tree View', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => (
  <TreeView>
    <TreeView.Item>
      Row 1
      <TreeView>
        <TreeView.Item>Row 1</TreeView.Item>
      </TreeView>
    </TreeView.Item>
    <TreeView.Item>Row 2</TreeView.Item>
    <TreeView.Item>Row 3</TreeView.Item>
    <TreeView.Item>
      Row 4
      <TreeView>
        <TreeView.Item>Row 1</TreeView.Item>
        <TreeView.Item>Row 2</TreeView.Item>
      </TreeView>
    </TreeView.Item>
  </TreeView>
));
