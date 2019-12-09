import styled, { css, keyframes } from 'styled-components';
import { IconName } from './Icon';

export interface StyledIconProps {
  isRotating?: boolean;
  name?: IconName;
}

export const spin = () => {
  return keyframes`
  100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
  }`;
};

export const StyledIcon = styled.i<StyledIconProps>`
  display: inline-block;
  line-height: 0;
  height: 1em;
  color: ${props => props.theme.color.text.alpha};
  font-style: normal;
  text-align: center;
  text-transform: none;

  ${props =>
    props.isRotating &&
    css`
      -webkit-animation: ${spin} 4s linear infinite;
      -moz-animation: ${spin} 4s linear infinite;
      animation: ${spin} 4s linear infinite;
    `}

  svg {
    height: 1em;
    vertical-align: middle;
  }
`;

StyledIcon.displayName = 'StyledIcon';
