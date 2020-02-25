import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StyledTreeView, StyledTreeViewAlt } from './style';
import {
  StyledTreeViewItemTitle,
  StyledTreeViewButton,
  StyledTreeViewItemLine,
  StyledTreeViewItem,
  StyledTreeViewIcon
} from './Item/style/Item.style';
import { StyledTreeViewItemAlt } from './Item/style/ItemAlt.style';

const stories = storiesOf('Tree View', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => {
  const treeSize = 'small';
  const buttonIcon = 'arrowRight';
  const buttonIconAlt = 'hamburger';

  return (
    <>
      <StyledTreeView size={treeSize}>
        <StyledTreeViewItem size={treeSize} isOpened>
          <StyledTreeViewItemLine>
            <StyledTreeViewItemTitle>
              <StyledTreeViewButton size={treeSize}>
                <StyledTreeViewIcon name={buttonIcon} />
              </StyledTreeViewButton>
              Row 1
            </StyledTreeViewItemTitle>
          </StyledTreeViewItemLine>
          <StyledTreeView>
            <StyledTreeViewItem size={treeSize} isOpened>
              <StyledTreeViewItemLine>
                <StyledTreeViewItemTitle>
                  <StyledTreeViewButton size={treeSize}>
                    <StyledTreeViewIcon name={buttonIcon} />
                  </StyledTreeViewButton>
                  Row 1
                </StyledTreeViewItemTitle>
              </StyledTreeViewItemLine>
              <StyledTreeView>
                <StyledTreeViewItem size={treeSize}>
                  <StyledTreeViewItemLine>
                    <StyledTreeViewItemTitle>
                      <StyledTreeViewButton size={treeSize}>
                        <StyledTreeViewIcon name={buttonIcon} />
                      </StyledTreeViewButton>
                      Row 1
                    </StyledTreeViewItemTitle>
                  </StyledTreeViewItemLine>
                </StyledTreeViewItem>
                <StyledTreeViewItem size={treeSize}>
                  <StyledTreeViewItemLine>
                    <StyledTreeViewItemTitle>
                      <StyledTreeViewButton size={treeSize}>
                        <StyledTreeViewIcon name={buttonIcon} />
                      </StyledTreeViewButton>
                      Row 2
                    </StyledTreeViewItemTitle>
                  </StyledTreeViewItemLine>
                </StyledTreeViewItem>
              </StyledTreeView>
            </StyledTreeViewItem>
          </StyledTreeView>
        </StyledTreeViewItem>
        <StyledTreeViewItem size={treeSize}>
          <StyledTreeViewItemLine>
            <StyledTreeViewItemTitle>
              <StyledTreeViewButton size={treeSize}>
                <StyledTreeViewIcon name={buttonIcon} />
              </StyledTreeViewButton>
              Row 2
            </StyledTreeViewItemTitle>
          </StyledTreeViewItemLine>
        </StyledTreeViewItem>
        <StyledTreeViewItem size={treeSize} isOpened>
          <StyledTreeViewItemLine>
            <StyledTreeViewItemTitle>
              <StyledTreeViewButton size={treeSize}>
                <StyledTreeViewIcon name={buttonIcon} />
              </StyledTreeViewButton>
              Row 3
            </StyledTreeViewItemTitle>
          </StyledTreeViewItemLine>
          <StyledTreeView>
            <StyledTreeViewItem size={treeSize}>
              <StyledTreeViewItemLine>
                <StyledTreeViewItemTitle>
                  <StyledTreeViewButton size={treeSize}>
                    <StyledTreeViewIcon name={buttonIcon} />
                  </StyledTreeViewButton>
                  Row 1
                </StyledTreeViewItemTitle>
              </StyledTreeViewItemLine>
            </StyledTreeViewItem>
            <StyledTreeViewItem size={treeSize}>
              <StyledTreeViewItemLine>
                <StyledTreeViewItemTitle>
                  <StyledTreeViewButton size={treeSize}>
                    <StyledTreeViewIcon name={buttonIcon} />
                  </StyledTreeViewButton>
                  Row 2
                </StyledTreeViewItemTitle>
              </StyledTreeViewItemLine>
            </StyledTreeViewItem>
          </StyledTreeView>
        </StyledTreeViewItem>
      </StyledTreeView>

      <StyledTreeViewAlt size={treeSize}>
        <StyledTreeViewItemAlt size={treeSize} isOpened>
          <StyledTreeViewItemLine>
            <StyledTreeViewItemTitle>
              <StyledTreeViewButton size={treeSize}>
                <StyledTreeViewIcon name={buttonIconAlt} />
              </StyledTreeViewButton>
              Row 1
            </StyledTreeViewItemTitle>
          </StyledTreeViewItemLine>
          <StyledTreeViewAlt>
            <StyledTreeViewItemAlt size={treeSize}>
              <StyledTreeViewItemLine>
                <StyledTreeViewItemTitle>
                  <StyledTreeViewButton size={treeSize}>
                    <StyledTreeViewIcon name={buttonIconAlt} />
                  </StyledTreeViewButton>
                  Row 1
                </StyledTreeViewItemTitle>
              </StyledTreeViewItemLine>
              <StyledTreeViewAlt>
                <StyledTreeViewItemAlt size={treeSize}>
                  <StyledTreeViewItemLine>
                    <StyledTreeViewItemTitle>
                      <StyledTreeViewButton size={treeSize}>
                        <StyledTreeViewIcon name={buttonIconAlt} />
                      </StyledTreeViewButton>
                      Row 1
                    </StyledTreeViewItemTitle>
                  </StyledTreeViewItemLine>
                </StyledTreeViewItemAlt>
                <StyledTreeViewItemAlt size={treeSize}>
                  <StyledTreeViewItemLine>
                    <StyledTreeViewItemTitle>
                      <StyledTreeViewButton size={treeSize}>
                        <StyledTreeViewIcon name={buttonIconAlt} />
                      </StyledTreeViewButton>
                      Row 2
                    </StyledTreeViewItemTitle>
                  </StyledTreeViewItemLine>
                </StyledTreeViewItemAlt>
              </StyledTreeViewAlt>
            </StyledTreeViewItemAlt>
          </StyledTreeViewAlt>
        </StyledTreeViewItemAlt>
        <StyledTreeViewItemAlt size={treeSize}>
          <StyledTreeViewItemLine>
            <StyledTreeViewItemTitle>
              <StyledTreeViewButton size={treeSize}>
                <StyledTreeViewIcon name={buttonIconAlt} />
              </StyledTreeViewButton>
              Row 2
            </StyledTreeViewItemTitle>
          </StyledTreeViewItemLine>
        </StyledTreeViewItemAlt>
        <StyledTreeViewItemAlt size={treeSize} isOpened>
          <StyledTreeViewItemLine>
            <StyledTreeViewItemTitle>
              <StyledTreeViewButton size={treeSize}>
                <StyledTreeViewIcon name={buttonIconAlt} />
              </StyledTreeViewButton>
              Row 3
            </StyledTreeViewItemTitle>
          </StyledTreeViewItemLine>
          <StyledTreeViewAlt>
            <StyledTreeViewItemAlt size={treeSize}>
              <StyledTreeViewItemLine>
                <StyledTreeViewItemTitle>
                  <StyledTreeViewButton size={treeSize}>
                    <StyledTreeViewIcon name={buttonIconAlt} />
                  </StyledTreeViewButton>
                  Row 1
                </StyledTreeViewItemTitle>
              </StyledTreeViewItemLine>
            </StyledTreeViewItemAlt>
            <StyledTreeViewItemAlt size={treeSize}>
              <StyledTreeViewItemLine>
                <StyledTreeViewItemTitle>
                  <StyledTreeViewButton size={treeSize}>
                    <StyledTreeViewIcon name={buttonIconAlt} />
                  </StyledTreeViewButton>
                  Row 2
                </StyledTreeViewItemTitle>
              </StyledTreeViewItemLine>
            </StyledTreeViewItemAlt>
          </StyledTreeViewAlt>
        </StyledTreeViewItemAlt>
      </StyledTreeViewAlt>
    </>
  );
});
