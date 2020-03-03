import styled, { css } from 'styled-components';
import { StyledTreeShared } from './TreeShared.style';
import { listGapSizeLg, listGapSizeMd, listGapSizeSm } from './variables';

export const StyledTreeAlt = styled(StyledTreeShared)`
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
