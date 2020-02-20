import styled, { css } from 'styled-components';
import { a } from 'react-spring/web.cjs';

interface StyledCarouselProps {
  height?: number;
}

export const StyledCarousel = styled.div<StyledCarouselProps>`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 100%;
  transition: height 0.2s ease-out;
  overflow: hidden;

  ${props =>
    props.height &&
    css`
      height: ${`${props.height}px`};
    `};
`;

export const StyledSlide = styled(a.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  will-change: transform;
`;
