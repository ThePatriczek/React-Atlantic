import { animated } from 'react-spring';
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
  height: ${props => props.theme.font.size.md};
  width: ${props => props.theme.font.size.md};
  color: ${props => props.theme.color.text.alpha};
  font-style: normal;
  text-align: center;
  text-transform: none;

  svg {
    vertical-align: top;
    width: 100%;
    height: 100%;
    font-size: inherit;
  }

  ${props =>
    props.isRotating &&
    css`
      -webkit-animation: ${spin} 4s linear infinite;
      -moz-animation: ${spin} 4s linear infinite;
      animation: ${spin} 4s linear infinite;
    `}
`;

export const StyledSVG = styled(animated.svg)`
  padding-top: 1px;
`;

StyledIcon.displayName = 'StyledIcon';
