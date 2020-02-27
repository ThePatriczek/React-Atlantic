import styled, { css } from 'styled-components';
import {
  StyledTreeButtonShared,
  StyledTreeIconShared,
  StyledTreeItemLineShared,
  StyledTreeItemShared,
  StyledTreeItemTitleShared
} from './ItemShared.styled';

export const StyledTreeIcon = styled(StyledTreeIconShared)``;

export const StyledTreeButton = styled(StyledTreeButtonShared)``;

export const StyledTreeItemLine = styled(StyledTreeItemLineShared)``;

export const StyledTreeItemTitle = styled(StyledTreeItemTitleShared)``;

export const StyledTreeItem = styled(StyledTreeItemShared)`
  ${props =>
    props.isOpened &&
    css`
      & > ${StyledTreeItemLine} ${StyledTreeIcon} {
        transform: rotate(90deg);
      }
    `}
`;
