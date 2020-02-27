import styled, { css } from 'styled-components';
import { PureButton } from '../../../Button/Pure';
import { Icon } from '../../../Icon/Icon';
import { Text } from '../../../Typography/Text';

export interface StyledTreeNodeSharedProps {
  size: string;
  isOpened?: boolean;
}

export const StyledTreeIconShared = styled(Icon)``;

export const StyledTreeButtonShared = styled(PureButton)`
  display: flex;
  align-Nodes: center;
  justify-content: center;
  align-self: flex-start;
  flex-shrink: 0;
  
  && {
    margin: 0;
  }

  &:hover {
    background-color: ${props => props.theme.color.background.beta};

    ${StyledTreeIconShared} {
      color: ${props => props.theme.color.primary.alpha};
    }
  }

  ${StyledTreeIconShared} {
    width: auto;
    height: auto;

    svg {
      height: 14px;
    }
  }
`;

export const StyledTreeNodeLineShared = styled.div`
  width: 100%;
  padding: 0 ${props => props.theme.padding.xs};

  border-radius: ${props => props.theme.radius};

  &:hover {
    background-color: ${props => props.theme.color.default};
  }
`;

export const StyledTreeNodeTitleShared = styled(Text)`
  display: inline-flex;
  align-Nodes: center;
  margin: 0;
`;

export const StyledTreeNodeShared = styled.li<
  StyledTreeNodeSharedProps
>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-Nodes: center;
  max-width: 100%;
  margin: 0;

  font-size: ${props => props.theme.font.size.lg};
  
  ${StyledTreeNodeTitleShared} {
    ${props =>
      props.size === 'small' &&
      css`
        min-height: ${props => props.theme.height.sm};
      `}
    
    ${props =>
      props.size === 'medium' &&
      css`
        min-height: ${props => props.theme.height.md};
      `}
    
    ${props =>
      props.size === 'large' &&
      css`
        min-height: ${props => props.theme.height.lg};
      `}
  }
`;
