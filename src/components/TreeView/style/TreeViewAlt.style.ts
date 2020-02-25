import styled, { css } from 'styled-components';
import { StyledTreeViewItemAlt } from '../Item/style/ItemAlt.style';
import { StyledTreeView } from './TreeView.style';
import { StyledTreeViewShared } from './TreeViewShared.style';
import { listGapSizeLg, listGapSizeMd, listGapSizeSm } from './variables';

export const StyledTreeViewAlt = styled(StyledTreeViewShared)`
  ${StyledTreeViewItemAlt}:not(:last-child) ${StyledTreeView}:before {
    bottom: 0;
  }
  
  & & {
    &:before {
      content: '';
      position: absolute;

      border-left: 1px dashed ${props => props.theme.color.border};
    }
  }
    
  ${props =>
    props.size === 'small' &&
    css`
      & & {
        &:before {
          top: ${props => props.theme.height.sm};
          bottom: ${props => parseFloat(props.theme.height.sm) / 2}px;
          left: ${parseFloat(listGapSizeSm) / 2}px;
        }
      }
    `}
  
  ${props =>
    props.size === 'medium' &&
    css`
      & & {
        &:before {
          top: ${props => props.theme.height.md};
          bottom: ${parseFloat(props.theme.height.md) / 2}px;
          left: ${parseFloat(listGapSizeMd) / 2}px;
        }
      }
    `}
  
  ${props =>
    props.size === 'large' &&
    css`
      & & {
        &:before {
          top: ${props => props.theme.height.lg};
          bottom: ${parseFloat(props.theme.height.lg) / 2}px;
          left: ${parseFloat(listGapSizeLg) / 2}px;
        }
      }
    `}
`;
