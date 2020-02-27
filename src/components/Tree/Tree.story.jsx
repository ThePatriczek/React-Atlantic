import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StyledTree, StyledTreeAlt } from './style';
import {
  StyledTreeItemTitle,
  StyledTreeButton,
  StyledTreeItemLine,
  StyledTreeItem,
  StyledTreeIcon
} from './Item/style/Item.style';
import {
  StyledTreeItemAlt,
  StyledTreeItemAltNoChilds
} from './Item/style/ItemAlt.style';

const stories = storiesOf('Tree', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => {
  const treeSize = 'small';
  const buttonIcon = 'arrowRight';
  const buttonIconAlt = 'hamburger';

  return (
    <>
      <StyledTree size={treeSize}>
        <StyledTreeItem size={treeSize} isOpened>
          <StyledTreeItemLine>
            <StyledTreeItemTitle>
              <StyledTreeButton size={treeSize}>
                <StyledTreeIcon name={buttonIcon} />
              </StyledTreeButton>
              Row 1
            </StyledTreeItemTitle>
          </StyledTreeItemLine>
          <StyledTree>
            <StyledTreeItem size={treeSize} isOpened>
              <StyledTreeItemLine>
                <StyledTreeItemTitle>
                  <StyledTreeButton size={treeSize}>
                    <StyledTreeIcon name={buttonIcon} />
                  </StyledTreeButton>
                  Row 1
                </StyledTreeItemTitle>
              </StyledTreeItemLine>
              <StyledTree>
                <StyledTreeItem size={treeSize}>
                  <StyledTreeItemLine>
                    <StyledTreeItemTitle>
                      <StyledTreeButton size={treeSize}>
                        <StyledTreeIcon name={buttonIcon} />
                      </StyledTreeButton>
                      Row 1
                    </StyledTreeItemTitle>
                  </StyledTreeItemLine>
                </StyledTreeItem>
                <StyledTreeItem size={treeSize}>
                  <StyledTreeItemLine>
                    <StyledTreeItemTitle>
                      <StyledTreeButton size={treeSize}>
                        <StyledTreeIcon name={buttonIcon} />
                      </StyledTreeButton>
                      Row 2
                    </StyledTreeItemTitle>
                  </StyledTreeItemLine>
                </StyledTreeItem>
              </StyledTree>
            </StyledTreeItem>
          </StyledTree>
        </StyledTreeItem>
        <StyledTreeItem size={treeSize}>
          <StyledTreeItemLine>
            <StyledTreeItemTitle>
              <StyledTreeButton size={treeSize}>
                <StyledTreeIcon name={buttonIcon} />
              </StyledTreeButton>
              Row 2
            </StyledTreeItemTitle>
          </StyledTreeItemLine>
        </StyledTreeItem>
        <StyledTreeItem size={treeSize} isOpened>
          <StyledTreeItemLine>
            <StyledTreeItemTitle>
              <StyledTreeButton size={treeSize}>
                <StyledTreeIcon name={buttonIcon} />
              </StyledTreeButton>
              Row 3
            </StyledTreeItemTitle>
          </StyledTreeItemLine>
          <StyledTree>
            <StyledTreeItem size={treeSize}>
              <StyledTreeItemLine>
                <StyledTreeItemTitle>
                  <StyledTreeButton size={treeSize}>
                    <StyledTreeIcon name={buttonIcon} />
                  </StyledTreeButton>
                  Row 1
                </StyledTreeItemTitle>
              </StyledTreeItemLine>
            </StyledTreeItem>
            <StyledTreeItem size={treeSize}>
              <StyledTreeItemLine>
                <StyledTreeItemTitle>
                  <StyledTreeButton size={treeSize}>
                    <StyledTreeIcon name={buttonIcon} />
                  </StyledTreeButton>
                  Row 2
                </StyledTreeItemTitle>
              </StyledTreeItemLine>
            </StyledTreeItem>
          </StyledTree>
        </StyledTreeItem>
      </StyledTree>

      <StyledTreeAlt size={treeSize}>
        <StyledTreeItemAlt size={treeSize} isOpened>
          <StyledTreeItemLine>
            <StyledTreeItemTitle>
              <StyledTreeButton size={treeSize}>
                <StyledTreeIcon name={buttonIconAlt} />
              </StyledTreeButton>
              Row 1
            </StyledTreeItemTitle>
          </StyledTreeItemLine>
          <StyledTreeAlt>
            <StyledTreeItemAlt size={treeSize}>
              <StyledTreeItemLine>
                <StyledTreeItemTitle>
                  <StyledTreeButton size={treeSize}>
                    <StyledTreeIcon name={buttonIconAlt} />
                  </StyledTreeButton>
                  Row 1
                </StyledTreeItemTitle>
              </StyledTreeItemLine>
              <StyledTreeAlt>
                <StyledTreeItemAltNoChilds size={treeSize}>
                  <StyledTreeItemLine>
                    <StyledTreeItemTitle>
                      <StyledTreeButton size={treeSize}>
                        <StyledTreeIcon name={buttonIconAlt} />
                      </StyledTreeButton>
                      Row 1
                    </StyledTreeItemTitle>
                  </StyledTreeItemLine>
                </StyledTreeItemAltNoChilds>
                <StyledTreeItemAltNoChilds size={treeSize}>
                  <StyledTreeItemLine>
                    <StyledTreeItemTitle>
                      <StyledTreeButton size={treeSize}>
                        <StyledTreeIcon name={buttonIconAlt} />
                      </StyledTreeButton>
                      Row 2
                    </StyledTreeItemTitle>
                  </StyledTreeItemLine>
                </StyledTreeItemAltNoChilds>
              </StyledTreeAlt>
            </StyledTreeItemAlt>
          </StyledTreeAlt>
        </StyledTreeItemAlt>
        <StyledTreeItemAlt size={treeSize}>
          <StyledTreeItemLine>
            <StyledTreeItemTitle>
              <StyledTreeButton size={treeSize}>
                <StyledTreeIcon name={buttonIconAlt} />
              </StyledTreeButton>
              Row 2
            </StyledTreeItemTitle>
          </StyledTreeItemLine>
        </StyledTreeItemAlt>
        <StyledTreeItemAlt size={treeSize} isOpened>
          <StyledTreeItemLine>
            <StyledTreeItemTitle>
              <StyledTreeButton size={treeSize}>
                <StyledTreeIcon name={buttonIconAlt} />
              </StyledTreeButton>
              Row 3
            </StyledTreeItemTitle>
          </StyledTreeItemLine>
          <StyledTreeAlt>
            <StyledTreeItemAltNoChilds size={treeSize}>
              <StyledTreeItemLine>
                <StyledTreeItemTitle>
                  <StyledTreeButton size={treeSize}>
                    <StyledTreeIcon name={buttonIconAlt} />
                  </StyledTreeButton>
                  Row 1
                </StyledTreeItemTitle>
              </StyledTreeItemLine>
            </StyledTreeItemAltNoChilds>
            <StyledTreeItemAltNoChilds size={treeSize}>
              <StyledTreeItemLine>
                <StyledTreeItemTitle>
                  <StyledTreeButton size={treeSize}>
                    <StyledTreeIcon name={buttonIconAlt} />
                  </StyledTreeButton>
                  Row 2
                </StyledTreeItemTitle>
              </StyledTreeItemLine>
            </StyledTreeItemAltNoChilds>
          </StyledTreeAlt>
        </StyledTreeItemAlt>
      </StyledTreeAlt>
    </>
  );
});
