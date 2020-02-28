import styled, { css } from 'styled-components';
import { StyledTreeAlt } from '../../style';
import {
  listGapSizeLg,
  listGapSizeMd,
  listGapSizeSm
} from '../../style/variables';
import {
  StyledTreeButtonShared,
  StyledTreeIconShared,
  StyledTreeNodeContentShared,
  StyledTreeNodeShared,
  StyledTreeNodeTitleShared
} from './NodeShared.styled';

export const StyledTreeIconAlt = styled(StyledTreeIconShared)``;

export const StyledTreeButtonAlt = styled(StyledTreeButtonShared)``;

export const StyledTreeNodeContentAlt = styled(StyledTreeNodeContentShared)``;

export const StyledTreeNodeTitleAlt = styled(StyledTreeNodeTitleShared)``;

export const StyledTreeNodeAlt = styled(StyledTreeNodeShared)`  
  ${StyledTreeAlt} ${StyledTreeAlt} & {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 2px;
      
      border-left: 1px dashed ${props => props.theme.color.border};
      
      ${props =>
        props.size === 'small' &&
        css`
          left: -${parseFloat(listGapSizeSm) / 2}px;
        `}
      
      ${props =>
        props.size === 'medium' &&
        css`
          left: -${parseFloat(listGapSizeMd) / 2}px;
        `}
      
      ${props =>
        props.size === 'large' &&
        css`
          left: -${parseFloat(listGapSizeLg) / 2}px;
        `}
    }

    &:after {
      content: '';
      position: absolute;

      border-bottom: 1px dashed ${props => props.theme.color.border};
    }
  }

  ${props =>
    props.size === 'small' &&
    css`
      ${StyledTreeAlt} ${StyledTreeAlt} & {
        &:after {
          width: ${parseFloat(listGapSizeSm) / 2}px;
          left: -${parseFloat(listGapSizeSm) / 2}px;
          top: ${props => parseFloat(props.theme.height.sm) / 2}px;
        }
      }
    `}
  
  ${props =>
    props.size === 'medium' &&
    css`
      ${StyledTreeAlt} ${StyledTreeAlt} & {
        &:after {
          width: ${parseFloat(listGapSizeMd) / 2}px;
          left: -${parseFloat(listGapSizeMd) / 2}px;
          top: ${props => parseFloat(props.theme.height.md) / 2}px;
        }
      }
    `}
  
  ${props =>
    props.size === 'large' &&
    css`
      ${StyledTreeAlt} ${StyledTreeAlt} & {
        &:after {
          width: ${parseFloat(listGapSizeLg) / 2}px;
          left: -${parseFloat(listGapSizeLg) / 2}px;
          top: ${props => parseFloat(props.theme.height.lg) / 2}px;
        }
      }
    `}
`;

export const StyledTreeNodeAltNoChildren = styled(StyledTreeNodeAlt)`
  &:last-child {
    &:before {
      bottom: auto;
      
      ${props =>
        props.size === 'small' &&
        css`
          height: ${props => parseFloat(props.theme.height.sm) / 2}px;
        `}
      
      ${props =>
        props.size === 'medium' &&
        css`
          height: ${props => parseFloat(props.theme.height.md) / 2}px;
        `}
      
      ${props =>
        props.size === 'large' &&
        css`
          height: ${props => parseFloat(props.theme.height.lg) / 2}px;
        `}
    }
  }
`;
