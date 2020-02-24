import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StyledTreeView } from './TreeView.style';
import {
  StyledTreeViewItemTitle,
  StyledTreeViewButton,
  StyledTreeViewItemLine,
  StyledTreeViewItem,
  StyledTreeViewIcon
} from './Item/Item.style';

const stories = storiesOf('Tree View', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => {
  const treeSize = "small";
  const isAlternative = false;
  const baseButtonIcon = 'arrowRight';
  const alternativeButtonIcon = 'hamburger';
  let iconName = baseButtonIcon;

  if (isAlternative) {
    iconName = alternativeButtonIcon;
  }

  return (
    <StyledTreeView size={treeSize} isAlternative={isAlternative}>
      <StyledTreeViewItem size={treeSize} isAlternative={isAlternative} isOpened>
        <StyledTreeViewItemLine>
          <StyledTreeViewItemTitle>
            <StyledTreeViewButton size={treeSize}>
              <StyledTreeViewIcon name={iconName} />
            </StyledTreeViewButton>
              Row 1
          </StyledTreeViewItemTitle>
        </StyledTreeViewItemLine>
        <StyledTreeView>
          <StyledTreeViewItem size={treeSize} isAlternative={isAlternative}>
            <StyledTreeViewItemLine>
              <StyledTreeViewItemTitle>
                <StyledTreeViewButton size={treeSize}>
                  <StyledTreeViewIcon name={iconName} />
                </StyledTreeViewButton>
                  Row 1
              </StyledTreeViewItemTitle>
            </StyledTreeViewItemLine>
            <StyledTreeView>
              <StyledTreeViewItem size={treeSize} isAlternative={isAlternative}>
                <StyledTreeViewItemLine>
                  <StyledTreeViewItemTitle>
                    <StyledTreeViewButton size={treeSize}>
                      <StyledTreeViewIcon name={iconName} />
                    </StyledTreeViewButton>
                      Row 1
                  </StyledTreeViewItemTitle>
                </StyledTreeViewItemLine>
              </StyledTreeViewItem>
              <StyledTreeViewItem size={treeSize} isAlternative={isAlternative}>
                <StyledTreeViewItemLine>
                  <StyledTreeViewItemTitle>
                    <StyledTreeViewButton size={treeSize}>
                      <StyledTreeViewIcon name={iconName} />
                    </StyledTreeViewButton>
                      Row 2
                  </StyledTreeViewItemTitle>
                </StyledTreeViewItemLine>
              </StyledTreeViewItem>
            </StyledTreeView>
          </StyledTreeViewItem>
        </StyledTreeView>
      </StyledTreeViewItem>
      <StyledTreeViewItem size={treeSize} isAlternative={isAlternative}>
        <StyledTreeViewItemLine>
          <StyledTreeViewItemTitle>
            <StyledTreeViewButton size={treeSize}>
              <StyledTreeViewIcon name={iconName} />
            </StyledTreeViewButton>
              Row 2
          </StyledTreeViewItemTitle>
        </StyledTreeViewItemLine>
      </StyledTreeViewItem>
      <StyledTreeViewItem size={treeSize} isAlternative={isAlternative} isOpened>
        <StyledTreeViewItemLine>
          <StyledTreeViewItemTitle>
            <StyledTreeViewButton size={treeSize}>
              <StyledTreeViewIcon name={iconName} />
            </StyledTreeViewButton>
              Row 3
          </StyledTreeViewItemTitle>
        </StyledTreeViewItemLine>
        <StyledTreeView>
          <StyledTreeViewItem size={treeSize} isAlternative={isAlternative}>
            <StyledTreeViewItemLine>
              <StyledTreeViewItemTitle>
                <StyledTreeViewButton size={treeSize}>
                  <StyledTreeViewIcon name={iconName} />
                </StyledTreeViewButton>
                  Row 1
              </StyledTreeViewItemTitle>
            </StyledTreeViewItemLine>
          </StyledTreeViewItem>
          <StyledTreeViewItem size={treeSize} isAlternative={isAlternative}>
            <StyledTreeViewItemLine>
              <StyledTreeViewItemTitle>
                <StyledTreeViewButton size={treeSize}>
                  <StyledTreeViewIcon name={iconName} />
                </StyledTreeViewButton>
                  Row 2
              </StyledTreeViewItemTitle>
            </StyledTreeViewItemLine>
          </StyledTreeViewItem>
        </StyledTreeView>
      </StyledTreeViewItem>
    </StyledTreeView>
  )}
);
