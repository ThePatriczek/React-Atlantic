import styled, { css } from 'styled-components';
import {
  StyledTreeButtonShared,
  StyledTreeIconShared,
  StyledTreeNodeLineShared,
  StyledTreeNodeShared,
  StyledTreeNodeTitleShared
} from './NodeShared.styled';

export const StyledTreeIcon = styled(StyledTreeIconShared)``;

export const StyledTreeButton = styled(StyledTreeButtonShared)``;

export const StyledTreeNodeLine = styled(StyledTreeNodeLineShared)``;

export const StyledTreeNodeTitle = styled(StyledTreeNodeTitleShared)``;

export const StyledTreeNode = styled(StyledTreeNodeShared)`
  ${props =>
    props.isOpened &&
    css`
      & > ${StyledTreeNodeLine} ${StyledTreeIcon} {
        transform: rotate(90deg);
      }
    `}
`;
