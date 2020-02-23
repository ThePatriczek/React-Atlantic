import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../theme';
import { StyledTreeViewButton, StyledTreeViewItem } from './Item/Item.style';

export interface StyledTreeViewProps {
  size?: string;
  isAlternative?: boolean;
}

export const StyledTreeView = styled.ul<StyledTreeViewProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  
  ${props =>
    props.isAlternative &&
    css`
      margin-left: ${props => props.theme.width.sm};
    `}

  & & {
    margin-left: ${props => props.theme.width.sm};
    
    ${StyledTreeViewItem} {
      ${props =>
        props.size === 'medium' &&
        css`
          margin-left: ${props => props.theme.width.md};
        `}

      ${props =>
        props.size === 'large' &&
        css`
          margin-left: ${props => props.theme.width.lg};
        `}
    }
  }
`;

StyledTreeView.defaultProps = {
  theme
};

StyledTreeView.displayName = 'StyledTreeView';
