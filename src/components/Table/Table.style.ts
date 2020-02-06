import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;

  border: 1px solid ${props => props.theme.color.border};
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: ${props => props.theme.radius};

  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size.md};
`;
