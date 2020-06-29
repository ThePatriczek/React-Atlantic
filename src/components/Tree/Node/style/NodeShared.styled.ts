import styled, { css } from 'styled-components';
import { PureButton } from '../../../Button/Pure';
import { Icon } from '../../../Icon/Icon';
import { contentLeftGap } from './variables';

export interface StyledTreeNodeSharedProps {
  size?: string;
  isOpened?: boolean;
}

export interface StyledTreeNodeContentSharedProps {
  isLeftShift?: boolean;
}

export const StyledTreeIconShared = styled(Icon)``;

export const StyledTreeButtonShared = styled(PureButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 0;

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
    svg {
      height: 14px;
    }
  }
`;

export const StyledTreeNodeContentShared = styled.div<
  StyledTreeNodeContentSharedProps
>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 ${contentLeftGap};

  border-radius: ${props => props.theme.radius};

  &:hover {
    background-color: ${props => props.theme.color.default};
  }
`;

StyledTreeNodeContentShared.displayName = `NodeContent`;

export const StyledTreeNodeShared = styled.div<StyledTreeNodeSharedProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  margin: 0;

  font-size: ${props => props.theme.font.size.lg};
  
  ${StyledTreeNodeContentShared} {
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
