import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../theme';

export interface StyledTreeViewProps {}

export const StyledTreeView = styled.ul<StyledTreeViewProps>``;

StyledTreeView.defaultProps = {
  theme
};

StyledTreeView.displayName = 'StyledTreeView';
