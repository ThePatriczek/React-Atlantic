import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { StyledTreeViewItem } from './Item/Item.style';

export interface StyledTreeViewProps {
  size: string;
  isAlternative?: boolean;
}

export const listGapSizeSm = '22px';
export const listGapSizeMd = '32px';
export const listGapSizeLg = '42px';

export const StyledTreeView = styled.ul<StyledTreeViewProps>`
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
  
  ${props =>
    props.isAlternative &&
    css`
      ${StyledTreeViewItem}:not(:last-child) ${StyledTreeView}:before {
        bottom: 0;
      }

      & & {
        &:before {
          content: '';
          position: absolute;
          border-left: 1px dashed ${props => props.theme.color.border};
        }
      }
    `}
  
  ${props =>
    props.isAlternative &&
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
    props.isAlternative &&
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
    props.isAlternative &&
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

StyledTreeView.defaultProps = {
  theme
};

StyledTreeView.displayName = 'StyledTreeView';
