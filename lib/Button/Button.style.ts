import styled from "styled-components";

interface StyledButtonProps {}

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  line-height: 40px;
  padding: 0 24px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => `white`};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
