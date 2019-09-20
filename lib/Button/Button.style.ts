import styled from "styled-components";

interface StyledButtonProps {
  secondary: boolean;
  nextTo: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  line-height: 40px;
  padding: 0 24px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  margin-left: ${({ nextTo }) => (nextTo ? `10px` : `0px`)};
  background-color: ${({ secondary, theme }) =>
    secondary ? `transparent` : theme.colors.primary};
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.primary : `white`};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
