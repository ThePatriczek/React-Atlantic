import styled from 'styled-components';
import { StyledColumn } from '../Column/Column.style';

export const StyledRow = styled.tr`
  &:nth-of-type(even) {
    background-color: ${props => props.theme.color.background.gamma};
  }

  &:last-child {
    ${StyledColumn} {
      border-bottom: none;
    }
  }
`;
