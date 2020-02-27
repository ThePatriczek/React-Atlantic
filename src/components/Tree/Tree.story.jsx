import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StyledTree, StyledTreeAlt } from './style';
import {
  StyledTreeNodeTitle,
  StyledTreeButton,
  StyledTreeNodeLine,
  StyledTreeNode,
  StyledTreeIcon
} from './Node/style/Node.style';
import {
  StyledTreeNodeAlt,
  StyledTreeNodeAltNoChilds
} from './Node/style/NodeAlt.style';

const stories = storiesOf('Tree', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => {
  const treeSize = 'small';
  const buttonIcon = 'arrowRight';
  const buttonIconAlt = 'hamburger';

  return (
    <>
      <StyledTree size={treeSize}>
        <StyledTreeNode size={treeSize} isOpened>
          <StyledTreeNodeLine>
            <StyledTreeNodeTitle>
              <StyledTreeButton size={treeSize}>
                <StyledTreeIcon name={buttonIcon} />
              </StyledTreeButton>
              Row 1
            </StyledTreeNodeTitle>
          </StyledTreeNodeLine>
          <StyledTree>
            <StyledTreeNode size={treeSize} isOpened>
              <StyledTreeNodeLine>
                <StyledTreeNodeTitle>
                  <StyledTreeButton size={treeSize}>
                    <StyledTreeIcon name={buttonIcon} />
                  </StyledTreeButton>
                  Row 1
                </StyledTreeNodeTitle>
              </StyledTreeNodeLine>
              <StyledTree>
                <StyledTreeNode size={treeSize}>
                  <StyledTreeNodeLine>
                    <StyledTreeNodeTitle>
                      <StyledTreeButton size={treeSize}>
                        <StyledTreeIcon name={buttonIcon} />
                      </StyledTreeButton>
                      Row 1
                    </StyledTreeNodeTitle>
                  </StyledTreeNodeLine>
                </StyledTreeNode>
                <StyledTreeNode size={treeSize}>
                  <StyledTreeNodeLine>
                    <StyledTreeNodeTitle>
                      <StyledTreeButton size={treeSize}>
                        <StyledTreeIcon name={buttonIcon} />
                      </StyledTreeButton>
                      Row 2
                    </StyledTreeNodeTitle>
                  </StyledTreeNodeLine>
                </StyledTreeNode>
              </StyledTree>
            </StyledTreeNode>
          </StyledTree>
        </StyledTreeNode>
        <StyledTreeNode size={treeSize}>
          <StyledTreeNodeLine>
            <StyledTreeNodeTitle>
              <StyledTreeButton size={treeSize}>
                <StyledTreeIcon name={buttonIcon} />
              </StyledTreeButton>
              Row 2
            </StyledTreeNodeTitle>
          </StyledTreeNodeLine>
        </StyledTreeNode>
        <StyledTreeNode size={treeSize} isOpened>
          <StyledTreeNodeLine>
            <StyledTreeNodeTitle>
              <StyledTreeButton size={treeSize}>
                <StyledTreeIcon name={buttonIcon} />
              </StyledTreeButton>
              Row 3
            </StyledTreeNodeTitle>
          </StyledTreeNodeLine>
          <StyledTree>
            <StyledTreeNode size={treeSize}>
              <StyledTreeNodeLine>
                <StyledTreeNodeTitle>
                  <StyledTreeButton size={treeSize}>
                    <StyledTreeIcon name={buttonIcon} />
                  </StyledTreeButton>
                  Row 1
                </StyledTreeNodeTitle>
              </StyledTreeNodeLine>
            </StyledTreeNode>
            <StyledTreeNode size={treeSize}>
              <StyledTreeNodeLine>
                <StyledTreeNodeTitle>
                  <StyledTreeButton size={treeSize}>
                    <StyledTreeIcon name={buttonIcon} />
                  </StyledTreeButton>
                  Row 2
                </StyledTreeNodeTitle>
              </StyledTreeNodeLine>
            </StyledTreeNode>
          </StyledTree>
        </StyledTreeNode>
      </StyledTree>

      <StyledTreeAlt size={treeSize}>
        <StyledTreeNodeAlt size={treeSize} isOpened>
          <StyledTreeNodeLine>
            <StyledTreeNodeTitle>
              <StyledTreeButton size={treeSize}>
                <StyledTreeIcon name={buttonIconAlt} />
              </StyledTreeButton>
              Row 1
            </StyledTreeNodeTitle>
          </StyledTreeNodeLine>
          <StyledTreeAlt>
            <StyledTreeNodeAlt size={treeSize}>
              <StyledTreeNodeLine>
                <StyledTreeNodeTitle>
                  <StyledTreeButton size={treeSize}>
                    <StyledTreeIcon name={buttonIconAlt} />
                  </StyledTreeButton>
                  Row 1
                </StyledTreeNodeTitle>
              </StyledTreeNodeLine>
              <StyledTreeAlt>
                <StyledTreeNodeAltNoChilds size={treeSize}>
                  <StyledTreeNodeLine>
                    <StyledTreeNodeTitle>
                      <StyledTreeButton size={treeSize}>
                        <StyledTreeIcon name={buttonIconAlt} />
                      </StyledTreeButton>
                      Row 1
                    </StyledTreeNodeTitle>
                  </StyledTreeNodeLine>
                </StyledTreeNodeAltNoChilds>
                <StyledTreeNodeAltNoChilds size={treeSize}>
                  <StyledTreeNodeLine>
                    <StyledTreeNodeTitle>
                      <StyledTreeButton size={treeSize}>
                        <StyledTreeIcon name={buttonIconAlt} />
                      </StyledTreeButton>
                      Row 2
                    </StyledTreeNodeTitle>
                  </StyledTreeNodeLine>
                </StyledTreeNodeAltNoChilds>
              </StyledTreeAlt>
            </StyledTreeNodeAlt>
          </StyledTreeAlt>
        </StyledTreeNodeAlt>
        <StyledTreeNodeAlt size={treeSize}>
          <StyledTreeNodeLine>
            <StyledTreeNodeTitle>
              <StyledTreeButton size={treeSize}>
                <StyledTreeIcon name={buttonIconAlt} />
              </StyledTreeButton>
              Row 2
            </StyledTreeNodeTitle>
          </StyledTreeNodeLine>
        </StyledTreeNodeAlt>
        <StyledTreeNodeAlt size={treeSize} isOpened>
          <StyledTreeNodeLine>
            <StyledTreeNodeTitle>
              <StyledTreeButton size={treeSize}>
                <StyledTreeIcon name={buttonIconAlt} />
              </StyledTreeButton>
              Row 3
            </StyledTreeNodeTitle>
          </StyledTreeNodeLine>
          <StyledTreeAlt>
            <StyledTreeNodeAltNoChilds size={treeSize}>
              <StyledTreeNodeLine>
                <StyledTreeNodeTitle>
                  <StyledTreeButton size={treeSize}>
                    <StyledTreeIcon name={buttonIconAlt} />
                  </StyledTreeButton>
                  Row 1
                </StyledTreeNodeTitle>
              </StyledTreeNodeLine>
            </StyledTreeNodeAltNoChilds>
            <StyledTreeNodeAltNoChilds size={treeSize}>
              <StyledTreeNodeLine>
                <StyledTreeNodeTitle>
                  <StyledTreeButton size={treeSize}>
                    <StyledTreeIcon name={buttonIconAlt} />
                  </StyledTreeButton>
                  Row 2
                </StyledTreeNodeTitle>
              </StyledTreeNodeLine>
            </StyledTreeNodeAltNoChilds>
          </StyledTreeAlt>
        </StyledTreeNodeAlt>
      </StyledTreeAlt>
    </>
  );
});
