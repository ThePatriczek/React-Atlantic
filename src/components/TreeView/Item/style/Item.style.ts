import styled, { css } from 'styled-components';
import {
  StyledTreeViewButtonShared,
  StyledTreeViewIconShared,
  StyledTreeViewItemLineShared,
  StyledTreeViewItemShared,
  StyledTreeViewItemTitleShared
} from './ItemShared.styled';

export const StyledTreeViewIcon = styled(StyledTreeViewIconShared)``;

export const StyledTreeViewButton = styled(StyledTreeViewButtonShared)``;

export const StyledTreeViewItemLine = styled(StyledTreeViewItemLineShared)``;

export const StyledTreeViewItemTitle = styled(StyledTreeViewItemTitleShared)``;

export const StyledTreeViewItem = styled(StyledTreeViewItemShared)`
  ${props =>
    props.isOpened &&
    css`
      & > ${StyledTreeViewItemLine} ${StyledTreeViewIcon} {
        transform: rotate(90deg);
      }
    `}
`;
