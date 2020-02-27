import styled, { css } from 'styled-components';
import { PureButton } from '../../../Button/Pure';
import { Icon } from '../../../Icon/Icon';
import { Text } from '../../../Typography/Text';

export interface StyledTreeItemSharedProps {
  size: string;
  isOpened?: boolean;
}

export const StyledTreeIconShared = styled(Icon)``;

export const StyledTreeButtonShared = styled(PureButton)`
  display: flex;
  align-items: center;
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

export const StyledTreeItemLineShared = styled.div`
  width: 100%;
  padding: 0 ${props => props.theme.padding.xs};

  border-radius: ${props => props.theme.radius};

  &:hover {
    background-color: ${props => props.theme.color.default};
  }
`;

export const StyledTreeItemTitleShared = styled(Text)`
  display: inline-flex;
  align-items: center;
  margin: 0;
`;

export const StyledTreeItemShared = styled.li<
  StyledTreeItemSharedProps
>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  margin: 0;

  font-size: ${props => props.theme.font.size.lg};
  
  ${StyledTreeItemTitleShared} {
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
