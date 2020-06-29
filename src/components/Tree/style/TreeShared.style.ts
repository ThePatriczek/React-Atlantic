import styled, { css } from 'styled-components';
import { Size } from '../../../types';
import { listGapSizeLg, listGapSizeMd, listGapSizeSm } from './variables';

export interface StyledTreeProps {
    size?: Size;
}

export const StyledTreeShared = styled.div<StyledTreeProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  
  & & {
    ${props =>
    props.size === 'small' &&
    css`
        margin-left: ${listGapSizeSm};
      `}
    
    ${props =>
    props.size === 'medium' &&
    css`
        margin-left: ${listGapSizeMd};
      `}
    
    ${props =>
    props.size === 'large' &&
    css`
        margin-left: ${listGapSizeLg};
      `}
  }
`;
