import styled, { css } from 'styled-components';
import {
  StyledTreeButtonShared,
  StyledTreeIconShared,
  StyledTreeNodeContentShared,
  StyledTreeNodeShared,
  StyledTreeNodeTitleShared
} from './NodeShared.styled';

export const StyledTreeIcon = styled(StyledTreeIconShared)``;

export const StyledTreeButton = styled(StyledTreeButtonShared)``;

export const StyledTreeNodeContent = styled(StyledTreeNodeContentShared)``;

export const StyledTreeNodeTitle = styled(StyledTreeNodeTitleShared)``;

export const StyledTreeNode = styled(StyledTreeNodeShared)`
  ${props =>
    props.isOpened &&
    css`
      & > ${StyledTreeNodeContent} ${StyledTreeIcon} {
        transform: rotate(90deg);
      }
    `}
`;
