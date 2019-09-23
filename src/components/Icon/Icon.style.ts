import styled, { css } from 'styled-components';

export interface StyledIconProps {
  isLoading?: boolean;
}

export const StyledIcon = styled.i<StyledIconProps>`
  display: inline-block;
  line-height: 0;
  height: 1em;
  cursor: pointer;
  color: inherit;
  font-style: normal;
  text-align: center;
  text-transform: none;

  ${props =>
    props.isLoading &&
    css`
      -webkit-animation: spin 4s linear infinite;
      -moz-animation: spin 4s linear infinite;
      animation: spin 4s linear infinite;
    `}

  svg {
    height: 1em;
    vertical-align: middle;
  }
`;
