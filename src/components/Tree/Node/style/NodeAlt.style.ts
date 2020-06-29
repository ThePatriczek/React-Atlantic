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
  StyledTreeNodeShared
} from './NodeShared.styled';
import { contentLeftGap } from './variables';

export const StyledTreeIconAlt = styled(StyledTreeIconShared)``;

export const StyledTreeButtonAlt = styled(StyledTreeButtonShared)`
  && {
    background-color: ${props => props.theme.color.background.alpha};
  }
`;

export const StyledTreeNodeContentAlt = styled(StyledTreeNodeContentShared)`
  ${StyledTreeButtonAlt} {
    background-color: ${props => props.theme.color.background.alpha};
    transition: none;
  }

  &:hover {
    ${StyledTreeButtonAlt} {
      background-color: ${props => props.theme.color.default};
    }
  }
`;

export const StyledTreeNodeAlt = styled(StyledTreeNodeShared)``;
