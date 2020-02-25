import styled, { css } from 'styled-components';
import { StyledTreeView, StyledTreeViewAlt } from '../../style';
import {
  listGapSizeLg,
  listGapSizeMd,
  listGapSizeSm
} from '../../style/variables';
import {
  StyledTreeViewButtonShared,
  StyledTreeViewIconShared,
  StyledTreeViewItemLineShared,
  StyledTreeViewItemShared,
  StyledTreeViewItemTitleShared
} from './ItemShared.styled';

export const StyledTreeViewIconAlt = styled(StyledTreeViewIconShared)``;

export const StyledTreeViewButtonAlt = styled(StyledTreeViewButtonShared)``;

export const StyledTreeViewItemLineAlt = styled(StyledTreeViewItemLineShared)``;

export const StyledTreeViewItemTitleAlt = styled(StyledTreeViewItemTitleShared)``;

export const StyledTreeViewItemAlt = styled(StyledTreeViewItemShared)`  
  ${StyledTreeViewAlt} ${StyledTreeViewAlt} & {
    &:before {
      content: '';
      position: absolute;

      border-bottom: 1px dashed ${props => props.theme.color.border};
    }
  }

  ${props =>
    props.size === 'small' &&
    css`
      ${StyledTreeViewAlt} ${StyledTreeViewAlt} & {
        &:before {
          width: ${parseFloat(listGapSizeSm) / 2}px;
          left: -${parseFloat(listGapSizeSm) / 2}px;
          top: ${props => parseFloat(props.theme.height.sm) / 2}px;
        }
      }
    `}
  
  ${props =>
    props.size === 'medium' &&
    css`
      ${StyledTreeViewAlt} ${StyledTreeViewAlt} & {
        &:before {
          width: ${parseFloat(listGapSizeMd) / 2}px;
          left: -${parseFloat(listGapSizeMd) / 2}px;
          top: ${props => parseFloat(props.theme.height.md) / 2}px;
        }
      }
    `}
  
  ${props =>
    props.size === 'large' &&
    css`
      ${StyledTreeViewAlt} ${StyledTreeViewAlt} & {
        &:before {
          width: ${parseFloat(listGapSizeLg) / 2}px;
          left: -${parseFloat(listGapSizeLg) / 2}px;
          top: ${props => parseFloat(props.theme.height.lg) / 2}px;
        }
      }
    `}
`;
