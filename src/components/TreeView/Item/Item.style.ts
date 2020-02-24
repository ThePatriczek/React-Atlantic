import styled, { css } from 'styled-components';
import { PureButton } from '../../Button/Pure';
import { Icon } from '../../Icon/Icon';
import { Link } from '../../Typography/Link';
import {
  listGapSizeLg,
  listGapSizeMd,
  listGapSizeSm,
  StyledTreeView
} from '../TreeView.style';

export interface StyledTreeViewItemProps {
  size: string;
  isOpened?: boolean;
  isAlternative?: boolean;
}

export const StyledTreeViewIcon = styled(Icon)``;

export const StyledTreeViewButton = styled(PureButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-shrink: 0;
  margin-right: ${props => props.theme.margin.sm};
  margin-left: 0;

  &:hover {
    background-color: ${props => props.theme.color.background.beta};

    ${StyledTreeViewIcon} {
      color: ${props => props.theme.color.primary.alpha};
    }
  }

  ${StyledTreeViewIcon} {
    width: auto;
    height: auto;

    svg {
      height: 14px;
    }
  }
`;

export const StyledTreeViewItemLine = styled.div`
  width: 100%;
  padding: 0 ${props => props.theme.padding.xs};
  
  border-radius: ${props => props.theme.radius};
  
  &:hover {
    background-color: ${props => props.theme.color.default};
  }
`;

export const StyledTreeViewItemTitle = styled(Link)`
  display: inline-flex;
  align-items: center;

`;

export const StyledTreeViewItem = styled.li<StyledTreeViewItemProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  margin: 0;

  font-size: ${props => props.theme.font.size.lg};

  ${props =>
    props.isOpened &&
    !props.isAlternative &&
    css`
      & > ${StyledTreeViewItemTitle} {
        ${StyledTreeViewIcon} {
          transform: rotate(90deg);
        }
      }
    `}
  
  ${props =>
    props.isAlternative &&
    css`
      ${StyledTreeView} ${StyledTreeView} & {
        &:before {
          content: '';
          position: absolute;

          border-bottom: 1px dashed ${props => props.theme.color.border};
        }
      }
    `}
  
  ${props =>
    props.isAlternative &&
    props.size === 'small' &&
    css`
      ${StyledTreeView} ${StyledTreeView} & {
        &:before {
          width: ${parseFloat(listGapSizeSm) / 2}px;
          left: -${parseFloat(listGapSizeSm) / 2}px;
          top: ${props => parseFloat(props.theme.height.sm) / 2}px;
        }
      }
    `}
  
  ${props =>
    props.isAlternative &&
    props.size === 'medium' &&
    css`
      ${StyledTreeView} ${StyledTreeView} & {
        &:before {
          width: ${parseFloat(listGapSizeMd) / 2}px;
          left: -${parseFloat(listGapSizeMd) / 2}px;
          top: ${props => parseFloat(props.theme.height.md) / 2}px;
        }
      }
    `}
  
  ${props =>
    props.isAlternative &&
    props.size === 'large' &&
    css`
      ${StyledTreeView} ${StyledTreeView} & {
        &:before {
          width: ${parseFloat(listGapSizeLg) / 2}px;
          left: -${parseFloat(listGapSizeLg) / 2}px;
          top: ${props => parseFloat(props.theme.height.lg) / 2}px;
        }
      }
    `}
  
  ${StyledTreeViewItemTitle} {
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
