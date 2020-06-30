import styled, { css } from 'styled-components';
import { Size } from '../../../types';

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
  
  .rst__virtualScrollOverride {
    outline: none;
  }
  
  .rst__nodeContent {
    flex: 1;  
  }
  
  .rst__node {
    display: flex;
  }
  
  .rst__lineBlock {
    position: relative;
    
    &:first-child {
      position: absolute;
    }

    ${props =>
      props.size === 'small' &&
      css`
        width: ${props.theme.width.sm} !important;
        min-width: ${props.theme.width.sm};
      `}
    
    ${props =>
      props.size === 'medium' &&
      css`
        width: ${props.theme.width.md} !important;
        min-width: ${props.theme.width.md};
      `}
    
    ${props =>
      props.size === 'large' &&
      css`
        width: ${props.theme.width.lg} !important;
        min-width: ${props.theme.width.lg};
      `}
  }
  
  .rst__lineFullVertical {
    height: 100%;
  }
`;
