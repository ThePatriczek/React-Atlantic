import styled, { css } from 'styled-components';
import { Size } from '../../../types';
import { listGapSizeLg, listGapSizeMd, listGapSizeSm } from './variables';

export interface StyledTreeViewProps {
  size: Size;
}

export const StyledTreeViewShared = styled.ul<StyledTreeViewProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  
  & & {
    ${props =>
      props.size === 'small' &&
      css`
        padding-left: ${listGapSizeSm};
      `}
    
    ${props =>
      props.size === 'medium' &&
      css`
        padding-left: ${listGapSizeMd};
      `}
    
    ${props =>
      props.size === 'large' &&
      css`
        padding-left: ${listGapSizeLg};
      `}
  }
`;
