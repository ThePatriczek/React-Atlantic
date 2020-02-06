import styled from 'styled-components';

export const StyledRow = styled.tr`
  :nth-of-type(even) {
    background-color: ${props => props.theme.color.background.gamma};
  }
`;
