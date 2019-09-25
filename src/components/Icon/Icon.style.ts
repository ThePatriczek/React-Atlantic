import styled, { css } from 'styled-components';

export interface StyledIconProps {
  isRotating?: boolean;
}

export const StyledIcon = styled.i<StyledIconProps>`
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  display: inline-block;
  line-height: 0;
  height: 1em;
  color: inherit;
  font-style: normal;
  text-align: center;
  text-transform: none;

  ${props =>
    props.isRotating &&
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
