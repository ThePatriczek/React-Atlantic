import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Theme, theme } from '../../theme';
import { Shape, Size } from '../../types';

interface StyledSkeletonProps {
  size?: Size;
  width?: number;
  height?: number;
  shape?: Shape;
}

const sizeFactory = (size: Size, theme: Theme): FlattenSimpleInterpolation => {
  switch (size) {
    case 'small':
      return css`
        height: ${theme.height.sm};
      `;
    case 'medium':
      return css`
        height: ${theme.height.md};
      `;
    case 'large':
      return css`
        height: ${theme.width.lg};
      `;
  }
};

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  position: relative;
  background-color: ${props => props.theme.color.default};
  margin: ${props => props.theme.margin.sm} 0px;
  border-radius: 4px;

  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(25%, ${props => props.theme.color.background.beta}),
    color-stop(37%, ${props => props.theme.color.border}),
    color-stop(63%, ${props => props.theme.color.background.beta})
  );
  background: linear-gradient(
    90deg,
    ${props => props.theme.color.background.beta} 25%,
    ${props => props.theme.color.border} 37%,
    ${props => props.theme.color.background.beta} 63%
  );
  background-size: 400% 100%;
  -webkit-animation: shine 1.6s ease infinite;
  animation: shine 1.6s ease infinite;

  @keyframes shine {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  ${props =>
    props.size
      ? sizeFactory(props.size, props.theme)
      : css`
          width: 100%;
          height: 100%;
        `}
  
  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  
  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
  
  ${props =>
    props.shape === `circle` &&
    css`
      border-radius: 100%;
    `}
`;

StyledSkeleton.defaultProps = {
  theme
};
