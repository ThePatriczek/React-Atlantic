import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StyledTreeView } from './TreeView.style';
import {
  StyledTreeViewItemTitle,
  StyledTreeViewButton,
  StyledTreeViewItem,
  StyledTreeViewIcon
} from './Item/Item.style';
import { isA } from 'expect/build/jasmineUtils';

const stories = storiesOf('Tree View', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => {
  const treeSize = "small";
  const isAlternative = true;
  const baseButtonIcon = 'arrowRight';
  const alternativeButtonIcon = 'hamburger';
  let iconName = baseButtonIcon;

  if (isAlternative) {
    iconName = alternativeButtonIcon;
  }

  return (
    <StyledTreeView size={treeSize} isAlternative={isAlternative}>
      <StyledTreeViewItem size={treeSize} isAlternative={isAlternative} isOpened>
        <StyledTreeViewItemTitle>
          <StyledTreeViewButton>
            <StyledTreeViewIcon name={iconName} />
          </StyledTreeViewButton>
          Row 1
        </StyledTreeViewItemTitle>
        <StyledTreeView>
          <StyledTreeViewItem size={treeSize} isAlternative={isAlternative}>
            <StyledTreeViewItemTitle>
              <StyledTreeViewButton>
                <StyledTreeViewIcon name={iconName} />
              </StyledTreeViewButton>
              Row 1
            </StyledTreeViewItemTitle>
          </StyledTreeViewItem>
        </StyledTreeView>
      </StyledTreeViewItem>
      <StyledTreeViewItem size={treeSize} isAlternative={isAlternative}>
        <StyledTreeViewItemTitle>
          <StyledTreeViewButton>
            <StyledTreeViewIcon name={iconName} />
          </StyledTreeViewButton>
          Row 2
        </StyledTreeViewItemTitle>
      </StyledTreeViewItem>
      <StyledTreeViewItem size={treeSize} isAlternative={isAlternative} isOpened>
        <StyledTreeViewItemTitle>
          <StyledTreeViewButton>
            <StyledTreeViewIcon name={iconName} />
          </StyledTreeViewButton>
          Row 3
        </StyledTreeViewItemTitle>
        <StyledTreeView>
          <StyledTreeViewItem size={treeSize} isAlternative={isAlternative}>
            <StyledTreeViewItemTitle>
              <StyledTreeViewButton>
                <StyledTreeViewIcon name={iconName} />
              </StyledTreeViewButton>
              Row 1
            </StyledTreeViewItemTitle>
          </StyledTreeViewItem>
          <StyledTreeViewItem size={treeSize} isAlternative={isAlternative}>
            <StyledTreeViewItemTitle>
              <StyledTreeViewButton>
                <StyledTreeViewIcon name={iconName} />
              </StyledTreeViewButton>
              Row 2
            </StyledTreeViewItemTitle>
          </StyledTreeViewItem>
        </StyledTreeView>
      </StyledTreeViewItem>
    </StyledTreeView>
  )}
);
